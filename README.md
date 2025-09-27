# Robot Framework Certification Practice

A web-based practice application for Robot Framework certification training and test preparation.

## Features

- **Multiple Practice Modes**
  - Chapter Practice: Focus on specific chapters
  - Subchapter Practice: Target specific topics
  - Random Practice: Mixed questions from all chapters
  - Exam Mode: 40-question simulation with proportional distribution

- **Interactive Learning**
  - Single and multiple-choice questions
  - Shuffled answer options for each question
  - Immediate feedback with explanations for wrong answers
  - Progress tracking during quiz sessions

- **Performance Analytics**
  - Detailed results breakdown by chapter and topic
  - Practice history tracking with localStorage
  - Personalized recommendations for improvement
  - Performance statistics and trends

- **Modern Design**
  - Official Robot Framework Foundation color scheme
  - Responsive design for desktop, tablet, and mobile
  - Dark theme with high contrast for better readability
  - Clean, minimalistic interface

## Getting Started

### Running Locally

1. Clone the repository
2. Start a local web server:
   ```bash
   # Using Python
   npm run dev

   # Or using Node.js http-server
   npm run serve

   # Or manually with Python
   python -m http.server 8000
   ```
3. Open your browser to `http://localhost:8000`

### Adding Questions

Questions are stored in JSON format in the `questions/` directory:

```
questions/
├── chapter-1/
│   ├── 1.1-introduction.json
│   └── 1.2-installation.json
├── chapter-2/
│   ├── 2.1-test-data.json
│   └── 2.2-keywords.json
└── ...
```

Each JSON file follows this schema:

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
          "text": "Correct answer",
          "correct": true
        },
        {
          "text": "Wrong answer",
          "correct": false,
          "explanation": "Why this is wrong"
        }
      ]
    }
  ]
}
```

### Question Types

- **Single Answer** (`"type": "single"`): Select one correct answer
- **Multiple Answer** (`"type": "multiple"`): Select all correct answers

## Technology Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Storage**: localStorage for progress tracking
- **Deployment**: Static files (can be hosted anywhere)

## Browser Support

- Chrome/Edge 80+
- Firefox 75+
- Safari 13+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Add questions following the JSON schema
2. Test on multiple devices and browsers
3. Ensure questions include proper explanations
4. Follow the style guide in CLAUDE.md

## License

MIT License - see LICENSE file for details