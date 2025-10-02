# Exercise Schema V2 - Theory Block & Freemium Support

**Version:** 2.0
**Changes:** Added theory section, freemium flag, enhanced metadata
**Backward Compatibility:** Requires migration of existing 80 exercises

---

## 🎯 Design Goals

1. **Theory Section:** Educational content above task description
2. **Freemium Model:** Free/paid flag for monetization
3. **Enhanced Metadata:** Better organization and tracking
4. **Scalability:** Ready for 1,388 exercises

---

## 📋 New Exercise Schema

### Complete Exercise Object (V2)

```json
{
  "id": "ex-1-1",
  "title": "Your First Robot Test",
  "difficulty": "beginner",
  "chapter": "1",
  "free": true,

  "theory": {
    "title": "Understanding the Log Keyword",
    "content": "The `Log` keyword is one of the most fundamental keywords in Robot Framework. It outputs messages to the execution log and can be used for debugging, verification, and documentation purposes.\n\n**Key Points:**\n- Log messages appear in log.html with timestamps\n- Default log level is INFO\n- Syntax: `Log    <message>    <optional_level>`\n- Supports multiple arguments\n\n**Example:**\n```robot\n*** Test Cases ***\nSimple Log Example\n    Log    Hello Robot Framework!\n    Log    Debug message    DEBUG\n    Log    Warning message    WARN\n```",
    "learningObjectives": [
      "Understand what the Log keyword does",
      "Learn proper syntax with correct spacing",
      "Know when to use Log vs other output methods"
    ],
    "relatedConcepts": [
      "Log levels (TRACE, DEBUG, INFO, WARN, ERROR)",
      "Log To Console keyword",
      "Log Variables keyword"
    ],
    "documentation": "https://robotframework.org/robotframework/latest/libraries/BuiltIn.html#Log",
    "estimatedReadTime": "3 minutes"
  },

  "description": "Create a simple test case that logs the message 'Hello Robot Framework!' to the console.",

  "instructions": [
    "Create a test case named 'My First Test'",
    "Use the Log keyword to print 'Hello Robot Framework!'",
    "Remember: Use 4 spaces between keyword and argument"
  ],

  "initialCode": "*** Test Cases ***\nMy First Test\n    # Write your code here\n    ",

  "solution": "*** Test Cases ***\nMy First Test\n    Log    Hello Robot Framework!",

  "hints": [
    "The Log keyword is used to output messages",
    "Syntax: Log    <message>",
    "Don't forget proper spacing (4 spaces)"
  ],

  "validation": {
    "mustContain": ["Log", "Hello Robot Framework"],
    "mustPass": true,
    "forbiddenKeywords": []
  },

  "metadata": {
    "tags": ["log", "basics", "first-test", "builtin"],
    "estimatedTime": "5 minutes",
    "successRate": 0.95,
    "averageAttempts": 1.2,
    "prerequisites": [],
    "nextExercises": ["ex-1-2", "ex-1-3"],
    "version": "2.0",
    "lastUpdated": "2025-10-02"
  }
}
```

---

## 🔑 Field Descriptions

### Core Fields (Existing)
- **id**: Unique identifier (string)
- **title**: Exercise name (string)
- **difficulty**: "beginner" | "intermediate" | "advanced" | "expert"
- **chapter**: Chapter reference (string)

### NEW: Freemium Support
- **free**: boolean
  - `true` = Free users can access
  - `false` = Requires paid subscription
  - Default: `true` for migration

### NEW: Theory Section
- **theory.title**: Short theory heading (string)
- **theory.content**: Markdown-formatted explanation (string)
  - Supports: headings, bold, italic, code blocks, lists
  - Recommended length: 200-500 words
- **theory.learningObjectives**: Array of learning goals (string[])
- **theory.relatedConcepts**: Links to other topics (string[])
- **theory.documentation**: Official docs URL (string, optional)
- **theory.estimatedReadTime**: Time to read theory (string, optional)

### Exercise Fields (Existing)
- **description**: Brief task description
- **instructions**: Step-by-step guide (string[])
- **initialCode**: Starting template
- **solution**: Reference implementation
- **hints**: Helpful tips (string[])
- **validation**: Validation rules object

### Enhanced Metadata (NEW/Updated)
- **metadata.tags**: Searchable keywords (string[])
- **metadata.estimatedTime**: Time to complete (string)
- **metadata.successRate**: % of users who pass first try (number, 0-1)
- **metadata.averageAttempts**: Average tries to complete (number)
- **metadata.prerequisites**: Exercise IDs that should be done first (string[])
- **metadata.nextExercises**: Suggested next exercises (string[])
- **metadata.version**: Schema version (string)
- **metadata.lastUpdated**: ISO date string

