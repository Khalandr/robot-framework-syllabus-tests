# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚀 Quick Start - Running the Application

### Multiple-Choice Tests (Production - main branch)
```bash
npm run dev
# Opens at http://localhost:8080
# No backend needed - pure frontend application
```

### Code Exercises (MVP - feature/code-exercises branch)

**Terminal 1 - Frontend:**
```bash
npm run dev
# Opens at http://localhost:8080
```

**Terminal 2 - Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
# API running at http://localhost:8000
```

**Test the MVP:**
1. Navigate to Exercises tab
2. Select "Basic Syntax & Structure" category
3. Try any exercise
4. Write code and click "Run Code"
5. See results in Console/Log/Report tabs

---

## ⚠️ Important: Maintaining This Document
**CRITICAL**: After any significant architectural changes, feature additions, or structural modifications to the project, you MUST update this CLAUDE.md file to reflect the changes. This ensures future Claude sessions have accurate context about the project.

## Repository Overview

This is a Robot Framework training and practice platform with two main features:

1. **Multiple-Choice Tests** (Production - main branch)
   - 562 questions across 5 chapters
   - Multiple practice modes (Chapter, Subchapter, Random, Exam, Review)
   - Pure frontend, no backend needed
   - Deployed on GitHub Pages

2. **Code Exercises** (Working MVP - feature/code-exercises branch)
   - Interactive RF coding challenges with real execution
   - **Story-driven learning**: PROTO-7 & MENTOR-9 narrative on planet Syntax-IV
   - **Comic-style visuals**: AI-generated images for each exercise theory
   - **39 exercises implemented**: 6 sections with 36 exercises + 3 challenges - 84 total planned
     - Section 1.1: Basic Syntax (5 exercises + 1 challenge) ✅
     - Section 1.2: Variables (7 exercises + 1 challenge) ✅
     - Section 1.3: Assertions (7 exercises + 1 challenge) ✅
     - Section 2.1: Settings Section (7 exercises + 1 challenge) ✅
     - Section 2.2: Custom Keywords (6 exercises + 1 challenge) ✅
     - Section 2.3: IF Statements (5 exercises + 1 challenge) ✅
   - FastAPI backend + Monaco editor frontend
   - **Full validation system** with exercise requirements checking
   - **Zero scaffolding philosophy**: Blank initialCode forces complete test writing
   - **Production-ready architecture** after refactoring complete ✅
   - **Flattened 2-level structure**: Category → Section (simplified from 3 levels)

## Project Architecture

### **Architecture: Multiple-Choice Tests**
- **Technology**: Vanilla JavaScript, HTML5, CSS3 (no heavy frameworks)
- **Design**: Minimalistic, responsive design using Robot Framework Foundation official colors
- **Deployment**: Static files deployed to GitHub Pages
- **Security**: Password protection using SHA-256 hashing (frontend-based, session storage)
- **Status**: Production-ready ✅

### **Architecture: Code Exercises (Production-Ready MVP)**
- **Learning Approach**: Story-driven with PROTO-7 (student) & MENTOR-9 (teacher) characters
- **Narrative**: Crashed on planet Syntax-IV, repair ship diagnostics to escape (20-day timeline)
- **Visual Design**: Comic-style AI-generated images for each exercise (1920x1080 PNG)
- **Exercise Structure**:
  - Zero scaffolding (blank initialCode)
  - Story setup in each exercise (setup, context, success)
  - Comprehensive instructions (8-12 steps)
  - HTML-based theory content with styled sections
  - Images displayed directly in theory section (after header, before collapsible content)
- **Frontend**: Full-screen 3-panel layout (Task | Code Editor | Output)
- **Backend**: Python/FastAPI with Robot Framework 7.0 execution
- **Execution**: Subprocess-based with regex security validation (case-insensitive)
- **Validation System**: Comprehensive exercise requirement checking (mustContain, forbiddenKeywords, mustPass)
- **Configuration**: Centralized config module with dev/prod environment detection
- **Styling**: CSS variables system with opacity/spacing/radius scales
- **Output**: Console + RF log.html/report.html in iframes
- **Storage**: Stateless (no user progress tracking)
- **Security**: Code validation, 30s timeout, 5KB limit, regex-based keyword filtering
- **Status**: Production-ready architecture ✅ (refactored for scalability)
- **Branch**: `feature/code-exercises`
- **Ports**: Frontend on 8080, Backend on 8000

### Question Storage Structure
```
questions/
├── chapter-1/
│   ├── 1.1-subchapter-name.json
│   ├── 1.2-subchapter-name.json
│   └── ...
├── chapter-2/
│   ├── 2.1-subchapter-name.json
│   ├── 2.2-subchapter-name.json
│   └── ...
├── chapter-3/
├── chapter-4/
└── chapter-5/
```

### Question JSON Schema

#### Single Correct Answer Question
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
        {
          "text": "Option A",
          "correct": true
        },
        {
          "text": "Option B",
          "correct": false,
          "explanation": "Why this is wrong"
        },
        {
          "text": "Option C",
          "correct": false,
          "explanation": "Why this is wrong"
        },
        {
          "text": "Option D",
          "correct": false,
          "explanation": "Why this is wrong"
        }
      ]
    }
  ]
}
```

