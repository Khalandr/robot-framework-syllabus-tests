# Quick Start Guide

## Running the Complete Application

### Part 1: Frontend (Multiple Choice Tests)

The frontend works as a static site and doesn't require a backend for MC tests.

1. **Option A: Simple HTTP Server** (Recommended):
   ```bash
   # Using Python
   python -m http.server 8080

   # Or using Node.js
   npx http-server -p 8080
   ```

2. **Option B: Open directly**:
   Simply open `index.html` in your browser (CORS may block Monaco editor)

3. **Access the app**:
   Open http://localhost:8080
   - Default password: `robot2024`
   - Navigate to "Tests" tab for multiple choice questions

### Part 2: Backend (Code Exercises)

The backend is required for executing Robot Framework code.

1. **Install Python dependencies**:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. **Start the FastAPI server**:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

3. **Verify backend is running**:
   Open http://localhost:8000
   Should see: `{"message": "Robot Framework Exercise API", "version": "1.0.0"}`

### Part 3: Using Code Exercises

1. Make sure both frontend (port 8080) and backend (port 8000) are running
2. Open http://localhost:8080
3. Click "Exercises" tab
4. Select an exercise to start coding
5. Write Robot Framework code in the editor
6. Click "▶ Run Code" to execute
7. View results in Console/Log/Report tabs

## Project Structure

```
/
├── frontend (static files)
│   ├── index.html          # Main entry
│   ├── js/                 # JavaScript modules
│   ├── css/                # Styles
│   ├── questions/          # MC question database
│   └── exercises/          # Exercise definitions
│
└── backend (Python/FastAPI)
    ├── app/
    │   └── main.py         # FastAPI server
    ├── requirements.txt    # Python dependencies
    ├── Dockerfile          # Container config
    └── README.md           # Backend docs
```

## Features

### Tests Tab
- 📝 Chapter Practice
- 📝 Subchapter Practice
- 📝 Random Practice (20 questions)
- 📝 Exam Mode (40 questions: 3/17/10/7/3 distribution)
- 📝 Review Mode (with question IDs and export)

### Exercises Tab
- 💻 Interactive code editor (Monaco/VS Code)
- 💻 Real Robot Framework execution
- 💻 Live output with log.html and report.html
- 💻 Progressive difficulty (Beginner → Advanced)
- 💻 Hints system
- 💻 5 beginner exercises available

## Troubleshooting

**Frontend not loading**:
- Check if you're using a local server (not file://)
- Try a different port if 8080 is occupied

**Backend connection error**:
- Make sure backend is running on port 8000
- Check console for CORS errors
- Verify `pip install` completed successfully

**Monaco editor not showing**:
- Check internet connection (Monaco loads from CDN)
- Check browser console for errors

**Code execution fails**:
- Verify Robot Framework syntax
- Check backend console logs
- Ensure code doesn't contain forbidden operations

## Default Credentials

- **Password**: `robot2024` (SHA-256 hashed in frontend)
- To change: Generate new hash and update `js/auth.js`

## Next Steps

- Add more exercises (intermediate, advanced)
- Deploy backend to cloud (AWS Lambda, Cloud Run)
- Add user progress tracking (optional)
- Implement Docker-based execution for better isolation
