# Robot Framework Fundamentals - Section Plan
## Single-File Test Suite Mastery

**Philosophy**: Learn Robot Framework's complete syntax through building progressively complex single-file test suites. Focus on what the language allows, not just best practices. Understand flexibility before conventions.

---

## Chapter 1: First Contact - Basic Communication (21 exercises)

### Section 1.1: System Boot - Basic Test Structure (6 exercises)
1. **First Boot Sequence** - Multiple Log statements, sequential execution
2. **System Diagnostics** - Log levels (INFO, WARN, ERROR)
3. **Dual Channel Communication** - Log vs Log To Console
4. **Syntax Flexibility** - Case insensitivity (Log vs log vs LOG), spacing variations
5. **Section Headers** - Different header styles (*** Test Cases *** vs ***Test Cases***)
6. **Mini-Challenge**: Complete boot diagnostic with all concepts

### Section 1.2: Memory Banks - Variables & Data Types (8 exercises)
1. **Scalar Variables** - ${variable} syntax, Set Variable keyword
2. **Variable Naming Rules** - What's valid, what's not (${my_var}, ${MyVar}, ${MY VAR})
3. **List Variables** - @{list} syntax, Create List keyword
4. **List Access** - ${list}[0], accessing elements
5. **Dictionary Variables** - &{dict} syntax, Create Dictionary keyword
6. **Dictionary Access** - ${dict}[key], accessing values
7. **Variable Flexibility** - Case sensitivity in names, spacing in values
8. **Mini-Challenge**: Complex data structure manipulation

### Section 1.3: System Checks - Assertions & Validation (7 exercises)
1. **Should Be Equal** - Basic assertions, comparing values
2. **Should Contain** - String validation
3. **Should Be True/False** - Boolean validation
4. **Numeric Comparisons** - Should Be Greater Than, Should Be Less Than
5. **Length Validations** - Length Should Be, Should Be Empty
6. **Assertion Flexibility** - Keyword spacing, argument variations
7. **Mini-Challenge**: Multi-assertion validation suite

---

## Chapter 2: System Diagnostics - Test Organization (23 exercises)

### Section 2.1: Settings Section - Suite Configuration (8 exercises)
1. ***** Settings *** Section** - Documentation, metadata
2. **Suite Setup/Teardown** - Lifecycle hooks
3. **Test Setup/Teardown** - Per-test hooks
4. **Default Tags** - Tagging tests
5. **Test Timeout** - Time limits
6. **Library Imports** - Built-in libraries (Collections, String, DateTime)
7. **Settings Flexibility** - Header variations, spacing rules
8. **Mini-Challenge**: Fully configured test suite

### Section 2.2: User Keywords - Custom Keywords (8 exercises)
1. ***** Keywords *** Section** - Creating custom keywords
2. **Arguments** - [Arguments] ${arg1} ${arg2}
3. **Return Values** - [Return] ${value}
4. **Embedded Arguments** - "Check ${item} Status"
5. **Keyword Documentation** - [Documentation] tag
6. **Keyword Tags** - [Tags] for organization
7. **Keyword Flexibility** - Naming conventions, spacing in embedded args
8. **Mini-Challenge**: Reusable keyword library

### Section 2.3: Test Templates - Data-Driven Testing (7 exercises)
1. **[Template] Tag** - Test-level templates
2. **Template in Settings** - Suite-level templates
3. **Template Arguments** - Multiple data rows
4. **Template with Variables** - Combining templates and variables
5. **Template Flexibility** - Spacing, argument separation
6. **Without Template** - Comparing template vs non-template
7. **Mini-Challenge**: Complete data-driven test suite

---

## Chapter 3: Logic Circuits - Control Flow (19 exercises)

### Section 3.1: Conditional Logic - IF/ELSE (7 exercises)
1. **IF Statement** - Basic IF syntax
2. **IF...ELSE** - Two-branch logic
3. **IF...ELSE IF...ELSE** - Multi-branch logic
4. **Inline IF** - Single-line conditionals
5. **Nested IF** - IF inside IF
6. **IF Flexibility** - Indentation variations, expression spacing
7. **Mini-Challenge**: Complex conditional workflow

### Section 3.2: Loops - FOR (7 exercises)
1. **FOR Loop** - Basic iteration
2. **FOR with Range** - FOR ${i} IN RANGE 10
3. **FOR with List** - FOR ${item} IN @{list}
4. **FOR with Dictionary** - FOR ${key} ${value} IN &{dict}
5. **Nested FOR** - Loop inside loop
6. **FOR Flexibility** - Spacing, IN vs IN RANGE variations
7. **Mini-Challenge**: Multi-level iteration

### Section 3.3: Advanced Control - WHILE & TRY (5 exercises)
1. **WHILE Loop** - Conditional loops
2. **TRY...EXCEPT** - Error handling
3. **TRY...EXCEPT...ELSE...FINALLY** - Complete error handling
4. **Control Flow Flexibility** - Mixed indentation, spacing
5. **Mini-Challenge**: Robust error-handling workflow

