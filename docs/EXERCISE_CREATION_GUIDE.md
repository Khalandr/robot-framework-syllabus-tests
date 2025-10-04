# Exercise Creation Guide

Step-by-step guide for creating new Robot Framework coding exercises.

## Prerequisites

- Frontend running: `npm run dev` (port 8080)
- Backend running: `cd backend && uvicorn app.main:app --reload` (port 8000)
- Both must be restarted after adding new exercises

## Step 1: Create Individual Exercise File

**File location pattern:**
```
exercises/00-fundamentals/{section-id}/{exercise-id}.json
```

**Naming Convention:**
- Exercises: `ex-{category}-{section}-{number}.json`
  - Example: `ex-00-07-01.json` (Category 00, Section 07, Exercise 01)
- Challenges: `ch-{category}-{section}.json`
  - Example: `ch-00-07.json` (Category 00, Section 07 Challenge)

**Example:** Create `ex-00-07-01.json` for a new FOR loop exercise:

```json
{
  "id": "ex-00-07-01",
  "type": "exercise",
  "section": "07-for-loops",
  "category": "00-fundamentals",
  "title": "Your Exercise Title",
  "difficulty": "beginner",
  "estimatedTime": "10 minutes",
  "order": 1,
  "description": "One-sentence description",
  "story": {
    "setup": "MENTOR-9: \"Setup dialogue...\"",
    "context": "Why this matters...",
    "success": "MENTOR-9: \"Success feedback...\""
  },
  "instructions": [
    "Step 1: Do this",
    "Step 2: Do that",
    "Step 3: Verify result"
  ],
  "hints": [
    "Hint 1: Remember...",
    "Hint 2: Don't forget..."
  ],
  "initialCode": "",
  "solution": "*** Test Cases ***\nExample\n    Log    Solution",
  "validation": {
    "mustContain": ["*** Test Cases ***", "Log"],
    "forbiddenKeywords": [],
    "mustPass": true
  },
  "theory": {
    "title": "Exercise Title: Concept Name",
    "content": "<div class=\"theory-visual\">\n  <img src=\"assets/images/theory/{section-id}/ex-00-{section}-{number}-{brief-description}.png\" alt=\"Exercise visualization\" />\n</div>\n\n<div class=\"story-intro\"><p>MENTOR-9: ...</p></div><div class=\"concept-explain\"><h3>Concept</h3><p>Educational content...</p></div>",
    "estimatedReadTime": "5-6 minutes"
  },
  "metadata": {
    "tags": ["tag1", "tag2", "tag3"],
    "prerequisites": [],
    "nextExercises": ["ex-00-07-02"]
  }
}
```

## Step 2: Update section.json

Add your exercise ID to the section's exercise list:

```json
{
  "id": "07-for-loops",
  "section": "2.4",
  "title": "FOR Loops",
  "category": "00-fundamentals",
  "order": 7,
  "difficulty": "beginner-to-intermediate",
  "estimatedTime": "40 minutes",
  "exercises": [
    "ex-00-07-01",
    "ex-00-07-02"
  ],
  "challenges": [
    "ch-00-07"
  ]
}
```

## Step 3: Update category.json (If New Section)

If creating a NEW section, add it to category.json sections array:

```json
{
  "id": "00-fundamentals",
  "name": "Robot Framework Fundamentals",
  "sections": [
    {
      "id": "01-basic-syntax",
      "name": "Section 1.1: Basic Syntax",
      "order": 1
    },
    {
      "id": "07-for-loops",
      "name": "Section 2.4: FOR Loops",
      "order": 7
    }
  ]
}
```

**Note:** No chapter/topic layer needed - sections reference directly from category.

## Step 4: Create Challenge (Optional)

**File:** `ch-00-07.json`

Same structure as exercise but:
- `"type": "challenge"`
- More complex requirements
- Integrates multiple concepts

## Step 5: Add Theory Image Placeholder

**IMPORTANT**: Every exercise MUST include an image placeholder in the theory.content field.

**Image Placeholder Format:**
```html
<div class="theory-visual">
  <img src="assets/images/theory/{section-id}/{image-filename}.png" alt="Exercise visualization" />
</div>

```

**Placement**: The image placeholder MUST be at the very beginning of the `theory.content` field, before any other content.

**Example theory.content structure:**
```html
<div class="theory-visual">
  <img src="assets/images/theory/07-for-loops/ex-00-07-01-basic-for-loop.png" alt="Exercise visualization" />
</div>

<div class="story-intro"><p>MENTOR-9: "Story introduction..."</p></div>
<div class="concept-explain"><h3>Concept Title</h3><p>Educational content...</p></div>
```

**Image Naming Convention:**
- Exercises: `ex-{category}-{section}-{number}-{brief-description}.png`
  - Example: `ex-00-07-01-basic-for-loop.png`
