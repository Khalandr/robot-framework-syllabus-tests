#!/bin/bash
# Start the FastAPI backend server

echo "Starting Robot Framework Exercise API..."
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
