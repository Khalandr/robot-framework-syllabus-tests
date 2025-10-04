# Section 1.1 Theory Images

## Current Status
✅ All 6 images generated and placed
❌ Need optimization (currently 2.3-3.1MB each, target: ~200KB)

## Image List
- `ex-1-1-1-boot-sequence.png` (2.7MB)
- `ex-1-1-2-log-levels.png` (2.9MB)
- `ex-1-1-3-dual-channels.png` (2.7MB)
- `ex-1-1-4-syntax-flexibility.png` (3.1MB)
- `ex-1-1-5-file-structure.png` (3.2MB)
- `challenge-1-1-boot-diagnostic.png` (2.4MB)

## Optimization Needed

### Option 1: Online Tools (Recommended)
Use https://tinypng.com or https://squoosh.app to compress:
1. Upload each PNG
2. Download optimized version
3. Replace original files
4. Target: 150-250KB per image

### Option 2: Command Line (if available)
```bash
# Using pngquant
pngquant --quality=65-80 *.png --ext .png --force

# Using ImageMagick
for file in *.png; do
  magick "$file" -quality 85 -define png:compression-level=9 "optimized-$file"
done
```

### Option 3: Keep As-Is
Modern browsers handle 2-3MB images fine, but slower load times.
Total current size: ~17MB for all 6 images.
After optimization: ~1.2MB total (14x smaller).

## Integration Status
- [ ] Images optimized
- [ ] Images integrated into exercises.json theory sections
- [ ] CSS styling for .theory-visual added
- [ ] Lazy loading implemented
- [ ] Alt text verified
