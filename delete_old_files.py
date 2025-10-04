#!/usr/bin/env python3
"""
Delete old exercise structure files after successful migration
"""

from pathlib import Path

def delete_old_files():
    """Delete old structure files (exercises.json, challenge.json, topic.json)"""
    exercises_root = Path('exercises/00-fundamentals/01-first-contact')

    files_to_delete = ['exercises.json', 'challenge.json', 'topic.json']

    deleted_count = 0

    for section_dir in exercises_root.iterdir():
        if not section_dir.is_dir():
            continue

        print(f"\n[*] Processing {section_dir.name}")

        for filename in files_to_delete:
            file_path = section_dir / filename
            if file_path.exists():
                file_path.unlink()
                print(f"   [OK] Deleted {filename}")
                deleted_count += 1

    print(f"\n[SUCCESS] Deleted {deleted_count} old files")
    print("Backups preserved in OLD_STRUCTURE_BACKUP/ folders")

if __name__ == '__main__':
    delete_old_files()
