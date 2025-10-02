// Main Application Controller
const app = {
    currentMode: null,
    currentTopicType: null,
    currentTab: 'tests',

    async init() {
        console.log('Robot Framework Practice App Initialized');
        this.attachEventListeners();
        // Don't show mode selection - let auth.js handle it after password check
        await questions.loadAllQuestions();
        console.log('All questions loaded and ready');
    },

    attachEventListeners() {
        // Mode selection buttons
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mode = e.currentTarget.dataset.mode;
                this.handleModeSelection(mode);
            });
        });
    },

    handleModeSelection(mode) {
        this.currentMode = mode;

        switch(mode) {
            case 'chapter':
                this.showTopicSelection('chapter');
                break;
            case 'subchapter':
                this.showTopicSelection('subchapter');
                break;
            case 'random':
                this.startRandomPractice();
                break;
            case 'exam':
                this.startExamMode();
                break;
            case 'review':
                this.startReviewMode();
                break;
        }
    },

    showModeSelection() {
        this.hideAllScreens();
        document.getElementById('mainNavigation').classList.add('active');
    },

    switchTab(tabName) {
        this.currentTab = tabName;

        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.tab === tabName) {
                btn.classList.add('active');
            }
        });

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${tabName}Tab`).classList.add('active');
    },

    showTopicSelection(type) {
        this.currentTopicType = type;
        this.hideAllScreens();

        const topicList = document.getElementById('topicList');
        topicList.innerHTML = '';

        if (type === 'chapter') {
            const chapters = questions.getChapters();
            chapters.forEach(chapter => {
                const item = document.createElement('div');
                item.className = 'topic-item';
                item.innerHTML = `
                    <h4>${chapter.name}</h4>
                    <p>${chapter.questionCount} questions</p>
                `;
                item.addEventListener('click', () => this.startChapterPractice(chapter.id));
                topicList.appendChild(item);
            });
        } else if (type === 'subchapter') {
            const subchapters = questions.getSubchapters();
            subchapters.forEach(sub => {
                const item = document.createElement('div');
                item.className = 'topic-item';
                item.innerHTML = `
                    <h4>${sub.name}</h4>
                    <p>${sub.questionCount} questions</p>
                `;
                item.addEventListener('click', () => this.startSubchapterPractice(sub.id));
                topicList.appendChild(item);
            });
        }

        document.getElementById('topicSelection').classList.add('active');
    },

    startChapterPractice(chapterId) {
        const chapterQuestions = questions.getQuestionsByChapter(chapterId);
        if (chapterQuestions.length > 0) {
            quiz.startQuiz(chapterQuestions, 'chapter');
            this.showQuizScreen();
        }
    },

    startSubchapterPractice(subchapterId) {
        const subQuestions = questions.getQuestionsBySubchapter(subchapterId);
        if (subQuestions.length > 0) {
            quiz.startQuiz(subQuestions, 'subchapter');
            this.showQuizScreen();
        }
    },

    startRandomPractice() {
        const randomQuestions = questions.getRandomQuestions(20);
        if (randomQuestions.length > 0) {
            quiz.startQuiz(randomQuestions, 'random');
            this.showQuizScreen();
        }
    },

    startExamMode() {
        const examQuestions = questions.getExamQuestions(40);
        if (examQuestions.length > 0) {
            quiz.startQuiz(examQuestions, 'exam');
            this.showQuizScreen();
        }
    },

    startReviewMode() {
        console.log('Starting review mode...');
        const allQuestions = questions.getAllQuestionsInOrder();
        console.log('Questions loaded:', allQuestions.length);
        if (allQuestions.length > 0) {
            quiz.startQuiz(allQuestions, 'review');
            this.showQuizScreen();
        } else {
            console.error('No questions available for review mode');
            alert('Questions are still loading. Please wait a moment and try again.');
        }
    },

    showQuizScreen() {
        this.hideAllScreens();
        document.getElementById('quizScreen').classList.add('active');
    },

    showResultsScreen(results) {
        this.hideAllScreens();
        stats.displayResults(results);
        document.getElementById('resultsScreen').classList.add('active');
    },

    hideAllScreens() {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
    }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});