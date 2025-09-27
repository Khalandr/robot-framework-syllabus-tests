// Statistics and Results Module
const stats = {
    STORAGE_KEY: 'rf_practice_results',

    saveResults(results) {
        const history = this.getHistory();
        history.push(results);

        // Keep only last 50 results
        if (history.length > 50) {
            history.shift();
        }

        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(history));
    },

    getHistory() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    },

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

    viewHistory() {
        const history = this.getHistory();
        if (history.length === 0) {
            alert('No practice history available yet.');
            return;
        }

        // For now, show a simple alert with recent scores
        const recent = history.slice(-5).reverse();
        let message = 'Recent Practice Sessions:\n\n';

        recent.forEach(session => {
            const percentage = Math.round((session.correctAnswers / session.totalQuestions) * 100);
            const date = new Date(session.timestamp).toLocaleDateString();
            message += `${date} - ${session.mode} Mode: ${percentage}% (${session.correctAnswers}/${session.totalQuestions})\n`;
        });

        alert(message);
    },

    clearHistory() {
        if (confirm('Are you sure you want to clear all practice history?')) {
            localStorage.removeItem(this.STORAGE_KEY);
            alert('Practice history cleared.');
        }
    },

    getOverallStats() {
        const history = this.getHistory();
        if (history.length === 0) return null;

        const totalQuestions = history.reduce((sum, h) => sum + h.totalQuestions, 0);
        const totalCorrect = history.reduce((sum, h) => sum + h.correctAnswers, 0);

        return {
            sessions: history.length,
            totalQuestions,
            totalCorrect,
            averageScore: Math.round((totalCorrect / totalQuestions) * 100)
        };
    }
};