#### Multiple Correct Answers Question
```json
{
  "chapter": "2-Robot Framework Architecture",
  "subchapter": "2.3-Test Libraries",
  "questions": [
    {
      "id": "unique-id-2",
      "question": "Which of the following are built-in Robot Framework libraries? (Select all that apply)",
      "type": "multiple",
      "options": [
        {
          "text": "BuiltIn",
          "correct": true
        },
        {
          "text": "Collections",
          "correct": true
        },
        {
          "text": "SeleniumLibrary",
          "correct": false,
          "explanation": "SeleniumLibrary is an external library, not built-in"
        },
        {
          "text": "String",
          "correct": true
        },
        {
          "text": "RequestsLibrary",
          "correct": false,
          "explanation": "RequestsLibrary is an external library, not built-in"
        }
      ]
    }
  ]
}
```

## Key Features

### Navigation & UI Structure
- **Tab-based Navigation**: Two main sections
  - **Tests Tab**: Multiple-choice practice questions
  - **Exercises Tab**: Code challenges (coming soon)
- **Visual Distinction**: Clear separation between theory (tests) and practice (exercises)
- **Password Gate**: Both sections protected by same authentication

### Password Protection
- **Access Control**: Password gate before accessing practice questions
- **Hash Method**: SHA-256 hashing for password verification
- **Default Password**: "admin" (hash: `9bf32d...19d1f`)
- **Configuration**: Password hash stored in `js/config.js` as `PASSWORD_HASH`
- **Session Persistence**: Authentication stored in sessionStorage (lasts for browser session)
- **Security Level**: Frontend-only protection (not suitable for highly sensitive data, but adequate for practice app)
- **Changing Password**:
  1. Generate SHA-256 hash of new password (use: https://emn178.github.io/online-tools/sha256.html)
  2. Update `PASSWORD_HASH` value in `js/config.js`
  3. Auth module automatically uses `config.PASSWORD_HASH`

### Practice Modes
1. **Chapter Practice**: Practice all questions from a selected chapter
2. **Subchapter Practice**: Practice questions from a specific subchapter (x.x level)
3. **Random Practice**: Shuffle random questions from all chapters
4. **Exam Mode**: 40-question test with proportional distribution from all chapters
5. **Review Mode**: Review all questions with IDs in constant order, with export functionality

### Question Handling
- Answer options are shuffled each time a question is displayed
- Questions within practice sets are shuffled
- Wrong answer explanations are provided after submission
- Supports both single and multiple correct answer questions
- For multiple answer questions, user must select all correct answers to get full credit

### Statistics & Feedback
- Track correct/wrong answers per chapter and subchapter
- Display performance statistics after each practice session
- Provide recommendations on topics to review based on results

## Development Commands

### Setup
```bash
# Install dependencies (if any)
npm install

# Run local development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

### Deployment
```bash
# Deploy to GitHub Pages
npm run deploy

# Or simply serve the static files from any web server
```

## Robot Framework Foundation Colors & Design
Based on the official RFCP certification page:
- Primary Teal/Cyan: #5AB3B3 (main brand color)
- Dark Background: #1A1A1A (very dark gray/black)
- Card Background: #2A3F3F (dark teal/gray)
- Accent Red: #DC3545 (for badges/highlights)
- Text Light: #FFFFFF (primary text on dark)
- Text Muted: #B8C5C5 (secondary text)
- Success Green: #28A745 (for correct answers)
- Warning Yellow: #FFC107 (for warnings)

Design characteristics:
- Dark theme with high contrast
- Hexagonal badge/logo design elements
- Card-based layouts with rounded corners
- Clean, modern typography (sans-serif)

## File Structure
```
/
├── index.html              # Main application entry point (with password screen, tabs)
├── css/
│   └── styles.css         # Main styles with CSS variables, responsive design, full-screen exercises
├── js/
│   ├── config.js          # ✨ Centralized configuration (API URLs, limits, chapter structure)
│   ├── auth.js            # Password protection using config.PASSWORD_HASH
│   ├── app.js             # Main application logic, tab switching
│   ├── questions.js       # Question loading and management
│   ├── quiz.js            # Quiz logic and scoring
│   ├── stats.js           # Statistics calculation and display
│   └── exercises.js       # Exercise loading, Monaco editor, validation, API calls
├── questions/             # Question JSON files
│   ├── chapter-1/         # 5 subchapter files (1.1 - 1.5)
│   ├── chapter-2/         # 6 subchapter files (2.1 - 2.6)
│   ├── chapter-3/         # 5 subchapter files (3.1 - 3.5)
│   ├── chapter-4/         # 5 subchapter files (4.1 - 4.5)
│   └── chapter-5/         # 2 subchapter files (5.1 - 5.2)
├── exercises/             # ✨ FLATTENED 2-level structure (Category → Section)
│   ├── index.json         # Root index (lists categories)
│   └── 00-fundamentals/   # Category folder
│       ├── category.json  # Category metadata + section references
│       ├── 01-basic-syntax/      # Section folder (was nested under chapter)
│       │   ├── section.json      # Section metadata + exercise IDs
│       │   ├── ex-1-1-1.json     # Individual exercise files
│       │   ├── ex-1-1-2.json
│       │   └── challenge-1-1.json
│       ├── 02-variables/
│       ├── 03-assertions/
│       ├── 04-settings-section/
│       ├── 05-custom-keywords/
│       └── 06-if-statements/
├── backend/               # FastAPI server with validation system
│   ├── app/
│   │   └── main.py        # API endpoints, RF execution, exercise validation
│   ├── requirements.txt   # Python dependencies
│   └── Dockerfile         # Docker config (for future sandboxing)
├── assets/
│   └── rf_logo.svg        # Official Robot Framework logo
├── package.json           # Project configuration (npm run dev on port 8080)
├── .gitignore            # Git ignore file
├── CLAUDE.md             # This file - Claude Code instructions
└── README.md             # User documentation
```

## Project Status

### Completed Features ✅

#### Multiple-Choice Tests (Production)
- **Password Protection**: SHA-256 hashed password gate with session persistence (default: "admin")
- **UI/UX Design**: Complete with Robot Framework official branding and colors
- **Logo Integration**: Official RF logo implemented in header and as favicon
- **Responsive Layout**: Mobile-first design with proper button layouts
- **Core Application Structure**: All JavaScript modules and HTML structure ready
- **Question Database**: Complete with 23 question files across all 5 chapters (562 questions total)
- **Review Mode**: Constant order question review with export functionality
- **All Practice Modes**: Chapter, Subchapter, Random, Exam (40 questions), Review

#### Code Exercises (Production-Ready MVP - feature/code-exercises branch)
- **Tab Navigation**: Tests vs Exercises distinction in UI
- **Exercise Categories**: 5 categories with clean, minimal design (matching Tests tab style)
- **Full-Screen Workspace**: 400px task panel + remaining space for editor/output (100vh fixed layout)
- **Monaco Editor Integration**: VS Code editor with Python syntax (RF compatible)
- **Backend API**: FastAPI server with `/api/execute` endpoint
- **RF Execution**: Subprocess-based execution with Robot Framework 7.0
- **Exercise Validation System** ✨:
  - **mustContain validation**: Check for required keywords/text in code
  - **forbiddenKeywords validation**: Prevent use of specific keywords
  - **mustPass validation**: Ensure tests pass before accepting solution
  - **Detailed error messages**: Frontend displays validation issues
  - **Debug logging**: Backend tracks validation flow
- **Configuration System** ✨:
  - **Centralized config.js**: Single source of truth for all settings
  - **Environment detection**: Auto-detects dev (localhost) vs prod
  - **API URL management**: Dynamic base URL configuration
  - **Configurable limits**: Timeout, code size, exercise settings
- **CSS Architecture** ✨:
  - **CSS Variables**: Comprehensive theming system in :root
  - **Opacity variants**: 5, 10, 20, 30, 40% for all colors
  - **Spacing scale**: xs, sm, md, base, lg, xl, 2xl
  - **Border radius scale**: sm, md, lg, xl
  - **Shadow scale**: Consistent elevation system
  - **50+ hardcoded values replaced**: Maintainable, scalable styling
- **Security** ✨:
  - **Regex-based validation**: Case-insensitive pattern matching
  - **30s timeout**: Prevent infinite loops
  - **5KB code limit**: Prevent abuse
  - **Keyword filtering**: Block dangerous operations
- **Category-Based Structure** ✨:
  - **Organized folders**: exercises/basic-syntax/, exercises/variables/, etc.
  - **Multiple difficulty files**: beginner.json, intermediate.json per category
  - **Scalable to 75+ exercises**: Clean architecture supports growth
- **Output Display**: Console, Log (iframe), Report (iframe) tabs
- **Exercise Navigation**: Back | Previous | Next buttons (centered, equal width)
- **39 Exercises Implemented** (6 sections complete):
  - Section 1.1: Basic Syntax (5 exercises + 1 challenge) ✅
  - Section 1.2: Variables (7 exercises + 1 challenge) ✅
  - Section 1.3: Assertions (7 exercises + 1 challenge) ✅
  - Section 2.1: Settings Section (7 exercises + 1 challenge) ✅
  - Section 2.2: Custom Keywords (6 exercises + 1 challenge) ✅
  - Section 2.3: IF Statements (5 exercises + 1 challenge) ✅
- **Real-time Feedback**: Pass/Fail status with execution time and validation errors
- **Reset & Run Buttons**: Code editor controls with initial code reset

### Known Issues
- **404 in RF Reports**: Internal links between log.html and report.html don't work in iframes (minor UX issue)

### Recent Refactoring (Completed) ✅

**Context**: Before scaling to 84 exercises, comprehensive refactoring was performed to ensure production-ready architecture.

#### Folder Structure Flattening (LATEST - Oct 2025)
- **Problem**: 3-level nesting (Category → Chapter → Section) didn't match frontend (flat list)
- **Solution**: Flattened to 2 levels (Category → Section)
- **Migration**:
  - Moved all section folders from chapter subdirectories to category root
  - Renumbered sections sequentially (01-06 currently)
  - Removed "chapter" field from all JSON files
  - Updated category.json (replaced "topics" with "sections")
  - Updated frontend exercises.js (simplified loading logic)
- **Benefits**:
  - Matches frontend display (flat exercise list)
  - Simpler file paths: `exercises/00-fundamentals/01-basic-syntax/`
  - Easier to maintain and scale
  - Clean 2-level hierarchy
- **Status**: Completed and committed ✅

#### Exercise Validation System (CRITICAL)
- **Problem**: Exercises ran code but didn't validate against requirements
- **Solution**: Full validation system in backend with ValidationRule model
- **Implementation**:
  - `validate_exercise_rules()` function checks mustContain, forbiddenKeywords
  - Frontend sends validation rules from exercise JSON
  - Backend returns detailed validation_errors array
  - Frontend displays validation issues before/after execution
- **Status**: Tested and confirmed working ✅

#### Configuration Centralization
- **Problem**: Hardcoded API URLs, hashes, limits scattered across files
- **Solution**: Created `js/config.js` as single source of truth
- **Benefits**:
  - Environment detection (localhost vs production)
  - Easy setting changes
  - Consistent configuration access via `config.getApiUrl()`, etc.
- **Files Updated**: auth.js, exercises.js use config module

#### CSS Variables System
- **Problem**: 50+ hardcoded rgba() values, magic numbers everywhere
- **Solution**: Comprehensive CSS variable system in :root
- **Implementation**:
  - Opacity variants: --primary-teal-5, --primary-teal-10, etc.
  - Spacing scale: --spacing-xs to --spacing-2xl
  - Border radius scale: --radius-sm to --radius-xl
  - Shadow scale: --shadow-sm to --shadow-lg
- **Result**: Maintainable, themeable, scalable styling

#### Security Improvements
- **Problem**: Case-sensitive validation could be bypassed
- **Solution**: Regex-based validation with `re.IGNORECASE`
- **Patterns**: Blocks import, Library, eval, exec, os., subprocess, socket

#### File Structure Analysis
- **Analysis**: Checked if files too large and should be split
- **Decision**: NO SPLITTING NEEDED
  - Largest files: styles.css (1059 lines), quiz.js (503 lines)
  - All files appropriately sized for their purpose
  - Splitting would add HTTP requests without benefit
  - Current: 7 requests vs 20-25 if split

### Recent Refactoring: JSON Structure Migration (Completed) ✅

**Date**: 2025-10-04
**Status**: ✅ COMPLETE

Successfully migrated from grouped exercise files to modular 1-file-per-exercise structure:

**Before:**
```
exercises/00-fundamentals/01-first-contact/01-system-boot/
├── exercises.json  (array of 5 exercises)
├── challenge.json  (1 challenge)
└── topic.json      (metadata)
```

**After:**
```
exercises/00-fundamentals/01-first-contact/01-system-boot/
├── section.json         (metadata + references)
├── ex-1-1-1.json       (individual exercise)
├── ex-1-1-2.json
├── ex-1-1-3.json
├── ex-1-1-4.json
├── ex-1-1-5.json
└── challenge-1-1.json  (individual challenge)
```

**Benefits Achieved:**
- ✅ Atomic updates: Edit one exercise without touching others
- ✅ Parallel development: Multiple developers can work simultaneously
- ✅ Clean git diffs: Only changed exercises show in commits
- ✅ Easy maintenance: Direct file access by exercise ID
- ✅ Future-proof: Scales to 100+ exercises

**Files Changed:**
- Created 25 new exercise/challenge files (22 exercises + 3 challenges)
- Updated frontend: `js/exercises.js` (section.json loading logic)
- Added `.gitignore`: Excluded OLD_STRUCTURE_BACKUP folders
- Preserved backups: All old files backed up before deletion

See REFACTORING_PLAN.md for complete implementation details.

---

## 📚 HOW TO CREATE NEW EXERCISES (Step-by-Step Guide)

### Prerequisites
- Frontend running: `npm run dev` (port 8080)
- Backend running: `cd backend && uvicorn app.main:app --reload` (port 8000)
- Both must be restarted after adding new exercises

### Step 1: Create Individual Exercise File

**File location pattern (FLATTENED STRUCTURE):**
```
exercises/00-fundamentals/{section-id}/{exercise-id}.json
```

**Example:** Create `ex-2-4-1.json` for a new FOR loop exercise:

```json
{
  "id": "ex-2-4-1",
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

### Step 2: Update section.json

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
    "ex-2-4-1",
    "ex-2-4-2"
  ],
  "challenges": [
    "challenge-2-4"
  ]
}
```

### Step 3: Update category.json (If New Section)

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

### Step 4: Create Challenge (Optional)

**File:** `challenge-1-4.json`

Same structure as exercise but:
- `"type": "challenge"`
- More complex requirements
- Integrates multiple concepts

### Step 5: Add Theory Images

Create AI image generation prompts in:
```
assets/images/theory/section-1-4/IMAGE_PROMPTS.md
```

Use the character reference from existing sections (PROTO-7, MENTOR-9).

### Step 6: Test Exercise

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

### Step 7: Commit Changes

```bash
# Stage new section folder (flattened structure)
git add exercises/00-fundamentals/{section-id}/
git commit -m "Add Section {X.Y}: {Section Name} ({N} exercises + challenge)"
git push origin feature/code-exercises
```

---

## 🚨 IMPORTANT RULES

### Zero Scaffolding Philosophy
- **ALWAYS** set `"initialCode": ""`
- Students must write COMPLETE tests from scratch
- No starter code, no templates

### File Naming Conventions
- Exercises: `ex-{chapter}-{section}-{number}.json`
- Challenges: `challenge-{chapter}-{section}.json`
- Examples: `ex-1-1-1.json`, `challenge-1-3.json`

### Theory Content
- Must include `<div class="theory-visual">` with image
- Use `<div class="story-intro">` for MENTOR-9 dialogue
- Use `<div class="concept-explain">` for educational content
- Use `<div class="code-demo">` for code examples
- Use `<div class="try-it">` for practice prompts

### Validation Rules
- `mustContain`: Case-sensitive string matching
- `forbiddenKeywords`: Block specific keywords (e.g., "Library")
- `mustPass`: Require all RF tests to pass

---

## 📂 Current Exercise Inventory

**Completed (6 sections):**
- Section 1.1: Basic Syntax (5 exercises + 1 challenge) ✅
- Section 1.2: Variables (7 exercises + 1 challenge) ✅
- Section 1.3: Assertions (7 exercises + 1 challenge) ✅
- Section 2.1: Settings Section (7 exercises + 1 challenge) ✅
- Section 2.2: Custom Keywords (6 exercises + 1 challenge) ✅
- Section 2.3: IF Statements (5 exercises + 1 challenge) ✅

**Total:** 36 exercises + 6 challenges = 42 total

**Remaining:** 42 exercises + 6 challenges = 48 total (to reach 84 exercises + 12 challenges)

---

### Next Steps

#### Short Term (Ready to Proceed)
- Continue implementing remaining exercises using above guide
- Section 1.4 onwards (63 exercises remaining)
- Generate AI images for existing exercises
- Add Docker-based sandboxing for production deployment

#### Long Term
- User progress tracking (optional)
- Exercise difficulty progression system
- Community-contributed exercises
- Deploy backend to cloud (AWS Lambda/Cloud Run)

## Important Notes

- Questions should be based on the Robot Framework syllabus PDF
- Follow the MC question writing guidelines from "Writing MC Questions.pdf"
- Questions can have either single or multiple correct answers (use "type" field)
- For single answer questions: exactly one correct answer
- For multiple answer questions: one or more correct answers
- Each wrong answer should include an explanation
- Maintain consistent JSON structure across all question files
- Test on desktop, tablet, and mobile viewports before deployment

## Question Creation Guidelines

When creating questions in the next session:
1. **Chapter Organization**: Follow the 5-chapter structure from the syllabus
2. **Question Types**: Mix of single and multiple answer questions
3. **Difficulty Levels**: Range from basic concepts to advanced implementation
4. **Explanations**: Provide clear explanations for incorrect answers
5. **Real-world Examples**: Include practical Robot Framework scenarios
6. **Certification Focus**: Align with RFCP exam requirements

### Balance of Question Categories
Create a balanced mix of question types:

#### Theoretical Questions (~40%)
- Conceptual understanding (e.g., "What is Robot Framework?")
- Definitions and terminology (e.g., "What are the three specification styles?")
- Architecture and principles (e.g., "Which layer contains the execution engine?")
- Best practices and recommendations (e.g., "Why is RF not used for component testing?")

#### Code-Based Questions (~60%)
- **Syntax Analysis**: Identify errors or issues in code snippets
- **Code Interpretation**: Determine what code does or which style it uses
- **Output Prediction**: What will happen when code executes
- **Code Comparison**: Compare different implementations and identify differences
- **Practical Application**: Select correct syntax for a given requirement

**Code Question Best Practices:**
- Use proper code block formatting with \`\`\`robot syntax
- Include realistic, executable examples when possible
- Test edge cases and common mistakes
- Use visual markers (like '·' for spaces) when teaching spacing rules
- Include both correct and incorrect code examples for comparison
- Ensure code examples follow Robot Framework conventions (4-space indentation, proper sections, etc.)

**Example of Good Code-Based Question:**
```
Question: "Consider this Robot Framework test case:
\`\`\`robot
*** Test Cases ***
Login Test
 Login User admin password123
  Check Dashboard
   Verify User Status
    Logout
\`\`\`
What is wrong with this test case?"
```

