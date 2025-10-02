# BuiltIn Library - Complete Coverage Plan

**Source:** https://robotframework.org/robotframework/latest/libraries/BuiltIn.html
**Total Keywords:** 100+ keywords in BuiltIn library
**Current Coverage:** ~15 keywords (15%)
**Gap:** ~85 keywords need exercises

---

## 📊 BuiltIn Library Keyword Categories

### 1. Assertions & Verification (30+ keywords)

#### Basic Comparisons (10 keywords)
- ✅ `Should Be Equal` - COVERED (1 exercise)
- ⏳ `Should Not Be Equal`
- ⏳ `Should Be Equal As Integers`
- ⏳ `Should Be Equal As Numbers`
- ⏳ `Should Be Equal As Strings`
- ⏳ `Should Not Be Equal As Integers`
- ⏳ `Should Not Be Equal As Numbers`
- ⏳ `Should Not Be Equal As Strings`
- ✅ `Should Be True` - COVERED (2 exercises)
- ⏳ `Should Not Be True`
- ⏳ `Should Be Empty`
- ⏳ `Should Not Be Empty`

**Needed Exercises:** 15 exercises covering all comparison types

#### String Assertions (8 keywords)
- ✅ `Should Contain` - COVERED (1 exercise)
- ⏳ `Should Not Contain`
- ⏳ `Should Contain X Times`
- ⏳ `Should Not Contain Any`
- ⏳ `Should Start With`
- ⏳ `Should Not Start With`
- ⏳ `Should End With`
- ⏳ `Should Not End With`
- ⏳ `Should Match`
- ⏳ `Should Not Match`
- ⏳ `Should Match Regexp`
- ⏳ `Should Not Match Regexp`

**Needed Exercises:** 12 exercises for string patterns

#### Collection Assertions (8 keywords)
- ⏳ `Lists Should Be Equal`
- ⏳ `List Should Contain Value`
- ⏳ `List Should Contain Sub List`
- ⏳ `List Should Not Contain Value`
- ⏳ `List Should Not Contain Duplicates`
- ⏳ `Dictionaries Should Be Equal`
- ⏳ `Dictionary Should Contain Key`
- ⏳ `Dictionary Should Contain Value`
- ⏳ `Dictionary Should Contain Item`
- ⏳ `Dictionary Should Not Contain Key`

**Needed Exercises:** 10 exercises for collection validation

#### Type Assertions (4 keywords)
- ⏳ `Should Be String`
- ⏳ `Should Be Unicode`
- ⏳ `Should Be Byte String`
- ⏳ `Should Not Be String`

**Needed Exercises:** 5 exercises for type checking

#### Length Assertions (2 keywords)
- ✅ `Get Length` - COVERED (3 exercises)
- ⏳ `Length Should Be`

**Needed Exercises:** 3 exercises for length operations

---

### 2. Variable Operations (15 keywords)

#### Variable Creation & Assignment
- ✅ `Set Variable` - COVERED (15+ exercises)
- ⏳ `Set Variable If`
- ✅ `Set Global Variable` - MENTIONED
- ✅ `Set Suite Variable` - MENTIONED
- ✅ `Set Test Variable` - MENTIONED
- ⏳ `Set Local Variable`
- ⏳ `Set Task Variable`

**Needed Exercises:** 10 exercises on variable scoping

#### Variable Retrieval
- ⏳ `Get Variable Value`
- ⏳ `Get Variables`
- ⏳ `Variable Should Exist`
- ⏳ `Variable Should Not Exist`

**Needed Exercises:** 5 exercises on variable inspection

#### Variable Files
- ⏳ `Import Variables`
- ⏳ `Set Global Variable` (from file)
- ⏳ `Replace Variables`

**Needed Exercises:** 8 exercises on variable files (Python, YAML)

---

### 3. Conversions (15 keywords)

#### Numeric Conversions
- ✅ `Evaluate` - COVERED (5 exercises)
- ⏳ `Convert To Integer`
- ⏳ `Convert To Number`
- ⏳ `Convert To Binary`
- ⏳ `Convert To Octal`
- ⏳ `Convert To Hex`

**Needed Exercises:** 8 exercises on number conversions

#### String Conversions
- ⏳ `Convert To String`
- ⏳ `Convert To Bytes`
- ⏳ `Convert To Lower Case` - (String library, but related)
- ⏳ `Convert To Upper Case` - (String library, but related)

