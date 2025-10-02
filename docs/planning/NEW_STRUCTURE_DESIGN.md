# New Exercise Structure Design

## Current Structure (Flat - Won't Scale)
```
exercises/
├── basic-syntax/
│   ├── beginner.json (3 exercises)
│   └── intermediate.json (5 exercises)
├── variables/
│   ├── beginner.json (2 exercises)
│   └── intermediate.json (5 exercises)
├── keywords/
│   ├── beginner.json (5 exercises)
│   └── intermediate.json (5 exercises)
├── control-flow/
│   ├── beginner.json (5 exercises)
│   └── intermediate.json (5 exercises)
├── test-organization/
│   ├── beginner.json (5 exercises)
│   └── intermediate.json (5 exercises)
├── data-driven/
│   └── intermediate.json (5 exercises)
├── advanced-keywords/
│   └── advanced.json (5 exercises)
├── practical-scenarios/
│   ├── intermediate.json (5 exercises)
│   └── advanced.json (5 exercises)
├── best-practices/
│   └── intermediate.json (5 exercises)
└── debugging/
    └── intermediate.json (5 exercises)
```

## New Structure (Hierarchical - Scalable)
```
exercises/
├── 01-fundamentals/
│   ├── category.json (metadata)
│   ├── 01-basic-syntax/
│   │   ├── topic.json (metadata)
│   │   └── exercises.json (8 ex: 3 beginner + 5 intermediate)
│   ├── 02-variables/
│   │   ├── topic.json
│   │   └── exercises.json (7 ex: 2 beginner + 5 intermediate)
│   └── 03-control-flow/
│       ├── topic.json
│       └── exercises.json (10 ex: 5 beginner + 5 intermediate)
├── 02-keywords/
│   ├── category.json
│   ├── 01-builtin-basics/
│   │   ├── topic.json
│   │   └── exercises.json (10 ex: 5 beginner + 5 intermediate)
│   └── 02-advanced-keywords/
│       ├── topic.json
│       └── exercises.json (5 ex: advanced)
├── 03-organization/
│   ├── category.json
│   ├── 01-test-structure/
│   │   ├── topic.json
│   │   └── exercises.json (10 ex: 5 beginner + 5 intermediate)
│   └── 02-data-driven/
│       ├── topic.json
│       └── exercises.json (5 ex: intermediate)
├── 04-real-world/
│   ├── category.json
│   ├── 01-practical-scenarios/
│   │   ├── topic.json
│   │   └── exercises.json (10 ex: 5 intermediate + 5 advanced)
│   ├── 02-best-practices/
│   │   ├── topic.json
│   │   └── exercises.json (5 ex: intermediate)
│   └── 03-debugging/
│       ├── topic.json
│       └── exercises.json (5 ex: intermediate)
└── index.json (global metadata)
```

## File Structures

### index.json (Root)
```json
{
  "version": "2.0",
  "totalExercises": 80,
  "lastUpdated": "2025-10-02",
  "categories": [
    {
      "id": "01-fundamentals",
      "name": "Fundamentals",
      "description": "Core RF concepts",
      "order": 1,
      "topics": ["01-basic-syntax", "02-variables", "03-control-flow"]
    },
    {
      "id": "02-keywords",
      "name": "Keywords & Libraries",
      "order": 2,
      "topics": ["01-builtin-basics", "02-advanced-keywords"]
    }
  ]
}
```

### category.json (Per Category)
```json
{
  "id": "01-fundamentals",
  "name": "Fundamentals",
  "description": "Master the core concepts of Robot Framework",
  "icon": "📚",
  "order": 1,
  "estimatedTime": "3-4 hours",
  "prerequisites": [],
  "topics": [
    {
      "id": "01-basic-syntax",
      "name": "Basic Syntax",
      "order": 1,
      "exerciseCount": 8
    },
    {
      "id": "02-variables",
      "name": "Variables",
      "order": 2,
      "exerciseCount": 7
    }
  ]
}
```

### topic.json (Per Topic)
```json
{
  "id": "01-basic-syntax",
  "name": "Basic Syntax & Structure",
  "description": "Learn RF test case syntax, keywords, and structure",
  "category": "01-fundamentals",
  "order": 1,
  "estimatedTime": "1-2 hours",
  "learningObjectives": [
    "Write basic test cases",
    "Use Log and Set Variable keywords",
    "Understand RF syntax rules"
  ],
  "prerequisites": [],
  "exerciseFile": "exercises.json",
  "exerciseCount": 8,
  "difficultyBreakdown": {
    "beginner": 3,
    "intermediate": 5
  }
}
```

### exercises.json (Actual Exercises - V2 Schema)
```json
{
  "topicId": "01-basic-syntax",
  "version": "2.0",
  "exercises": [
    {
      "id": "ex-1-1",
      "title": "Your First Robot Test",
      "difficulty": "beginner",
      "free": true,
      "theory": { ... },
      "description": "...",
      ...
    }
  ]
}
```

## Migration Mapping

| Old Location | New Location |
|-------------|--------------|
| `basic-syntax/beginner.json + intermediate.json` | `01-fundamentals/01-basic-syntax/exercises.json` |
| `variables/beginner.json + intermediate.json` | `01-fundamentals/02-variables/exercises.json` |
| `control-flow/beginner.json + intermediate.json` | `01-fundamentals/03-control-flow/exercises.json` |
| `keywords/beginner.json + intermediate.json` | `02-keywords/01-builtin-basics/exercises.json` |
| `advanced-keywords/advanced.json` | `02-keywords/02-advanced-keywords/exercises.json` |
| `test-organization/beginner.json + intermediate.json` | `03-organization/01-test-structure/exercises.json` |
| `data-driven/intermediate.json` | `03-organization/02-data-driven/exercises.json` |
| `practical-scenarios/*.json` | `04-real-world/01-practical-scenarios/exercises.json` |
| `best-practices/intermediate.json` | `04-real-world/02-best-practices/exercises.json` |
| `debugging/intermediate.json` | `04-real-world/03-debugging/exercises.json` |

## Benefits

1. **Scalable**: Can grow to 1000+ exercises
2. **Organized**: Clear hierarchy (category → topic → exercises)
3. **Metadata**: Rich navigation information
4. **Future-proof**: Easy to add new categories/topics
5. **Maintainable**: Max ~25 exercises per file

## Implementation Plan

1. ✅ Design structure (this document)
2. Create new folder structure
3. Create metadata files (index, category, topic)
4. Migrate exercises to V2 schema with theory
5. Update frontend to load hierarchical structure
6. Delete old flat structure
