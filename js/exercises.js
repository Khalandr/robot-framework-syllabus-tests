// Exercise Module - Handles code exercises with Monaco editor
const exercise = {
    allExercises: [],
    exercisesByCategory: {},
    currentExercise: null,
    currentCategory: null,
    currentExerciseIndex: 0,
    editor: null,
    currentOutputTab: 'console',

    categories: [
        { id: 'basic-syntax', name: 'Basic Syntax & Structure', description: 'Foundation level - RF syntax basics' },
        { id: 'variables', name: 'Variables & Data Types', description: 'Working with different variable types' },
        { id: 'keywords', name: 'Keywords & Libraries', description: 'Using and creating keywords' },
        { id: 'control-flow', name: 'Control Flow', description: 'Loops and conditionals' },
        { id: 'organization', name: 'Test Organization', description: 'Structuring test suites' }
    ],

    async loadExercises() {
        try {
            this.allExercises = [];
            this.exercisesByCategory = {};

            // Load exercises for each category
            for (const cat of this.categories) {
                const categoryExercises = [];

                // Try to load beginner and intermediate files for each category
                const difficulties = ['beginner', 'intermediate'];

                for (const diff of difficulties) {
                    try {
                        const response = await fetch(`exercises/${cat.id}/${diff}.json`);
                        if (response.ok) {
                            const data = await response.json();
                            categoryExercises.push(...data.exercises);
                        }
                    } catch (err) {
                        // File doesn't exist yet, skip silently
                        console.log(`No ${diff} exercises for ${cat.id} yet`);
                    }
                }

                if (categoryExercises.length > 0) {
                    this.exercisesByCategory[cat.id] = categoryExercises;
                    this.allExercises.push(...categoryExercises);
                }
            }

            console.log(`Loaded ${this.allExercises.length} exercises across ${Object.keys(this.exercisesByCategory).length} categories`);
            this.displayCategoryList();
        } catch (error) {
            console.error('Error loading exercises:', error);
        }
    },

    displayCategoryList() {
        const listContainer = document.getElementById('exerciseCategoryList');
        if (!listContainer) return;

        listContainer.innerHTML = '';

        this.categories.forEach(cat => {
            const exerciseCount = this.exercisesByCategory[cat.id]?.length || 0;
            const item = document.createElement('button');
            item.className = 'mode-btn';
            item.innerHTML = `
                <h3>${cat.name}</h3>
                <p>${cat.description}</p>
            `;
            if (exerciseCount > 0) {
                item.addEventListener('click', () => this.showExerciseList(cat.id, cat.name));
            } else {
                item.style.opacity = '0.5';
                item.style.cursor = 'not-allowed';
                item.innerHTML += '<p style="color: var(--warning-yellow); margin-top: 0.5rem;">Coming Soon</p>';
            }
            listContainer.appendChild(item);
        });
    },

    showExerciseList(categoryId, categoryName) {
        this.currentCategory = categoryId;
        const exercises = this.exercisesByCategory[categoryId] || [];

        document.getElementById('exerciseCategoryTitle').textContent = categoryName;
        const listContainer = document.getElementById('exerciseList');
        listContainer.innerHTML = '';

        exercises.forEach((ex, index) => {
            const item = document.createElement('div');
            item.className = 'exercise-item';
            item.innerHTML = `
                <h4>${ex.title}</h4>
                <span class="badge-difficulty">${ex.difficulty}</span>
            `;
            item.addEventListener('click', () => this.openExerciseByIndex(index));
            listContainer.appendChild(item);
        });

        app.hideAllScreens();
        document.getElementById('exerciseListScreen').classList.add('active');
    },

    openExerciseByIndex(index) {
        const exercises = this.exercisesByCategory[this.currentCategory];
        if (!exercises || !exercises[index]) return;

        this.currentExerciseIndex = index;
        this.currentExercise = exercises[index];
        this.openExercise(this.currentExercise.id);
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

        // Update navigation buttons
        this.updateNavigationButtons();

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
            // Prepare validation rules
            const validation = this.currentExercise.validation ? {
                mustContain: this.currentExercise.validation.mustContain || [],
                mustPass: this.currentExercise.validation.mustPass !== false,
                forbiddenKeywords: this.currentExercise.validation.forbiddenKeywords || []
            } : null;

            const response = await fetch('http://localhost:8000/api/execute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    code: code,
                    exercise_id: this.currentExercise.id,
                    validation: validation
                })
            });

            const result = await response.json();

            if (result.success) {
                const status = result.passed ? '✅ Tests PASSED' : '❌ Tests FAILED';
                const timeInfo = `\nExecution time: ${result.execution_time.toFixed(2)}s`;

                // Display validation errors if any
                let validationMsg = '';
                if (result.validation_errors && result.validation_errors.length > 0) {
                    validationMsg = '\n\n⚠️ Validation Issues:\n' +
                        result.validation_errors.map(err => `  • ${err}`).join('\n');
                }

                consoleOutput.innerHTML = `<pre>${status}${timeInfo}${validationMsg}\n\n${result.error || 'All tests completed successfully!'}</pre>`;

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
                // Handle validation failures before execution
                let errorMsg = result.error || 'Execution failed';
                if (result.validation_errors && result.validation_errors.length > 0) {
                    errorMsg += '\n\n❌ Validation Errors:\n' +
                        result.validation_errors.map(err => `  • ${err}`).join('\n');
                }

                consoleOutput.innerHTML = `<pre style="color: var(--error-red);">❌ Execution Error:\n\n${errorMsg}</pre>`;
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
    },

    nextExercise() {
        const exercises = this.exercisesByCategory[this.currentCategory];
        if (!exercises) return;

        if (this.currentExerciseIndex < exercises.length - 1) {
            this.openExerciseByIndex(this.currentExerciseIndex + 1);
        }
        this.updateNavigationButtons();
    },

    previousExercise() {
        if (this.currentExerciseIndex > 0) {
            this.openExerciseByIndex(this.currentExerciseIndex - 1);
        }
        this.updateNavigationButtons();
    },

    updateNavigationButtons() {
        const exercises = this.exercisesByCategory[this.currentCategory];
        if (!exercises) return;

        const prevBtn = document.getElementById('prevExerciseBtn');
        const nextBtn = document.getElementById('nextExerciseBtn');

        if (prevBtn) {
            prevBtn.disabled = this.currentExerciseIndex === 0;
        }

        if (nextBtn) {
            nextBtn.disabled = this.currentExerciseIndex === exercises.length - 1;
        }
    }
};

// Load exercises when auth completes
document.addEventListener('DOMContentLoaded', () => {
    exercise.loadExercises();
});
