# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚀 Quick Start

### Multiple-Choice Tests (Production - main branch)
```bash
npm run dev  # Opens at http://localhost:8080
```

### Code Exercises (MVP - feature/code-exercises branch)

**Terminal 1 - Frontend:**
```bash
npm run dev  # Opens at http://localhost:8080
```

**Terminal 2 - Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload  # API at http://localhost:8000
```

---

## 📁 Project Overview

Robot Framework training platform with two main features:

1. **Multiple-Choice Tests** (Production)
   - 562 questions across 5 chapters
   - Pure frontend, deployed on GitHub Pages
   - Password protected (SHA-256)

2. **Code Exercises** (Working MVP)
   - 42 interactive RF coding challenges (37 exercises + 7 challenges across 7 sections)
   - Story-driven learning (PROTO-7 & MENTOR-9 on planet Syntax-IV)
   - FastAPI backend + Monaco editor frontend
   - Production-ready architecture ✅

---

## 🏗️ Architecture

### Multiple-Choice Tests
- **Tech**: Vanilla JS, HTML5, CSS3
- **Design**: Dark theme with RF Foundation official colors
- **Auth**: SHA-256 password protection (default: "admin")
- **Storage**: Frontend-only (sessionStorage)

### Code Exercises
- **Frontend**: Full-screen 3-panel layout (Task | Editor | Output)
- **Backend**: Python/FastAPI + Robot Framework 7.0
- **Validation**: mustContain, forbiddenKeywords, mustPass checks
- **Security**: Regex validation, 30s timeout, 5KB limit
- **Philosophy**: Zero scaffolding (blank initialCode)

**Design Colors:**
- Primary Teal: `#5AB3B3`
- Dark BG: `#1A1A1A`
- Card BG: `#2A3F3F`
- Success Green: `#28A745`
- Error Red: `#DC3545`

---

## 📂 File Structure

```
/
├── index.html              # Main entry point
├── css/styles.css          # CSS with variables system
├── js/
│   ├── config.js           # Centralized configuration
│   ├── auth.js             # Password protection
│   ├── app.js              # Main app logic
│   ├── questions.js        # Question loading
│   ├── quiz.js             # Quiz logic
│   ├── stats.js            # Statistics
│   └── exercises.js        # Exercise loading & Monaco editor
├── questions/              # MC test questions
│   ├── chapter-1/          # 5 subchapters (1.1-1.5)
│   ├── chapter-2/          # 6 subchapters (2.1-2.6)
│   ├── chapter-3/          # 5 subchapters (3.1-3.5)
│   ├── chapter-4/          # 5 subchapters (4.1-4.5)
│   └── chapter-5/          # 2 subchapters (5.1-5.2)
├── exercises/              # Code exercises (FLATTENED 2-LEVEL)
│   ├── index.json          # Root index
│   └── 00-fundamentals/    # Category folder
│       ├── category.json   # Category metadata
│       ├── 01-basic-syntax/        # Section folder
│       │   ├── section.json        # Section metadata
│       │   ├── ex-00-01-01.json    # Individual exercise
│       │   ├── ex-00-01-02.json
│       │   └── ch-00-01.json       # Challenge
│       ├── 02-variables/
│       ├── 03-assertions/
│       ├── 04-settings-section/
│       ├── 05-custom-keywords/
│       ├── 06-if-statements/
│       └── 07-for-loops/
├── backend/
│   ├── app/main.py         # FastAPI server
│   └── requirements.txt
├── docs/
│   ├── EXERCISE_CREATION_GUIDE.md  # How to create exercises
│   ├── REFACTORING_HISTORY.md      # Past refactoring work
│   ├── FUNDAMENTALS_SECTION_PLAN.md
│   └── FUNDAMENTALS_STORY.md
└── package.json
```

---

## 🎯 Question JSON Schema

### Single Answer Question
```json
{
  "chapter": "1-Introduction to Robot Framework",
  "subchapter": "1.1-Basic Concepts",
  "questions": [
    {
      "id": "unique-id",
      "question": "Question text",
      "type": "single",
      "options": [
        { "text": "Option A", "correct": true },
        { "text": "Option B", "correct": false, "explanation": "Why wrong" }
      ]
    }
  ]
}
```

### Multiple Answer Question
```json
{
  "chapter": "2-Robot Framework Architecture",
  "subchapter": "2.3-Test Libraries",
  "questions": [
    {
      "id": "unique-id-2",
      "question": "Select all built-in libraries",
      "type": "multiple",
      "options": [
        { "text": "BuiltIn", "correct": true },
        { "text": "Collections", "correct": true },
        { "text": "SeleniumLibrary", "correct": false, "explanation": "External library" }
      ]
    }
  ]
}
```

---

## 🎯 Exercise JSON Schema

**ID Naming Convention:**
- Exercises: `ex-{category}-{section}-{number}` (e.g., `ex-00-01-01`)
- Challenges: `ch-{category}-{section}` (e.g., `ch-00-01`)

