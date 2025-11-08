# Demo GIF Creation Guide

This guide will help you create a professional demo GIF for your cyberpunk portfolio.

## Recommended Tools

### macOS
1. **Kap** (Recommended) - Free, open-source
   - Download: https://getkap.co/
   - Built-in GIF export
   - Easy to use interface

2. **LICEcap** - Free, cross-platform
   - Download: https://www.cockos.com/licecap/

### Windows
1. **ScreenToGif** (Recommended) - Free
   - Download: https://www.screentogif.com/
   - Built-in editor
   - Export to GIF

2. **LICEcap** - Free, cross-platform
   - Download: https://www.cockos.com/licecap/

### Linux
1. **Peek** - Free
   - Install: `sudo apt install peek`
   - Simple GIF recorder

## Recording Best Practices

### 1. Preparation
- Close unnecessary browser tabs and applications
- Clear browser cache and reload the page
- Set your browser to a standard size (1200-1400px width)
- Use incognito/private mode for a clean recording
- Make sure all animations are working properly

### 2. Recording Settings
- **Resolution**: 1200px width recommended (or 1400px max)
- **Frame Rate**: 10-15 FPS (good balance of quality and file size)
- **Duration**: 15-30 seconds max
- **Format**: GIF
- **File Size**: Keep under 10MB for GitHub

### 3. What to Show in Your Demo

#### Suggested Recording Flow (20-25 seconds):

1. **Start at Hero Section** (2-3 seconds)
   - Show the typing animation
   - Display the matrix rain background
   - Show the glitch effects

2. **Scroll to About Section** (2 seconds)
   - Smoothly scroll down
   - Show the fade-in animation
   - Display the cyber cards

3. **Skills Section** (2 seconds)
   - Show skill categories
   - Hover over 1-2 skill cards to show effects

4. **Projects Section** (4-5 seconds)
   - Show the featured project
   - Scroll to see AI and Full-Stack project cards
   - Hover over a project to show animations

5. **Interactive Features** (3-4 seconds)
   - Click the theme switcher (dark/light toggle)
   - Show the theme transition

6. **Language Switcher** (2-3 seconds)
   - Click language selector
   - Switch between EN/FR/ZH
   - Show text changes

7. **End at Contact** (2 seconds)
   - Scroll to contact section
   - Show social links

## Step-by-Step Recording with Kap (macOS)

1. **Download and Install Kap**
   ```bash
   # Or install via Homebrew
   brew install --cask kap
   ```

2. **Open Kap and Configure**
   - Click the Kap icon in menu bar
   - Click "Preferences"
   - Set FPS to 15
   - Set size to 1200x750 (or custom)
   - Enable "Show cursor"

3. **Start Recording**
   - Click "Record"
   - Select the browser window area
   - Start at the top of your portfolio
   - Follow the recording flow above

4. **Stop and Export**
   - Press `Cmd + Shift + 5` or click Stop
   - Choose "Export" → "GIF"
   - Name it `demo.gif`
   - Save to portfolio root directory

## Step-by-Step Recording with ScreenToGif (Windows)

1. **Download and Install**
   - Get from: https://www.screentogif.com/

2. **Configure Recording**
   - Open ScreenToGif
   - Click "Recorder"
   - Set FPS to 15
   - Resize window to fit your browser

3. **Record**
   - Position the recorder over your portfolio
   - Click "Record" (or F7)
   - Follow the recording flow
   - Click "Stop" (or F8)

4. **Edit and Export**
   - Click "Editor"
   - Remove unwanted frames
   - Go to File → Save As → GIF
   - Optimize for file size
   - Save as `demo.gif`

## Optimizing Your GIF

### Reduce File Size

If your GIF is over 10MB:

1. **Reduce dimensions**: Scale to 1000px width
2. **Lower FPS**: Use 10 FPS instead of 15
3. **Reduce colors**: Use 128 or 64 colors
4. **Trim length**: Keep under 20 seconds
5. **Use online compressors**:
   - https://ezgif.com/optimize (recommended)
   - https://www.iloveimg.com/compress-image/compress-gif

### Using ezgif.com to Optimize

1. Go to https://ezgif.com/optimize
2. Upload your `demo.gif`
3. Set compression level to 35-50
4. Choose "Lossy GIF" option
5. Click "Optimize GIF!"
6. Download optimized version

## Alternative: Video Format

If GIF file size is still too large, consider using MP4:

1. Record as usual
2. Export as MP4 instead of GIF
3. Upload to GitHub repository
4. Update README.md:
   ```markdown
   ## Demo

   https://github.com/iLee-x/ilee-x-portfolio/assets/demo.mp4
   ```

Or host on external service:
- **YouTube** - Upload as unlisted video
- **Vimeo** - Upload and embed
- **Imgur** - Convert GIF to GIFV

## Quick Checklist

- [ ] Recording tool installed
- [ ] Browser window sized correctly (1200-1400px)
- [ ] Portfolio loaded and working
- [ ] Recording settings configured (10-15 FPS)
- [ ] Recording follows suggested flow
- [ ] GIF exported and optimized
- [ ] File size under 10MB
- [ ] GIF saved as `demo.gif` in root directory
- [ ] README displays GIF correctly

## Tips for Best Results

1. **Smooth Scrolling**: Scroll slowly and steadily
2. **Pause Briefly**: Pause 1-2 seconds on each section
3. **Clean Cursor**: Don't move cursor erratically
4. **Test First**: Do a practice run before final recording
5. **Good Timing**: Show animations completing fully
6. **Quality Check**: Review before saving

## After Creating Your GIF

1. Save as `demo.gif` in portfolio root directory
2. Verify it displays in README:
   ```bash
   # Open README.md to check
   open README.md
   ```
3. Commit and push:
   ```bash
   git add demo.gif
   git commit -m "Add demo GIF"
   git push
   ```

## Need Help?

If you encounter issues:
- File too large? → Try optimization tips above
- Quality poor? → Increase FPS to 15, reduce compression
- Choppy playback? → Reduce number of colors
- Not showing in GitHub? → Ensure file is named `demo.gif` and in root

---

Happy recording! Your cyberpunk portfolio deserves an amazing demo! 🎬✨
