// Question Management Module
const questions = {
    allQuestions: [],
    chapters: {},
    subchapters: {},

    // Load all questions from JSON files
    async loadAllQuestions() {
        // Define all question files to load
        const questionFiles = [
            'questions/chapter-1/1.1-introduction.json',
            'questions/chapter-1/1.2-architecture.json',
            'questions/chapter-1/1.3-basic-syntax.json',
            'questions/chapter-1/1.4-specification-styles.json',
            'questions/chapter-1/1.5-organization-licensing.json',
            'questions/chapter-2/2.1-suite-file-structure.json',
            'questions/chapter-2/2.2-basic-suite-syntax.json',
            'questions/chapter-2/2.3-executing-robot.json',
            'questions/chapter-2/2.4-keyword-imports.json',
            'questions/chapter-2/2.5-keyword-documentation.json',
            'questions/chapter-2/2.6-calling-keywords.json',
            'questions/chapter-3/3.1-resource-file-structure.json',
            'questions/chapter-3/3.2-variables.json',
            'questions/chapter-3/3.3-user-keywords.json',
            'questions/chapter-3/3.4-data-driven-specification.json',
            'questions/chapter-3/3.5-advanced-importing.json',
            'questions/chapter-4/4.1-setups.json',
            'questions/chapter-4/4.2-teardowns.json',
            'questions/chapter-4/4.3-initialization-files.json',
            'questions/chapter-4/4.4-tags-filtering.json',
            'questions/chapter-4/4.5-skip-status.json',
            'questions/chapter-5/5.1-advanced-variables.json',
            'questions/chapter-5/5.2-control-structures.json'
            // Add more files as they are created
        ];

        // Load each file
        for (const file of questionFiles) {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    const data = await response.json();
                    this.processQuestionFile(data);
                    console.log(`Loaded questions from ${file}`);
                } else {
                    console.warn(`Could not load ${file}: ${response.status}`);
                }
            } catch (error) {
                console.error(`Error loading ${file}:`, error);
            }
        }

        console.log(`Loaded ${this.allQuestions.length} total questions`);
    },

    processQuestionFile(data) {
        const chapterId = data.chapter.split('-')[0];
        const subchapterId = data.subchapter.split('-')[0];

        // Store chapter info
        if (!this.chapters[chapterId]) {
            this.chapters[chapterId] = {
                id: chapterId,
                name: data.chapter,
                questions: [],
                subchapters: []
            };
        }

        // Store subchapter info
        if (!this.subchapters[subchapterId]) {
            this.subchapters[subchapterId] = {
                id: subchapterId,
                name: data.subchapter,
                chapter: chapterId,
                questions: []
            };
            this.chapters[chapterId].subchapters.push(subchapterId);
        }

        // Process questions
        data.questions.forEach(q => {
            const question = {
                ...q,
                chapter: data.chapter,
                subchapter: data.subchapter,
                chapterId: chapterId,
                subchapterId: subchapterId
            };

            this.allQuestions.push(question);
            this.chapters[chapterId].questions.push(question);
            this.subchapters[subchapterId].questions.push(question);
        });
    },

    getChapters() {
        return Object.values(this.chapters).map(ch => ({
            id: ch.id,
            name: ch.name,
            questionCount: ch.questions.length
        }));
    },

    getSubchapters() {
        return Object.values(this.subchapters).map(sub => ({
            id: sub.id,
            name: sub.name,
            questionCount: sub.questions.length
        }));
    },

    getQuestionsByChapter(chapterId) {
        return this.shuffle([...(this.chapters[chapterId]?.questions || [])]);
    },

    getQuestionsBySubchapter(subchapterId) {
        return this.shuffle([...(this.subchapters[subchapterId]?.questions || [])]);
    },

    getRandomQuestions(count) {
        const shuffled = this.shuffle([...this.allQuestions]);
        return shuffled.slice(0, Math.min(count, shuffled.length));
    },

    getExamQuestions(count = 40) {
        // Exam mode: 40 questions with specific distribution
        // Chapter 1: 3, Chapter 2: 17, Chapter 3: 10, Chapter 4: 7, Chapter 5: 3
        const distribution = {
            '1': 3,
            '2': 17,
            '3': 10,
            '4': 7,
            '5': 3
        };

        const examQuestions = [];

        Object.entries(distribution).forEach(([chapterId, questionCount]) => {
            const chapter = this.chapters[chapterId];
            if (chapter && chapter.questions.length > 0) {
                const shuffledChapterQuestions = this.shuffle([...chapter.questions]);
                const selected = shuffledChapterQuestions.slice(0, Math.min(questionCount, shuffledChapterQuestions.length));
                examQuestions.push(...selected);
            } else {
                console.warn(`Chapter ${chapterId} not found or has no questions`);
            }
        });

        return this.shuffle(examQuestions);
    },

    getAllQuestionsInOrder() {
        // Return all questions in their natural order (by file, not shuffled)
        // Useful for review mode
        return [...this.allQuestions];
    },

    exportAllQuestions() {
        // Export all questions to a JSON file for manual review
        const exportData = {
            exportDate: new Date().toISOString(),
            totalQuestions: this.allQuestions.length,
            chapters: Object.keys(this.chapters).length,
            subchapters: Object.keys(this.subchapters).length,
            questions: this.allQuestions.map(q => ({
                id: q.id,
                chapter: q.chapter,
                subchapter: q.subchapter,
                type: q.type,
                question: q.question,
                options: q.options
            }))
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'rf-questions-export.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        console.log('Questions exported successfully');
    },

    shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
};