**Example: `ex-00-01-01.json`**
```json
{
  "id": "ex-00-01-01",
  "type": "exercise",
  "section": "01-basic-syntax",
  "category": "00-fundamentals",
  "title": "First Boot Sequence",
  "difficulty": "beginner",
  "estimatedTime": "8 minutes",
  "order": 1,
  "description": "Create a complete boot sequence with sequential messages.",
  "story": {
    "setup": "MENTOR-9: \"Let's verify your core functions...\"",
    "context": "Sequential execution is how robots communicate...",
    "success": "MENTOR-9: \"Excellent! All five boot messages...\""
  },
  "instructions": [
    "Create the *** Test Cases *** section header",
    "Create a test case named 'Boot Sequence'",
    "Log 5 sequential boot messages"
  ],
  "hints": [
    "Test case names start at left margin (no indentation)",
    "Keywords must be indented with at least 2 spaces (4 recommended)"
  ],
  "initialCode": "",
  "solution": "*** Test Cases ***\nBoot Sequence\n    Log    Initializing...",
  "validation": {
    "mustContain": ["*** Test Cases ***", "Boot Sequence", "Log"],
    "forbiddenKeywords": [],
    "mustPass": true
  },
  "theory": {
    "title": "Exercise 1.1.1: Sequential Execution",
    "content": "<div class=\"theory-visual\">...</div>...",
    "estimatedReadTime": "5-6 minutes"
  },
  "metadata": {
    "tags": ["fundamentals", "sequential-execution"],
    "prerequisites": [],
    "nextExercises": ["ex-00-01-02"]
  }
}
```

**Key Fields:**
- `id`: Unique identifier matching filename (without `.json`)
- `initialCode`: **ALWAYS blank** (zero scaffolding philosophy)
- `validation.mustContain`: Required keywords (case-sensitive)
- `validation.forbiddenKeywords`: Blocked keywords
- `validation.mustPass`: All RF tests must pass (boolean)

---

## 🛠️ Creating New Exercises

See **[docs/EXERCISE_CREATION_GUIDE.md](docs/EXERCISE_CREATION_GUIDE.md)** for detailed step-by-step instructions.

**Quick summary:**
1. Create `ex-{category}-{section}-{number}.json` in section folder
2. Update `section.json` with exercise ID
3. Update `category.json` if new section
4. Test with both servers running
5. Commit changes

---

## 📊 Current Exercise Inventory

**Completed (7 sections):**
- Section 01 (1.1): Basic Syntax (5 exercises + 1 challenge) ✅
- Section 02 (1.2): Variables (7 exercises + 1 challenge) ✅
- Section 03 (1.3): Assertions (7 exercises + 1 challenge) ✅
- Section 04 (2.1): Settings Section (7 exercises + 1 challenge) ✅
- Section 05 (2.2): Custom Keywords (6 exercises + 1 challenge) ✅
- Section 06 (2.3): IF Statements (5 exercises + 1 challenge) ✅
- Section 07 (2.4): FOR Loops (5 exercises + 1 challenge) ✅

**Total:** 42 exercises + 7 challenges
**Remaining:** ~42 exercises to reach 84 total

---

## 🔑 Important Configuration

### Password Protection
- **Default password**: "admin"
- **Change**: Generate SHA-256 hash → Update `PASSWORD_HASH` in `js/config.js`
- **Tool**: https://emn178.github.io/online-tools/sha256.html

### Config Module (`js/config.js`)
- Centralized settings (API URLs, limits, hashes)
- Auto-detects dev vs prod environment
- Used by: `auth.js`, `exercises.js`

### CSS Variables
- Comprehensive theming in `:root`
- Opacity variants: `--primary-teal-5`, `--primary-teal-10`, etc.
- Spacing scale: `--spacing-xs` to `--spacing-2xl`
- Border radius: `--radius-sm` to `--radius-xl`

---

## 🔒 Security (Backend)

- **Regex validation**: Blocks `import`, `Library`, `eval`, `exec`, `os.`, `subprocess`, `socket` (case-insensitive)
- **Execution timeout**: 30 seconds
- **Code size limit**: 5KB
- **Temporary directory isolation**
- ⚠️ **Docker sandboxing**: Planned (not yet implemented)

---

## 🚦 Validation Flow

1. **Security check**: Validate against dangerous patterns (regex)
2. **Pre-execution**: Check `mustContain` and `forbiddenKeywords`
3. **Execute**: Run Robot Framework if validation passes
4. **Post-execution**: Check `mustPass` requirement
5. **Return**: Results with `validation_errors` array

---

## 📝 Development Guidelines

### Question Creation
- Based on Robot Framework syllabus PDF
- Mix single/multiple answer types
- Include explanations for wrong answers
- Test on desktop, tablet, mobile viewports