---

## 🎨 Frontend Changes Required

### Task Panel Layout (Left Panel)

**Before (Current):**
```
┌─────────────────────────────────┐
│ Exercise Title          [Badge] │
├─────────────────────────────────┤
│ Description                     │
│                                 │
│ Instructions:                   │
│ 1. Step one                     │
│ 2. Step two                     │
│                                 │
│ 💡 Hints (expandable)           │
│                                 │
│ [Back] [Previous] [Next]        │
└─────────────────────────────────┘
```

**After (V2):**
```
┌─────────────────────────────────┐
│ Exercise Title    [Badge] [🔒]  │  ← Free/paid indicator
├─────────────────────────────────┤
│ 📚 THEORY                       │  ← NEW SECTION
│ ═══════════════════════════════ │
│ Theory Title                    │
│                                 │
│ [Formatted theory content       │
│  with markdown support]         │
│                                 │
│ Learning Objectives:            │
│ • Objective 1                   │
│ • Objective 2                   │
│                                 │
│ 🔗 Related: concept1, concept2  │
│ 📖 Documentation →              │
│                                 │
│ [Collapse Theory ▲]             │  ← Collapsible
├─────────────────────────────────┤
│ 🎯 YOUR TASK                    │  ← Clear separator
│ ═══════════════════════════════ │
│ Description                     │
│                                 │
│ Instructions:                   │
│ 1. Step one                     │
│ 2. Step two                     │
│                                 │
│ 💡 Hints (expandable)           │
│                                 │
│ [Back] [Previous] [Next]        │
└─────────────────────────────────┘
```

### UI Components Needed

1. **Theory Section:**
   - Collapsible/expandable (default: expanded)
   - Markdown rendering
   - Syntax highlighting for code blocks
   - Links open in new tab
   - "Read time: X minutes" indicator

2. **Freemium Indicators:**
   - Lock icon (🔒) for paid exercises
   - "Premium" badge
   - Paywall modal when clicking locked exercise
   - Filter: "Show only free" checkbox

3. **Enhanced Exercise Card:**
   - Tags displayed as pills
   - Estimated time badge
   - Prerequisites indicator
   - "Recommended next" suggestions after completion

---

## 💾 File Structure Examples

### Minimal Valid Exercise (Beginner, Free)
```json
{
  "id": "ex-simple",
  "title": "Simple Exercise",
  "difficulty": "beginner",
  "chapter": "1",
  "free": true,
  "theory": {
    "title": "Basic Concept",
    "content": "Short explanation here.",
    "learningObjectives": ["Learn X"]
  },
  "description": "Do something simple",
  "instructions": ["Step 1"],
  "initialCode": "*** Test Cases ***\nTest\n    ",
  "solution": "*** Test Cases ***\nTest\n    Log    Done",
  "hints": ["Hint 1"],
  "validation": {
    "mustContain": ["Log"],
    "mustPass": true
  }
}
```

### Advanced Exercise (Paid)
```json
{
  "id": "ex-advanced-123",
  "title": "Advanced Pattern: State Machine",
  "difficulty": "advanced",
  "chapter": "8",
  "free": false,
  "theory": {
    "title": "State Machine Design Pattern in RF",
    "content": "# State Machines\n\nA state machine is a computational model...\n\n## Benefits\n- Clear state transitions\n- Easier debugging\n\n## Implementation\n```robot\n${state}    Set Variable    idle\nIF    '${state}' == 'idle'\n    ${state}    Set Variable    running\nEND\n```",
    "learningObjectives": [
      "Understand state machine patterns",
      "Implement state transitions in RF",
      "Handle state validation"
    ],
    "relatedConcepts": [
      "IF/ELSE control flow",
      "Variable scoping",
      "Keyword return values"
    ],
    "documentation": "https://example.com/patterns",
    "estimatedReadTime": "8 minutes"
  },
  "description": "Implement a state machine with multiple states and transitions.",
  "instructions": [
    "Define initial state as 'idle'",
    "Create transitions: idle → running → completed",
    "Validate state before each transition"
  ],
  "initialCode": "*** Test Cases ***\nState Machine\n    # Implement state machine\n    ",
  "solution": "*** Test Cases ***\nState Machine\n    ${state}    Set Variable    idle\n    IF    '${state}' == 'idle'\n        ${state}    Set Variable    running\n        Log    State: running\n    END\n    IF    '${state}' == 'running'\n        ${state}    Set Variable    completed\n        Log    State: completed\n    END\n    Should Be Equal    ${state}    completed",
  "hints": [
    "Use IF statements for state transitions",
    "Store state in a variable",
    "Validate final state"
  ],
  "validation": {
    "mustContain": ["IF", "Set Variable", "Should Be Equal"],
    "mustPass": true
  },
  "metadata": {
    "tags": ["state-machine", "patterns", "advanced", "if-else"],
    "estimatedTime": "20 minutes",
    "prerequisites": ["ex-4-3", "ex-4-8"],
    "nextExercises": ["ex-8-10"],
    "version": "2.0",
    "lastUpdated": "2025-10-02"
  }
}
```