**Needed Exercises:** 5 exercises on string conversions

#### Boolean Conversions
- ⏳ `Convert To Boolean`

**Needed Exercises:** 3 exercises on boolean handling

---

### 4. Collections Operations (15 keywords)

#### List Operations
- ✅ `Create List` - COVERED (8 exercises)
- ⏳ `Append To List`
- ⏳ `Insert Into List`
- ⏳ `Remove From List`
- ⏳ `Remove Values From List`
- ⏳ `Get From List`
- ⏳ `Set To List`
- ⏳ `Get Slice From List`
- ⏳ `Count Values In List`
- ⏳ `Get Index From List`
- ⏳ `Copy List`
- ⏳ `Reverse List`
- ⏳ `Sort List`

**Needed Exercises:** 15 exercises on list manipulation

#### Dictionary Operations
- ✅ `Create Dictionary` - COVERED (5 exercises)
- ✅ `Get From Dictionary` - COVERED (5 exercises)
- ⏳ `Set To Dictionary`
- ⏳ `Remove From Dictionary`
- ⏳ `Pop From Dictionary`
- ⏳ `Get Dictionary Keys`
- ⏳ `Get Dictionary Values`
- ⏳ `Get Dictionary Items`
- ⏳ `Keep In Dictionary`
- ⏳ `Copy Dictionary`
- ⏳ `Log Dictionary`

**Needed Exercises:** 12 exercises on dictionary operations

---

### 5. Flow Control (15 keywords)

#### Loop Control
- ✅ `FOR` loops - COVERED (10 exercises)
- ✅ `BREAK` - COVERED (1 exercise)
- ✅ `CONTINUE` - COVERED (1 exercise)
- ⏳ `Continue For Loop If`
- ⏳ `Exit For Loop If`
- ⏳ `Repeat Keyword`

**Needed Exercises:** 8 exercises on advanced loop patterns

#### Conditional Execution
- ✅ `IF/ELSE` - COVERED (5 exercises)
- ⏳ `Run Keyword If` - PARTIAL (1 exercise)
- ⏳ `Run Keyword Unless`
- ⏳ `Run Keyword If Test Failed`
- ⏳ `Run Keyword If Test Passed`
- ⏳ `Run Keyword If Timeout Occurred`

**Needed Exercises:** 10 exercises on conditional keywords

#### Return Control
- ⏳ `Return From Keyword`
- ⏳ `Return From Keyword If`
- ⏳ `RETURN` statement (RF 5.0+)

**Needed Exercises:** 5 exercises on return patterns

---

### 6. Execution Control (20 keywords)

#### Dynamic Keyword Execution
- ✅ `Run Keyword` - COVERED (1 exercise)
- ⏳ `Run Keywords`
- ⏳ `Run Keyword And Continue On Failure`
- ⏳ `Run Keyword And Expect Error`
- ⏳ `Run Keyword And Ignore Error`
- ⏳ `Run Keyword And Return`
- ⏳ `Run Keyword And Return If`
- ⏳ `Run Keyword And Return Status`

**Needed Exercises:** 10 exercises on dynamic execution

#### Wait & Retry
- ⏳ `Wait Until Keyword Succeeds`
- ⏳ `Repeat Keyword`

**Needed Exercises:** 5 exercises on retry patterns

#### Test/Suite Control
- ⏳ `Pass Execution`
- ⏳ `Pass Execution If`
- ⏳ `Skip`
- ⏳ `Skip If`
- ⏳ `Fail`
- ⏳ `Fatal Error`
- ⏳ `Set Test Message`
- ⏳ `Set Test Documentation`
- ⏳ `Set Suite Documentation`
- ⏳ `Set Suite Metadata`

**Needed Exercises:** 12 exercises on test control

---

### 7. Logging & Output (10 keywords)

#### Basic Logging
- ✅ `Log` - COVERED (30+ exercises)
- ✅ `Log Many` - COVERED (1 exercise)
- ⏳ `Log To Console`
- ✅ `Log Variables` - COVERED (1 exercise)
- ⏳ `Comment`

**Needed Exercises:** 8 exercises on logging strategies

#### Log Level Control
- ⏳ `Set Log Level`
- ⏳ `Get Log Level`

**Needed Exercises:** 3 exercises on log configuration

---

### 8. Time & Waiting (5 keywords)

