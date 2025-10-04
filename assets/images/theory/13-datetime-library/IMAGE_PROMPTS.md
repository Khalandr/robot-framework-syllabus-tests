# Image Prompts for Section 4.3: DateTime Library

**Style Guide**: Comic book style, sci-fi setting on alien planet Syntax-IV, two robot characters (PROTO-7 student robot and MENTOR-9 teacher robot), crashed spaceship in background, dramatic lighting, 1920x1080 resolution.

**Color Palette**: Dark teal (#2A3F3F), primary teal (#5AB3B5), dark backgrounds (#1A1A1A), gold/yellow for timestamps, blue for time operations.

---

## ex-00-13-01: Get Current Date - Timestamps

**Filename**: `ex-00-13-01-get-current-date.png`

**Prompt**:
```
Comic book style illustration: PROTO-7 at ship's temporal monitor station. Large holographic clock displaying current timestamp in multiple formats: default (2025-10-04 14:30:15.123456), date-only (2025-10-04), time-only (14:30:15), custom format. MENTOR-9 demonstrates Get Current Date operation visualized as capturing moment in time, freezing current timestamp in golden stasis field. Visual metaphor: time as flowing stream, Get Current Date as snapshot capturing exact moment. Multiple format outputs shown as different holographic displays. Code projection showing Get Current Date with result_format parameter. Clock/timestamp glowing in gold. Sci-fi temporal capture, multiple time representations, 1920x1080, comic book art.
```

**Key Elements**:
- Current timestamp in multiple formats
- Time capture/snapshot concept
- Gold/yellow timestamp glow
- Format variation visualization
- Temporal monitoring aesthetic

---

## ex-00-13-02: Add Time To Date - Future Calculations

**Filename**: `ex-00-13-02-add-time-to-date.png`

**Prompt**:
```
Comic book style illustration: Ship's scheduling center. PROTO-7 viewing holographic timeline showing current time (NOW marker) extending into future. MENTOR-9 demonstrates Add Time To Date visualized as projecting timeline forward: +2 hours beam extending from NOW to future point (COOLDOWN COMPLETE marker), +30 minutes to NEXT DIAGNOSTIC marker, +1 day to TOMORROW marker. Visual metaphor: time as linear path, Add Time To Date as forward projection. Timeline with marked points glowing in blue. Duration arrows showing +2h, +30min, +1d additions. Before/after timestamp pairs visible. Code projection showing Add Time To Date with duration parameters. Sci-fi temporal projection, future scheduling, 1920x1080, comic art style.
```

**Key Elements**:
- Timeline visualization (past → present → future)
- Forward time projection arrows
- Multiple duration additions shown
- NOW vs FUTURE markers
- Scheduling/planning concept

---

## ex-00-13-03: Subtract Date From Date - Duration Calculation

**Filename**: `ex-00-13-03-subtract-date.png`

**Prompt**:
```
Comic book style illustration: PROTO-7 at duration analysis console. Two timestamps displayed as temporal markers on timeline: START (14:00:00) and END (14:15:00). MENTOR-9 demonstrates Subtract Date From Date visualized as measuring distance/gap between two time points with measuring beam showing 900 seconds / 15 minutes. Visual metaphor: time as measurable distance, subtraction as gap measurement. Elapsed time shown as glowing segment between markers. Clock showing passage of time with motion blur. Multiple examples: 2-second test duration, 15-minute diagnostic duration, 1-hour operation. Code projection showing Subtract Date From Date returning duration in seconds. Performance measurement concept. Sci-fi temporal measurement, duration visualization, 1920x1080, comic book art.
```

**Key Elements**:
- Two timestamps as temporal markers
- Gap/distance measurement between them
- Duration visualization (900s, 15min)
- Elapsed time segment highlighted
- Performance measurement concept

---

## ex-00-13-04: Convert Date - Format Conversion

**Filename**: `ex-00-13-04-convert-date.png`

**Prompt**:
```
Comic book style illustration: Ship's date format translation station. PROTO-7 viewing three input formats floating as data cards: ISO format (2025-10-04 14:30:15), US format (10/04/2025 02:30:15 PM), European format (04.10.2025 14:30:15). MENTOR-9 operates Convert Date shown as universal translator beam parsing each format and outputting standardized format. Visual metaphor: Babel fish for dates, format translation. Each input format shown in different style/color (ISO=blue, US=red, EU=green), all converting to uniform output (gold). Format codes visible (%Y, %m, %d, %H, %M, %S, %I, %p). Code projection showing Convert Date with date_format (input) and result_format (output) parameters. Multi-language date concept. Sci-fi universal translation, format normalization, 1920x1080, comic art style.
```

**Key Elements**:
- Three different input formats
- Translation/conversion process
- Uniform output format
- Format codes visible (%Y, %m, %d, etc.)
- Universal translator concept

---

## ex-00-13-05: Time-Based Validation Logic

**Filename**: `ex-00-13-05-time-validation.png`

**Prompt**:
```
Comic book style illustration: PROTO-7 at validation checkpoint station. Split-screen display showing two validation scenarios. Left: "Timeout Validation" - operation timeline with start/end markers, elapsed time (1s) compared against max duration limit (5s), green PASS indicator showing operation completed within timeout. Right: "Freshness Validation" - log timestamp (30 minutes old) compared against max age threshold (1 hour), green FRESH indicator. MENTOR-9 demonstrates IF-based decision logic: IF duration > limit THEN Fail ELSE Pass. Visual metaphor: time as quality gate, validation as checkpoint inspection. Duration comparison shown as measuring stick against threshold. Code projection showing DateTime operations combined with IF/ELSE logic. SLA/threshold concept. Sci-fi quality gate, temporal validation, 1920x1080, comic book art.
```

**Key Elements**:
- Two validation types (timeout, freshness)
- Comparison against thresholds
- IF/ELSE decision logic
- Pass/Fail indicators
- Quality gate/checkpoint concept

---

## ch-00-13: Maintenance Window Validator Challenge

**Filename**: `ch-00-13-maintenance-window-challenge.png`

**Prompt**:
```
Comic book style illustration: Epic ship's maintenance control center. PROTO-7 at central console managing comprehensive maintenance validation system. Main display shows 24-hour timeline (00:00 to 24:00) with green highlighted maintenance window zone (00:00-06:00). Five operation bars plotted on timeline: Op1 "Diagnostic" (02:30-03:30, green VALID inside window), Op2 "Backup" (05:00-07:00, red INVALID exceeds window), Op3 "Cleanup" (01:00-01:30, green VALID), Op4 "Update" (08:00-09:00, red INVALID outside window), Op5 "Scan" (04:00-05:30, green VALID). MENTOR-9 oversees operation. Left panel: validation checks showing start time check, end time check, window compliance with checkmarks/X marks. Center: duration calculation showing 3 hours total maintenance time. Right panel: next maintenance scheduler showing tomorrow 00:00:00 timestamp. Visual flow: parse time → validate window → calculate duration → schedule next. DateTime library operations active: Get Current Date, Add Time To Date, Subtract Date From Date, Get Substring, Convert Date. Production maintenance management. Sci-fi temporal scheduling, window enforcement, 1920x1080, comic book art.
```

**Key Elements**:
- 24-hour timeline with maintenance window highlighted (00:00-06:00)
- 5 operations plotted (3 valid green, 2 invalid red)
- Window boundary validation
- Duration calculations visible
- Next maintenance scheduling
- Complete time management workflow

---

## General Notes for AI Image Generation

**Character Consistency**:
- **PROTO-7**: Smaller, sleek silver robot, student, eager posture, teal glowing eyes/accents
- **MENTOR-9**: Larger, robust bronze/copper robot, teacher, confident stance, orange indicator lights

**Setting Consistency**:
- Damaged spaceship interior (Syntax-IV crash site)
- Holographic time displays with code projections
- DateTime library keywords visible
- Sci-fi temporal monitoring equipment
- Alien planet visible through viewports

**Technical Elements**:
- DateTime library import in *** Settings ***
- Keywords: Get Current Date, Add Time To Date, Subtract Date From Date, Convert Date
- Timestamps shown as glowing data
- Timelines, clocks, duration measurements
- Format codes (%Y, %m, %d, %H, %M, %S)

**Color Coding**:
- **Timestamps**: Gold/yellow glow
- **Current time**: Bright gold NOW marker
- **Future time**: Blue projected points
- **Duration/elapsed**: Cyan segments
- **Valid operations**: Green
- **Invalid operations**: Red
- **Maintenance window**: Green zone highlight

**Mood Progression**:
1. **ex-01**: Capture (freezing moments in time)
2. **ex-02**: Projection (looking into future)
3. **ex-03**: Measurement (quantifying elapsed time)
4. **ex-04**: Translation (understanding different formats)
5. **ex-05**: Validation (enforcing time requirements)
6. **challenge**: Management (orchestrating complex scheduling)

---

**File Naming Convention**: `ex-00-13-[number]-[brief-name].png` or `ch-00-13-[brief-name].png`

**Recommended AI Tools**: Midjourney, DALL-E 3, Stable Diffusion XL, or similar high-quality image generation models.
