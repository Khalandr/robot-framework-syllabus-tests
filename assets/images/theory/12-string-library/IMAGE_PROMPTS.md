# Image Prompts for Section 4.2: String Library

**Style Guide**: Comic book style, sci-fi setting on alien planet Syntax-IV, two robot characters (PROTO-7 student robot and MENTOR-9 teacher robot), crashed spaceship in background, dramatic lighting, 1920x1080 resolution.

**Color Palette**: Dark teal (#2A3F3F), primary teal (#5AB3B3), dark backgrounds (#1A1A1A), orange for text operations, cyan for text data.

---

## ex-00-12-01: Split String - Parsing Text

**Filename**: `ex-00-12-01-split-string.png`

**Prompt**:
```
Comic book style illustration: PROTO-7 at text analysis station. Large holographic display shows CSV string "Navigation,Online,75" as continuous glowing text beam. MENTOR-9 demonstrates Split String operation visualized as cutting beam striking at comma delimiters, splitting text into 3 separate data cards: ["Navigation"], ["Online"], ["75"]. Visual metaphor: string as rope/cable being cut at delimiters into segments. Left panel shows solid text, right panel shows segmented list. Each segment highlighted in cyan glow. Delimiter commas shown as cut points with orange markers. Code projection showing Split String syntax with separator parameter. Transformation: single string → list of strings. Sci-fi text parsing, segmentation visualization, 1920x1080, comic book art.
```

**Key Elements**:
- String as continuous beam/cable
- Cut/split operation at delimiters
- Resulting list segments clearly separated
- Delimiter markers visible
- String → List transformation

---

## ex-00-12-02: Replace String - Text Cleaning

**Filename**: `ex-00-12-02-replace-string.png`

**Prompt**:
```
Comic book style illustration: Ship's data cleaning facility. PROTO-7 viewing three error code cards floating in sequence: "ERR-101", "ERR-205", "ERR-350" with dashes glowing red (unwanted characters). MENTOR-9 operates Replace String tool visualized as extraction beam targeting all dashes, removing them with vanishing effect. After transformation shows clean codes: "ERR101", "ERR205", "ERR350" with green glow (normalized). Before/After split screen: messy inconsistent format → clean uniform format. Visual metaphor: text cleaning as removing impurities. Dashes being deleted shown as particles dispersing. ${EMPTY} variable visualized as void/absence. Code projection showing Replace String with old_value → new_value. Sci-fi data normalization, purification aesthetic, 1920x1080, comic art style.
```

**Key Elements**:
- Unwanted characters (dashes) highlighted in red
- Replacement/removal operation
- Before/After comparison
- Normalization result (clean uniform text)
- ${EMPTY} as deletion target

---

## ex-00-12-03: Convert To Upper Case & Lower Case

**Filename**: `ex-00-12-03-case-conversion.png`

**Prompt**:
```
Comic book style illustration: PROTO-7 at text normalization console. Three holographic text cards showing same word in different cases: "navigation", "NAVIGATION", "Navigation" displayed with chaotic mixed formatting (different colors/sizes). MENTOR-9 demonstrates Convert To Lower Case operation shown as unification beam transforming all three to uniform lowercase "navigation" with matching cyan glow. Secondary demonstration of Convert To Upper Case transforming one to "NAVIGATION" in uniform orange glow. Visual metaphor: case conversion as bringing order to chaos, standardization. Left panel: 3 mismatched variations (red warning indicators). Right panel: 3 identical normalized results (green checkmarks). Code projection showing conversion keywords. Text equality visualization: normalized texts shown as perfectly aligned/matching. Sci-fi text standardization, uniformity concept, 1920x1080, comic book art.
```

**Key Elements**:
- Multiple case variations of same word
- Chaotic → Uniform transformation
- All variations becoming identical
- Case conversion as standardization
- Equality after normalization

---

## ex-00-12-04: Get Substring - Extract Text

**Filename**: `ex-00-12-04-substring-extraction.png`

**Prompt**:
```
Comic book style illustration: Ship's positional data extractor. Large display shows error code "ERR-NAV-101" as segmented text with index numbers visible (0,1,2,3,4,5,6,7,8,9,10). PROTO-7 using Get Substring to extract specific ranges visualized as isolation fields highlighting character spans. Three extraction operations shown: Prefix extraction (indices 0-3) highlights "ERR" in blue, System extraction (indices 4-7) highlights "NAV" in green, Number extraction (index 8+) highlights "101" in orange. Each extracted substring shown as separate holographic card floating from original string. Visual metaphor: precision extraction like surgical selection. Index markers clearly visible above each character. Start/end index parameters shown as selection brackets. Non-destructive operation emphasized (original string intact). Sci-fi precision text extraction, character-level access, 1920x1080, comic art style.
```

**Key Elements**:
- Original string with character indices labeled
- Multiple extraction ranges highlighted
- Extracted substrings as separate outputs
- Index-based selection brackets
- Precision/surgical extraction concept

---

## ex-00-12-05: Strip String - Remove Whitespace

**Filename**: `ex-00-12-05-strip-whitespace.png`

**Prompt**:
```
Comic book style illustration: PROTO-7 at data cleansing station. Three input strings visualized as text cards with visible whitespace (shown as faint gray blocks): "  Navigation  ", " Power ", "Engines". MENTOR-9 demonstrates Strip String operation as cleansing beams removing leading/trailing whitespace blocks with dissolving effect. Whitespace shown as contamination/noise (gray particles) being removed. After cleaning shows pristine text: "Navigation", "Power", "Engines" without spaces (bright clean glow). Visual comparison: contaminated text with visible space markers → clean text without markers. Middle spaces preserved and emphasized (not removed). ${SPACE} variable visualized as gray block/particle. Code projection showing Strip String cleaning operation. Visual metaphor: text hygiene, removing invisible dirt. Sci-fi data purification, cleaning aesthetic, 1920x1080, comic book art.
```

**Key Elements**:
- Visible whitespace as gray blocks/particles
- Leading/trailing removal (not middle)
- Contaminated → Clean transformation
- Whitespace as removable noise
- Comparison showing before/after

---

## ch-00-12: Communication Log Parser Challenge

**Filename**: `ch-00-12-log-parser-challenge.png`

**Prompt**:
```
Comic book style illustration: Epic ship's log analysis center. PROTO-7 at central processing console managing multi-stage text pipeline. Main display shows 5 raw messy log entries (extra whitespace, mixed formatting, inconsistent delimiters) on left as chaotic text streams. Center shows processing pipeline visualization: Stage 1 "Strip Whitespace" (cleaning beams), Stage 2 "Split by Delimiter" (segmentation), Stage 3 "Extract Fields" (field isolation), Stage 4 "Normalize Case" (standardization), Stage 5 "Structure Data" (dict creation). Right panel shows final parsed structured data: 5 clean log dictionaries with timestamp, level (ERROR/WARN/INFO color-coded), code, message fields organized neatly. MENTOR-9 oversees operation. Bottom display shows String library operations active: Strip String, Split String, Convert To Upper Case, Get Substring as processing tools. Middle panel: "Filter Errors" showing 2 ERROR logs isolated in red. Bottom panel: formatted report output with professional log formatting. Complete ETL pipeline visualization. Production-scale log processing. Sci-fi data transformation pipeline, multi-stage processing, 1920x1080, comic book art.
```

**Key Elements**:
- 5 raw messy logs (input)
- Multi-stage processing pipeline
- String operations shown as stages
- Structured output (dicts)
- Error filtering panel
- Formatted report generation
- ETL pipeline concept
- Color-coded log levels (ERROR=red, WARN=yellow, INFO=green)

---

## General Notes for AI Image Generation

**Character Consistency**:
- **PROTO-7**: Smaller, sleek silver robot, student, eager posture, teal glowing eyes/accents
- **MENTOR-9**: Larger, robust bronze/copper robot, teacher, confident stance, orange indicator lights

**Setting Consistency**:
- Damaged spaceship interior (Syntax-IV crash site)
- Holographic text displays with code projections
- String library keywords visible in displays
- Sci-fi text processing equipment
- Alien planet visible through viewports

**Technical Elements**:
- String library import in *** Settings ***
- Keywords: Split String, Replace String, Convert To Upper/Lower Case, Get Substring, Strip String
- Text shown as glowing data/holograms
- Delimiters, indices, whitespace visualized
- Text transformations shown as operations

**Color Coding**:
- **Raw/messy text**: Gray/chaotic
- **Clean text**: Cyan/green glow
- **Delimiters**: Orange markers
- **Whitespace**: Gray blocks/particles
- **Unwanted chars**: Red (to be removed)
- **Normalized text**: Uniform color (green success)
- **Log levels**: ERROR (red), WARN (yellow), INFO (green)

**Mood Progression**:
1. **ex-01**: Parsing (breaking text into pieces)
2. **ex-02**: Cleaning (removing unwanted)
3. **ex-03**: Standardization (bringing uniformity)
4. **ex-04**: Precision (extracting exactly what's needed)
5. **ex-05**: Purification (removing invisible noise)
6. **challenge**: Professionalism (production log pipeline)

---

**File Naming Convention**: `ex-00-12-[number]-[brief-name].png` or `ch-00-12-[brief-name].png`

**Recommended AI Tools**: Midjourney, DALL-E 3, Stable Diffusion XL, or similar high-quality image generation models.
