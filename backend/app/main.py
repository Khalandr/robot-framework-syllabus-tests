from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import subprocess
import tempfile
import os
import shutil
from pathlib import Path
import time

app = FastAPI(title="Robot Framework Exercise API")

# CORS configuration for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080", "http://127.0.0.1:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CodeExecutionRequest(BaseModel):
    code: str
    exercise_id: str

class CodeExecutionResponse(BaseModel):
    success: bool
    log_html: str = ""
    report_html: str = ""
    output_xml: str = ""
    passed: bool = False
    error: str = ""
    execution_time: float = 0.0

# Security: Whitelist of allowed keywords
ALLOWED_KEYWORDS = {
    'Log', 'Should Be Equal', 'Should Contain', 'Should Not Be Equal',
    'Set Variable', 'Create List', 'Append To List', 'Get Length',
    'Convert To String', 'Convert To Integer', 'Sleep', 'Comment',
    'FOR', 'END', 'IF', 'ELSE', 'ELSE IF', 'RETURN', 'CONTINUE', 'BREAK'
}

def validate_code(code: str) -> bool:
    """Basic validation to check for dangerous operations"""
    dangerous_patterns = [
        'import ', 'Library ', '__', 'eval', 'exec', 'compile',
        'open(', 'file(', 'os.', 'subprocess', 'socket'
    ]

    code_lower = code.lower()
    for pattern in dangerous_patterns:
        if pattern.lower() in code_lower:
            return False

    return True

@app.get("/")
async def root():
    return {"message": "Robot Framework Exercise API", "version": "1.0.0"}

@app.post("/api/execute", response_model=CodeExecutionResponse)
async def execute_code(request: CodeExecutionRequest):
    """Execute Robot Framework code in isolated environment"""

    # Validate code
    if not validate_code(request.code):
        raise HTTPException(
            status_code=400,
            detail="Code contains forbidden operations or keywords"
        )

    # Limit code size
    if len(request.code) > 5000:
        raise HTTPException(
            status_code=400,
            detail="Code exceeds maximum size of 5KB"
        )

    # Create temporary directory for execution
    with tempfile.TemporaryDirectory() as temp_dir:
        temp_path = Path(temp_dir)
        test_file = temp_path / "test.robot"

        # Write code to file
        test_file.write_text(request.code, encoding='utf-8')

        start_time = time.time()

        try:
            # Execute Robot Framework with timeout and resource limits
            result = subprocess.run(
                ['robot', '--outputdir', str(temp_path), str(test_file)],
                capture_output=True,
                text=True,
                timeout=30,  # 30 second timeout
                cwd=temp_path
            )

            execution_time = time.time() - start_time

            # Read output files
            log_html = ""
            report_html = ""
            output_xml = ""

            log_path = temp_path / "log.html"
            report_path = temp_path / "report.html"
            output_path = temp_path / "output.xml"

            if log_path.exists():
                log_html = log_path.read_text(encoding='utf-8')

            if report_path.exists():
                report_html = report_path.read_text(encoding='utf-8')

            if output_path.exists():
                output_xml = output_path.read_text(encoding='utf-8')

            # Check if tests passed (return code 0 means all tests passed)
            passed = result.returncode == 0

            return CodeExecutionResponse(
                success=True,
                log_html=log_html,
                report_html=report_html,
                output_xml=output_xml,
                passed=passed,
                error="" if passed else result.stderr,
                execution_time=execution_time
            )

        except subprocess.TimeoutExpired:
            return CodeExecutionResponse(
                success=False,
                error="Execution timeout: Code took longer than 30 seconds to run",
                execution_time=30.0
            )
        except Exception as e:
            return CodeExecutionResponse(
                success=False,
                error=f"Execution error: {str(e)}",
                execution_time=time.time() - start_time
            )

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}