This approach ensures:
- Students understand both theory and practical application
- Questions mirror real-world certification exam format
- Comprehensive coverage of both conceptual and hands-on skills

## Code Exercises - Technical Details

### ✅ CURRENT EXERCISE STRUCTURE (Flattened 2-Level)

**Modular Structure: Category → Section → Individual Exercise Files**

```
exercises/
├── index.json                           # Root index (lists active categories)
└── 00-fundamentals/                     # Category folder
    ├── category.json                    # Category metadata + section references
    ├── 01-basic-syntax/                 # Section folder (flattened - no chapter layer)
    │   ├── section.json                 # Section metadata + exercise IDs
    │   ├── ex-1-1-1.json               # Individual exercise file
    │   ├── ex-1-1-2.json
    │   ├── ex-1-1-3.json
    │   ├── ex-1-1-4.json
    │   ├── ex-1-1-5.json
    │   └── challenge-1-1.json          # Individual challenge file
    ├── 02-variables/
    │   ├── section.json
    │   ├── ex-1-2-1.json → ex-1-2-7.json
    │   └── challenge-1-2.json
    ├── 03-assertions/
    ├── 04-settings-section/
    ├── 05-custom-keywords/
    └── 06-if-statements/
```

**Key Changes from Old Structure:**
- ❌ REMOVED: Chapter layer (01-first-contact, 02-system-diagnostics folders)
- ❌ REMOVED: topic.json files
- ❌ REMOVED: "chapter" field from all JSON files
- ✅ SIMPLIFIED: 2-level hierarchy (Category → Section)
- ✅ UPDATED: category.json now has "sections" array instead of "topics"
- ✅ UPDATED: Frontend loads sections directly from category

