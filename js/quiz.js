// Enhanced Quiz Logic Module with Navigation
const quiz = {
    currentQuestions: [],
    currentQuestionIndex: 0,
    questionStates: [], // Track states: empty, answered, marked
    userAnswers: [], // Store answers for each question
    mode: '',
    startTime: null,

    startQuiz(questions, mode) {
        this.currentQuestions = questions;
        this.currentQuestionIndex = 0;
        this.mode = mode;
        this.startTime = Date.now();

        // Initialize states for all questions
        this.questionStates = questions.map(() => ({
            status: 'empty', // empty, answered, marked
            answers: []
        }));

        this.userAnswers = new Array(questions.length).fill(null);

        // Show/hide export button based on mode
        const exportBtn = document.getElementById('exportBtn');
        if (exportBtn) {
            exportBtn.style.display = mode === 'review' ? 'inline-block' : 'none';
        }

        this.createQuestionNavigation();
        this.displayQuestion();
    },

    createQuestionNavigation() {
        const indicatorsContainer = document.getElementById('questionIndicators');
        indicatorsContainer.innerHTML = '';

        this.currentQuestions.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.className = 'question-indicator empty';
            indicator.textContent = index + 1;
            indicator.dataset.questionIndex = index;

            indicator.addEventListener('click', () => {
                this.saveCurrentAnswers();
                this.goToQuestion(index);
            });

            indicatorsContainer.appendChild(indicator);
        });
    },

    updateQuestionIndicators() {
        const indicators = document.querySelectorAll('.question-indicator');
        indicators.forEach((indicator, index) => {
            const state = this.questionStates[index];
            indicator.className = `question-indicator ${state.status}`;

            if (index === this.currentQuestionIndex) {
                indicator.classList.add('current');
            }
        });
    },

    displayQuestion() {
        if (this.currentQuestionIndex >= this.currentQuestions.length) {
            return;
        }

        const currentQuestion = this.currentQuestions[this.currentQuestionIndex];

        // Update progress
        const progressText = document.getElementById('progressText');
        progressText.textContent = `${this.currentQuestionIndex + 1} / ${this.currentQuestions.length}`;

        // Update question info
        const questionTypeText = currentQuestion.type === 'multiple' ? 'Multiple Answers' : 'Single Answer';
        const questionTypeElement = document.getElementById('questionType');

        // In review mode, show question ID
        if (this.mode === 'review') {
            questionTypeElement.textContent = `${questionTypeText} | ID: ${currentQuestion.id}`;
        } else {
            questionTypeElement.textContent = questionTypeText;
        }

        document.getElementById('questionChapter').textContent =
            currentQuestion.chapter.split('-')[0];

        // Handle code blocks in question text
        const questionText = currentQuestion.question;
        const questionElement = document.getElementById('questionText');

        if (questionText.includes('```')) {
            // Convert markdown code blocks to HTML
            const formattedText = questionText
                .replace(/```robot\n/g, '<pre><code class="robot">')
                .replace(/```\n/g, '</code></pre>')
                .replace(/```/g, '</code></pre>')
                .replace(/\n/g, '<br>');
            questionElement.innerHTML = formattedText;
        } else {
            questionElement.innerHTML = questionText.replace(/\n/g, '<br>');
        }

        // Shuffle options (except in review mode)
        const optionsToDisplay = this.mode === 'review'
            ? [...currentQuestion.options]
            : questions.shuffle([...currentQuestion.options]);
        const optionsContainer = document.getElementById('answerOptions');
        optionsContainer.innerHTML = '';

        optionsToDisplay.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'answer-option';
            optionDiv.dataset.index = index;

            const inputType = currentQuestion.type === 'multiple' ? 'checkbox' : 'radio';
            optionDiv.innerHTML = `
                <input type="${inputType}"
                       name="answer"
                       id="option-${index}"
                       value="${index}">
                <label for="option-${index}">${option.text}</label>
            `;

            // Store the actual option data
            optionDiv.dataset.optionData = JSON.stringify(option);

            optionDiv.addEventListener('click', (e) => {
                const input = optionDiv.querySelector('input');

                if (e.target.type !== inputType) {
                    if (inputType === 'radio') {
                        // Clear all radio selections first
                        document.querySelectorAll('.answer-option input[type="radio"]').forEach(radio => {
                            radio.checked = false;
                        });
                        document.querySelectorAll('.answer-option').forEach(opt => {
                            opt.classList.remove('selected');
                        });
                        input.checked = true;
                        optionDiv.classList.add('selected');
                    } else {
                        input.checked = !input.checked;
                        optionDiv.classList.toggle('selected', input.checked);
                    }
                } else {
                    // Clicked on the input itself
                    if (inputType === 'radio') {
                        document.querySelectorAll('.answer-option').forEach(opt => {
                            opt.classList.remove('selected');
                        });
                        optionDiv.classList.add('selected');
                    } else {
                        optionDiv.classList.toggle('selected', input.checked);
                    }
                }

                // Update question state when user interacts
                this.updateQuestionStateFromUI();
            });

            optionsContainer.appendChild(optionDiv);
        });

        // Restore previous answers if any
        this.restorePreviousAnswers();

        // Update navigation buttons
        this.updateNavigationButtons();

        // Update indicators
        this.updateQuestionIndicators();

        // Update mark button
        this.updateMarkButton();

        // Hide feedback for non-random modes
        if (this.mode !== 'random') {
            document.getElementById('feedback').style.display = 'none';
        }
    },

    restorePreviousAnswers() {
        const savedAnswers = this.questionStates[this.currentQuestionIndex].answers;
        if (savedAnswers.length > 0) {
            const optionElements = document.querySelectorAll('.answer-option');

            optionElements.forEach(optionDiv => {
                const optionData = JSON.parse(optionDiv.dataset.optionData);
                const input = optionDiv.querySelector('input');

                // Check if this option was previously selected
                const wasSelected = savedAnswers.some(answer =>
                    answer.text === optionData.text && answer.correct === optionData.correct
                );

                if (wasSelected) {
                    input.checked = true;
                    optionDiv.classList.add('selected');
                }
            });
        }
    },

    saveCurrentAnswers() {
        const selectedOptions = [];
        const optionElements = document.querySelectorAll('.answer-option');

        optionElements.forEach(optionDiv => {
            const input = optionDiv.querySelector('input');
            if (input.checked) {
                const optionData = JSON.parse(optionDiv.dataset.optionData);
                selectedOptions.push(optionData);
            }
        });

        // Update question state
        this.questionStates[this.currentQuestionIndex].answers = selectedOptions;

        // Update status based on whether answers were provided
        if (selectedOptions.length > 0) {
            if (this.questionStates[this.currentQuestionIndex].status !== 'marked') {
                this.questionStates[this.currentQuestionIndex].status = 'answered';
            }
        } else {
            if (this.questionStates[this.currentQuestionIndex].status !== 'marked') {
                this.questionStates[this.currentQuestionIndex].status = 'empty';
            }
        }
    },

    updateQuestionStateFromUI() {
        const selectedOptions = [];
        const optionElements = document.querySelectorAll('.answer-option');

        optionElements.forEach(optionDiv => {
            const input = optionDiv.querySelector('input');
            if (input.checked) {
                const optionData = JSON.parse(optionDiv.dataset.optionData);
                selectedOptions.push(optionData);
            }
        });

        // Update current question state
        this.questionStates[this.currentQuestionIndex].answers = selectedOptions;

        if (selectedOptions.length > 0) {
            if (this.questionStates[this.currentQuestionIndex].status !== 'marked') {
                this.questionStates[this.currentQuestionIndex].status = 'answered';
            }
        } else {
            if (this.questionStates[this.currentQuestionIndex].status !== 'marked') {
                this.questionStates[this.currentQuestionIndex].status = 'empty';
            }
        }

        this.updateQuestionIndicators();
    },

    toggleMark() {
        const currentState = this.questionStates[this.currentQuestionIndex];

        if (currentState.status === 'marked') {
            // Unmark - revert to answered or empty based on answers
            currentState.status = currentState.answers.length > 0 ? 'answered' : 'empty';
        } else {
            // Mark the question
            currentState.status = 'marked';
        }

        this.updateQuestionIndicators();
        this.updateMarkButton();
    },

    updateMarkButton() {
        const markBtn = document.getElementById('markBtn');
        const isMarked = this.questionStates[this.currentQuestionIndex].status === 'marked';
        markBtn.textContent = isMarked ? 'Unmark' : 'Mark';
        markBtn.className = isMarked ? 'btn btn-warning marked' : 'btn btn-warning';
    },

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitQuizBtn');

        prevBtn.disabled = this.currentQuestionIndex === 0;
        nextBtn.disabled = this.currentQuestionIndex === this.currentQuestions.length - 1;

        // Show submit button only on last question or if it's not a random quiz
        if (this.mode === 'random') {
            submitBtn.style.display = 'none';
        } else {
            submitBtn.style.display = 'block';
        }
    },

    goToQuestion(index) {
        if (index >= 0 && index < this.currentQuestions.length) {
            this.currentQuestionIndex = index;
            this.displayQuestion();
        }
    },

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.saveCurrentAnswers();
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    },

    nextQuestion() {
        if (this.mode === 'random') {
            // For random mode, evaluate immediately like before
            this.submitAnswer();
        } else {
            // For other modes, just navigate
            if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
                this.saveCurrentAnswers();
                this.currentQuestionIndex++;
                this.displayQuestion();
            }
        }
    },

    // Keep the old submitAnswer for random mode
    submitAnswer() {
        const selectedOptions = [];
        const optionElements = document.querySelectorAll('.answer-option');

        optionElements.forEach(optionDiv => {
            const input = optionDiv.querySelector('input');
            if (input.checked) {
                const optionData = JSON.parse(optionDiv.dataset.optionData);
                selectedOptions.push(optionData);
            }
        });

        if (selectedOptions.length === 0) {
            alert('Please select an answer');
            return;
        }

        const currentQuestion = this.currentQuestions[this.currentQuestionIndex];

        // Evaluate answer
        let isCorrect = false;
        if (currentQuestion.type === 'single') {
            isCorrect = selectedOptions.length === 1 && selectedOptions[0].correct;
        } else {
            const correctOptions = currentQuestion.options.filter(opt => opt.correct);
            const selectedCorrect = selectedOptions.filter(opt => opt.correct);
            const selectedIncorrect = selectedOptions.filter(opt => !opt.correct);
            isCorrect = selectedCorrect.length === correctOptions.length && selectedIncorrect.length === 0;
        }

        // Store answer
        this.userAnswers[this.currentQuestionIndex] = {
            questionId: currentQuestion.id,
            question: currentQuestion,
            selectedOptions: selectedOptions,
            userAnswer: selectedOptions.map(opt => opt.text),
            isCorrect: isCorrect,
            chapter: currentQuestion.chapter,
            subchapter: currentQuestion.subchapter
        };

        // Show feedback for random mode
        this.showFeedback(isCorrect, selectedOptions);

        // Disable options
        optionElements.forEach(optionDiv => {
            optionDiv.classList.add('disabled');
            const optionData = JSON.parse(optionDiv.dataset.optionData);
            if (optionData.correct) {
                optionDiv.classList.add('correct');
            } else if (optionDiv.querySelector('input').checked) {
                optionDiv.classList.add('incorrect');
            }
        });

        // Auto-advance after 2 seconds for random mode
        setTimeout(() => {
            this.currentQuestionIndex++;
            if (this.currentQuestionIndex >= this.currentQuestions.length) {
                this.endQuiz();
            } else {
                this.displayQuestion();
            }
        }, 2000);
    },

    submitQuiz() {
        // Save current answers
        this.saveCurrentAnswers();

        // Check if all questions are answered
        const unansweredQuestions = [];
        this.questionStates.forEach((state, index) => {
            if (state.answers.length === 0) {
                unansweredQuestions.push(index + 1);
            }
        });

        if (unansweredQuestions.length > 0) {
            const proceed = confirm(`You have ${unansweredQuestions.length} unanswered questions (${unansweredQuestions.join(', ')}). Do you want to submit anyway?`);
            if (!proceed) {
                return;
            }
        }

        // Evaluate all answers
        this.userAnswers = this.questionStates.map((state, index) => {
            const question = this.currentQuestions[index];
            const selectedOptions = state.answers;

            if (selectedOptions.length === 0) {
                return {
                    questionId: question.id,
                    question: question,
                    selectedOptions: [],
                    userAnswer: [],
                    isCorrect: false,
                    chapter: question.chapter,
                    subchapter: question.subchapter
                };
            }

            let isCorrect = false;
            if (question.type === 'single') {
                isCorrect = selectedOptions.length === 1 && selectedOptions[0].correct;
            } else {
                const correctOptions = question.options.filter(opt => opt.correct);
                const selectedCorrect = selectedOptions.filter(opt => opt.correct);
                const selectedIncorrect = selectedOptions.filter(opt => !opt.correct);
                isCorrect = selectedCorrect.length === correctOptions.length && selectedIncorrect.length === 0;
            }

            return {
                questionId: question.id,
                question: question,
                selectedOptions: selectedOptions,
                userAnswer: selectedOptions.map(opt => opt.text),
                isCorrect: isCorrect,
                chapter: question.chapter,
                subchapter: question.subchapter
            };
        });

        this.endQuiz();
    },

    showFeedback(isCorrect, selectedOptions) {
        const feedbackDiv = document.getElementById('feedback');
        const feedbackContent = feedbackDiv.querySelector('.feedback-content');
        const currentQuestion = this.currentQuestions[this.currentQuestionIndex];

        if (isCorrect) {
            feedbackDiv.className = 'feedback-card correct';
            feedbackContent.innerHTML = '<h4>Correct!</h4><p>Well done!</p>';
        } else {
            feedbackDiv.className = 'feedback-card incorrect';
            let feedbackHTML = '<h4>Incorrect</h4>';

            // Show explanations for wrong answers
            selectedOptions.forEach(option => {
                if (!option.correct && option.explanation) {
                    feedbackHTML += `<p><strong>${option.text}:</strong> ${option.explanation}</p>`;
                }
            });

            // Show correct answers
            const correctOptions = currentQuestion.options.filter(opt => opt.correct);
            feedbackHTML += '<p><strong>Correct answer(s):</strong> ';
            feedbackHTML += correctOptions.map(opt => opt.text).join(', ');
            feedbackHTML += '</p>';

            feedbackContent.innerHTML = feedbackHTML;
        }

        feedbackDiv.style.display = 'block';
    },

    endQuiz() {
        const endTime = Date.now();
        const duration = Math.round((endTime - this.startTime) / 1000);

        const results = {
            mode: this.mode,
            totalQuestions: this.currentQuestions.length,
            correctAnswers: this.userAnswers.filter(a => a && a.isCorrect).length,
            incorrectAnswers: this.userAnswers.filter(a => a && !a.isCorrect).length,
            duration: duration,
            answers: this.userAnswers.filter(a => a !== null),
            timestamp: new Date().toISOString()
        };

        // Show results screen
        app.showResultsScreen(results);
    }
};