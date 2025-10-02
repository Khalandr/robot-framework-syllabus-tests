// Statistics and Results Module (Session-only, no history tracking)
const stats = {
    displayResults(results) {
        // Calculate percentage
        const percentage = Math.round((results.correctAnswers / results.totalQuestions) * 100);

        // Update score display
        document.getElementById('scorePercentage').textContent = `${percentage}%`;
        document.getElementById('correctCount').textContent = results.correctAnswers;
        document.getElementById('incorrectCount').textContent = results.incorrectAnswers;
        document.getElementById('totalQuestions').textContent = results.totalQuestions;

        // Chapter breakdown
        this.displayChapterBreakdown(results.answers);

        // Recommendations
        this.displayRecommendations(results.answers);

        // Detailed question results
        this.displayQuestionDetails(results.answers);
    },

    displayChapterBreakdown(answers) {
        const chapterStats = {};

        // Group by chapter
        answers.forEach(answer => {
            const chapterId = answer.chapter.split('-')[0];
            if (!chapterStats[chapterId]) {
                chapterStats[chapterId] = {
                    name: answer.chapter,
                    total: 0,
                    correct: 0
                };
            }
            chapterStats[chapterId].total++;
            if (answer.isCorrect) {
                chapterStats[chapterId].correct++;
            }
        });

        // Display breakdown
        const breakdownDiv = document.getElementById('breakdownContent');
        breakdownDiv.innerHTML = '';

        Object.values(chapterStats).forEach(stat => {
            const percentage = Math.round((stat.correct / stat.total) * 100);
            const item = document.createElement('div');
            item.className = 'breakdown-item';
            item.style.cssText = `
                margin: 1rem 0;
                padding: 0.75rem;
                background: rgba(90, 179, 179, 0.05);
                border-radius: 6px;
            `;

            item.innerHTML = `
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>${stat.name}</span>
                    <span>${stat.correct}/${stat.total} (${percentage}%)</span>
                </div>
                <div style="background: var(--card-bg); height: 20px; border-radius: 10px; overflow: hidden;">
                    <div style="background: ${percentage >= 70 ? 'var(--success-green)' : percentage >= 50 ? 'var(--warning-yellow)' : 'var(--error-red)'};
                                height: 100%; width: ${percentage}%; transition: width 0.3s ease;">
                    </div>
                </div>
            `;

            breakdownDiv.appendChild(item);
        });
    },

    displayRecommendations(answers) {
        const weakAreas = [];
        const subchapterStats = {};

        // Group by subchapter
        answers.forEach(answer => {
            if (!subchapterStats[answer.subchapter]) {
                subchapterStats[answer.subchapter] = {
                    total: 0,
                    correct: 0
                };
            }
            subchapterStats[answer.subchapter].total++;
            if (answer.isCorrect) {
                subchapterStats[answer.subchapter].correct++;
            }
        });

        // Find weak areas (< 50% correct)
        Object.entries(subchapterStats).forEach(([subchapter, stats]) => {
            const percentage = (stats.correct / stats.total) * 100;
            if (percentage < 50) {
                weakAreas.push({
                    name: subchapter,
                    percentage: Math.round(percentage)
                });
            }
        });

        const recommendationsDiv = document.getElementById('recommendationsList');
        recommendationsDiv.innerHTML = '';

        if (weakAreas.length === 0) {
            recommendationsDiv.innerHTML = '<p style="color: var(--success-green);">Excellent performance! Keep up the good work!</p>';
        } else {
            const list = document.createElement('ul');
            list.style.cssText = 'list-style: none; padding: 0;';

            weakAreas.sort((a, b) => a.percentage - b.percentage);
            weakAreas.forEach(area => {
                const item = document.createElement('li');
                item.style.cssText = `
                    margin: 0.5rem 0;
                    padding: 0.5rem;
                    background: rgba(220, 53, 69, 0.1);
                    border-left: 3px solid var(--error-red);
                    border-radius: 4px;
                `;
                item.innerHTML = `
                    <strong>${area.name}</strong> - ${area.percentage}% correct
                    <br><small>Consider reviewing this topic</small>
                `;
                list.appendChild(item);
            });

            recommendationsDiv.appendChild(list);
        }
    },

    displayQuestionDetails(answers) {
        const detailsDiv = document.getElementById('questionDetails');
        detailsDiv.innerHTML = '';

        answers.forEach((answer, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question-detail';
            questionDiv.style.cssText = `
                margin: 1rem 0;
                padding: 1rem;
                background: ${answer.isCorrect ? 'rgba(40, 167, 69, 0.1)' : 'rgba(220, 53, 69, 0.1)'};
                border-left: 4px solid ${answer.isCorrect ? 'var(--success-green)' : 'var(--error-red)'};
                border-radius: 6px;
            `;

            const statusIcon = answer.isCorrect ? '✓' : '✗';
            const statusColor = answer.isCorrect ? 'var(--success-green)' : 'var(--error-red)';

            // Build correct answers display
            const correctAnswers = answer.question.options
                .filter(opt => opt.correct)
                .map(opt => opt.text);

            // Build user answers display
            const userAnswers = answer.userAnswer || [];

            let detailsHTML = `
                <div style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <span style="color: ${statusColor}; font-size: 1.5rem; font-weight: bold;">${statusIcon}</span>
                    <div style="flex: 1;">
                        <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.25rem;">
                            ${answer.subchapter} ${answer.question.id ? `• ${answer.question.id}` : ''}
                        </div>
                        <div style="font-weight: 500; margin-bottom: 0.5rem;">
                            ${this.escapeHtml(answer.question.question)}
                        </div>
            `;

            if (!answer.isCorrect) {
                detailsHTML += `
                    <div style="margin-top: 0.75rem;">
                        <div style="color: var(--error-red); font-size: 0.9rem; margin-bottom: 0.25rem;">
                            <strong>Your answer:</strong> ${userAnswers.length > 0 ? userAnswers.join(', ') : 'No answer'}
                        </div>
                        <div style="color: var(--success-green); font-size: 0.9rem;">
                            <strong>Correct answer:</strong> ${correctAnswers.join(', ')}
                        </div>
                `;

                // Show explanations for wrong answers
                const wrongAnswerExplanations = answer.question.options
                    .filter(opt => userAnswers.includes(opt.text) && !opt.correct && opt.explanation)
                    .map(opt => opt.explanation);

                if (wrongAnswerExplanations.length > 0) {
                    detailsHTML += `
                        <div style="margin-top: 0.5rem; padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 4px; font-size: 0.85rem;">
                            <strong>Why incorrect:</strong> ${wrongAnswerExplanations.join(' ')}
                        </div>
                    `;
                }

                detailsHTML += `</div>`;
            }

            detailsHTML += `
                    </div>
                </div>
            `;

            questionDiv.innerHTML = detailsHTML;
            detailsDiv.appendChild(questionDiv);
        });
    },

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};