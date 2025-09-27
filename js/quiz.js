// Quiz Logic Module
const quiz = {
    currentQuestions: [],
    currentQuestionIndex: 0,
    currentQuestion: null,
    userAnswers: [],
    mode: '',
    startTime: null,

    startQuiz(questions, mode) {
        this.currentQuestions = questions;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.mode = mode;
        this.startTime = Date.now();

        this.displayQuestion();
    },

    displayQuestion() {
        if (this.currentQuestionIndex >= this.currentQuestions.length) {
            this.endQuiz();
            return;
        }

        this.currentQuestion = this.currentQuestions[this.currentQuestionIndex];

        // Update progress
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        const progress = ((this.currentQuestionIndex + 1) / this.currentQuestions.length) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${this.currentQuestionIndex + 1} / ${this.currentQuestions.length}`;

        // Update question info
        document.getElementById('questionType').textContent =
            this.currentQuestion.type === 'multiple' ? 'Multiple Answers' : 'Single Answer';
        document.getElementById('questionChapter').textContent =
            this.currentQuestion.chapter.split('-')[0];
        document.getElementById('questionText').textContent =
            this.currentQuestion.question;

        // Shuffle and display options
        const shuffledOptions = questions.shuffle([...this.currentQuestion.options]);
        const optionsContainer = document.getElementById('answerOptions');
        optionsContainer.innerHTML = '';

        shuffledOptions.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'answer-option';
            optionDiv.dataset.index = index;

            const inputType = this.currentQuestion.type === 'multiple' ? 'checkbox' : 'radio';
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
                // Prevent if already disabled
                if (optionDiv.classList.contains('disabled')) {
                    return;
                }

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
            });

            optionsContainer.appendChild(optionDiv);
        });

        // Reset buttons
        document.getElementById('submitBtn').style.display = 'block';
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('feedback').style.display = 'none';

        // Enable all options
        document.querySelectorAll('.answer-option').forEach(opt => {
            opt.classList.remove('correct', 'incorrect', 'disabled');
        });
    },

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

        // Evaluate answer
        let isCorrect = false;
        if (this.currentQuestion.type === 'single') {
            isCorrect = selectedOptions.length === 1 && selectedOptions[0].correct;
        } else {
            const correctOptions = this.currentQuestion.options.filter(opt => opt.correct);
            const selectedCorrect = selectedOptions.filter(opt => opt.correct);
            const selectedIncorrect = selectedOptions.filter(opt => !opt.correct);
            isCorrect = selectedCorrect.length === correctOptions.length && selectedIncorrect.length === 0;
        }

        // Store answer
        this.userAnswers.push({
            questionId: this.currentQuestion.id,
            question: this.currentQuestion,
            selectedOptions: selectedOptions,
            isCorrect: isCorrect,
            chapter: this.currentQuestion.chapter,
            subchapter: this.currentQuestion.subchapter
        });

        // Show feedback
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

        // Update buttons
        document.getElementById('submitBtn').style.display = 'none';
        document.getElementById('nextBtn').style.display = 'block';
    },

    showFeedback(isCorrect, selectedOptions) {
        const feedbackDiv = document.getElementById('feedback');
        const feedbackContent = feedbackDiv.querySelector('.feedback-content');

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
            const correctOptions = this.currentQuestion.options.filter(opt => opt.correct);
            feedbackHTML += '<p><strong>Correct answer(s):</strong> ';
            feedbackHTML += correctOptions.map(opt => opt.text).join(', ');
            feedbackHTML += '</p>';

            feedbackContent.innerHTML = feedbackHTML;
        }

        feedbackDiv.style.display = 'block';
    },

    nextQuestion() {
        this.currentQuestionIndex++;
        this.displayQuestion();
    },

    endQuiz() {
        const endTime = Date.now();
        const duration = Math.round((endTime - this.startTime) / 1000);

        const results = {
            mode: this.mode,
            totalQuestions: this.currentQuestions.length,
            correctAnswers: this.userAnswers.filter(a => a.isCorrect).length,
            incorrectAnswers: this.userAnswers.filter(a => !a.isCorrect).length,
            duration: duration,
            answers: this.userAnswers,
            timestamp: new Date().toISOString()
        };

        // Save to localStorage
        stats.saveResults(results);

        // Show results screen
        app.showResultsScreen(results);
    }
};