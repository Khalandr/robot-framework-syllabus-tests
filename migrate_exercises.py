#!/usr/bin/env python3
"""
Exercise JSON Structure Migration Script

Migrates from:
  - exercises.json (array of exercises)
  - challenge.json (single challenge)
  - topic.json (section metadata)

To:
  - ex-{id}.json (individual exercise files)
  - challenge-{id}.json (individual challenge files)
  - section.json (section metadata with references)
"""

import json
import shutil
from pathlib import Path
from typing import Dict, List


def extract_chapter_from_path(section_path: Path) -> str:
    """Extract chapter ID from section path"""
    # Path structure: exercises/00-fundamentals/01-first-contact/01-system-boot
    parts = section_path.parts
    chapter_index = parts.index('01-first-contact')
    return parts[chapter_index]


def migrate_section(section_path: Path) -> Dict[str, any]:
    """
    Migrate one section from old to new structure

    Returns:
        dict: Migration statistics and results
    """
    print(f"\n{'='*60}")
    print(f"Migrating: {section_path.name}")
    print(f"{'='*60}")

    stats = {
        'section': section_path.name,
        'exercises_created': 0,
        'challenges_created': 0,
        'files_backed_up': 0,
        'errors': []
    }

    # 1. Read exercises.json
    exercises_file = section_path / 'exercises.json'
    if not exercises_file.exists():
        stats['errors'].append(f"exercises.json not found")
        return stats

    print(f"[*] Reading exercises.json...")
    with open(exercises_file, 'r', encoding='utf-8') as f:
        exercises_data = json.load(f)

    section_id = exercises_data.get('section', section_path.name)
    exercises = exercises_data.get('exercises', [])
    print(f"   Found {len(exercises)} exercises")

    # 2. Split each exercise into separate file
    print(f"\n[*] Creating individual exercise files...")
    exercise_ids = []

    for exercise in exercises:
        exercise_id = exercise['id']
        exercise_ids.append(exercise_id)

        output_file = section_path / f"{exercise_id}.json"

        # Add section/chapter metadata if not present
        if 'section' not in exercise:
            exercise['section'] = section_id
        if 'chapter' not in exercise:
            exercise['chapter'] = extract_chapter_from_path(section_path)

        # Write individual exercise file
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(exercise, f, indent=2, ensure_ascii=False)

        print(f"   [OK] Created {exercise_id}.json")
        stats['exercises_created'] += 1

    # 3. Migrate challenge.json
    challenge_file = section_path / 'challenge.json'
    challenge_ids = []

    if challenge_file.exists():
        print(f"\n[*] Migrating challenge...")
        with open(challenge_file, 'r', encoding='utf-8') as f:
            challenge = json.load(f)

        challenge_id = challenge['id']
        challenge_ids.append(challenge_id)

        # Add section/chapter metadata if not present
        if 'section' not in challenge:
            challenge['section'] = section_id
        if 'chapter' not in challenge:
            challenge['chapter'] = extract_chapter_from_path(section_path)

        output_file = section_path / f"{challenge_id}.json"

        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(challenge, f, indent=2, ensure_ascii=False)

        print(f"   [OK] Created {challenge_id}.json")
        stats['challenges_created'] += 1
    else:
        print(f"\n[WARN] No challenge.json found (skipping)")

    # 4. Create section.json from topic.json
    topic_file = section_path / 'topic.json'

    if not topic_file.exists():
        stats['errors'].append(f"topic.json not found")
        return stats

    print(f"\n[*] Creating section.json...")
    with open(topic_file, 'r', encoding='utf-8') as f:
        topic = json.load(f)

    # Add exercise and challenge references
    topic['chapter'] = extract_chapter_from_path(section_path)
    topic['exercises'] = exercise_ids
    topic['challenges'] = challenge_ids

    section_file = section_path / 'section.json'
    with open(section_file, 'w', encoding='utf-8') as f:
        json.dump(topic, f, indent=2, ensure_ascii=False)

    print(f"   [OK] Created section.json")
    print(f"      - {len(exercise_ids)} exercise references")
    print(f"      - {len(challenge_ids)} challenge references")

    # 5. Backup old files
    print(f"\n[*] Backing up old files...")
    backup_dir = section_path / 'OLD_STRUCTURE_BACKUP'
    backup_dir.mkdir(exist_ok=True)

    # Backup exercises.json
    if exercises_file.exists():
        shutil.copy(exercises_file, backup_dir / 'exercises.json')
        print(f"   [OK] Backed up exercises.json")
        stats['files_backed_up'] += 1

    # Backup challenge.json
    if challenge_file.exists():
        shutil.copy(challenge_file, backup_dir / 'challenge.json')
        print(f"   [OK] Backed up challenge.json")
        stats['files_backed_up'] += 1

    # Backup topic.json
    if topic_file.exists():
        shutil.copy(topic_file, backup_dir / 'topic.json')
        print(f"   [OK] Backed up topic.json")
        stats['files_backed_up'] += 1

    print(f"\n   [BACKUP] Files stored in: {backup_dir.name}/")

    return stats