**Benefits:**
- ✅ Matches frontend display (flat exercise list)
- ✅ Simpler file paths and navigation
- ✅ Edit one exercise without affecting others
- ✅ Clean git diffs (only changed file appears)
- ✅ Easier to maintain and scale

### Individual Exercise File Format (ex-1-1-1.json):
```json
{
  "id": "ex-1-1-1",
  "type": "exercise",
  "section": "01-basic-syntax",
  "category": "00-fundamentals",
  "title": "First Boot Sequence",
  "difficulty": "beginner",
  "estimatedTime": "8 minutes",
  "order": 1,
  "description": "Create a complete boot sequence with multiple sequential status messages.",
  "story": {
    "setup": "MENTOR-9: \"Let's verify your core functions...\"",
    "context": "Sequential execution is how robots communicate...",
    "success": "MENTOR-9: \"Excellent! All five boot messages...\""
  },
  "instructions": [
    "Create the *** Test Cases *** section header at the left margin",
    "Create a test case named 'Boot Sequence'",
    "Log 5 sequential boot messages showing system initialization stages"
  ],
  "hints": [
    "Remember: Test case names start at left margin (no indentation)",
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
    "tags": ["fundamentals", "sequential-execution", "logging"],
    "prerequisites": [],
    "nextExercises": ["ex-1-1-2"]
  }
}
```

