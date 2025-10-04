// Exercise Module - Handles code exercises with Monaco editor
const exercise = {
    allExercises: [],
    exercisesByCategory: {},
    currentExercise: null,
    currentCategory: null,
    currentExerciseIndex: 0,
    editor: null,
    currentOutputTab: 'console',

    categories: [],

    async loadExercises() {
        try {
            this.allExercises = [];
            this.exercisesByCategory = {};

            // Load root index.json to get categories
            const indexResponse = await fetch('exercises/index.json');
            if (!indexResponse.ok) {
                throw new Error('Failed to load exercises/index.json');
            }
            const indexData = await indexResponse.json();
            this.categories = indexData.categories;

            console.log(`Loaded ${this.categories.length} categories from index.json`);

            // Load exercises for each category
            for (const cat of this.categories) {
                console.log(`📂 Loading category: ${cat.id}`);
                const categoryExercises = [];

                try {
                    // Load category.json to get sections (flattened structure)
                    const categoryResponse = await fetch(`exercises/${cat.id}/category.json`);
                    if (!categoryResponse.ok) {
                        console.log(`❌ No category.json for ${cat.id}`);
                        continue;
                    }
                    const categoryData = await categoryResponse.json();
                    console.log(`   Found ${categoryData.sections.length} sections in ${cat.id}`);

                    // Load exercises from each section (no chapter/topic layer)
                    for (const section of categoryData.sections) {
                        console.log(`   📄 Loading section: ${section.id}`);
                        try {
                            // Load section.json to get exercise IDs
                            const sectionResponse = await fetch(`exercises/${cat.id}/${section.id}/section.json`);
                            if (sectionResponse.ok) {
                                const sectionData = await sectionResponse.json();
                                console.log(`      Found ${sectionData.exercises.length} exercises, ${sectionData.challenges.length} challenges`);

                                // Load individual exercise files in parallel
                                const exercisePromises = (sectionData.exercises || []).map(exerciseId =>
                                    fetch(`exercises/${cat.id}/${section.id}/${exerciseId}.json`)
                                        .then(r => r.ok ? r.json() : null)
                                        .catch(() => null)
                                );

                                const challengePromises = (sectionData.challenges || []).map(challengeId =>
                                    fetch(`exercises/${cat.id}/${section.id}/${challengeId}.json`)
                                        .then(r => r.ok ? r.json() : null)
                                        .catch(() => null)
                                );

                                // Wait for all to complete
                                const exercises = await Promise.all(exercisePromises);
                                const challenges = await Promise.all(challengePromises);

                                // Add non-null exercises and challenges
                                const validExercises = exercises.filter(e => e !== null);
                                const validChallenges = challenges.filter(c => c !== null);
                                console.log(`      ✅ Loaded ${validExercises.length} exercises, ${validChallenges.length} challenges`);
                                categoryExercises.push(...validExercises);
                                categoryExercises.push(...validChallenges);
                            }
                        } catch (err) {
                            console.error(`Error loading section ${cat.id}/${section.id}:`, err);
                        }
                    }
                } catch (err) {
                    console.log(`Error loading category ${cat.id}:`, err);
                }

                if (categoryExercises.length > 0) {
                    this.exercisesByCategory[cat.id] = categoryExercises;
                    this.allExercises.push(...categoryExercises);
                    console.log(`✅ Category ${cat.id}: ${categoryExercises.length} total exercises loaded`);
                } else {
                    console.log(`⚠️  Category ${cat.id}: No exercises found`);
                }
            }

            console.log(`✅ Loaded ${this.allExercises.length} exercises across ${Object.keys(this.exercisesByCategory).length} categories`);
            console.log('Exercises by category:', this.exercisesByCategory);
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

        // Render Theory Section
        if (this.currentExercise.theory) {
            const theory = this.currentExercise.theory;

            // Theory title
            document.getElementById('theoryTitle').textContent = theory.title || 'Theory';

            // Check if there's a theory visual image in the content
            let content = theory.content || '';
            const imageMatch = content.match(/<div class="theory-visual">.*?<img src="([^"]+)" alt="([^"]+)"[^>]*>.*?<\/div>/s);

            // Remove any existing theory visual from previous exercise
            const existingVisual = document.querySelector('#theorySection .theory-visual');
            if (existingVisual && existingVisual.parentNode.id === 'theorySection') {
                existingVisual.remove();
            }

            if (imageMatch) {
                // Insert the image directly in theorySection, after the header
                const theorySection = document.getElementById('theorySection');
                const theoryHeader = theorySection.querySelector('.theory-header');

                const visualDiv = document.createElement('div');
                visualDiv.className = 'theory-visual';
                visualDiv.innerHTML = `<img src="${imageMatch[1]}" alt="${imageMatch[2]}" loading="lazy" width="1920" height="1080" />`;

                theoryHeader.insertAdjacentElement('afterend', visualDiv);

                // Remove the image from the theory content to avoid duplication
                // Also remove any leading escaped newlines and actual newlines
                content = content.replace(/<div class="theory-visual">.*?<\/div>/s, '')
                    .replace(/^[\s\\n]+/, '')  // Remove leading whitespace and \n
                    .trim();
            }

            // Full theory content (collapsible - starts collapsed)
            const theoryContent = document.getElementById('theoryContent');

            // Check if theory content is HTML (starts with <) or markdown
            if (content.trim().startsWith('<')) {
                // It's HTML, render directly
                theoryContent.innerHTML = content;
            } else if (typeof marked !== 'undefined') {
                // It's markdown, parse it
                theoryContent.innerHTML = marked.parse(content);
            } else {
                // Fallback to plain text
                theoryContent.textContent = content;
            }

            // Reset to collapsed state
            document.getElementById('theoryFullContent').classList.add('collapsed');
            document.querySelector('.btn-toggle-theory').textContent = 'Read More ▼';

            // Show theory section
            document.getElementById('theorySection').style.display = 'block';
        } else {
            document.getElementById('theorySection').style.display = 'none';
        }

        // Instructions
        const instructionsList = document.getElementById('exerciseInstructions');
        instructionsList.innerHTML = '';
        this.currentExercise.instructions.forEach(instruction => {
            const li = document.createElement('li');

            // Parse instruction text for code snippets (text within single quotes)
            const formattedText = instruction.replace(/'([^']+)'/g, '<code>$1</code>');
            li.innerHTML = formattedText;

            instructionsList.appendChild(li);
        });

        // Hints
        const hintsDiv = document.getElementById('exerciseHints');
        hintsDiv.innerHTML = '';
        this.currentExercise.hints.forEach(hint => {
            const p = document.createElement('p');

            // Parse hint text for code snippets (text within single quotes or backticks)
            const formattedHint = hint.replace(/'([^']+)'|`([^`]+)`/g, '<code>$1$2</code>');
            p.innerHTML = `💡 ${formattedHint}`;

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

            const response = await fetch(config.getApiUrl('/api/execute'), {
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
            consoleOutput.innerHTML = `<pre style="color: var(--error-red);">❌ Connection Error:\n\nCould not connect to backend API. Make sure the backend server is running on ${config.API_BASE_URL}\n\nError: ${error.message}</pre>`;
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

    toggleTheory() {
        const fullContent = document.getElementById('theoryFullContent');
        const btn = document.querySelector('.btn-toggle-theory');

        if (fullContent.classList.contains('collapsed')) {
            fullContent.classList.remove('collapsed');
            btn.textContent = 'Read Less ▲';
        } else {
            fullContent.classList.add('collapsed');
            btn.textContent = 'Read More ▼';
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