---

## Chapter 4: Component Assembly - Advanced Patterns (16 exercises)

### Section 4.1: Working with Collections (6 exercises)
1. **Collections Library** - Import and basic usage
2. **List Operations** - Append, Remove, Get Slice
3. **Dictionary Operations** - Set To Dictionary, Get From Dictionary
4. **Nested Structures** - Lists of dictionaries, complex data
5. **Collections Flexibility** - Keyword variations, spacing
6. **Mini-Challenge**: Complex data manipulation

### Section 4.2: String Manipulation (5 exercises)
1. **String Library** - Import and basic usage
2. **String Operations** - Split String, Replace String, Get Substring
3. **String Formatting** - Format String, converting types
4. **String Flexibility** - Case variations, spacing in arguments
5. **Mini-Challenge**: Text processing workflow

### Section 4.3: Date & Time (5 exercises)
1. **DateTime Library** - Import and basic usage
2. **Get Current Date** - Working with timestamps
3. **Date Calculations** - Add Time To Date, Subtract Date From Date
4. **Date Formatting** - Convert Date, formatting options
5. **Mini-Challenge**: Time-based test logic

---

## Chapter 5: Launch Sequence - Final Integration (5 exercises)

### Section 5.1: Complete Test Suite (5 exercises)
1. **Settings + Tests** - Complete suite with all sections
2. **Keywords + Templates** - Combining custom keywords and templates
3. **Control Flow + Collections** - Complex logic with data structures
4. **Full Syntax Exploration** - Using all flexibility features learned
5. **Final Challenge**: Build complete ship diagnostic system (30-45 min project)

---

## Key Principles Throughout:

### Syntax Flexibility Exercises (at least 1 per chapter):
- **Case Insensitivity**: Log = log = LOG = L o G
- **Spacing Variations**: Log····message vs Log··message (both valid)
- **Header Styles**: *** Test Cases *** vs ***Test Cases*** vs *** Test Cases***
- **Indentation**: 2 spaces vs 4 spaces vs 6 spaces (all valid, 4 recommended)
- **Keyword Separation**: Log····To····Console vs Log··To··Console
- **Variable Names**: ${myVar} vs ${my_var} vs ${MY_VAR}

### What We DO NOT Cover:
- ❌ BDD/Gherkin syntax (Given/When/Then)
- ❌ Resource files (external .resource files)
- ❌ Test suite directories (multi-file projects)
- ❌ Page Object Model
- ❌ External library creation
- ❌ Robot Framework configuration files (robot.yaml)
- ❌ Listener interface
- ❌ Remote libraries

### What We DO Cover:
- ✅ Single-file test suites
- ✅ All test file sections (Settings, Variables, Test Cases, Keywords)
- ✅ Variables and data types (scalar, list, dictionary)
- ✅ Control flow (IF, FOR, WHILE, TRY)
- ✅ Built-in libraries (Collections, String, DateTime, OperatingSystem)
- ✅ User keywords with arguments and return values
- ✅ Test templates
- ✅ Setup/teardown hooks
- ✅ Assertions and validations
- ✅ Tags and test organization
- ✅ **Robot Framework's syntax flexibility and permissiveness**

---

## Total Exercise Count: 84 exercises + 5 final challenges = 89 total

### Difficulty Progression:
- **Beginner (Chapters 1-2)**: 44 exercises - Syntax, structure, organization
- **Intermediate (Chapter 3)**: 19 exercises - Logic and control flow
- **Advanced (Chapters 4-5)**: 21 exercises - Libraries, complex patterns, integration

### Story Arc:
1. **Wake up** (Ch1) - Learn to communicate
2. **Explore ship** (Ch2) - Organize diagnostics
3. **Repair systems** (Ch3) - Build decision logic
4. **Advanced repairs** (Ch4) - Use specialized tools
5. **Escape** (Ch5) - Integrate everything to launch

---

## Notes on "Flexibility" Exercises:

Each chapter includes at least one exercise demonstrating Robot Framework's permissive syntax:

- **Chapter 1**: "Syntax Flexibility" - Shows case insensitivity, spacing variations
- **Chapter 2**: "Settings Flexibility" and "Keyword Flexibility" - Header variations, naming conventions
- **Chapter 3**: "IF Flexibility" and "FOR Flexibility" - Control flow spacing, indentation
- **Chapter 4**: "Collections Flexibility" and "String Flexibility" - Keyword variations
- **Chapter 5**: "Full Syntax Exploration" - Everything combined

**Teaching Philosophy**: Show students what Robot Framework allows (very permissive) BEFORE teaching what teams should standardize on (best practices). Understanding the language's flexibility helps avoid confusion when encountering different code styles.
