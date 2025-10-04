# Image Prompts for Section 3.2: TRY/EXCEPT Error Handling

**Style Guide**: Comic book style, sci-fi setting on alien planet Syntax-IV, two robot characters (PROTO-7 student robot and MENTOR-9 teacher robot), crashed spaceship in background, dramatic lighting, 1920x1080 resolution.

**Color Palette**: Dark teal (#2A3F3F), primary teal (#5AB3B3), dark backgrounds (#1A1A1A), orange/red warning lights for error scenes, green for success recovery.

---

## ex-00-09-01: Basic Error Catching

**Filename**: `ex-00-09-01-basic-error-catching.png`

**Prompt**:
```
Comic book style illustration: Inside spaceship sensor bay. PROTO-7 (smaller student robot, silver with teal accents) stands at diagnostic console attempting to read a visibly damaged sensor (sparking, cracked, red warning lights). MENTOR-9 (larger experienced robot, bronze with orange lights) points at holographic display showing TRY/EXCEPT code structure with "TRY → Risky Operation → EXCEPT → Handle Error → END" flow diagram. On the left side, a split-screen effect shows "Without TRY/EXCEPT" (test crashed, red X) vs "With TRY/EXCEPT" (test continues, green checkmark). Error message "Sensor timeout" displayed on screen with EXCEPT block catching it. Sparks flying from damaged sensor. Console shows "Test Status: PASSED (error handled)". Sci-fi setting, dramatic contrast between failure and recovery, 1920x1080, comic art style.
```

**Key Elements**:
- Damaged sensor with sparks/errors
- TRY/EXCEPT flow diagram
- Split-screen: crash vs recovery
- Error message being caught
- Test continues despite error

---

## ex-00-09-02: Capturing Error Messages

**Filename**: `ex-00-09-02-error-message-capture.png`

**Prompt**:
```
Comic book style illustration: PROTO-7 and MENTOR-9 in power control room. Large holographic display in center shows error message "Power surge detected" being captured into a variable displayed as glowing text container labeled "${error}". MENTOR-9 gestures at code projection showing "EXCEPT AS ${error}" syntax with arrow pointing from error source to variable. PROTO-7 examines detailed error log on secondary screen showing captured message text. Power system panels in background pulsing with orange warning lights. Visual flow: Error occurs → EXCEPT catches → AS captures message → Variable stores text → Log displays it. Terminal shows "Error occurred: Power surge detected" in bright text. Diagnostic information flowing from error source to logging system. Sci-fi tech aesthetic, information flow visualization, 1920x1080, comic book art.
```

**Key Elements**:
- Error message being captured visually
- AS keyword capturing into variable
- Variable container showing ${error}
- Information flow from error to log
- Diagnostic logging display

---

## ex-00-09-03: TRY/EXCEPT/ELSE Flow

**Filename**: `ex-00-09-03-try-except-else-flow.png`

**Prompt**:
```
Comic book style illustration: Spaceship navigation room with branching path visualization. Center shows large flowchart hologram with three glowing paths: TRY path (blue) splitting into two routes - EXCEPT path (red, showing error icon) and ELSE path (green, showing success icon). PROTO-7 stands at navigation console watching system check results. MENTOR-9 points at the flowchart explaining branching logic. Left panel shows "Error Scenario": TRY → Error occurs → EXCEPT runs (red highlight) → ELSE skipped (dimmed). Right panel shows "Success Scenario": TRY → No error → EXCEPT skipped (dimmed) → ELSE runs (green highlight). Navigation system status displays showing "Status: ONLINE" with green indicators. Code projection shows TRY/EXCEPT/ELSE/END structure with arrows indicating flow. Sci-fi decision tree visualization, clear success/failure paths, 1920x1080, comic art style.
```

**Key Elements**:
- Branching path flowchart
- Two scenarios side by side
- Success path (green) vs error path (red)
- ELSE only runs on success
- Clear visual flow logic

---

## ex-00-09-04: FINALLY Block - Guaranteed Cleanup

**Filename**: `ex-00-09-04-finally-cleanup.png`

**Prompt**:
```
Comic book style illustration: Communication port control station. PROTO-7 managing open communication port (visualized as glowing energy conduit, port 8080 label visible). MENTOR-9 points at holographic display showing TRY/EXCEPT/FINALLY structure with FINALLY block highlighted in bright yellow/gold indicating "ALWAYS RUNS". Two parallel timelines shown: Timeline 1 "Error Case": TRY opens port → Error occurs → EXCEPT handles → FINALLY closes port (guaranteed). Timeline 2 "Success Case": TRY opens port → Success → FINALLY closes port (guaranteed). Both timelines converge at FINALLY block. Port status indicator showing ${port_open} = True changing to False in FINALLY. Visual metaphor: door opening in TRY, closing in FINALLY regardless of path. Terminal displays "Port status: False" after FINALLY. Resource leak prevention emphasized. Sci-fi control panels, energy flow visualization, 1920x1080, comic book art.
```

**Key Elements**:
- Open/close resource visualization
- Two parallel timelines converging at FINALLY
- FINALLY always executes (emphasized)
- Port status changing in cleanup
- Resource management concept

---

## ex-00-09-05: Specific Exception Types

**Filename**: `ex-00-09-05-exception-types.png`

**Prompt**:
```
Comic book style illustration: Multi-panel error sorting facility. PROTO-7 at sensor data processing station with incoming sensor data stream (glowing particles flowing toward multiple EXCEPT filters). MENTOR-9 displays holographic sorting system showing three EXCEPT blocks like filtering gates: First gate "EXCEPT ValueError" (orange filter) catches specific error type, second gate "EXCEPT TypeError" (yellow filter) catches different type, third gate "EXCEPT (general)" (red catch-all) catches everything else. Visual representation of error flowing through filters until matching EXCEPT catches it. Data value "invalid_data" attempting conversion, hitting ValueError filter which lights up and activates. Code projection shows multiple EXCEPT blocks in order with arrows showing error routing. Each EXCEPT has different icon: ValueError (broken number), TypeError (wrong shape), general catch-all (question mark). Terminal showing "ValueError caught: invalid literal for int()" with handling logic "Using default value instead". Sci-fi error processing pipeline, color-coded exception types, 1920x1080, comic art style.
```

**Key Elements**:
- Multiple EXCEPT blocks as filters
- Error routing/sorting visualization
- Specific error types (ValueError, TypeError)
- First-match filtering logic
- Data flow through exception handlers

---

## ch-00-09: Resilient System Diagnostic Challenge

**Filename**: `ch-00-09-resilient-diagnostic-challenge.png`

**Prompt**:
```
Comic book style illustration: Epic wide shot of ship's main diagnostic bay. PROTO-7 at central command console managing complex multi-system diagnostic with 5 holographic panels floating in arc formation, each representing a ship system (Navigation, Power, Life Support, Communications, Engines). Three panels show green checkmarks (successful), one panel yellow warning (timeout retry), one panel red alert (critical error), but overall diagnostic continues running. MENTOR-9 oversees entire operation. Large overhead hologram shows nested FOR loop containing TRY/EXCEPT/ELSE/FINALLY structure with multiple branches. Visual indicators: Navigation (green, "OK"), Power (yellow, "timeout → retry → OK"), Life Support (green, "OK"), Communications (orange, "ValueError → fallback → OK"), Engines (red, "CRITICAL → logged"). Error counter displaying "Errors handled: 3/5". FINALLY block ensures all systems get status logged. Timeline showing sequential system checks continuing despite errors. Terminal displays comprehensive diagnostic summary: "Diagnostic complete: 5/5 systems checked, Errors handled: 3, WARNING: Multiple system issues detected". Intense monitoring atmosphere, production-grade resilience, all errors handled gracefully, no test crashes. Sci-fi command center, dramatic multi-panel composition, 1920x1080, comic book art.
```

**Key Elements**:
- 5 system panels with different statuses
- Mix of success/retry/fallback/critical
- FOR loop + TRY/EXCEPT nesting shown
- Error counter and summary stats
- Resilient automation visualization
- All systems checked despite failures
- Production-grade diagnostic workflow

---

## General Notes for AI Image Generation

**Character Consistency**:
- **PROTO-7**: Smaller, sleek silver robot, student, eager posture, teal glowing eyes/accents, learning/observing body language
- **MENTOR-9**: Larger, more robust bronze/copper robot, teacher, confident stance, orange indicator lights, instructional gestures

**Setting Consistency**:
- Damaged spaceship interior (Syntax-IV crash site)
- Holographic displays with code projections
- Robot Framework TRY/EXCEPT syntax visible in code displays
- Sci-fi control panels and monitoring equipment
- Alien planet visible through viewports when relevant

**Technical Elements**:
- TRY/EXCEPT/ELSE/FINALLY syntax clearly visible
- Error flow visualization (paths, branches, filters)
- Exception types labeled (ValueError, TypeError, etc.)
- Error messages shown in terminals/displays
- AS keyword capturing errors into variables
- Multiple EXCEPT blocks showing filtering logic

**Color Coding**:
- **TRY blocks**: Blue (normal operation)
- **EXCEPT blocks**: Red/orange (error handling)
- **ELSE blocks**: Green (success path)
- **FINALLY blocks**: Yellow/gold (guaranteed cleanup)
- **Error messages**: Bright red/orange warning text
- **Success recovery**: Green checkmarks/indicators

**Mood Progression**:
1. **ex-01**: Learning/relief (errors caught, not crashed)
2. **ex-02**: Information gathering (capturing error details)
3. **ex-03**: Decision making (success vs error paths)
4. **ex-04**: Responsibility (cleanup guaranteed)
5. **ex-05**: Sophistication (filtering, specialized handling)
6. **challenge**: Mastery/resilience (complex multi-system recovery)

---

**File Naming Convention**: `ex-00-09-[number]-[brief-name].png` or `ch-00-09-[brief-name].png`

**Recommended AI Tools**: Midjourney, DALL-E 3, Stable Diffusion XL, or similar high-quality image generation models.
