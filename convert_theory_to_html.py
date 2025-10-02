#!/usr/bin/env python3
"""
Convert all exercise theory content from markdown to structured HTML.
This script processes all exercises and converts their theory.content field
to clean, FreeCodeCamp-style HTML with proper formatting.
"""

import json
import os
import re

def convert_markdown_to_html(markdown_content, exercise_id):
    """
    Convert markdown theory content to structured HTML.
    This is a simplified conversion that creates readable, scannable content.
    """

    # For now, we'll wrap the existing content in a simple structure
    # and preserve code blocks with proper formatting

    # Replace code blocks with proper HTML
    def replace_code_block(match):
        code = match.group(1)
        # Ensure proper spacing in Robot Framework code
        return f'<div class="code-block"><code>{code}</code></div>'

    content = re.sub(r'```robot\n(.*?)\n```', replace_code_block, markdown_content, flags=re.DOTALL)
    content = re.sub(r'```\n(.*?)\n```', replace_code_block, content, flags=re.DOTALL)

    # Replace headers
    content = re.sub(r'## (.*?)\n', r'<div class="section-heading">\1</div>\n\n', content)
    content = re.sub(r'### (.*?)\n', r'<div class="subsection-heading">\1</div>\n\n', content)

    # Replace inline code
    content = re.sub(r'`([^`]+)`', r'<span class="inline-code">\1</span>', content)

    # Replace bold
    content = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', content)

    # Convert paragraphs to story class
    lines = content.split('\n\n')
    processed_lines = []

    for line in lines:
        line = line.strip()
        if not line:
            continue
        # Skip if already has HTML tags
        if line.startswith('<div') or line.startswith('<ol') or line.startswith('<ul'):
            processed_lines.append(line)
        elif line.startswith('- '):
            # Convert bullet lists
            processed_lines.append(line)
        else:
            # Wrap plain paragraphs in story class
            if not any(line.startswith(tag) for tag in ['<div', '<p', '<ol', '<ul', '<li']):
                processed_lines.append(f'<p class="story">{line}</p>')
            else:
                processed_lines.append(line)

    return '\n\n'.join(processed_lines)


def process_exercise_file(filepath):
    """Process a single exercise JSON file."""
    print(f"\nProcessing: {filepath}")

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)

        exercises = data.get('exercises', [])
        converted_count = 0

        for exercise in exercises:
            ex_id = exercise.get('id', 'unknown')

            # Skip ex-1-1 as it's already converted
            if ex_id == 'ex-1-1':
                print(f"  [SKIP] {ex_id} (already converted)")
                continue

            theory = exercise.get('theory', {})
            content = theory.get('content', '')

            # Check if already HTML (starts with <div)
            if content.strip().startswith('<div'):
                print(f"  [SKIP] {ex_id} (already HTML)")
                continue

            # Convert markdown to HTML
            if content and '##' in content:  # Has markdown
                html_content = convert_markdown_to_html(content, ex_id)
                theory['content'] = html_content
                converted_count += 1
                print(f"  [DONE] Converted {ex_id}")

        # Save back to file
        if converted_count > 0:
            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            print(f"  [OK] Saved {converted_count} conversions")
        else:
            print(f"  [INFO] No conversions needed")

        return converted_count

    except Exception as e:
        print(f"  [ERROR] {filepath}: {e}")
        return 0


def main():
    """Main conversion process."""
    print("=" * 60)
    print("Converting Exercise Theory Content to HTML")
    print("=" * 60)

    # List all exercise files
    exercise_files = [
        'exercises/01-fundamentals/01-basic-syntax/exercises.json',
        'exercises/01-fundamentals/02-variables/exercises.json',
        'exercises/01-fundamentals/03-control-flow/exercises.json',
        'exercises/02-keywords/01-builtin-basics/exercises.json',
        'exercises/02-keywords/02-advanced-keywords/exercises.json',
        'exercises/03-organization/01-test-structure/exercises.json',
        'exercises/03-organization/02-data-driven/exercises.json',
        'exercises/04-real-world/01-practical-scenarios/exercises.json',
        'exercises/04-real-world/02-best-practices/exercises.json',
        'exercises/04-real-world/03-debugging/exercises.json',
    ]

    total_converted = 0

    for filepath in exercise_files:
        if os.path.exists(filepath):
            count = process_exercise_file(filepath)
            total_converted += count
        else:
            print(f"\n[ERROR] File not found: {filepath}")

    print("\n" + "=" * 60)
    print(f"[SUCCESS] Conversion Complete!")
    print(f"Total exercises converted: {total_converted}")
    print("=" * 60)


if __name__ == '__main__':
    main()
