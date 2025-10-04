# Image Prompts for Section 2.3: Test Templates

**Style Guide**: Comic book style, sci-fi setting on alien planet Syntax-IV, two robot characters (PROTO-7 student robot and MENTOR-9 teacher robot), crashed spaceship in background, dramatic lighting, 1920x1080 resolution.

**Color Palette**: Dark teal (#2A3F3F), primary teal (#5AB3B3), dark backgrounds (#1A1A1A), green for data rows, blue for template logic.

---

## ex-00-10-01: First Template - Basic Data-Driven Test

**Filename**: `ex-00-10-01-first-template.png`

**Prompt**:
```
Comic book style illustration: PROTO-7 and MENTOR-9 in ship's power monitoring station. Large holographic display shows [Template] structure with one keyword "Should Be True" at top connected to 5 data rows below like a tree diagram. Each data row shows power level validation (50>=20, 75>=20, 90>=20, 45>=20, 100>=20) with green checkmarks. MENTOR-9 points at template explaining "ONE test logic, FIVE executions". Visual metaphor: single mold creating multiple identical parts. Left panel shows traditional approach (5 separate test cases, repetitive). Right panel shows template approach (1 template, 5 data rows, clean). Code projection displays [Template] tag with Should Be True keyword and data rows clearly separated. Data rows highlighted in green. PROTO-7 having "aha!" moment. Sci-fi data visualization, clean comparison, 1920x1080, comic book art.
```

**Key Elements**:
- Template as tree: one keyword → multiple data rows
- Visual comparison: traditional vs template approach
- Green checkmarks for passing validations
- Data rows clearly distinguished from logic
- "One logic, many executions" concept

---

## ex-00-10-02: Custom Keyword Template

**Filename**: `ex-00-10-02-custom-keyword-template.png`

**Prompt**:
```
Comic book style illustration: Spaceship diagnostic bay. PROTO-7 viewing holographic workflow showing custom keyword "Check System Status" as reusable module with [Arguments] inputs (system name, expected status). Workflow shows keyword internals (Log → Should Be Equal → Log) as connected steps. Below, template execution displays 5 system names (Navigation, Power, Life Support, Communications, Engines) flowing through the same keyword module like items on assembly line. MENTOR-9 gestures at both sections explaining reusability. Each system card shows name + status passing through keyword inspection. Visual metaphor: factory assembly line where same inspection process applied to different products. Code projection shows *** Keywords *** section with custom keyword definition, then *** Test Cases *** with [Template] calling it. Data rows as conveyor belt items. Sci-fi manufacturing aesthetic, process flow visualization, 1920x1080, comic art style.
```

**Key Elements**:
- Custom keyword as reusable module/inspection station
- Assembly line metaphor for data flow
- 5 systems passing through same logic
- Clear separation: keyword definition vs template usage
- Process flow visualization

---

## ex-00-10-03: Suite-Level Test Template

**Filename**: `ex-00-10-03-suite-level-template.png`

**Prompt**:
```
Comic book style illustration: Ship's central diagnostic hub. Large overhead hologram shows *** Settings *** section at top with "Test Template" declaration radiating downward to ALL test cases below like umbrella or broadcast signal. Three test case boxes ("Navigation Check", "Power Check", "Engines Check") all receiving same template from above, shown as blue data streams connecting Settings to each test. MENTOR-9 points upward at Settings explaining "Declare ONCE, applies to ALL". PROTO-7 viewing multiple test cases, each with data rows but no [Template] tags (inherited from Settings). Visual contrast: left side shows repetitive [Template] tags in each test (crossed out as "OLD WAY"), right side shows Settings template covering all (marked "EFFICIENT"). Broadcast/inheritance metaphor with signals emanating from Settings section. Code projection shows Settings with Test Template, then multiple tests automatically using it. Sci-fi broadcast/distribution aesthetic, 1920x1080, comic book art.
```

**Key Elements**:
- Settings template as broadcast/umbrella covering all tests
- Inheritance visualization (Settings → all tests)
- Comparison: repetitive vs centralized approach
- Multiple test cases receiving same template
- Blue data streams showing inheritance

---

## ex-00-10-04: Templates with Variables

**Filename**: `ex-00-10-04-templates-with-variables.png`

**Prompt**:
```
Comic book style illustration: PROTO-7 at configuration station with three-tier holographic display. Top tier: *** Variables *** section showing ${MIN_POWER}, ${MAX_POWER}, @{SYSTEMS} list as glowing data containers with values visible. Middle tier: custom keyword "Validate Power Range" with logic using variables (arrows pointing from variables to keyword internals). Bottom tier: template data rows showing ${SYSTEMS}[0], ${SYSTEMS}[1] accessing list items and power values ${75}, ${90}. MENTOR-9 demonstrates flow: "Change variable → updates ALL". Visual highlighting showing ${MIN_POWER} = 20 connected to multiple validation points in keyword. Data flow arrows from Variables → Keywords → Test Cases. Left panel shows hardcoded values (many edits needed). Right panel shows variables (one edit, many updates). Maintainability concept visualized as single control point affecting multiple systems. Sci-fi data architecture, layered structure, 1920x1080, comic book style.
```

**Key Elements**:
- Three-tier architecture: Variables → Keywords → Test Cases
- Data flow from variables through system
- List variable access visualization ${SYSTEMS}[index]
- Comparison: hardcoded vs variable-driven
- Single change, multiple updates concept

---

## ex-00-10-05: Disabling Template with NONE

**Filename**: `ex-00-10-05-template-none.png`

**Prompt**:
```
Comic book style illustration: Ship diagnostic control room. Split visualization showing template inheritance flow. Top: Settings section with "Test Template" broadcasting blue signal to three test cases below. First two test cases ("Template Test 1", "Template Test 2") receiving blue template signal, showing data rows only. Third test case ("Regular Test") has [Template] NONE shield blocking template signal, showing regular keywords (Log, Set Variable, Should Be Equal) instead of data rows. MENTOR-9 points at NONE shield explaining "Opt out when needed". PROTO-7 views comparison between templated tests (data rows, blue glow) and regular test (keywords, orange glow). Visual metaphor: template signal as broadcast that can be blocked. Code projection shows Settings template, two tests inheriting it, one test with [Template] NONE overriding. Shield/blocker icon for NONE. Flexibility concept: "Same suite, different approaches". Sci-fi signal blocking, mixed test types, 1920x1080, comic art.
```

**Key Elements**:
- Template broadcast with NONE as shield/blocker
- Visual contrast: templated tests (blue) vs regular test (orange)
- Signal inheritance with opt-out mechanism
- Mixed test types in same suite
- Flexibility/override concept

---

## ch-00-10: Component Compatibility Matrix Challenge

**Filename**: `ch-00-10-compatibility-matrix-challenge.png`

**Prompt**:
```
Comic book style illustration: Epic wide shot of ship's compatibility testing center. PROTO-7 at central console managing massive 3D matrix hologram showing 5 components (vertical axis: Navigation, Power, Engines, Life Support, Communications) × 3 firmware versions (horizontal axis: v2.1.0, v2.2.0, v2.3.0) = 15 intersection points. Each intersection shows compatibility score (85-98) with color coding: green (>90), yellow (85-90). MENTOR-9 oversees operation. Large overhead display shows Variables section with @{COMPONENTS} and @{FIRMWARE_VERSIONS} lists as data sources feeding into matrix. Custom keyword "Check Component Compatibility" shown as inspection gateway processing each matrix cell. Template execution visualized as data flowing through rows: each component tested against all firmware versions systematically. Bottom panel shows test organization: 4 templated test cases (one per component) + 1 summary test with [Template] NONE. Matrix cells lighting up sequentially as tests execute. Statistics display: "15 compatibility checks, 5 components, 3 firmware versions". Production-scale testing visualization. Sci-fi matrix/grid aesthetic, systematic data processing, comprehensive testing workflow, 1920x1080, comic book art.
```

**Key Elements**:
- 3D compatibility matrix (components × firmware)
- 15 test combinations visualized
- Color-coded compatibility scores
- Data sources (Variables) feeding matrix
- Template workflow processing matrix systematically
- Summary statistics and reporting
- Production-scale testing concept

---

## General Notes for AI Image Generation

**Character Consistency**:
- **PROTO-7**: Smaller, sleek silver robot, student, eager posture, teal glowing eyes/accents, learning/observing body language
- **MENTOR-9**: Larger, more robust bronze/copper robot, teacher, confident stance, orange indicator lights, instructional gestures

**Setting Consistency**:
- Damaged spaceship interior (Syntax-IV crash site)
- Holographic displays with code projections
- Robot Framework [Template] syntax visible in code displays
- Sci-fi control panels and monitoring equipment
- Alien planet visible through viewports when relevant

**Technical Elements**:
- [Template] tag clearly visible in displays
- Data rows vs keywords distinction shown
- Variables section with list and scalar variables
- Custom keyword definitions with [Arguments]
- Test Template in Settings section
- [Template] NONE override shown
- Matrix/grid visualizations for compatibility testing

**Color Coding**:
- **Template logic**: Blue (keyword definition)
- **Data rows**: Green (data flowing through template)
- **Variables**: Cyan/teal (data sources)
- **Inheritance**: Blue broadcast signals
- **Regular tests**: Orange (non-templated)
- **Compatibility scores**: Green (high), yellow (acceptable)

**Mood Progression**:
1. **ex-01**: Discovery/efficiency ("Aha! No more repetition!")
2. **ex-02**: Reusability (assembly line, modular design)
3. **ex-03**: Inheritance (centralized control)
4. **ex-04**: Maintainability (variables powering system)
5. **ex-05**: Flexibility (mixing approaches)
6. **challenge**: Mastery/scale (production-grade matrix testing)

---

**File Naming Convention**: `ex-00-10-[number]-[brief-name].png` or `ch-00-10-[brief-name].png`

**Recommended AI Tools**: Midjourney, DALL-E 3, Stable Diffusion XL, or similar high-quality image generation models.