**Key Fields:**
- `id`: Unique identifier (ex-{chapter}-{section}-{number})
- `type`: "exercise" or "challenge"
- `section`/`chapter`: Parent references
- `initialCode`: ALWAYS blank (zero scaffolding philosophy)
- `validation.mustContain`: Required keywords/text (case-sensitive)
- `validation.mustPass`: If true, all RF tests must pass
- `theory.content`: Full HTML theory with images and styled divs

**Validation Rules Explained:**
- **mustContain**: Array of strings that MUST appear in the code (case-sensitive)
  - Example: `["Log", "Hello Robot Framework"]` - both must be present
- **forbiddenKeywords**: Array of keywords that should NOT be used
  - Example: `["Library", "Import"]` - blocks external libraries
- **mustPass**: Boolean - if true, all Robot Framework tests must pass
  - Validation fails if any test case fails

### Backend Implementation (Production-Ready MVP)

**Current Stack:**
- **Framework**: FastAPI (Python 3.11+)
- **Execution**: `subprocess.run()` with Robot Framework 7.0
- **Port**: 8000 (localhost)
- **CORS**: Configured for localhost:8080 frontend

**Validation System:**
- ✅ **Exercise-specific validation** via `ValidationRule` model
- ✅ **Regex-based security** with case-insensitive pattern matching
- ✅ **Pre-execution checks**: mustContain, forbiddenKeywords validation
- ✅ **Post-execution checks**: mustPass validation
- ✅ **Detailed error reporting**: Returns validation_errors array

