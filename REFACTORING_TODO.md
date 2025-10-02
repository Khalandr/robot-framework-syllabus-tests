# Refactoring TODO - Before Scaling to 75+ Exercises

## 🔥 CRITICAL - Do Before Adding More Exercises

### 1. Exercise Validation System (HIGHEST PRIORITY)
**Status**: ❌ Not Implemented
**Effort**: 8 hours
**Impact**: Critical - Can't scale without this

**Current Problem**:
- Validation rules exist in JSON but aren't enforced
- Backend only executes code, doesn't validate against rules
- No way to check if student's solution is correct beyond pass/fail

**Implementation Tasks**:
- [ ] Add validation logic to backend (`backend/app/main.py`)
- [ ] Parse validation rules from frontend request
- [ ] Implement `mustContain` keyword checking
- [ ] Implement `forbiddenKeywords` checking
- [ ] Add output validation (expected stdout/stderr)
- [ ] Return detailed validation errors to frontend
- [ ] Update frontend to display validation feedback
- [ ] Test with existing 5 exercises

**Files to Change**:
- `backend/app/main.py` (add validation logic)
- `js/exercises.js` (send validation rules, handle response)

---

### 2. Configuration Management
**Status**: ❌ Not Done
**Effort**: 2 hours
**Impact**: High - Breaks in production

**Current Problem**:
- API URL hardcoded: `http://localhost:8000/api/execute`
- CORS origins hardcoded in backend
- Password hash in source code
- No environment-based config

**Implementation Tasks**:
- [ ] Create `js/config.js`
- [ ] Centralize API_BASE_URL (dev vs prod)
- [ ] Move password hash to config
- [ ] Update backend CORS to use env variables
- [ ] Add timeout/limit constants to config
- [ ] Update all JS modules to import config

**Files to Create/Change**:
- `js/config.js` (new)
- `js/exercises.js` (use config)
- `js/auth.js` (use config)
- `backend/app/main.py` (env-based CORS)

---

### 3. Backend Security Fixes
**Status**: ⚠️ Vulnerable
**Effort**: 3 hours
**Impact**: High - Can be exploited

**Current Problems**:
- Case-sensitive validation: `import` vs `Import`
- Whitespace bypass possible
- No rate limiting
- Weak keyword blacklist

**Implementation Tasks**:
- [ ] Convert validation to regex-based (case-insensitive)
- [ ] Add rate limiting (10 req/min per session)
- [ ] Strengthen keyword blacklist
- [ ] Add IP-based request tracking
- [ ] Test bypass attempts

**Files to Change**:
- `backend/app/main.py`
- `backend/requirements.txt` (add `slowapi` for rate limiting)

---

### 4. CSS Variables for Opacity/Spacing
**Status**: ❌ Not Done
**Effort**: 4 hours
**Impact**: High - 50+ hardcoded values

**Current Problems**:
- `rgba(90, 179, 179, 0.1)` repeated 25+ times
- Magic numbers for padding/margin (19+ instances)
- Hardcoded border-radius (15+ instances)

**Implementation Tasks**:
- [ ] Add CSS variables for opacity variants (0.05, 0.1, 0.2, 0.3)
- [ ] Add spacing scale (xs, sm, md, lg, xl)
- [ ] Add border-radius scale (sm, md, lg, xl)
- [ ] Add shadow scale
- [ ] Replace all hardcoded values with variables
- [ ] Test visual consistency

**Files to Change**:
- `css/styles.css` (add variables at top, replace usage)

---

## 🟡 HIGH PRIORITY - Do Soon

### 5. Remove Inline Styles from JavaScript
**Status**: ❌ Not Done
**Effort**: 6 hours
**Impact**: Medium - Maintainability

**Current Problem**:
- 31+ instances of `.style.cssText =` and `.innerHTML` with inline styles
- Especially in `js/stats.js` and `js/exercises.js`

**Implementation Tasks**:
- [ ] Create CSS classes for dynamically generated elements
- [ ] Add `.breakdown-item`, `.progress-bar-fill`, etc.
- [ ] Remove inline styles from `js/stats.js`
- [ ] Remove inline styles from `js/exercises.js`
- [ ] Remove inline styles from `js/quiz.js`
- [ ] Test all dynamic UI elements