---

## 🔄 Migration Strategy

### Phase 1: Schema Update (Week 1)
1. ✅ Design V2 schema (this document)
2. Create migration script to add theory + free flag
3. Update 1-2 pilot exercises manually
4. Test frontend rendering

### Phase 2: Frontend Implementation (Week 2)
1. Update CSS for theory section
2. Add markdown rendering library (e.g., marked.js)
3. Implement collapsible theory
4. Add freemium UI elements
5. Update exercise loading logic

### Phase 3: Content Migration (Week 3-4)
1. Write theory for all 80 existing exercises
2. Set free flag (start with all free)
3. Add metadata (tags, time estimates)
4. Quality review

### Phase 4: New Exercise Creation (Ongoing)
- All new exercises use V2 schema from day 1
- Theory writing becomes part of exercise creation process

---

## 📐 Theory Content Guidelines

### Writing Good Theory

**DO:**
- ✅ Start with the "why" before the "how"
- ✅ Use analogies and examples
- ✅ Include code snippets with syntax highlighting
- ✅ Link to official documentation
- ✅ Keep it concise (200-500 words)
- ✅ Use formatting (headings, lists, bold)

**DON'T:**
- ❌ Copy-paste from documentation verbatim
- ❌ Write essays (>1000 words)
- ❌ Skip examples
- ❌ Use jargon without explanation
- ❌ Duplicate the task instructions

### Theory Template
```markdown
# [Concept Name]

[1-2 sentence overview of what this is]

## Why It Matters
[Explain the practical value]

## How It Works
[Explain the mechanism]

## Syntax
```robot
[Show the syntax with example]
```

## Common Use Cases
- Use case 1
- Use case 2

## Tips
- Tip 1
- Tip 2
```

---

## 🎁 Freemium Strategy (Future)

### Free Tier (Proposed)
- All beginner exercises (250 ex)
- 50% of intermediate exercises (350 ex)
- 0% of advanced exercises (0 ex)
- 0% of expert exercises (0 ex)
- **Total Free: 600 exercises (43%)**

### Paid Tier (Proposed)
- All advanced exercises (338 ex)
- All expert exercises (100 ex)
- 50% of intermediate exercises (350 ex)
- Bonus: Real-world projects
- Certificate of completion
- **Total Paid: 788 exercises (57%)**

### Implementation
```javascript
// In exercises.js
function canAccessExercise(exercise, userSubscription) {
  if (exercise.free) return true;
  return userSubscription === 'premium';
}
```

---

## 🧪 Testing Checklist

Before going live with V2:

- [ ] Theory section renders markdown correctly
- [ ] Code blocks have syntax highlighting
- [ ] Theory is collapsible/expandable
- [ ] Lock icon appears for paid exercises
- [ ] Clicking locked exercise shows paywall
- [ ] Free filter works correctly
- [ ] Tags display properly
- [ ] Learning objectives render as list
- [ ] Related concepts are clickable
- [ ] Documentation links open in new tab
- [ ] Mobile responsive (theory section)
- [ ] All 80 exercises migrated successfully
- [ ] Backward compatibility maintained

---

## 📊 Impact Assessment

### Benefits:
- ✅ **Better Learning:** Theory explains concepts before practice
- ✅ **Monetization Ready:** Infrastructure for freemium model
- ✅ **SEO Friendly:** Rich content in theory sections
- ✅ **Self-Paced:** Users read theory at their own speed
- ✅ **Reduced Confusion:** Clear separation of learning vs doing

### Risks:
- ⚠️ **Migration Effort:** 80 exercises need theory content
- ⚠️ **Content Quality:** Theory must be well-written
- ⚠️ **Load Time:** Larger JSON files (mitigated by lazy loading)
- ⚠️ **Complexity:** More fields to maintain

### Mitigation:
- Start with high-priority exercises
- Use AI assistance for theory drafts
- Implement content caching
- Create theory writing guidelines

---

**Document Status:** ✅ Design Complete
**Next Step:** Create pilot exercise with new schema
**Approval Needed:** User review of schema design
