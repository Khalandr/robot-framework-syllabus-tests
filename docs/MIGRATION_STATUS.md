# Migration Status: V1 → V2 with New Structure

**Started:** 2025-10-02
**Target:** Migrate 80 exercises to V2 schema + hierarchical structure
**Status:** 🚧 In Progress

---

## What Needs to Be Done

###  1. Structure Changes ✅ DONE
- [x] Create `exercises-v2/` folder
- [x] Create hierarchical structure (4 categories, 10 topics)
- [x] Create root `index.json`

### 2. Metadata Files (8 files)
- [ ] 01-fundamentals/category.json
- [ ] 01-fundamentals/01-basic-syntax/topic.json
- [ ] 01-fundamentals/02-variables/topic.json
- [ ] 01-fundamentals/03-control-flow/topic.json
- [ ] 02-keywords/category.json
- [ ] 02-keywords/01-builtin-basics/topic.json
- [ ] 02-keywords/02-advanced-keywords/topic.json
- [ ] 03-organization/category.json
- [ ] 03-organization/01-test-structure/topic.json
- [ ] 03-organization/02-data-driven/topic.json
- [ ] 04-real-world/category.json
- [ ] 04-real-world/01-practical-scenarios/topic.json
- [ ] 04-real-world/02-best-practices/topic.json
- [ ] 04-real-world/03-debugging/topic.json

### 3. Exercise Migration (80 exercises → 10 files)
Each exercise needs:
- ✅ Existing fields (id, title, description, etc.)
- ❌ **NEW:** `free: true` flag
- ❌ **NEW:** `theory` object with:
  - title
  - content (200-500 words, markdown)
  - learningObjectives (3-5 items)
  - relatedConcepts (3-5 items)
  - documentation link
  - estimatedReadTime
- ❌ **NEW:** `metadata` object with:
  - tags (5-10 tags per exercise)
  - estimatedTime
  - prerequisites
  - nextExercises
  - version: "2.0"
  - lastUpdated

**Estimated Work:**
- Per exercise: 10-15 minutes (write theory, add metadata)
- Total: 80 exercises × 12 minutes = **16 hours of work**

---

## Proposed Approach

### Option A: Manual Migration (Complete)
- Write theory for all 80 exercises
- Takes 16+ hours
- High quality, custom content
- **Status:** Too time-consuming for immediate implementation

### Option B: Phased Migration (Recommended) ⭐
1. **Phase 1** (NOW): Migrate structure + add schema WITHOUT theory
   - Add `free: true` to all
   - Add empty theory placeholders
   - Add basic metadata
   - **Time: 2-3 hours**

2. **Phase 2** (Later): Add theory content gradually
   - 10 exercises per session
   - 8 sessions total
   - Can be done over time

### Option C: AI-Assisted Migration
- Use AI to generate theory drafts
- Human review and edit
- **Time: 6-8 hours**

---

## Decision Required

**Question:** Which approach should we take?

**Recommendation:** Option B (Phased)
1. Migrate to new structure NOW with minimal V2 schema
2. Add theory content later in batches
3. This unblocks other work while improving quality over time

**Minimal V2 Schema (for Phase 1):**
```json
{
  "id": "ex-1-1",
  "title": "Your First Robot Test",
  "difficulty": "beginner",
  "chapter": "1",
  "free": true,  // NEW
  "theory": {    // NEW - placeholder
    "title": "Theory Coming Soon",
    "content": "Detailed theory will be added soon.",
    "learningObjectives": ["Learn the concept"],
    "relatedConcepts": []
  },
  // ... existing fields ...
  "metadata": {  // NEW
    "tags": ["basics", "log"],
    "estimatedTime": "5 minutes",
    "version": "2.0",
    "lastUpdated": "2025-10-02"
  }
}
```

---

## Current Progress

- ✅ Docs moved to `docs/planning/`
- ✅ New structure designed
- ✅ Folder structure created (`exercises-v2/`)
- ✅ Root index.json created
- ⏳ Category/topic metadata (0/14)
- ⏳ Exercise migration (0/80)
- ⏳ Frontend update (not started)
- ⏳ Testing (not started)

---

## Next Immediate Action

**Awaiting User Decision:**
- Option A: Full migration with theory (16+ hours)
- Option B: Phased migration (structure now, theory later)
- Option C: AI-assisted theory generation

**Once decided, I will:**
1. Create all metadata files (14 files)
2. Migrate exercises with chosen schema level
3. Update frontend to load new structure
4. Test and commit

**Estimated time for Phase 1 (Option B):** 2-3 hours of focused work
