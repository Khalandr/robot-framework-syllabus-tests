// Question Management Module
const questions = {
    allQuestions: [],
    chapters: {},
    subchapters: {},

    // Load all questions from JSON files
    async loadAllQuestions() {
        // For demo, we'll use the sample questions we created
        // In production, this would fetch all JSON files
        const sampleData = [
            {
                path: 'questions/chapter-1/1.1-introduction.json',
                data: {
                    "chapter": "1-Introduction to Robot Framework",
                    "subchapter": "1.1-Introduction and Overview",
                    "questions": [
                        {
                            "id": "ch1-1-q1",
                            "question": "What is Robot Framework?",
                            "type": "single",
                            "options": [
                                {"text": "A generic open source automation framework for acceptance testing", "correct": true},
                                {"text": "A proprietary testing tool only for web applications", "correct": false, "explanation": "Robot Framework is open source, not proprietary"},
                                {"text": "A programming language for test automation", "correct": false, "explanation": "Robot Framework is a framework, not a programming language"},
                                {"text": "A tool specifically designed only for mobile testing", "correct": false, "explanation": "Robot Framework is generic and can be used for various types of testing"}
                            ]
                        },
                        {
                            "id": "ch1-1-q2",
                            "question": "Which of the following are key features of Robot Framework? (Select all that apply)",
                            "type": "multiple",
                            "options": [
                                {"text": "Keyword-driven testing approach", "correct": true},
                                {"text": "Human-readable test cases", "correct": true},
                                {"text": "Only supports Python libraries", "correct": false, "explanation": "Robot Framework supports libraries written in Python, Java, and other languages"},
                                {"text": "Extensible with custom libraries", "correct": true},
                                {"text": "Requires compilation before execution", "correct": false, "explanation": "Robot Framework tests are interpreted, not compiled"}
                            ]
                        }
                    ]
                }
            },
            {
                path: 'questions/chapter-2/2.1-test-data.json',
                data: {
                    "chapter": "2-Robot Framework Architecture",
                    "subchapter": "2.1-Test Data Syntax",
                    "questions": [
                        {
                            "id": "ch2-1-q1",
                            "question": "Which test data formats are supported by Robot Framework?",
                            "type": "multiple",
                            "options": [
                                {"text": "Plain text format (.robot)", "correct": true},
                                {"text": "TSV (Tab-separated values)", "correct": true},
                                {"text": "JSON format", "correct": false, "explanation": "Robot Framework does not natively support JSON as a test data format"},
                                {"text": "reStructuredText format", "correct": true},
                                {"text": "YAML format", "correct": false, "explanation": "YAML is not a supported test data format in Robot Framework"}
                            ]
                        },
                        {
                            "id": "ch2-1-q2",
                            "question": "In Robot Framework test data, what symbol is used to separate cells in space-separated format?",
                            "type": "single",
                            "options": [
                                {"text": "Two or more spaces", "correct": true},
                                {"text": "A single space", "correct": false, "explanation": "Single spaces are not enough to separate cells"},
                                {"text": "A tab character", "correct": false, "explanation": "Tab characters are used in TSV format, not in space-separated format"},
                                {"text": "A pipe character (|)", "correct": false, "explanation": "Pipe characters can be used but are optional and mainly for readability"}
                            ]
                        }
                    ]
                }
            }
        ];

        // Process the sample data
        sampleData.forEach(file => {
            this.processQuestionFile(file.data);
        });

        console.log(`Loaded ${this.allQuestions.length} questions`);
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