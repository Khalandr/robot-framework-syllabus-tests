# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Robot Framework training and practice test application. It provides an interactive web-based platform for practicing multiple-choice questions based on the Robot Framework syllabus, with questions organized by chapters and subchapters.

## Project Architecture

### Frontend Application
- **Technology**: Vanilla JavaScript, HTML5, CSS3 (no heavy frameworks for easy deployment)
- **Design**: Minimalistic, responsive design using Robot Framework Foundation official colors
- **Deployment**: Static files that can be deployed to any web server or GitHub Pages

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

### Practice Modes
1. **Chapter Practice**: Practice all questions from a selected chapter
2. **Subchapter Practice**: Practice questions from a specific subchapter (x.x level)
3. **Random Practice**: Shuffle random questions from all chapters
4. **Exam Mode**: 40-question test with proportional distribution from all chapters

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
├── index.html           # Main application entry point
├── css/
│   └── styles.css      # Main styles with responsive design
├── js/
│   ├── app.js          # Main application logic
│   ├── questions.js    # Question loading and management
│   ├── quiz.js         # Quiz logic and scoring
│   └── stats.js        # Statistics calculation and display
├── questions/          # Question JSON files
├── assets/            # Images, icons if needed
└── README.md          # User documentation
```

## Important Notes

- Questions should be based on the Robot Framework syllabus PDF
- Follow the MC question writing guidelines from "Writing MC Questions.pdf"
- Questions can have either single or multiple correct answers (use "type" field)
- For single answer questions: exactly one correct answer
- For multiple answer questions: one or more correct answers
- Each wrong answer should include an explanation
- Maintain consistent JSON structure across all question files
- Test on desktop, tablet, and mobile viewports before deployment