**Security Measures:**
- ✅ **Regex validation** (forbidden patterns: import, Library, eval, exec, os., subprocess, socket)
- ✅ **Case-insensitive matching** with `re.IGNORECASE` flag
- ✅ **Execution timeout**: 30 seconds
- ✅ **Code size limit**: 5KB
- ✅ **Temporary directory isolation** (`tempfile.TemporaryDirectory`)
- ⚠️ No Docker sandbox yet (subprocess only)

**API Models:**
```python
class ValidationRule(BaseModel):
    mustContain: List[str] = []
    mustPass: bool = True
    forbiddenKeywords: List[str] = []

class CodeExecutionRequest(BaseModel):
    code: str
    exercise_id: str
    validation: Optional[ValidationRule] = None

class CodeExecutionResponse(BaseModel):
    success: bool
    log_html: str = ""
    report_html: str = ""
    output_xml: str = ""
    passed: bool = False
    error: str = ""
    execution_time: float = 0.0
    validation_errors: List[str] = []
```

**API Endpoint:**
```python
POST /api/execute
Body: {
  "code": "*** Test Cases ***...",
  "exercise_id": "ex-1-1",
  "validation": {
    "mustContain": ["Log", "Hello Robot Framework"],
    "forbiddenKeywords": [],
    "mustPass": true
  }
}

Response: {
  "success": true,
  "log_html": "<html>...</html>",
  "report_html": "<html>...</html>",
  "output_xml": "<xml>...</xml>",
  "passed": true,
  "error": "",
  "execution_time": 1.23,
  "validation_errors": []  // Empty if all validations pass
}
```

