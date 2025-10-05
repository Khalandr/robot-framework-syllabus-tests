# Exercise Review Plan - Variables & Control Flow

## Current Status
- ✅ Completed: Exercises 01-03 (Basic Syntax, Log Levels, Log To Console)
- 🔄 Next: Review and refactor exercises 04-33

## Proposed Structure (Adjusted)

**IMPORTANT: All exercises are in `exercises/00-fundamentals/` - no section folders!**
**ID Format: `ex-00-{sequential-number}` (e.g., ex-00-04, ex-00-05, etc.)**

---

### Topic 1: Basic Syntax (ex-00-01 to ex-00-03) - 3 exercises ✅ DONE
1. ex-00-01 - Sequential Execution & Log
2. ex-00-02 - Log Levels
3. ex-00-03 - Log To Console

---

### Topic 2: Variables (ex-00-04 to ex-00-10) - 7 exercises
Focus: Introduction to variable types and basic usage

1. **ex-00-04**: Scalar Variables - Text
   - Create and log text variables
   - Simple string operations

2. **ex-00-05**: Scalar Variables - Numbers & Evaluate
   - Create and log number variables
   - Math operations with Evaluate keyword (add, subtract, multiply, divide)

3. **ex-00-06**: List Variables Basics
   - Create list with Create List
   - Access items by index (positive/negative)
   - Append To List

4. **ex-00-07**: Dictionary Variables Basics
   - Create dictionary with Create Dictionary
   - Access values by key
   - Set To Dictionary

5. **ex-00-08**: Variables Section - Scalars
   - Define scalar variables in *** Variables ***
   - Use in test cases

6. **ex-00-09**: Variables Section - Lists
   - Define list variables with @{} syntax
   - Access in test cases

7. **ex-00-10**: Variables Section - Dictionaries
   - Define dictionary variables with &{} syntax
   - Access in test cases

**ch-00-01**: Challenge - Combine all variable types in ship system diagnostics

---

### Topic 3: Assertions (ex-00-11 to ex-00-17) - 7 exercises
Focus: Validation and comparison

1. **ex-00-11**: Should Be Equal - Strings
2. **ex-00-12**: Should Be Equal - Numbers
3. **ex-00-13**: Should Be True/False
4. **ex-00-14**: Should Contain
5. **ex-00-15**: Should Not Be Equal
6. **ex-00-16**: Length Should Be
7. **ex-00-17**: Comparison Assertions Mix

**ch-00-02**: Challenge - Validate ship systems with multiple assertion types

---

### Topic 4: IF Statements (ex-00-18 to ex-00-20) - 3 exercises
Focus: Conditional logic

1. **ex-00-18**: Simple IF - Single Branch
2. **ex-00-19**: IF-ELSE - Two Branches
3. **ex-00-20**: IF-ELSE IF-ELSE - Multiple Branches

**ch-00-03**: Challenge - Ship system triage based on status

---

### Topic 5: FOR Loops (ex-00-21 to ex-00-25) - 5 exercises
Focus: Iteration basics

1. **ex-00-21**: FOR Loop - Iterate List
2. **ex-00-22**: FOR with IN RANGE
3. **ex-00-23**: FOR with BREAK
4. **ex-00-24**: FOR with CONTINUE
5. **ex-00-25**: FOR Loop - Iterate Dictionary
   - Loop through dictionary keys and values

**ch-00-04**: Challenge - Scan multiple ship components in sequence

---

### Topic 6: WHILE Loops (ex-00-26 to ex-00-28) - 3 exercises
Focus: Conditional iteration

1. **ex-00-26**: WHILE with Counter
2. **ex-00-27**: WHILE with BREAK
3. **ex-00-28**: WHILE with Complex Condition

**ch-00-05**: Challenge - Monitor system until stable

---

## Summary

**Total in this plan: 25 exercises + 5 challenges = 30 items**

- Topic 1 (Basic Syntax): ex-00-01 to ex-00-03 ✅ DONE
- Topic 2 (Variables): ex-00-04 to ex-00-10 + ch-00-01
- Topic 3 (Assertions): ex-00-11 to ex-00-17 + ch-00-02
- Topic 4 (IF): ex-00-18 to ex-00-20 + ch-00-03
- Topic 5 (FOR): ex-00-21 to ex-00-25 + ch-00-04
- Topic 6 (WHILE): ex-00-26 to ex-00-28 + ch-00-05

**Next exercises after this plan: ex-00-29 onwards** (Settings, Keywords, TRY/EXCEPT, etc.)


## Key Adjustments Made

1. **Added back important topics:**
   - ✅ Evaluate keyword for math operations (ex-00-02-02)
   - ✅ Dictionary iteration in FOR loops (ex-00-07-05)
   - ✅ Append To List and Set To Dictionary basics (ex-00-02-03, ex-00-02-04)

2. **Reduced control flow exercises:**
   - IF: 5 → 3 exercises (removed redundant string/number comparison examples)
   - FOR: 5 exercises (kept all, added dict iteration)
   - WHILE: 5 → 3 exercises (removed comparison and list processing exercises)

3. **Sequential numbering (flat structure):**
   - Topic 1 (Basic Syntax): ex-00-01 to ex-00-03 ✅ DONE
   - Topic 2 (Variables): ex-00-04 to ex-00-10 + ch-00-01
   - Topic 3 (Assertions): ex-00-11 to ex-00-17 + ch-00-02
   - Topic 4 (IF): ex-00-18 to ex-00-20 + ch-00-03
   - Topic 5 (FOR): ex-00-21 to ex-00-25 + ch-00-04
   - Topic 6 (WHILE): ex-00-26 to ex-00-28 + ch-00-05
   - **Total: 28 exercises + 5 challenges = 33 items**

4. **Removed redundant topics:**
   - String concatenation (URL building) - too specific
   - Get Substring - too advanced
   - Separate Boolean variables - covered in IF section
   - Nested FOR loops - too complex
   - WHILE vs FOR comparison - unnecessary
   - WHILE with list processing - redundant with FOR

## Notes
- **No more section folders!** All exercises in `exercises/00-fundamentals/`
- IDs are sequential: ex-00-01, ex-00-02, ex-00-03, etc.
- Challenges numbered separately: ch-00-01, ch-00-02, etc.
- After ex-00-28, we continue with Settings, Keywords, TRY/EXCEPT, Templates, Libraries
- Each exercise should follow the guidelines from ex-00-01 to ex-00-03

## Action Required
We need to rename existing files:
- ex-00-01-01.json → ex-00-01.json ✅
- ex-00-01-02.json → ex-00-02.json ✅
- ex-00-01-03.json → ex-00-03.json ✅
- ex-00-02-01.json → ex-00-04.json
- ex-00-02-02.json → ex-00-05.json
- ... and so on for all 72 existing exercises
