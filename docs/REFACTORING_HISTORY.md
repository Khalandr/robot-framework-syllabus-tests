# Refactoring History

This document tracks major refactoring efforts performed on the codebase.

## JSON Structure Migration (2025-10-04) ✅

**Status**: COMPLETE

Migrated from grouped exercise files to modular 1-file-per-exercise structure.

**Before:**
```
exercises/00-fundamentals/01-first-contact/01-system-boot/
├── exercises.json  (array of 5 exercises)
├── challenge.json  (1 challenge)
└── topic.json      (metadata)
```

**After:**
```
exercises/00-fundamentals/01-first-contact/01-system-boot/
├── section.json         (metadata + references)
├── ex-00-01-01.json     (individual exercise)
├── ex-00-01-02.json
├── ex-00-01-03.json
├── ex-00-01-04.json
├── ex-00-01-05.json
└── ch-00-01.json        (individual challenge)
```

**Benefits:**
- ✅ Atomic updates: Edit one exercise without touching others
- ✅ Parallel development: Multiple developers can work simultaneously
- ✅ Clean git diffs: Only changed exercises show in commits
- ✅ Easy maintenance: Direct file access by exercise ID
- ✅ Future-proof: Scales to 100+ exercises

## Folder Structure Flattening (2025-10-04) ✅

**Status**: COMPLETE

**Problem**: 3-level nesting (Category → Chapter → Section) didn't match frontend (flat list)

**Solution**: Flattened to 2 levels (Category → Section)

**Migration:**
- Moved all section folders from chapter subdirectories to category root
- Renumbered sections sequentially (01-07 currently)
- Removed "chapter" field from all JSON files
- Updated category.json (replaced "topics" with "sections")
- Updated frontend exercises.js (simplified loading logic)

**Benefits:**
- Matches frontend display (flat exercise list)
- Simpler file paths: `exercises/00-fundamentals/01-basic-syntax/`
- Easier to maintain and scale
- Clean 2-level hierarchy

## ID Standardization (2025-10-04) ✅

**Status**: COMPLETE

**Problem**: Inconsistent ID formats mixing old chapter-based and new category-based naming

**Solution**: Standardized all IDs to new naming convention

**Changes:**
- Exercise IDs: `ex-1-1-1` → `ex-00-01-01` (category-section-number)
- Challenge IDs: `challenge-1-1` → `ch-00-01` (category-section)
- Replaced "chapter" field with "category" field throughout

**Format:**
- Exercises: `ex-{category}-{section}-{number}` (e.g., `ex-00-01-01`)
- Challenges: `ch-{category}-{section}` (e.g., `ch-00-01`)

**Files Affected:**
- 42 exercise files (all 7 sections)
- 7 challenge files (all 7 sections)
- 7 section.json metadata files

## Exercise Validation System (2025-10-03) ✅

**Status**: COMPLETE

**Problem**: Exercises ran code but didn't validate against requirements

**Solution**: Full validation system in backend with ValidationRule model

**Implementation:**
- `validate_exercise_rules()` function checks mustContain, forbiddenKeywords
- Frontend sends validation rules from exercise JSON
- Backend returns detailed validation_errors array
- Frontend displays validation issues before/after execution

## Configuration Centralization (2025-10-03) ✅

**Status**: COMPLETE

**Problem**: Hardcoded API URLs, hashes, limits scattered across files

**Solution**: Created `js/config.js` as single source of truth

**Benefits:**
- Environment detection (localhost vs production)
- Easy setting changes
- Consistent configuration access via `config.getApiUrl()`, etc.

**Files Updated**: auth.js, exercises.js use config module

## CSS Variables System (2025-10-03) ✅

**Status**: COMPLETE

**Problem**: 50+ hardcoded rgba() values, magic numbers everywhere

**Solution**: Comprehensive CSS variable system in :root

**Implementation:**
- Opacity variants: --primary-teal-5, --primary-teal-10, etc.
- Spacing scale: --spacing-xs to --spacing-2xl
- Border radius scale: --radius-sm to --radius-xl
- Shadow scale: --shadow-sm to --shadow-lg

**Result**: Maintainable, themeable, scalable styling

## Security Improvements (2025-10-03) ✅

**Status**: COMPLETE

**Problem**: Case-sensitive validation could be bypassed

**Solution**: Regex-based validation with `re.IGNORECASE`

**Patterns**: Blocks import, Library, eval, exec, os., subprocess, socket