**Validation Flow:**
1. **Security check**: Validate code against dangerous patterns (regex, case-insensitive)
2. **Pre-execution validation**: Check mustContain and forbiddenKeywords
3. **Execute code**: Run Robot Framework if validation passes
4. **Post-execution validation**: Check mustPass requirement
5. **Return results**: Include validation_errors array if any checks failed

**Running the Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

**Future Enhancement: Docker Sandboxing**
```dockerfile
FROM python:3.11-slim
RUN pip install robotframework==7.0
WORKDIR /workspace
USER nobody  # Non-root user
# Future: Add memory limits, network restrictions
```

### Frontend Implementation

**Full-Screen Layout (Production-Ready):**
- **Fixed Positioning**: Covers entire viewport (100vh, z-index: 1000)
- **Grid Layout**: `grid-template-columns: 400px 1fr`
- **No Header**: Maximizes coding space
- **Dark Background**: Matches application theme

**Left Panel (400px fixed):**
- Exercise title and difficulty badge
- Description text
- Instructions list (ordered steps)
- Collapsible hints section (💡 Show/Hide Hints)
- Footer navigation:
  - Back | Previous | Next buttons
  - Centered alignment, equal width (140px each)
  - Previous/Next disabled at boundaries

**Right Panel (Remaining space):**
- **Top Section (50%)**: Monaco code editor
  - Python syntax mode (closest to Robot Framework)
  - Dark theme (vs-dark)
  - 4-space indentation, word wrap enabled
  - No minimap, automatic layout
  - Editor controls: Reset | ▶ Run Code
- **Bottom Section (50%)**: Tabbed output viewer
  - **Console tab**: Execution summary
    - ✅/❌ Pass/Fail status
    - Execution time
    - Validation errors (if any)
    - Visual border: green (pass) / red (fail)
  - **Log tab**: RF log.html in iframe
  - **Report tab**: RF report.html in iframe

**Category List UI:**
- Matches Tests tab style (removed icons and counters)
- Simple cards: Title + Description
- "Coming Soon" label for empty categories
- Consistent card heights

