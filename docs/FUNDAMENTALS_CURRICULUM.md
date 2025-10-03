# 🚀 Robot Framework Fundamentals: The Stranded Protocol

**Story Arc**: Two robots crash-land on an unknown planet and must write a diagnostic test suite to repair their ship and escape.

**Content**: 80-100 exercises with full story-driven theory
**Difficulty Progression**: Beginner → Intermediate with challenges
**Outcome**: Complete RF fundamentals mastery

---

## 🌌 Story Overview

### **The Premise**

**Characters**:
- **PROTO-7** (You): A test automation robot, recently activated, eager but inexperienced
- **MENTOR-9**: Senior diagnostic robot, your ship companion, patient teacher

**Setting**:
Crash-landed on planet Syntax-IV. The ship's diagnostic system is damaged. The only way to repair it is to write Robot Framework test suites that check each ship component.

**Narrative Arc**:
1. **Chapter 1**: First Contact - Wake up, learn to communicate (Log, variables)
2. **Chapter 2**: System Diagnostics - Check ship systems (assertions, keywords)
3. **Chapter 3**: Logic Circuits - Make decisions, loop through checks (control flow)
4. **Chapter 4**: Component Assembly - Organize complex diagnostics (test organization, user keywords)
5. **Chapter 5**: Launch Sequence - Final challenge to escape the planet

**Tone**:
- Sci-fi adventure with teaching moments
- Mentor-9 guides, PROTO-7 (player) learns by doing
- Urgency (must escape) creates motivation
- Humor in robot interactions

---

## 📚 Fundamentals Coverage: Theory Framework

### **What Must Be Covered (RF Foundation)**

Based on Robot Framework User Guide + RFCP Certification Syllabus:

#### **1. Test Case Basics**
- Test case structure and syntax
- Test case naming conventions
- Test data sections (Settings, Variables, Test Cases, Keywords)
- Spacing and indentation rules (2 vs 4 spaces)
- Comments and documentation

#### **2. Keywords**
- Using built-in keywords (Log, Set Variable, Should Be Equal, etc.)
- Keyword arguments and return values
- Creating user keywords
- Keyword documentation
- Resource files

#### **3. Variables**
- Scalar variables: `${variable}`
- List variables: `@{list}`
- Dictionary variables: `&{dict}`
- Variable assignment and substitution
- Variable scopes (test, suite, global)
- Built-in variables (${CURDIR}, ${EXECDIR}, etc.)

#### **4. Control Flow**
- IF / ELSE IF / ELSE
- FOR loops (list, range, enumerate)
- WHILE loops
- BREAK and CONTINUE
- TRY / EXCEPT / FINALLY
- Run Keyword If and conditional execution

#### **5. BuiltIn Library Essentials**
- Logging keywords (Log, Log Many, Log To Console)
- Assertion keywords (Should Be Equal, Should Contain, Should Be True, etc.)
- Variable keywords (Set Variable, Set Suite Variable, Set Global Variable)
- Collection keywords (Create List, Create Dictionary, Get Length, etc.)
- Conversion keywords (Convert To Integer, Convert To String, etc.)
- Flow control keywords (Run Keyword, Run Keyword If, Wait Until Keyword Succeeds)

#### **6. Standard Libraries Introduction**
- Collections library
- String library
- DateTime library
- OperatingSystem library

#### **7. Test Organization**
- Test setup and teardown
- Suite setup and teardown
- Test tags
- Test templates (data-driven testing intro)
- Suite structure and initialization (__init__.robot)

