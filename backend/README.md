# Robot Framework Exercise API Backend

FastAPI backend for executing Robot Framework code submissions safely.

## Prerequisites

- Python 3.11+
- pip
- (Optional) Docker for containerized execution

## Setup Instructions

### Option 1: Local Development (Recommended for MVP)

1. **Install dependencies**:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. **Run the API server**:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

3. **Test the API**:
   Open browser to http://localhost:8000
   You should see: `{"message": "Robot Framework Exercise API", "version": "1.0.0"}`

### Option 2: Docker (Production-ready)

1. **Build the Docker image**:
   ```bash
   cd backend
   docker build -t rf-exercise-api .
   ```

2. **Run the container**:
   ```bash
   docker run -p 8000:8000 rf-exercise-api uvicorn app.main:app --host 0.0.0.0 --port 8000
   ```

## API Endpoints

### `GET /`
Health check endpoint
- **Response**: `{"message": "Robot Framework Exercise API", "version": "1.0.0"}`

### `POST /api/execute`
Execute Robot Framework code
- **Request Body**:
  ```json
  {
    "code": "*** Test Cases ***\nMy Test\n    Log    Hello World",
    "exercise_id": "ex-1-1"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "log_html": "<html>...</html>",
    "report_html": "<html>...</html>",
    "output_xml": "<xml>...</xml>",
    "passed": true,
    "error": "",
    "execution_time": 0.5
  }
  ```

### `GET /health`
Health check
- **Response**: `{"status": "healthy"}`

## Security Features

- Code validation to prevent dangerous operations
- 30-second execution timeout
- 5KB code size limit
- Keyword whitelist (only safe built-in keywords allowed)
- No file system access (isolated temporary directories)
- No network access during execution

## Testing the API

Using curl:
```bash
curl -X POST http://localhost:8000/api/execute \
  -H "Content-Type: application/json" \
  -d '{"code":"*** Test Cases ***\nTest\n    Log    Hello", "exercise_id":"test"}'
```

## Development

### Running with auto-reload:
```bash
uvicorn app.main:app --reload --port 8000
```

### Viewing API docs:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Troubleshooting

**Issue**: `ModuleNotFoundError: No module named 'fastapi'`
- **Solution**: Run `pip install -r requirements.txt`

**Issue**: `robot: command not found`
- **Solution**: Make sure Robot Framework is installed: `pip install robotframework`

**Issue**: Frontend can't connect to backend
- **Solution**: Make sure backend is running on port 8000 and CORS is enabled

**Issue**: Execution timeout errors
- **Solution**: Code is taking too long. Simplify the test or check for infinite loops.