def delete_old_files(section_path: Path, dry_run: bool = False) -> None:
    """Delete old structure files (exercises.json, challenge.json, topic.json)"""
    files_to_delete = ['exercises.json', 'challenge.json', 'topic.json']

    print(f"\n[*] {'[DRY RUN] ' if dry_run else ''}Deleting old files...")

    for filename in files_to_delete:
        file_path = section_path / filename
        if file_path.exists():
            if dry_run:
                print(f"   Would delete: {filename}")
            else:
                file_path.unlink()
                print(f"   [OK] Deleted {filename}")


def validate_migration(section_path: Path) -> bool:
    """Validate that migration was successful"""
    print(f"\n[*] Validating migration...")

    # Check section.json exists
    section_file = section_path / 'section.json'
    if not section_file.exists():
        print(f"   [ERROR] section.json not found")
        return False

    # Load section.json and validate structure
    with open(section_file, 'r', encoding='utf-8') as f:
        section_data = json.load(f)

    # Check all referenced exercise files exist
    for exercise_id in section_data.get('exercises', []):
        exercise_file = section_path / f"{exercise_id}.json"
        if not exercise_file.exists():
            print(f"   [ERROR] Missing exercise file: {exercise_id}.json")
            return False

        # Validate JSON is well-formed
        try:
            with open(exercise_file, 'r', encoding='utf-8') as f:
                json.load(f)
        except json.JSONDecodeError as e:
            print(f"   [ERROR] Invalid JSON in {exercise_id}.json: {e}")
            return False

    # Check all referenced challenge files exist
    for challenge_id in section_data.get('challenges', []):
        challenge_file = section_path / f"{challenge_id}.json"
        if not challenge_file.exists():
            print(f"   [ERROR] Missing challenge file: {challenge_id}.json")
            return False

        # Validate JSON is well-formed
        try:
            with open(challenge_file, 'r', encoding='utf-8') as f:
                json.load(f)
        except json.JSONDecodeError as e:
            print(f"   [ERROR] Invalid JSON in {challenge_id}.json: {e}")
            return False

    print(f"   [OK] All files present and valid")
    print(f"   [OK] {len(section_data.get('exercises', []))} exercises")
    print(f"   [OK] {len(section_data.get('challenges', []))} challenges")

    return True


def migrate_all_sections(delete_old: bool = False) -> None:
    """Migrate all sections in exercises/ directory"""
    print("\n" + "="*60)
    print("EXERCISE JSON STRUCTURE MIGRATION")
    print("="*60)

    exercises_root = Path('exercises/00-fundamentals/01-first-contact')

    if not exercises_root.exists():
        print(f"❌ ERROR: Path not found: {exercises_root}")
        return

    # Find all section directories
    sections = [d for d in exercises_root.iterdir() if d.is_dir()]

    print(f"\nFound {len(sections)} sections to migrate:")
    for section in sections:
        print(f"  - {section.name}")

    # Migrate each section
    all_stats = []

    for section_dir in sections:
        stats = migrate_section(section_dir)
        all_stats.append(stats)

        # Validate migration
        if validate_migration(section_dir):
            # Delete old files if requested
            if delete_old:
                delete_old_files(section_dir, dry_run=False)
            else:
                delete_old_files(section_dir, dry_run=True)

    # Print summary
    print("\n" + "="*60)
    print("MIGRATION SUMMARY")
    print("="*60)

    total_exercises = sum(s['exercises_created'] for s in all_stats)
    total_challenges = sum(s['challenges_created'] for s in all_stats)
    total_backups = sum(s['files_backed_up'] for s in all_stats)
    total_errors = sum(len(s['errors']) for s in all_stats)

    print(f"\n[OK] Exercises created:  {total_exercises}")
    print(f"[OK] Challenges created: {total_challenges}")
    print(f"[BACKUP] Files backed up:    {total_backups}")

    if total_errors > 0:
        print(f"\n[WARN] Errors encountered: {total_errors}")
        for stats in all_stats:
            if stats['errors']:
                print(f"\n  Section: {stats['section']}")
                for error in stats['errors']:
                    print(f"    - {error}")
    else:
        print(f"\n[SUCCESS] Migration completed successfully!")

    if not delete_old:
        print(f"\n[WARN] Old files NOT deleted (backups created)")
        print(f"   Run with --delete flag to remove old files")
    else:
        print(f"\n[OK] Old files deleted (backups preserved)")

    print("\n" + "="*60)


if __name__ == '__main__':
    import sys

    # Check for --delete flag
    delete_old = '--delete' in sys.argv

    if delete_old:
        print("\n[WARN] WARNING: --delete flag detected")
        print("   Old files will be DELETED after successful migration")
        response = input("\n   Continue? (yes/no): ")
        if response.lower() != 'yes':
            print("\n[CANCEL] Migration cancelled")
            sys.exit(0)

    migrate_all_sections(delete_old=delete_old)

    print("\nNext steps:")
    print("  1. Review the migrated files")
    print("  2. Update frontend code (js/exercises.js)")
    print("  3. Test exercise loading in browser")
    print("  4. If successful, run: python migrate_exercises.py --delete")
    print("  5. Commit changes to git")
