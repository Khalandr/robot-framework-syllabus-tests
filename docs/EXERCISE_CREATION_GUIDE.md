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
    "content": "<div class=\"theory-visual\"><img src=\"assets/images/theory/section-{id}/ex-{id}-{name}.png\" /></div><div class=\"story-intro\"><p>MENTOR-9: ...</p></div>",
    "estimatedReadTime": "5-6 minutes"
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

## Step 5: Add Theory Images

Create AI image generation prompts in:
```
assets/images/theory/section-07/IMAGE_PROMPTS.md
```

Use the character reference from existing sections (PROTO-7, MENTOR-9).

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