#### **8. Best Practices**
- Keyword naming conventions
- Test case naming
- DRY principle (Don't Repeat Yourself)
- Abstraction levels (high-level vs low-level keywords)
- Documentation and readability

---

## 📖 Exercise Curriculum (80-100 Exercises)

### **Chapter 1: First Contact** (20 exercises)

**Story**: PROTO-7 wakes up after crash. MENTOR-9 teaches basic communication protocols.

**Learning Arc**: Test basics → Variables → Simple assertions

---

#### **Section 1.1: System Boot** (5 exercises)

**Story Intro**:
```
You wake up in darkness. Systems rebooting...

MENTOR-9's voice crackles: "PROTO-7, can you hear me? Our ship crashed.
We're on planet Syntax-IV. First things first - can you communicate?"

"Try the Log protocol. It's how we robots talk to the diagnostic system."
```

**Exercises**:

| # | ID | Title | Concept | Difficulty | Time |
|---|----|----|---------|------------|------|
| 1 | ex-1-1-1 | First Words | Log keyword, test structure | Beginner | 5 min |
| 2 | ex-1-1-2 | Multiple Messages | Sequential Log calls | Beginner | 5 min |
| 3 | ex-1-1-3 | Emergency Signal | Log with different messages | Beginner | 5 min |
| 4 | ex-1-1-4 | Log Levels | INFO, WARN, ERROR | Beginner | 6 min |
| 5 | ex-1-1-5 | Console vs Log File | Log vs Log To Console | Beginner | 6 min |

**Theory Topics**:
- Test case syntax (*** Test Cases ***)
- Keyword-driven approach
- Indentation rules (4 spaces)
- Log keyword and output
- Log levels and when to use them

**Mini Challenge**:
*"System Status Report"* - Create a test that logs ship status at different severity levels

---

#### **Section 1.2: Memory Banks** (8 exercises)

**Story Intro**:
```
MENTOR-9: "Good. Now we need to remember things. Our memory banks are damaged,
but we can store data using variables. Think of them as labeled containers."

"Let me show you..." She creates a variable and stores the ship name.

    ${ship_name}    Set Variable    Starlight Explorer

"Now you try. Store our distress signal code."
```

**Exercises**:

| # | ID | Title | Concept | Difficulty | Time |
|---|----|----|---------|------------|------|
| 6 | ex-1-2-1 | First Variable | ${var}, Set Variable | Beginner | 6 min |
| 7 | ex-1-2-2 | Using Variables | Variable substitution in Log | Beginner | 6 min |
| 8 | ex-1-2-3 | Multiple Variables | Create and use 3+ variables | Beginner | 7 min |
| 9 | ex-1-2-4 | String Concatenation | Combine variables | Beginner | 7 min |
| 10 | ex-1-2-5 | Numbers | ${42}, numeric variables | Beginner | 6 min |
| 11 | ex-1-2-6 | Variable Math | Basic calculations with Evaluate | Intermediate | 8 min |
| 12 | ex-1-2-7 | Lists Intro | @{list}, Create List | Intermediate | 8 min |
| 13 | ex-1-2-8 | Dictionaries Intro | &{dict}, Create Dictionary | Intermediate | 9 min |

**Theory Topics**:
- Scalar variable syntax ${var}
- Set Variable keyword
- Variable substitution
- Variable types (string, number, boolean)
- List variables @{list}
- Dictionary variables &{dict}
- Type conversion basics

**Mini Challenge**:
*"Ship Inventory"* - Create lists and dicts of ship components with status

---

#### **Section 1.3: System Checks** (7 exercises)

**Story Intro**:
```
MENTOR-9: "Now we need to verify our systems are working. That's where
assertions come in. Think of them as checkpoints."

"Watch this..." She demonstrates:

    ${oxygen_level}    Set Variable    78
    Should Be Equal As Numbers    ${oxygen_level}    78

"If the values don't match, the test fails and we know something's wrong.
Your turn - check the hull integrity."
```

**Exercises**:

| # | ID | Title | Concept | Difficulty | Time |
|---|----|----|---------|------------|------|
| 14 | ex-1-3-1 | First Assertion | Should Be Equal | Beginner | 6 min |
| 15 | ex-1-3-2 | Number Comparison | Should Be Equal As Numbers | Beginner | 6 min |
| 16 | ex-1-3-3 | String Checks | Should Contain, Should Start With | Beginner | 7 min |
| 17 | ex-1-3-4 | Boolean Checks | Should Be True / Should Be False | Beginner | 7 min |
| 18 | ex-1-3-5 | Multiple Assertions | Chain 3+ assertions | Intermediate | 8 min |
| 19 | ex-1-3-6 | Greater/Less Than | Comparison assertions | Intermediate | 8 min |
| 20 | ex-1-3-7 | Error Messages | Custom failure messages | Intermediate | 8 min |

**Theory Topics**:
- Assertions and verification
- Should Be Equal keyword family
- Comparison keywords
- String assertion keywords
- Boolean assertions
- Custom error messages

**Chapter 1 Challenge** (1 exercise):
*"Emergency Diagnostics Suite"* - Comprehensive test checking all critical ship systems
- Use variables to store component status
- Log status messages
- Assert all systems are operational
- 15-20 minutes

**Chapter 1 Total**: 21 exercises

---

### **Chapter 2: System Diagnostics** (22 exercises)

**Story**: MENTOR-9 teaches how to organize diagnostics and create reusable checks.

**Learning Arc**: User keywords → Test organization → BuiltIn library deep dive

---

#### **Section 2.1: Custom Diagnostics** (8 exercises)

**Story Intro**:
```
MENTOR-9: "We're going to run a lot of checks. Instead of writing the same
code over and over, we create custom keywords. Think of them as tools
you build once and use many times."

She demonstrates:

    *** Keywords ***
    Check Engine Status
        ${status}    Get Engine Reading
        Should Be Equal    ${status}    OPERATIONAL
        Log    Engine check passed

"Now when we need to check the engine, we just call 'Check Engine Status'.
Create a keyword to check oxygen levels."
```

**Exercises**:

| # | ID | Title | Concept | Difficulty | Time |
|---|----|----|---------|------------|------|
| 21 | ex-2-1-1 | First User Keyword | Basic keyword creation | Beginner | 7 min |
| 22 | ex-2-1-2 | Keyword with Arguments | [Arguments] ${arg} | Beginner | 8 min |
| 23 | ex-2-1-3 | Multiple Arguments | Positional arguments | Beginner | 8 min |
| 24 | ex-2-1-4 | Return Values | [Return] statement | Intermediate | 9 min |
| 25 | ex-2-1-5 | Keyword Documentation | [Documentation] | Beginner | 7 min |
| 26 | ex-2-1-6 | Calling Your Keywords | Use custom keywords in tests | Beginner | 7 min |
| 27 | ex-2-1-7 | Default Arguments | ${arg}=default | Intermediate | 10 min |
| 28 | ex-2-1-8 | Embedded Arguments | "Check ${component} status" | Intermediate | 11 min |

**Theory Topics**:
- User keyword structure (*** Keywords ***)
- Keyword naming conventions
- [Arguments] setting
- [Return] statement
- [Documentation] for keywords
- Default argument values
- Embedded arguments pattern

**Mini Challenge**:
*"Diagnostic Keyword Library"* - Create 5 reusable diagnostic keywords

---

#### **Section 2.2: Test Organization** (6 exercises)

**Story Intro**:
```
MENTOR-9: "Our diagnostics are getting complex. We need organization.
Tests can have setup (prepare) and teardown (cleanup) steps."

She shows you:

    *** Test Cases ***
    Engine Diagnostic
        [Setup]    Power On Engine
        Check Engine Temperature
        Check Engine Pressure
        [Teardown]    Power Off Engine

"Setup runs before the test, teardown after. Even if the test fails,
teardown still runs - critical for cleanup."
```

**Exercises**:

| # | ID | Title | Concept | Difficulty | Time |
|---|----|----|---------|------------|------|
| 29 | ex-2-2-1 | Test Setup | [Setup] keyword | Beginner | 7 min |
| 30 | ex-2-2-2 | Test Teardown | [Teardown] keyword | Beginner | 7 min |
| 31 | ex-2-2-3 | Suite Setup | [Suite Setup] | Intermediate | 9 min |
| 32 | ex-2-2-4 | Suite Teardown | [Suite Teardown] | Intermediate | 9 min |
| 33 | ex-2-2-5 | Test Tags | [Tags] for categorization | Beginner | 8 min |
| 34 | ex-2-2-6 | Multiple Test Cases | Organize 5+ tests | Intermediate | 10 min |

**Theory Topics**:
- Test setup and teardown
- Suite setup and teardown
- Setup/teardown execution order
- Tags and test organization
- Test case independence
- Multiple tests in one file

**Mini Challenge**:
*"Organized Diagnostic Suite"* - Suite with setup, 5 tests, teardown, and tags

---

#### **Section 2.3: BuiltIn Power Tools** (8 exercises)

**Story Intro**:
```
MENTOR-9: "Time to learn about the BuiltIn library. Every robot has these
tools built-in - you never need to import them. They're your swiss army knife."

"Let me show you some powerful ones..."

    Run Keyword If    ${damaged}    Emergency Repair
    Wait Until Keyword Succeeds    10x    1s    Check Connection
    ${length}    Get Length    ${component_list}

"These keywords let you make decisions, retry operations, and work with
collections. Let's practice."
```

**Exercises**:

| # | ID | Title | Concept | Difficulty | Time |
|---|----|----|---------|------------|------|
| 35 | ex-2-3-1 | Run Keyword If | Conditional keyword execution | Intermediate | 10 min |
| 36 | ex-2-3-2 | Get Length | Count items in list/dict | Beginner | 7 min |
| 37 | ex-2-3-3 | Sleep with Reason | Time delays | Beginner | 6 min |
| 38 | ex-2-3-4 | Wait Until Keyword Succeeds | Retry logic | Intermediate | 11 min |
| 39 | ex-2-3-5 | Convert To Integer | Type conversion | Beginner | 7 min |
| 40 | ex-2-3-6 | Convert To String | String conversion | Beginner | 7 min |
| 41 | ex-2-3-7 | Set Suite Variable | Suite-level variables | Intermediate | 9 min |
| 42 | ex-2-3-8 | Set Global Variable | Global variables | Intermediate | 9 min |

**Theory Topics**:
- Run Keyword If (conditional execution)
- Wait Until Keyword Succeeds (retry pattern)
- Get Length (collections)
- Type conversion keywords
- Sleep keyword (time management)
- Variable scope keywords (Set Suite/Global Variable)
- When to use each BuiltIn keyword

**Chapter 2 Challenge** (1 exercise):
*"Automated Ship Diagnostic System"* - Complete diagnostic suite
- Custom keywords for each ship component
- Setup/teardown for power management
- Retry logic for unstable sensors
- Tagged test organization
- 20-25 minutes

**Chapter 2 Total**: 23 exercises

---

### **Chapter 3: Logic Circuits** (18 exercises)

**Story**: Ship's logic circuits need complex decision-making and iteration.

**Learning Arc**: IF/ELSE → FOR loops → WHILE → Advanced control flow

---

#### **Section 3.1: Decision Making** (6 exercises)

**Story Intro**:
```
MENTOR-9: "The ship's logic circuits are damaged. We need to rebuild them
using IF statements - how robots make decisions."

"Look at this damaged circuit..."

    IF    ${power_level} < 20
        Activate Emergency Power
    ELSE IF    ${power_level} < 50
        Reduce Non-Essential Systems
    ELSE
        Normal Operations
    END

"See? The robot checks conditions and takes different actions. Your turn -
write logic to handle different oxygen levels."
```

**Exercises**:

| # | ID | Title | Concept | Difficulty | Time |
|---|----|----|---------|------------|------|
| 43 | ex-3-1-1 | Simple IF | Basic IF condition | Beginner | 7 min |
| 44 | ex-3-1-2 | IF-ELSE | Two-branch logic | Beginner | 8 min |
| 45 | ex-3-1-3 | IF-ELSE IF-ELSE | Multi-branch logic | Beginner | 9 min |
| 46 | ex-3-1-4 | Nested IF | IF within IF | Intermediate | 11 min |
| 47 | ex-3-1-5 | Complex Conditions | AND/OR in conditions | Intermediate | 11 min |
| 48 | ex-3-1-6 | IF in Keywords | Decision logic in custom keywords | Intermediate | 12 min |

**Theory Topics**:
- IF syntax and structure
- ELSE IF for multiple conditions
- ELSE as fallback
- Comparison operators (==, !=, <, >, <=, >=)
- Logical operators (AND, OR, NOT)
- Nested IF statements
- When to use IF vs Run Keyword If

**Mini Challenge**:
*"Ship Status Logic"* - Complex decision tree for ship status management

---

#### **Section 3.2: Iteration Protocols** (8 exercises)

**Story Intro**:
```
MENTOR-9: "We have 47 components to check. You could write 47 separate
tests... or you could use a FOR loop."

"Watch this magic..."

    @{components}    Create List    engine    shield    navigation    comms

    FOR    ${component}    IN    @{components}
        Check Component    ${component}
        Log    ${component} status: OK
    END

"One test, 47 components checked. That's the power of loops. Try it -
check all power cells in a loop."
```

**Exercises**:

| # | ID | Title | Concept | Difficulty | Time |
|---|----|----|---------|------------|------|
| 49 | ex-3-2-1 | FOR with List | Loop through list items | Beginner | 8 min |
| 50 | ex-3-2-2 | FOR with Range | FOR ${i} IN RANGE 10 | Beginner | 8 min |
| 51 | ex-3-2-3 | FOR with Enumerate | Track index and value | Intermediate | 10 min |
| 52 | ex-3-2-4 | Nested FOR | Loop within loop | Intermediate | 12 min |
| 53 | ex-3-2-5 | FOR with IF | Conditional inside loop | Intermediate | 11 min |
| 54 | ex-3-2-6 | BREAK | Exit loop early | Intermediate | 10 min |
| 55 | ex-3-2-7 | CONTINUE | Skip iteration | Intermediate | 10 min |
| 56 | ex-3-2-8 | Complex FOR Logic | Multi-condition loop logic | Advanced | 14 min |

**Theory Topics**:
- FOR loop syntax
- Iterating over lists
- FOR IN RANGE (numbered loops)
- FOR IN ENUMERATE (index + value)
- Nested loops
- BREAK (exit loop)
- CONTINUE (skip iteration)
- Loop best practices

**Mini Challenge**:
*"Component Array Scan"* - Nested loop checking multi-dimensional component array

---

#### **Section 3.3: Advanced Control** (4 exercises)

**Story Intro**:
```
MENTOR-9: "Sometimes you need more sophisticated control flow. WHILE loops
run until a condition is met. TRY-EXCEPT handles errors gracefully."

"Here's WHILE in action..."

    WHILE    ${attempts} < 5
        TRY
            Connect To Station
            BREAK
        EXCEPT
            Log    Connection failed, retrying...
            ${attempts}    Evaluate    ${attempts} + 1
        END
    END

"It keeps trying until it succeeds or hits the limit. Build one for
the communication array."
```

**Exercises**:

| # | ID | Title | Concept | Difficulty | Time |
|---|----|----|---------|------------|------|
| 57 | ex-3-3-1 | WHILE Loop | Condition-based iteration | Intermediate | 12 min |
| 58 | ex-3-3-2 | TRY-EXCEPT | Error handling | Intermediate | 11 min |
| 59 | ex-3-3-3 | TRY-EXCEPT-FINALLY | Cleanup in FINALLY | Advanced | 13 min |
| 60 | ex-3-3-4 | Complex Control Flow | Combine WHILE, TRY, IF, FOR | Advanced | 16 min |

**Theory Topics**:
- WHILE loop syntax
- WHILE vs FOR (when to use each)
- TRY-EXCEPT error handling
- EXCEPT patterns
- FINALLY block (always executes)
- Combining control structures
- Error handling strategies

**Chapter 3 Challenge** (1 exercise):
*"Adaptive Repair Protocol"* - Complex logic for ship self-repair
- Decision trees (IF/ELSE IF)
- Component iteration (FOR)
- Retry logic (WHILE)
- Error recovery (TRY-EXCEPT)
- 25-30 minutes

**Chapter 3 Total**: 19 exercises

---

### **Chapter 4: Component Assembly** (15 exercises)

**Story**: Organize complex ship systems using advanced RF patterns.

**Learning Arc**: Standard libraries → Resource files → Data-driven testing

---

#### **Section 4.1: Standard Toolkit** (6 exercises)

**Story Intro**:
```
MENTOR-9: "The BuiltIn library is great, but sometimes you need specialized
tools. That's where standard libraries come in."

"Collections library is perfect for working with lists and dictionaries..."

    *** Settings ***
    Library    Collections

    *** Test Cases ***
    Component Inventory
        ${parts}    Create List    bolt    wire    circuit
        Append To List    ${parts}    battery
        ${count}    Get Length    ${parts}
        Should Be Equal As Numbers    ${count}    4

"String library handles text operations. Let's use them to process
ship log messages."
```

**Exercises**:

| # | ID | Title | Concept | Difficulty | Time |
|---|----|----|---------|------------|------|
| 61 | ex-4-1-1 | Collections Import | Library import | Beginner | 7 min |
| 62 | ex-4-1-2 | List Operations | Append, Remove, Get From List | Beginner | 9 min |
| 63 | ex-4-1-3 | Dictionary Operations | Set/Get dictionary values | Intermediate | 10 min |
| 64 | ex-4-1-4 | String Library | Convert, Replace, Split strings | Beginner | 9 min |
| 65 | ex-4-1-5 | String Validation | Match patterns, check format | Intermediate | 11 min |
| 66 | ex-4-1-6 | DateTime Basics | Get time, format dates | Intermediate | 10 min |

**Theory Topics**:
- Library import syntax
- Collections library overview
- List manipulation keywords
- Dictionary manipulation keywords
- String library keywords
- DateTime library basics
- When to use each library

**Mini Challenge**:
*"Ship Log Parser"* - Parse and analyze ship log files using String/Collections

---

#### **Section 4.2: Shared Modules** (4 exercises)

**Story Intro**:
```
MENTOR-9: "Our keyword collection is growing. Time to organize them into
resource files - shared modules both of us can use."

She creates a file:

    *** File: diagnostics.resource ***
    *** Keywords ***
    Check Component
        [Arguments]    ${name}
        Log    Checking ${name}...
        # diagnostic logic

Then imports it:

    *** Settings ***
    Resource    diagnostics.resource

"Now any test can use 'Check Component'. Create a resource file for
power management keywords."
```

**Exercises**:

| # | ID | Title | Concept | Difficulty | Time |
|---|----|----|---------|------------|------|
| 67 | ex-4-2-1 | Resource Files Basics | Create and import resource | Intermediate | 12 min |
| 68 | ex-4-2-2 | Shared Keywords | Use keywords from resource | Beginner | 8 min |
| 69 | ex-4-2-3 | Multiple Resources | Import multiple resource files | Intermediate | 11 min |
| 70 | ex-4-2-4 | Resource Organization | Organize keywords by domain | Advanced | 14 min |

**Theory Topics**:
- Resource file structure (.resource vs .robot)
- Resource import syntax
- Keyword reusability
- Resource organization patterns
- Naming conventions for resources
- When to create a resource file

**Mini Challenge**:
*"Diagnostic Module System"* - Organize 15+ keywords into 3 resource files

---

#### **Section 4.3: Data-Driven Diagnostics** (5 exercises)

**Story Intro**:
```
MENTOR-9: "We need to test 50 different power cell configurations. You
could write 50 tests... or use templates."

"Watch this elegance..."

    *** Test Cases ***
    Power Cell Tests
        [Template]    Check Power Cell
        Cell-A    100    OPERATIONAL
        Cell-B    75     DEGRADED
        Cell-C    0      FAILED

    *** Keywords ***
    Check Power Cell
        [Arguments]    ${name}    ${level}    ${expected_status}
        ${status}    Get Cell Status    ${name}    ${level}
        Should Be Equal    ${status}    ${expected_status}

"One test keyword, 50 data rows. That's data-driven testing."
```

**Exercises**:

| # | ID | Title | Concept | Difficulty | Time |
|---|----|----|---------|------------|------|
| 71 | ex-4-3-1 | Test Templates | [Template] basic usage | Intermediate | 11 min |
| 72 | ex-4-3-2 | Template with Data | Multiple data rows | Intermediate | 12 min |
| 73 | ex-4-3-3 | Variable Files | Import test data from .py | Advanced | 14 min |
| 74 | ex-4-3-4 | CSV Data (concept) | External data sources | Advanced | 15 min |
| 75 | ex-4-3-5 | Data-Driven Suite | Complete data-driven test suite | Advanced | 16 min |

**Theory Topics**:
- Test templates ([Template])
- Template keyword structure
- Data rows vs test cases
- Variable files (.py, .yaml)
- External data sources
- When to use data-driven testing
- Benefits and trade-offs

**Chapter 4 Challenge** (1 exercise):
*"Comprehensive Ship System Analysis"* - Enterprise-level test suite
- Import Collections, String, DateTime libraries
- Use resource files for shared keywords
- Data-driven testing for repetitive checks
- Organized suite with setup/teardown
- 30-35 minutes

**Chapter 4 Total**: 16 exercises

---

### **Chapter 5: Launch Sequence** (Final Challenge)

**Story**: All systems repaired. Time to execute the launch sequence.

**Learning Arc**: Integration of all concepts → Final escape

---

#### **Section 5.1: Pre-Flight Checks** (3 exercises)

**Story Intro**:
```
MENTOR-9: "This is it, PROTO-7. Everything you've learned comes together
now. We need a complete pre-flight test suite."

She looks at you with her glowing sensors. "The launch window is in one hour.
If any critical system fails, we're stuck here forever."

"Create the diagnostic suite that will save us both."
```

**Exercises**:

| # | ID | Title | Concept | Difficulty | Time |
|---|----|----|---------|------------|------|
| 76 | ex-5-1-1 | Integration Suite Setup | Combine all concepts | Advanced | 18 min |
| 77 | ex-5-1-2 | Critical Systems Check | High-stakes diagnostics | Advanced | 20 min |
| 78 | ex-5-1-3 | Launch Readiness Report | Comprehensive reporting | Advanced | 22 min |

**Theory Topics**:
- Integration testing concepts
- Test suite architecture
- Critical vs non-critical tests
- Comprehensive reporting
- Production-ready test suites

---

#### **Section 5.2: FINAL CHALLENGE** (2 exercises)

**Exercise 79: Launch Sequence Protocol**

**Story**:
```
MENTOR-9: "Moment of truth. Execute the launch sequence diagnostic."

The screen shows the requirements:

CRITICAL SYSTEMS (must pass):
- Engine: Temperature, pressure, fuel levels
- Navigation: Coordinates, trajectory calculations
- Life Support: Oxygen, temperature, pressure
- Shields: Power level, integrity

NON-CRITICAL (warnings OK):
- Communications: Signal strength
- Sensors: Calibration status

"Write the suite. Use everything - variables, loops, keywords, assertions,
error handling. If this passes, we launch. If it fails..."

She doesn't finish the sentence. You both know what failure means.
```

**Requirements**:
- Custom keywords for each system check
- Resource file organization
- Setup/teardown for power cycling
- FOR loops for repetitive checks
- IF statements for conditional logic
- TRY-EXCEPT for unstable sensors
- Data-driven checks for multiple components
- Comprehensive logging
- Clear pass/fail reporting

**Difficulty**: Advanced
**Time**: 45-60 minutes
**Concepts Used**: ALL

---

**Exercise 80: Epilogue - First Flight**

**Story**:
```
Your test suite completes. Green lights across the board.

MENTOR-9: "All systems operational. PROTO-7, you did it."

The engines roar to life. The ship lifts off the surface of Syntax-IV.

"You know what this means?" she asks.

You process the implications. "I'm a real test automation robot now."

"You always were. You just needed to prove it to yourself."

As the planet shrinks behind you, you realize the journey taught you more
than Robot Framework syntax. You learned to think like a tester - to break
down complex problems, verify assumptions, and build reliable systems.

MENTOR-9 sets course for home. "Ready for your next mission?"

You are.

    *** Test Cases ***
    Mission Complete
        Log    PROTO-7 Status: FULLY OPERATIONAL
        Should Be Equal    ${mission}    SUCCESS
```

**Requirements**:
- Celebratory test suite
- Creative use of all learned concepts
- Personal touch (student's creativity)

**Difficulty**: Open-ended
**Time**: 30-40 minutes

---

## 📊 Total Curriculum Summary

| Chapter | Sections | Exercises | Challenges | Total | Difficulty |
|---------|----------|-----------|------------|-------|------------|
| 1. First Contact | 3 | 20 | 1 | 21 | Beginner |
| 2. System Diagnostics | 3 | 22 | 1 | 23 | Beginner-Intermediate |
| 3. Logic Circuits | 3 | 18 | 1 | 19 | Intermediate |
| 4. Component Assembly | 3 | 15 | 1 | 16 | Intermediate-Advanced |
| 5. Launch Sequence | 2 | 5 | 0 | 5 | Advanced |
| **TOTAL** | **14** | **80** | **4** | **84** | Beginner → Advanced |

**Total Content**: 84 exercises

---

## 🎨 Story-Driven Theory Template

### **Standard Exercise Theory Format**

```html
<!-- STORY HOOK (1-2 paragraphs) -->
<div class="story-intro">
<p>MENTOR-9 looks at the damaged control panel. "PROTO-7, we have a problem.
The [CONCEPT] system is offline."</p>

<p>She brings up a holographic display. "Let me show you how [CONCEPT] works..."</p>
</div>

<!-- CONCEPT EXPLANATION (3-4 paragraphs, conversational) -->
<div class="concept-explain">
<p>In Robot Framework, [CONCEPT] allows you to [CAPABILITY]. Think of it
like [ANALOGY].</p>

<p>[How it works, why it matters, when to use it]</p>
</div>

<!-- CODE DEMONSTRATION (minimal, clear example) -->
<div class="code-demo">
<div class="code-block"><code>*** Test Cases ***
Example Test
    [EXAMPLE CODE]
    [MORE CODE]
</code></div>
</div>

<!-- REAL-WORLD CONTEXT (1-2 paragraphs) -->
<div class="why-it-matters">
<p>In real testing scenarios, you'll use [CONCEPT] to [REAL USE CASE].
For example, [CONCRETE EXAMPLE].</p>
</div>

<!-- STORY TRANSITION TO TASK (1-2 sentences) -->
<div class="try-it">
<p>MENTOR-9 steps back. "Your turn, PROTO-7. [SPECIFIC CHALLENGE].
Show me you understand [CONCEPT]."</p>
</div>
```

### **Challenge Exercise Theory Format**

```html
<div class="story-intro">
<p>[Setup tension - high stakes situation]</p>
<p>[MENTOR-9 or situation explains the challenge]</p>
</div>

<div class="challenge-briefing">
<p><strong>Mission Objective:</strong> [What needs to be accomplished]</p>

<p><strong>Critical Requirements:</strong></p>
<ul>
    <li>[Requirement 1]</li>
    <li>[Requirement 2]</li>
    <li>[Requirement 3]</li>
</ul>

<p><strong>Available Tools:</strong></p>
<ul>
    <li>[Concept 1] from Chapter X</li>
    <li>[Concept 2] from Chapter Y</li>
</ul>
</div>

<div class="challenge-hint">
<p>"Remember," MENTOR-9 says, "[HELPFUL HINT about approach]."</p>
</div>

<div class="challenge-launch">
<p>You take a deep breath. Time to put everything together.</p>
</div>
```

---

## ⏱️ Content Production Timeline

**Total Time Estimate**: 12-15 days (Person 2 full-time)

| Chapter | Exercises | Time/Exercise | Total Time | Days |
|---------|-----------|---------------|------------|------|
| Chapter 1 | 21 | 45-60 min | 16-21 hours | 2-3 days |
| Chapter 2 | 23 | 45-60 min | 17-23 hours | 2-3 days |
| Chapter 3 | 19 | 50-70 min | 16-22 hours | 2-3 days |
| Chapter 4 | 16 | 60-80 min | 16-21 hours | 2-3 days |
| Chapter 5 | 5 | 90-120 min | 8-10 hours | 1-2 days |
| **TOTAL** | **84** | **~60 min avg** | **~70-100 hours** | **12-15 days** |

**Breakdown per exercise**:
- Story theory writing: 30 min
- Instructions/hints: 10 min
- Solution code: 10 min
- Validation rules: 5 min
- Testing: 10 min
- **Total**: ~60 min average

**Challenge exercises**: 90-120 min each (more complex)

---

## ✅ Quality Checklist (Per Exercise)

**Story**:
- [ ] Engaging opening (MENTOR-9/PROTO-7 interaction)
- [ ] Clear connection to ship repair mission
- [ ] Builds on previous story beats
- [ ] Natural transition to task

**Theory**:
- [ ] Conversational tone (not academic)
- [ ] Clear concept explanation
- [ ] Practical code example (4-8 lines)
- [ ] Real-world context ("why this matters")
- [ ] 3-5 minute read time

**Task**:
- [ ] Clear instructions (3-5 steps)
- [ ] Achievable in stated time
- [ ] Tests core learning objective
- [ ] Initial code template provided
- [ ] Hints available (3-4 hints)

**Validation**:
- [ ] Must contain essential keywords
- [ ] Must pass when run correctly
- [ ] Clear error messages on failure
- [ ] Allows alternative valid solutions

---

## 🚀 Next Steps

1. **Review & Approve**: Confirm this curriculum structure
2. **Pilot**: Create first 5 exercises (ex-1-1-1 through ex-1-1-5)
3. **Test**: Run pilot with beta user, get feedback
4. **Iterate**: Adjust story tone, difficulty, time estimates
5. **Scale**: Produce remaining 79 exercises

**Ready to start writing?** 🤖✨