**Files to Change**:
- `css/styles.css` (add new classes)
- `js/stats.js`
- `js/exercises.js`
- `js/quiz.js`

---

### 6. DOM Utilities Module
**Status**: ❌ Not Done
**Effort**: 4 hours
**Impact**: Medium - Reduces boilerplate

**Current Problem**:
- 65+ instances of `document.getElementById`
- Repeated DOM manipulation patterns
- No abstraction layer

**Implementation Tasks**:
- [ ] Create `js/dom-utils.js`
- [ ] Add helper methods (byId, query, show, hide, addClass, etc.)
- [ ] Refactor modules to use utilities
- [ ] Test all DOM operations

**Files to Create/Change**:
- `js/dom-utils.js` (new)
- All JS modules (gradually refactor)

---

### 7. Question File Manifest System
**Status**: ❌ Not Done
**Effort**: 3 hours
**Impact**: Medium - Auto-discovery

**Current Problem**:
- 22 question files manually listed in `js/questions.js`
- Must update code when adding new questions

**Implementation Tasks**:
- [ ] Create build script to generate `questions/manifest.json`
- [ ] Update `questions.js` to load from manifest
- [ ] Add to npm build scripts
- [ ] Test with existing questions
- [ ] Document process

**Files to Create/Change**:
- `build-scripts/generate-manifest.js` (new)
- `package.json` (add build script)
- `js/questions.js` (load from manifest)
- `questions/manifest.json` (generated)

---

## 🟢 MEDIUM PRIORITY - Before Production

### 8. Event-Driven Architecture
**Status**: ❌ Not Done
**Effort**: 5 hours
**Impact**: Medium - Decoupling

**Implementation Tasks**:
- [ ] Create `js/events.js`
- [ ] Define app events (QUIZ_COMPLETED, SCREEN_CHANGE, etc.)
- [ ] Refactor tight coupling in modules
- [ ] Test event flow

---

### 9. Error Handling Utility
**Status**: ❌ Not Done
**Effort**: 3 hours
**Impact**: Medium - User experience

**Implementation Tasks**:
- [ ] Create `js/error-handler.js`
- [ ] Centralize error logging
- [ ] Add user-facing error notifications
- [ ] Replace all console.error calls

---

### 10. Remove Inline Event Handlers
**Status**: ❌ Not Done
**Effort**: 2 hours
**Impact**: Low - Best practices

**Implementation Tasks**:
- [ ] Remove 13 `onclick=""` handlers from HTML
- [ ] Add event listeners in JavaScript
- [ ] Test all interactions

---

## 📊 Progress Tracker

| Category | Tasks | Completed | Status |
|----------|-------|-----------|--------|
| Critical | 4 | 0 | ❌ 0% |
| High Priority | 3 | 0 | ❌ 0% |
| Medium Priority | 3 | 0 | ❌ 0% |
| **Total** | **10** | **0** | **0%** |

---

## 🎯 Recommended Order

1. **Exercise Validation System** (8h) - Can't scale without this
2. **Backend Security Fixes** (3h) - Prevent exploits
3. **Configuration Management** (2h) - Needed for deployment
4. **CSS Variables** (4h) - Makes styling maintainable
5. **Remove Inline Styles** (6h) - Clean up technical debt
6. **DOM Utilities** (4h) - Reduces boilerplate
7. **Question Manifest** (3h) - Enables easy content addition

**Total Estimated Time**: 30 hours for critical path (items 1-4)

---

## 🚦 When to Scale

✅ **Ready to add 75+ exercises when**:
- Exercise validation system implemented
- Backend security hardened
- Configuration externalized
- CSS architecture solid

⚠️ **Not ready until**:
- Validation system is working
- Security vulnerabilities fixed
- Config can handle prod environment

---

## 📝 Notes

- Keep this file updated as tasks are completed
- Mark tasks with ✅ when done
- Add new issues as discovered
- Review before each major feature addition