- ✅ `Sleep` - COVERED (10 exercises)
- ⏳ `Get Time`
- ⏳ `Get Current Date`
- ⏳ `Add Time To Date`
- ⏳ `Subtract Date From Date`

**Needed Exercises:** 8 exercises on time operations

---

### 9. Library & Resource Management (8 keywords)

- ⏳ `Import Library`
- ⏳ `Import Resource`
- ⏳ `Reload Library`
- ⏳ `Get Library Instance`
- ⏳ `Keyword Should Exist`
- ⏳ `Get Keyword Names`
- ⏳ `Get Keyword Documentation`
- ⏳ `Get Keyword Arguments`

**Needed Exercises:** 10 exercises on dynamic imports

---

### 10. Advanced Operations (10 keywords)

#### Evaluation
- ✅ `Evaluate` - COVERED (5 exercises)
- ⏳ `Call Method`

**Needed Exercises:** 5 exercises on Python integration

#### Regular Expressions
- ⏳ `Get Regexp Matches`
- ⏳ `Should Match Regexp`
- ⏳ `Should Not Match Regexp`
- ⏳ `Regexp Escape`

**Needed Exercises:** 8 exercises on regex patterns

#### Miscellaneous
- ⏳ `Catenate`
- ⏳ `Get Count`
- ⏳ `No Operation`
- ⏳ `Set Tags`
- ⏳ `Remove Tags`

**Needed Exercises:** 5 exercises on utilities

---

## 📈 Coverage Summary

| Category | Total Keywords | Covered | Coverage % | Exercises Needed |
|----------|----------------|---------|------------|------------------|
| Assertions | 30+ | 3 | 10% | 45 |
| Variables | 15 | 4 | 27% | 23 |
| Conversions | 15 | 1 | 7% | 16 |
| Collections | 15 | 4 | 27% | 27 |
| Flow Control | 15 | 7 | 47% | 23 |
| Execution Control | 20 | 1 | 5% | 27 |
| Logging | 10 | 3 | 30% | 11 |
| Time Operations | 5 | 1 | 20% | 8 |
| Library Management | 8 | 0 | 0% | 10 |
| Advanced | 10 | 1 | 10% | 18 |
| **TOTAL** | **143** | **25** | **17%** | **208** |

---

## 🎯 Priority Implementation Order

### Phase 1: Critical Gaps (50 exercises)
1. **Assertions Deep Dive** (20 ex)
   - All comparison types
   - String matching patterns
   - Collection validations

2. **Variable Operations** (15 ex)
   - Variable scoping comprehensive
   - Variable inspection
   - Variable files (Python/YAML)

3. **Collections Advanced** (15 ex)
   - List manipulation (sort, reverse, slice)
   - Dictionary advanced operations
   - Collection assertions

### Phase 2: Execution Control (40 exercises)
1. **Dynamic Execution** (20 ex)
   - Run Keyword variants
   - Error handling patterns
   - Return status handling

2. **Conditional Execution** (10 ex)
   - Run Keyword If variations
   - Test state conditionals

3. **Wait & Retry** (10 ex)
   - Wait Until Keyword Succeeds
   - Retry patterns

### Phase 3: Advanced Features (30 exercises)
1. **Regular Expressions** (10 ex)
   - Pattern matching
   - Regex groups
   - Regex replace

2. **Time Operations** (10 ex)
   - Get Time variants
   - Date arithmetic
   - Time formatting

3. **Library Management** (10 ex)
   - Dynamic imports
   - Library introspection
   - Keyword discovery

### Phase 4: Complete Coverage (88 exercises)
- All remaining keywords
- Edge cases
- Integration scenarios

**Total Additional Exercises for BuiltIn Library: 208 exercises**

---

## 🔗 Integration with Expansion Plan

This BuiltIn library coverage plan fits into the main expansion plan:

- **Phase 5** should include 50 exercises from "Phase 1: Critical Gaps"
- **Phase 6** should include 40 exercises from "Phase 2: Execution Control"
- **Phase 7-8** should include remaining 118 exercises

**Updated Total Path to 1000+:**
- Current: 80 exercises
- BuiltIn Library focus: +208 exercises
- Other libraries & scenarios: +712 exercises
- **New Total: 1000 exercises**

---

**Document Created:** 2025-10-02
**Source:** Official BuiltIn Library Documentation
**Status:** Coverage Analysis Complete