### Exercise Creation
- **Zero scaffolding**: Always blank `initialCode`
- **Story-driven**: Use PROTO-7 & MENTOR-9 characters
- **Theory images**: Comic-style AI-generated (1920x1080 PNG)
- **HTML theory**: Use styled divs (`.story-intro`, `.concept-explain`, `.code-demo`)

### Code Style
- 4-space indentation for RF code
- Follow RF conventions in examples
- Use CSS variables for styling
- Centralized config for settings

---

## ✨ Exercise Content Guidelines (Updated 2025-01-05)

Based on refinements made to Exercise 01 (`ex-00-01-01.json`):

### UI Display Rules
1. **Exercise Title Display**: Show exercise ID (e.g., `ex-00-01-01`) instead of title field in the top header
   - Displayed alongside difficulty badge
   - No estimated time shown in header
   - Title field still used in exercise list view

2. **Theory Section Structure** (appears above "Read More" button):
   - `<div class="theory-visual">` - Image extracted and placed after theory header
   - `<div class="story-intro">` - Story narrative extracted and placed after image
   - Both elements appear **before** collapsible content (always visible)

3. **Story Intro Formatting**:
   - First paragraph: Regular narrative text (setup context)
   - Last paragraph: MENTOR-9's dialogue (styled with italic, teal color, decorative quotes)
   - Background: Gradient with teal accent, left border, shadow
   - Text alignment: Justified
   - Line height: 1.6 (tight spacing)
   - CSS class: `.story-intro`

4. **Task Section Formatting**:
   - Header: "TASK" (uppercase, not "Task")
   - Description: MENTOR-9's speech styled like `.story-intro`
   - CSS class for description: `.task-mentor-speech`
   - Same styling as story intro (gradient, quotes, italic, teal)

### Theory Content Structure
1. **Story intro** - Wrapped in `<div class="story-intro">` (extracted, always visible)
2. **Section headers** - Use `<h3>` tags to organize collapsible content:
   - Example: `<h3>Understanding Robot Framework</h3>`
   - Example: `<h3>The Basic Pattern</h3>`
   - Example: `<h3>Critical: Spacing Rules</h3>`
3. **No "Your Task" section** - Removed from theory (task is in Task section)
4. **Narrative style** - Write like a story/explanation, not documentation term-definition format
5. **Non-technical language** - Easy to read for non-technical users, avoid overwhelming with terms
6. **High-level understanding** - Focus on practice and conceptual understanding

### Instructions Format
1. **High-level goals** - Not step-by-step syntax (e.g., "Create the Test Cases section" not "Type *** Test Cases ***")
2. **Styled syntax elements** - Wrap in single quotes for auto-formatting as `<code>`:
   - Example: `'*** Test Cases ***'` → renders as code
   - Example: `'Log'` → renders as keyword
   - Example: `'Boot Sequence'` → renders as test name
3. **Include exploration tasks** - Ask to inspect output (e.g., "Inspect the Log tab to find your boot messages and pay attention to the log level (INFO, WARN, ERROR, etc.)")
4. **Provide exact arguments** - When specifying messages/arguments, give full text
5. **Singular vs plural** - Use singular "test" not "tests" when referring to one test

### Validation Rules
1. **mustContain**: Use **exact full text** of arguments, not partial keywords
   - ✅ Good: `"Hello World"`, `"Initializing core systems..."`
   - ❌ Bad: `"Initializing"`, `"core"`
2. **Match instructions**: Validation must check for exact messages specified in instructions

### CSS Styling Classes
- `.story-intro` - Story narrative box (gradient background, always visible above "Read More")
- `.task-mentor-speech` - Task description (MENTOR-9's instruction, styled like story intro)
- `.concept-explain` - Theory explanation paragraphs
- `.code-demo` - Code examples
- `.rules-box` - Important rules/warnings

### JavaScript Extraction Logic (`js/exercises.js`)
The code automatically extracts and positions:
1. `<div class="theory-visual">` → Placed after theory header (always visible)
2. `<div class="story-intro">` → Placed after image (always visible)
3. Remaining content → Inside collapsible `#theoryFullContent`

Both extracted elements appear **before** the "Read More" button.

---

## 📚 Additional Documentation

- **[docs/EXERCISE_CREATION_GUIDE.md](docs/EXERCISE_CREATION_GUIDE.md)** - Step-by-step exercise creation
- **[docs/REFACTORING_HISTORY.md](docs/REFACTORING_HISTORY.md)** - Past refactoring work
- **[docs/FUNDAMENTALS_SECTION_PLAN.md](docs/FUNDAMENTALS_SECTION_PLAN.md)** - Complete curriculum plan
- **[docs/FUNDAMENTALS_STORY.md](docs/FUNDAMENTALS_STORY.md)** - Story arc & character details

---

## ⚠️ Known Issues

- **404 in RF Reports**: Internal links between log.html and report.html don't work in iframes (minor UX issue)

---

## 🎯 Next Steps

- Continue implementing remaining exercises (see curriculum plan)
- Generate AI images for existing exercises
- Add Docker-based sandboxing for production
- Optional: User progress tracking system