**Exercise List UI:**
- Vertical scrollable list (max-height: 400px)
- Card-based items with title + difficulty badge
- Matches Tests tab design (no icons)
- Clean, minimal styling

**Navigation Flow:**
1. **Category Selection**: Choose from 5 categories on main screen
2. **Exercise List**: View exercises in selected category (scrollable)
3. **Workspace**: Full-screen coding environment
4. **Navigation**: Previous/Next to move between exercises
5. **Back**: Returns to exercise list (not mode selection)

**Configuration Usage:**
```javascript
// Centralized configuration
const response = await fetch(config.getApiUrl('/api/execute'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        code: code,
        exercise_id: this.currentExercise.id,
        validation: {
            mustContain: this.currentExercise.validation.mustContain || [],
            mustPass: this.currentExercise.validation.mustPass !== false,
            forbiddenKeywords: this.currentExercise.validation.forbiddenKeywords || []
        }
    })
});
```

**Validation Display:**
```javascript
// Display validation errors in console
if (result.validation_errors && result.validation_errors.length > 0) {
    validationMsg = '\n\n⚠️ Validation Issues:\n' +
        result.validation_errors.map(err => `  • ${err}`).join('\n');
}
consoleOutput.innerHTML = `<pre>${status}${timeInfo}${validationMsg}\n\n${result.error}</pre>`;
```

**CSS Variables in Use:**
```css
.exercise-item {
    background: var(--primary-teal-5);
    border: 1px solid var(--border-color);
    padding: var(--spacing-base);
    border-radius: var(--radius-lg);
}

.btn-primary {
    background: var(--primary-teal);
    box-shadow: var(--shadow-md);
}
```

### Story-Driven Learning & Visual Design

**Narrative Approach:**
- **Characters**: PROTO-7 (student robot) and MENTOR-9 (teacher robot)
- **Setting**: Crashed on planet Syntax-IV, must repair ship diagnostics to escape
- **Timeline**: 20-day countdown creates urgency and progression
- **Story Integration**: Each exercise has setup, context, and success dialogue from MENTOR-9

**Visual Design System:**
- **Comic-Style Images**: AI-generated illustrations (1920x1080 PNG) for each exercise
- **Image Generation**: Prompts in `assets/images/theory/section-{id}/IMAGE_PROMPTS.md`
  - Section 1.1: 6 image prompts (complete)
  - Section 1.2: 8 image prompts (complete)
- **Storage**: `assets/images/theory/section-{id}/ex-{id}-{name}.png`
- **Display**: Images shown directly in theory section after header, before collapsible content
- **File Sizes**: Currently 2-3MB per image (optimization to ~200KB planned)

**Theory Content Structure:**
- HTML-based with styled divs (`.story-intro`, `.concept-explain`, `.code-demo`, `.rules-box`, `.try-it`)
- Images embedded at top of theory.content as `<div class="theory-visual">...</div>`
- JavaScript extracts and displays image separately, removes from collapsible content
- CSS styling: Border, shadow, hover effects, responsive design

**Curriculum Plan:**
- **Documentation**: `docs/FUNDAMENTALS_SECTION_PLAN.md` - 84 exercises across 5 chapters
- **Story Arc**: `docs/FUNDAMENTALS_STORY.md` - Complete narrative with character descriptions
- **Philosophy**: Zero scaffolding, syntax flexibility, single-file mastery

### Exercise Categories

**Current Implementation** (Category: 00-fundamentals):
1. ✅ **Chapter 1: First Contact** - 14/21 exercises complete
   - ✅ Section 1.1: System Boot (5 exercises + 1 challenge) - COMPLETE
   - ✅ Section 1.2: Memory Banks (7 exercises + 1 challenge) - COMPLETE
   - 📚 Section 1.3: System Checks (7 exercises + 1 challenge) - PLANNED

**Planned Categories:**
2. 📚 **Chapter 2**: System Diagnostics (23 exercises + 1 challenge)
3. 📚 **Chapter 3**: Logic Circuits (19 exercises + 1 challenge)
4. 📚 **Chapter 4**: Component Assembly (16 exercises + 1 challenge)
5. 📚 **Chapter 5**: Launch Sequence (5 exercises + final challenge)

**Total Planned**: 84 exercises + 5 challenges across 5 chapters

### Running the Complete Application

**Frontend (Port 8080):**
```bash
npm run dev
# Opens at http://localhost:8080
```

**Backend (Port 8000):**
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
# API at http://localhost:8000
```

**Testing the MVP:**
1. Start both frontend and backend
2. Navigate to Exercises tab
3. Select "Basic Syntax & Structure"
4. Try exercise #1: "Your First Robot Test"
5. Write code, click "Run Code"
6. See results in Console/Log/Report tabs