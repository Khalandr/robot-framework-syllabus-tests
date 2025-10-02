# Robot Framework Exercise Curriculum

## Overview
Progressive hands-on exercises to learn Robot Framework from basics to advanced concepts.

---

## **Category 1: Basic Syntax & Structure** (Chapter 1-2)
*Foundation level - Understanding RF syntax*

### Beginner (5 exercises) ✅ IMPLEMENTED
1. **Hello World** - First test with Log keyword
2. **Variables** - Create and use scalar variables
3. **Assertions** - Should Be Equal basics
4. **Multiple Keywords** - Sequential execution
5. **String Operations** - Concatenation and manipulation

### Intermediate (5 exercises) 🔄 TO DO
6. **Test Case Documentation** - Add [Documentation] and tags
7. **Multiple Test Cases** - Organize tests in one suite
8. **Comments** - Use # and *** Comments ***
9. **Spacing & Indentation** - Fix badly formatted code
10. **Section Organization** - Settings, Variables, Test Cases, Keywords

---

## **Category 2: Variables & Data Types** (Chapter 3)
*Working with different variable types*

### Beginner (5 exercises)
11. **Scalar Variables** - ${var} basics
12. **List Variables** - @{list} creation and access
13. **Dictionary Variables** - &{dict} key-value pairs
14. **Variable Scopes** - Suite, Test, Keyword, Global
15. **Variable Files** - Import from .py or .yaml

### Intermediate (5 exercises)
16. **List Operations** - Append, Get, Set, Remove
17. **Dictionary Operations** - Get, Set, Keys, Values
18. **Variable Assignment** - Return values from keywords
19. **Environment Variables** - %{ENV_VAR} usage
20. **Built-in Variables** - ${CURDIR}, ${EXECDIR}, ${/}, etc.

---

## **Category 3: Keywords & Libraries** (Chapter 2)
*Using and creating keywords*

### Beginner (5 exercises)
21. **BuiltIn Keywords** - Log, Sleep, Set Variable
22. **String Library** - Convert, Split, Replace
23. **Collections Library** - List and Dict operations
24. **User Keywords** - Create simple custom keyword
25. **Keyword Arguments** - Positional and named args

### Intermediate (5 exercises)
26. **Keyword Return Values** - [Return] statement
27. **Embedded Arguments** - "User logs in as ${user}"
28. **Keyword Teardown** - Cleanup with [Teardown]
29. **Private Keywords** - Internal helper keywords
30. **Library Import** - WITH NAME, WITH ARGS

---

## **Category 4: Control Flow** (Chapter 5)
*Conditional logic and loops*

### Beginner (5 exercises)
31. **IF Statement** - Basic conditional
32. **IF-ELSE** - Two-branch logic
33. **IF-ELSE IF-ELSE** - Multiple branches
34. **FOR Loop (List)** - Iterate over list
35. **FOR Loop (Range)** - FOR ${i} IN RANGE 10

### Intermediate (5 exercises)
36. **Nested FOR Loops** - Loop within loop
37. **FOR with IF** - Conditional inside loop
38. **BREAK and CONTINUE** - Loop control
39. **WHILE Loop** - Condition-based iteration
40. **TRY-EXCEPT** - Error handling

---

## **Category 5: Test Organization** (Chapter 2, 4)
*Structuring test suites*

### Beginner (5 exercises)
41. **Suite Setup** - [Suite Setup] keyword
42. **Suite Teardown** - [Suite Teardown] cleanup
43. **Test Setup** - [Setup] for each test
44. **Test Teardown** - [Teardown] for each test
45. **Test Tags** - [Tags] for categorization

### Intermediate (5 exercises)
46. **Test Templates** - Data-driven testing
47. **Resource Files** - Import .resource files
48. **Multiple Suites** - Organize by directory
49. **Suite Initialization** - __init__.robot
50. **Test Execution Order** - Dependencies and ordering

---

## **Category 6: Data-Driven Testing** (Chapter 1.4)
*Test with multiple data sets*

### Intermediate (5 exercises)
51. **Test Template Basics** - [Template] tag
52. **CSV Data Source** - Read from CSV
53. **Variable Files** - Python/YAML data
54. **Parameterized Tests** - Multiple test cases, one logic
55. **Data Validation** - Assert multiple data sets

---

## **Category 7: Advanced Keywords** (Chapter 3-4)
*Complex keyword patterns*

### Advanced (5 exercises)
56. **Dynamic Keyword Calls** - Run Keyword
57. **Conditional Execution** - Run Keyword If
58. **Keyword Timeout** - [Timeout] setting
59. **Keyword Arguments Defaults** - [Arguments] ${arg}=default
60. **Varargs and Kwargs** - @{args} &{kwargs}

---

## **Category 8: Practical Scenarios**
*Real-world test automation*

### Intermediate (5 exercises)
61. **Login Test** - Complete login scenario
62. **Form Validation** - Input validation test
63. **API Mock Test** - Test with mock responses
64. **File Operations** - Read/Write files
65. **JSON Parsing** - Parse and validate JSON

### Advanced (5 exercises)
66. **Multi-step Workflow** - Complex test flow
67. **Error Recovery** - Handle failures gracefully
68. **Parallel Data Processing** - Multiple items
69. **Report Customization** - Custom listeners
70. **Reusable Test Library** - Build keyword library

---

## **Category 9: Best Practices**
*Clean and maintainable tests*

### Intermediate (5 exercises)
71. **Descriptive Names** - Good vs bad naming
72. **Keyword Abstraction** - High-level vs low-level
73. **DRY Principle** - Don't Repeat Yourself
74. **Test Independence** - No shared state
75. **Meaningful Assertions** - Clear failure messages

---

## **Category 10: Debugging & Troubleshooting**
*Finding and fixing issues*

### Intermediate (5 exercises)
76. **Log Levels** - TRACE, DEBUG, INFO, WARN, ERROR
77. **Log Variables** - Log ${var} and structures
78. **Breakpoints** - Pause execution (with IDE)
79. **Test Failure Analysis** - Understand error messages
80. **Performance Testing** - Measure execution time

---

## Implementation Priority

### Phase 1 (MVP) ✅
- Category 1: Beginner (5 exercises) - **DONE**

### Phase 2 (Core Learning)
- Category 1: Intermediate (5 exercises)
- Category 2: Beginner (5 exercises)
- Category 3: Beginner (5 exercises)

### Phase 3 (Advanced Concepts)
- Category 4: Control Flow (10 exercises)
- Category 5: Test Organization (10 exercises)

### Phase 4 (Real-World Skills)
- Category 6-10: Practical and advanced (50 exercises)

---

## Exercise Difficulty Levels

- **Beginner**: Basic syntax, simple keywords, single concepts
- **Intermediate**: Multiple concepts, real-world patterns, error handling
- **Advanced**: Complex logic, performance, architecture decisions

## Exercise Structure Template

Each exercise includes:
- **Title**: Clear, descriptive name
- **Difficulty**: Beginner/Intermediate/Advanced
- **Chapter**: Syllabus alignment
- **Description**: What to accomplish
- **Instructions**: Step-by-step guidance
- **Initial Code**: Starting template
- **Solution**: Reference implementation
- **Hints**: Helpful tips (revealed on demand)
- **Validation**: Must-have keywords, must pass

## Total: 80 Exercises
- Beginner: 30 exercises
- Intermediate: 40 exercises
- Advanced: 10 exercises