- Challenges: `ch-{category}-{section}-{brief-description}.png`
  - Example: `ch-00-07-system-check-challenge.png`

**Creating Image Prompts:**
Create AI image generation prompts in:
```
assets/images/theory/{section-id}/IMAGE_PROMPTS.md
```

Use the character reference from existing sections (PROTO-7, MENTOR-9).

**Automated Script (Optional):**
If you forget to add image placeholders, you can use the `add_image_placeholders.py` script:
```bash
python add_image_placeholders.py
```
(Update the SECTIONS dictionary in the script with your new section data first)

## Step 6: Test Exercise

1. **Restart servers:**
   ```bash
   # Kill frontend (Ctrl+C in npm terminal)
   npm run dev

   # Kill backend (Ctrl+C in uvicorn terminal)
   cd backend
   uvicorn app.main:app --reload
   ```

2. **Test in browser:**
   - Navigate to Exercises tab
   - Select category
   - Find your exercise
   - Try solving it
   - Verify validation works

3. **Check console:**
   - No errors loading exercise
   - Validation messages appear
   - Code execution works

## Step 7: Commit Changes

```bash
# Stage new files
git add exercises/00-fundamentals/{section-id}/
git commit -m "Add Section {X.Y}: {Section Name} ({N} exercises + challenge)"
git push origin feature/code-exercises
```

## Important Rules

### Zero Scaffolding Philosophy
- **ALWAYS** set `"initialCode": ""`
- Students must write COMPLETE tests from scratch
- No starter code, no templates

### Theory Content
- Must include `<div class="theory-visual">` with image
- Use `<div class="story-intro">` for MENTOR-9 dialogue
- Use `<div class="concept-explain">` for educational content
- Use `<div class="code-demo">` for code examples
- Use `<div class="try-it">` for practice prompts

### Validation Rules
- `mustContain`: Case-sensitive string matching (array of required strings)
- `forbiddenKeywords`: Block specific keywords (e.g., "Library", "Import")
- `mustPass`: Require all RF tests to pass (boolean)

## Exercise Structure

**Flattened 2-Level:** Category → Section → Individual Files

```
exercises/
├── index.json                    # Root index (lists categories)
└── 00-fundamentals/              # Category folder
    ├── category.json             # Category metadata + section references
    ├── 01-basic-syntax/          # Section folder
    │   ├── section.json          # Section metadata + exercise IDs
    │   ├── ex-00-01-01.json      # Individual exercise file
    │   ├── ex-00-01-02.json
    │   └── ch-00-01.json         # Individual challenge file
    ├── 02-variables/
    ├── 03-assertions/
    └── 07-for-loops/
```

## Validation Rules Explained

- **mustContain**: Array of strings that MUST appear in the code (case-sensitive)
  - Example: `["Log", "Hello Robot Framework"]` - both must be present

- **forbiddenKeywords**: Array of keywords that should NOT be used
  - Example: `["Library", "Import"]` - blocks external libraries

- **mustPass**: Boolean - if true, all Robot Framework tests must pass
  - Validation fails if any test case fails

---

## Quick Reference Checklist

When creating a new exercise, ensure you have:

- [ ] Created individual exercise file: `ex-00-XX-YY.json`
- [ ] Set `"initialCode": ""` (zero scaffolding)
- [ ] Added image placeholder at start of `theory.content`
- [ ] Defined validation rules (mustContain, forbiddenKeywords, mustPass)
- [ ] Included story elements (setup, context, success)
- [ ] Added clear instructions (6-12 steps)
- [ ] Provided helpful hints (3-5 hints)
- [ ] Written complete solution code
- [ ] Updated `section.json` exercises array
- [ ] Created IMAGE_PROMPTS.md for section (if new section)
- [ ] Tested exercise in browser
- [ ] Verified validation works correctly
- [ ] Committed changes with descriptive message

---

## Common Mistakes to Avoid

1. **Forgetting Image Placeholder**: Every exercise needs `<div class="theory-visual">` at the start of theory.content
2. **Non-empty initialCode**: ALWAYS use `"initialCode": ""` (zero scaffolding philosophy)
3. **Inconsistent Naming**: Use `ex-00-XX-YY.json` format (not `exercise-1.json`)
4. **Missing END statements in solution**: All WHILE, FOR, IF blocks need END
5. **Incorrect image paths**: Use `assets/images/theory/{section-id}/{filename}.png`
6. **Forgetting to restart servers**: Both frontend and backend must restart after adding exercises
7. **Not updating section.json**: New exercises won't appear without being added to exercises array

---

## Current Exercise Status

See `docs/EXERCISE_INVENTORY.md` for complete inventory of all 86 exercises across 14 sections.

**Last Updated**: October 2025
