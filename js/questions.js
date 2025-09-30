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
            'questions/chapter-5/5.1-advanced-variables.json'
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
        // Distribute questions proportionally across chapters
        const examQuestions = [];
        const chaptersArray = Object.values(this.chapters);
        const questionsPerChapter = Math.floor(count / chaptersArray.length);
        const remainder = count % chaptersArray.length;

        chaptersArray.forEach((chapter, index) => {
            const chapterQuestions = this.shuffle([...chapter.questions]);
            const take = questionsPerChapter + (index < remainder ? 1 : 0);
            examQuestions.push(...chapterQuestions.slice(0, take));
        });

        return this.shuffle(examQuestions).slice(0, count);
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