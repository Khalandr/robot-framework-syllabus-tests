# Robot Framework Certification Practice

A comprehensive web-based training platform for Robot Framework certification preparation with two main features:

## 🎯 Features

### 1. Multiple-Choice Tests (Production - main branch)
- **562 questions** across 5 chapters covering complete RF syllabus
- **Multiple practice modes**: Chapter, Subchapter, Random, Exam (40-q simulation), Review
- **Interactive learning**: Immediate feedback with explanations
- **Performance tracking**: Session-based statistics and recommendations
- **Password protected**: SHA-256 hashed authentication
- **Production ready**: Deployed on GitHub Pages

### 2. Code Exercises (MVP - feature/code-exercises branch)
- **42 interactive coding challenges** (37 exercises + 7 challenges)
- **Story-driven learning**: PROTO-7 & MENTOR-9 narrative on planet Syntax-IV
- **Real RF execution**: FastAPI backend with Robot Framework 7.0
- **Comprehensive validation**: mustContain, forbiddenKeywords, mustPass checks
- **Zero scaffolding**: Students write complete tests from scratch
- **Full-screen workspace**: Monaco editor with 3-panel layout

**Completed Sections:**
- Section 1.1: Basic Syntax (5 exercises + 1 challenge) ✅
- Section 1.2: Variables (7 exercises + 1 challenge) ✅
- Section 1.3: Assertions (7 exercises + 1 challenge) ✅
- Section 2.1: Settings Section (7 exercises + 1 challenge) ✅
- Section 2.2: Custom Keywords (6 exercises + 1 challenge) ✅
- Section 2.3: IF Statements (5 exercises + 1 challenge) ✅
- Section 2.4: FOR Loops (5 exercises + 1 challenge) ✅

## 🚀 Getting Started

### Multiple-Choice Tests
```bash
npm run dev
# Opens at http://localhost:8080
# No backend needed
```

### Code Exercises
**Terminal 1 - Frontend:**
```bash
npm run dev  # http://localhost:8080
```

**Terminal 2 - Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload  # http://localhost:8000
```

## 🏗️ Project Structure

```
/
├── index.html              # Main application
├── css/styles.css          # Styles with CSS variables
├── js/
│   ├── config.js          # Centralized configuration
│   ├── auth.js            # Password protection
│   ├── questions.js       # Question loading
│   ├── quiz.js            # Quiz logic
│   └── exercises.js       # Exercise loading & Monaco editor
├── questions/             # MC test questions (562 total)
│   ├── chapter-1/ ... chapter-5/
├── exercises/             # Code exercises (42 total)
│   └── 00-fundamentals/
│       ├── 01-basic-syntax/
│       ├── 02-variables/
│       ├── 03-assertions/
│       ├── 04-settings-section/
│       ├── 05-custom-keywords/
│       ├── 06-if-statements/
│       └── 07-for-loops/
├── backend/               # FastAPI server
│   └── app/main.py
└── docs/                  # Documentation
    ├── EXERCISE_CREATION_GUIDE.md
    ├── REFACTORING_HISTORY.md
    ├── FUNDAMENTALS_SECTION_PLAN.md
    └── FUNDAMENTALS_STORY.md
```

## 📝 Creating New Content

### Adding Questions

Questions use JSON format in `questions/chapter-X/`:

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
        { "text": "Correct answer", "correct": true },
        { "text": "Wrong answer", "correct": false, "explanation": "Why wrong" }
      ]
    }
  ]
}
```

**Types:** `"single"` or `"multiple"`

### Adding Exercises

See **[docs/EXERCISE_CREATION_GUIDE.md](docs/EXERCISE_CREATION_GUIDE.md)** for complete guide.

**ID Format:**
- Exercises: `ex-{category}-{section}-{number}` (e.g., `ex-00-01-01`)
- Challenges: `ch-{category}-{section}` (e.g., `ch-00-01`)

**Quick steps:**
1. Create `ex-00-XX-XX.json` in section folder
2. Update `section.json` with exercise ID
3. Restart both servers
4. Test and commit

## 🎨 Design

- **Theme**: Dark with Robot Framework Foundation official colors
- **Primary**: Teal (#5AB3B3)
- **Backgrounds**: Dark (#1A1A1A), Card (#2A3F3F)
- **Responsive**: Mobile-first design
- **Accessibility**: High contrast, clean typography

## 🛠️ Technology Stack

### Frontend
- Vanilla JavaScript, HTML5, CSS3
- Monaco Editor (VS Code editor)
- No frameworks - lightweight and fast

### Backend (Exercises)
- Python 3.11+ / FastAPI
- Robot Framework 7.0
- Subprocess-based execution
- Regex security validation

### Security
- Password protection (SHA-256)
- Code validation (timeout, size limits)
- Regex-based keyword filtering
- Temporary directory isolation

## 🌐 Browser Support

- Chrome/Edge 80+
- Firefox 75+
- Safari 13+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📚 Documentation

- **[docs/EXERCISE_CREATION_GUIDE.md](docs/EXERCISE_CREATION_GUIDE.md)** - How to create new exercises
- **[docs/REFACTORING_HISTORY.md](docs/REFACTORING_HISTORY.md)** - Project refactoring history
- **[docs/FUNDAMENTALS_SECTION_PLAN.md](docs/FUNDAMENTALS_SECTION_PLAN.md)** - Complete curriculum plan (84 exercises)
- **[docs/FUNDAMENTALS_STORY.md](docs/FUNDAMENTALS_STORY.md)** - Story arc with PROTO-7 & MENTOR-9

## 🤝 Contributing

1. Follow the JSON schemas for questions/exercises
2. Test on multiple devices and browsers
3. Include proper explanations and theory
4. Use zero scaffolding for exercises (blank `initialCode`)
5. Follow the style guide in documentation

## 📄 License

MIT License - see LICENSE file for details

## 🎯 Current Status

- **Multiple-Choice Tests**: Production-ready ✅
- **Code Exercises**: Working MVP with 42 challenges ✅
- **Remaining Work**: ~42 more exercises to complete full curriculum
- **Branch**: `feature/code-exercises` for exercises, `main` for tests

---

**Default Password**: "admin" (can be changed in `js/config.js`)
