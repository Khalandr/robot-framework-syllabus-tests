FROM python:3.11-slim

# Set working directory
WORKDIR /workspace

# Install Robot Framework and dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Create non-root user for security
RUN useradd -m -u 1000 robotuser && \
    chown -R robotuser:robotuser /workspace

# Switch to non-root user
USER robotuser

# Default command
CMD ["python", "-m", "robot", "--version"]
