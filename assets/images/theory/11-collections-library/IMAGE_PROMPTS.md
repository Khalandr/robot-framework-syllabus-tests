# Image Prompts for Section 4.1: Collections Library

**Style Guide**: Comic book style, sci-fi setting on alien planet Syntax-IV, two robot characters (PROTO-7 student robot and MENTOR-9 teacher robot), crashed spaceship in background, dramatic lighting, 1920x1080 resolution.

**Color Palette**: Dark teal (#2A3F3F), primary teal (#5AB3B3), dark backgrounds (#1A1A1A), purple/magenta for library features, green for data operations.

---

## ex-00-11-01: Importing Collections Library

**Filename**: `ex-00-11-01-importing-collections.png`

**Prompt**:
```
Comic book style illustration: PROTO-7 at ship's library access terminal. Large holographic display shows *** Settings *** section with "Library    Collections" glowing in purple/magenta as activation sequence. MENTOR-9 points at visualization showing BuiltIn library (always active, blue glow) vs Collections library (must be imported, purple activation). Visual metaphor: tool chest opening to reveal advanced tools (Append To List, Sort List, Get Slice From List) as holographic icons. Empty list visualization on left transforming into populated list using Append To List on right. Code projection showing library import in Settings, then usage in Test Cases. Tool upgrade concept: basic tools → professional equipment. Sci-fi library activation aesthetic, tool manifestation, 1920x1080, comic book art.
```

**Key Elements**:
- Library import as activation/unlocking
- BuiltIn (always active) vs Collections (must import)
- Advanced tools/keywords appearing after import
- Append To List demonstration
- Tool chest/upgrade metaphor

---

## ex-00-11-02: List Operations - Sort and Remove

**Filename**: `ex-00-11-02-sort-and-remove.png`

**Prompt**:
```
Comic book style illustration: Ship's data processing center. PROTO-7 managing holographic list of error codes (E103, E101, E105, E101, E102) displayed as floating data cards in disorganized cloud. MENTOR-9 demonstrates Sort List operation shown as cards rearranging themselves into alphabetical order (E101, E101, E102, E103, E105) with motion lines. Then Remove Values From List visualized as E101 cards (2 duplicates) being extracted/deleted with red glow and vanishing effect. Final sorted, cleaned list shown: E102, E103, E105 in neat alignment. Before/After panels: messy unsorted data → organized sorted data → cleaned no-duplicates data. Visual flow showing data transformation pipeline. Purple Collections library icons for Sort List and Remove Values From List keywords. Sci-fi data manipulation aesthetic, transformation visualization, 1920x1080, comic art style.
```

**Key Elements**:
- List items as floating data cards
- Sorting operation with motion/rearrangement
- Duplicate removal with deletion effect
- Before → During → After transformation
- Data cleaning pipeline visualization

---

## ex-00-11-03: Dictionary Operations

**Filename**: `ex-00-11-03-dictionary-operations.png`

**Prompt**:
```
Comic book style illustration: PROTO-7 at dynamic configuration panel. Large holographic dictionary display showing key-value pairs as connected nodes: "Navigation: Offline", "Power: Online". MENTOR-9 demonstrates Set To Dictionary operation visualized as updating "Navigation: Offline" → "Navigation: Online" with glowing transition effect, and adding new nodes "Engines: Online", "Life Support: Online" materializing with creation sparkles. Get From Dictionary shown as query beam targeting "Navigation" key and extracting "Online" value into highlighted container. Dictionary structure visible as network graph with 4 nodes (keys) connected to value cells. Visual metaphor: live configuration database being modified in real-time. Color coding: keys (cyan), values (green), update operations (yellow pulse), new entries (creation glow). Code projection showing Set To Dictionary and Get From Dictionary syntax. Sci-fi database management, real-time updates, 1920x1080, comic book art.
```

**Key Elements**:
- Dictionary as network/graph structure
- Set To Dictionary as update + add operations
- Get From Dictionary as query/retrieval
- Real-time modification visualization
- Key-value relationship clear

---

## ex-00-11-04: Get Slice From List

**Filename**: `ex-00-11-04-slice-list.png`

**Prompt**:
```
Comic book style illustration: Ship's sensor data analysis room. Large holographic array showing sensor readings list (10, 15, 20, 25, 30, 35, 40, 45, 50) as horizontal data stream with index numbers. PROTO-7 using Get Slice From List to extract sections visualized as selection highlight boxes isolating specific ranges. Three extraction beams shown: First 3 items [10,15,20] with green extraction beam (index 0-3), Last 3 items [40,45,50] with blue extraction beam (index -3), Middle range [25,30,35] with yellow extraction beam (index 3-6). Each extracted slice shown as separate holographic panel. Original list remains intact (non-destructive operation emphasized). Visual metaphor: data slicer/window extracting views without modifying source. Index markers clearly visible (0,1,2...8, and -3,-2,-1 from end). Slicing operation as precision extraction tool. Sci-fi data windowing, multi-panel extraction, 1920x1080, comic art style.
```

**Key Elements**:
- List as horizontal data stream with indices
- Multiple slice operations shown simultaneously
- Selection highlight boxes for ranges
- Extracted slices as separate views
- Non-destructive operation emphasized
- Positive and negative index visualization

---

## ex-00-11-05: Nested Data Structures

**Filename**: `ex-00-11-05-nested-structures.png`

**Prompt**:
```
Comic book style illustration: PROTO-7 viewing 3D holographic data architecture. Center shows list of three component dictionaries stacked vertically: [{name:Navigation, status:Online, power:75}, {name:Power, status:Online, power:90}, {name:Engines, status:Offline, power:0}]. Each dictionary visualized as data cube with labeled fields glowing inside. MENTOR-9 demonstrates FOR loop iteration shown as traversal beam moving through list from top to bottom, at each level using Get From Dictionary to extract fields (name, status) displayed as pulled data streams. Multi-level access pattern visible: list level (vertical stack) → dictionary level (horizontal fields). Visual layers: outer list structure (purple frame) containing inner dict structures (cyan/green cards). Code projection showing FOR ${system} IN @{systems} with nested Get From Dictionary calls. Complex data navigation concept with clear hierarchical structure. Sci-fi data architecture, 3D nested visualization, 1920x1080, comic book art.
```

**Key Elements**:
- 3D visualization of list containing dicts
- Clear hierarchical structure (list → dicts → fields)
- FOR loop traversal shown as beam/path
- Multi-level data access pattern
- Nested structure clearly distinguished

---

## ch-00-11: System Inventory Management Challenge

**Filename**: `ch-00-11-inventory-management-challenge.png`

**Prompt**:
```
Comic book style illustration: Epic ship's inventory control center. PROTO-7 at central console managing comprehensive inventory system with multiple holographic panels. Main panel shows 6 component cards (Navigation, Power Core, Backup Power, Main Engine, Life Support, Sensors) each displaying properties: name, type, status (Online/Offline), priority (1-3). Color coding: Online components (green glow), Offline components (red glow), Critical priority-1 (golden star badge). MENTOR-9 oversees operation. Left panel: "Critical Filter" showing 4 priority-1 components extracted with FOR + IF logic visualization. Center panel: "Status Filter" showing 2 Offline components (Backup Power, Sensors) isolated. Right panel: "Summary Statistics" displaying Total:6, Online:4, Offline:2, Critical:4 with bar graphs. Data flow arrows showing inventory → filters → results. Bottom display shows Collections library operations: Create Dictionary, Append To List, Get From Dictionary, List Should Contain Value as active tools. Complete data management pipeline visualization. Production-scale inventory system. Sci-fi asset management, multi-panel data operations, comprehensive filtering, 1920x1080, comic book art.
```

**Key Elements**:
- 6 component cards with all properties visible
- Color-coded status (green/red) and priority badges
- Multiple filtering operations shown
- Summary statistics panel
- Data flow: inventory → filters → results
- Collections keywords as active tools
- Production inventory management concept

---

## General Notes for AI Image Generation

**Character Consistency**:
- **PROTO-7**: Smaller, sleek silver robot, student, eager posture, teal glowing eyes/accents, learning/observing body language
- **MENTOR-9**: Larger, more robust bronze/copper robot, teacher, confident stance, orange indicator lights, instructional gestures

**Setting Consistency**:
- Damaged spaceship interior (Syntax-IV crash site)
- Holographic displays with code projections
- Collections library keywords visible in displays
- Sci-fi control panels and data terminals
- Alien planet visible through viewports when relevant

**Technical Elements**:
- Library import in *** Settings *** section
- Collections keywords: Append, Sort, Remove, Get From Dictionary, Get Slice From List
- List and dictionary data structures visualized
- Nested data shown as hierarchical structures
- FOR loops iterating through data
- Color coding for data types and states

**Color Coding**:
- **Collections library**: Purple/magenta (library-specific features)
- **Lists**: Green (data collections)
- **Dictionaries**: Cyan keys + green values
- **Operations**: Yellow pulse/glow during modification
- **Filters**: Extraction beams (green/blue/yellow)
- **Status**: Online (green), Offline (red), Critical (gold)

**Mood Progression**:
1. **ex-01**: Empowerment (unlocking advanced tools)
2. **ex-02**: Organization (sorting and cleaning data)
3. **ex-03**: Configuration (dynamic updates)
4. **ex-04**: Precision (extracting exactly what you need)
5. **ex-05**: Complexity (mastering nested structures)
6. **challenge**: Professionalism (production inventory system)

---

**File Naming Convention**: `ex-00-11-[number]-[brief-name].png` or `ch-00-11-[brief-name].png`

**Recommended AI Tools**: Midjourney, DALL-E 3, Stable Diffusion XL, or similar high-quality image generation models.
