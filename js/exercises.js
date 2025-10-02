// Exercise Module - Handles code exercises with Monaco editor
const exercise = {
    allExercises: [],
    currentExercise: null,
    editor: null,
    currentOutputTab: 'console',

    async loadExercises() {
        try {
            const response = await fetch('exercises/beginner-exercises.json');
            const data = await response.json();
            this.allExercises = data.exercises;
            console.log(`Loaded ${this.allExercises.length} exercises`);
            this.displayExerciseList();
        } catch (error) {
            console.error('Error loading exercises:', error);
        }
    },

    displayExerciseList() {
        const listContainer = document.getElementById('exerciseList');
        if (!listContainer) return;

        listContainer.innerHTML = '';

        this.allExercises.forEach(ex => {
            const item = document.createElement('div');
            item.className = 'exercise-item';
            item.innerHTML = `
                <h4>${ex.title}</h4>
                <span class="badge-difficulty">${ex.difficulty}</span>
                <p style="color: var(--text-muted); margin-top: 0.5rem;">${ex.description}</p>
            `;
            item.addEventListener('click', () => this.openExercise(ex.id));
            listContainer.appendChild(item);
        });
    },

    openExercise(exerciseId) {
        this.currentExercise = this.allExercises.find(ex => ex.id === exerciseId);
        if (!this.currentExercise) return;

        // Update UI
        document.getElementById('exerciseTitle').textContent = this.currentExercise.title;
        document.getElementById('exerciseDifficulty').textContent = this.currentExercise.difficulty;
        document.getElementById('exerciseDescription').textContent = this.currentExercise.description;

        // Instructions
        const instructionsList = document.getElementById('exerciseInstructions');
        instructionsList.innerHTML = '';
        this.currentExercise.instructions.forEach(instruction => {
            const li = document.createElement('li');
            li.textContent = instruction;
            instructionsList.appendChild(li);
        });

        // Hints
        const hintsDiv = document.getElementById('exerciseHints');
        hintsDiv.innerHTML = '';
        this.currentExercise.hints.forEach(hint => {
            const p = document.createElement('p');
            p.textContent = `💡 ${hint}`;
            p.style.marginBottom = '0.5rem';
            hintsDiv.appendChild(p);
        });
        hintsDiv.style.display = 'none';

        // Initialize Monaco editor
        this.initEditor();

        // Show workspace
        app.hideAllScreens();
        document.getElementById('exerciseWorkspace').classList.add('active');
    },

    initEditor() {
        require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs' }});

        require(['vs/editor/editor.main'], () => {
            const container = document.getElementById('codeEditor');
            container.innerHTML = ''; // Clear previous editor

            this.editor = monaco.editor.create(container, {
                value: this.currentExercise.initialCode,
                language: 'python', // Robot Framework uses Python-like syntax
                theme: 'vs-dark',
                automaticLayout: true,
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: 'on',
                tabSize: 4,
                insertSpaces: true
            });
        });
    },

    async runCode() {
        if (!this.editor) return;

        const code = this.editor.getValue();
        const consoleOutput = document.getElementById('outputConsole');

        // Show loading
        consoleOutput.innerHTML = '<pre>Executing Robot Framework code...\n</pre>';

        try {
            const response = await fetch('http://localhost:8000/api/execute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    code: code,
                    exercise_id: this.currentExercise.id
                })
            });

            const result = await response.json();

            if (result.success) {
                const status = result.passed ? '✅ Tests PASSED' : '❌ Tests FAILED';
                const timeInfo = `\nExecution time: ${result.execution_time.toFixed(2)}s`;

                consoleOutput.innerHTML = `<pre>${status}${timeInfo}\n\n${result.error || 'All tests completed successfully!'}</pre>`;

                // Update output tabs
                this.updateOutputTab('log', result.log_html);
                this.updateOutputTab('report', result.report_html);

                // Visual feedback
                if (result.passed) {
                    consoleOutput.style.borderLeft = '4px solid var(--success-green)';
                } else {
                    consoleOutput.style.borderLeft = '4px solid var(--error-red)';
                }
            } else {
                consoleOutput.innerHTML = `<pre style="color: var(--error-red);">❌ Execution Error:\n\n${result.error}</pre>`;
                consoleOutput.style.borderLeft = '4px solid var(--error-red)';
            }

        } catch (error) {
            console.error('API Error:', error);
            consoleOutput.innerHTML = `<pre style="color: var(--error-red);">❌ Connection Error:\n\nCould not connect to backend API. Make sure the backend server is running on http://localhost:8000\n\nError: ${error.message}</pre>`;
            consoleOutput.style.borderLeft = '4px solid var(--error-red)';
        }
    },

    updateOutputTab(tabName, htmlContent) {
        const outputDiv = document.getElementById(`output${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);

        if (htmlContent && htmlContent.trim()) {
            // Create iframe for HTML content
            const iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';
            iframe.style.background = 'white';

            outputDiv.innerHTML = '';
            outputDiv.appendChild(iframe);

            // Write HTML to iframe
            iframe.contentDocument.open();
            iframe.contentDocument.write(htmlContent);
            iframe.contentDocument.close();
        } else {
            outputDiv.innerHTML = '<pre>No output available</pre>';
        }
    },

    resetCode() {
        if (this.editor && this.currentExercise) {
            this.editor.setValue(this.currentExercise.initialCode);
            document.getElementById('outputConsole').innerHTML = '<pre>Ready to run code...</pre>';
            document.getElementById('outputConsole').style.borderLeft = 'none';
        }
    },

    toggleHints() {
        const hintsDiv = document.getElementById('exerciseHints');
        const btn = document.querySelector('.btn-hints');

        if (hintsDiv.style.display === 'none') {
            hintsDiv.style.display = 'block';
            btn.textContent = '💡 Hide Hints';
        } else {
            hintsDiv.style.display = 'none';
            btn.textContent = '💡 Show Hints';
        }
    },

    switchOutputTab(tabName) {
        this.currentOutputTab = tabName;

        // Update tab buttons
        document.querySelectorAll('.output-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.tab === tabName) {
                tab.classList.add('active');
            }
        });

        // Update content visibility
        document.querySelectorAll('.output-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`output${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`).classList.add('active');
    },

    backToExercises() {
        app.switchTab('exercises');
        app.showModeSelection();
    }
};

// Load exercises when auth completes
document.addEventListener('DOMContentLoaded', () => {
    exercise.loadExercises();
});
