# ProductOS Demo Recording Script

## Overview
A 45-60 second video showcasing the 5-stage AI product development workflow in ProductOS.

---

## Recording Setup

### Screen Studio Settings
1. **Resolution:** 1920x1080 (or 1280x720 for smaller file)
2. **Frame Rate:** 30fps
3. **Background:** Use automatic background blur/gradient
4. **Cursor:** Show with click highlights
5. **Zoom:** Enable auto-zoom on clicks (subtle)

### Browser Setup
1. Open Chrome/Arc in **dark mode**
2. Clear browser history/suggestions
3. Set zoom to 100%
4. Hide bookmarks bar
5. URL: `https://build.productos.dev`

### Before Recording
- Log into ProductOS with a clean demo account
- Clear any existing projects or use a fresh workspace
- Disable notifications (system + browser)

---

## Storyboard (45-60 seconds total)

### Scene 1: Opening (0-5s)
**Action:** Show the ProductOS dashboard briefly
- Start on the main dashboard/home screen
- Quick pan to show clean, professional interface
- **Voiceover idea:** "ProductOS: 5 AI agents, one unified workflow"

### Scene 2: Ideation Agent (5-15s)
**Action:** Create a new product idea
1. Click "New Project" or "+" button
2. Enter idea: `"A mobile app that helps developers track their coding habits and productivity"`
3. Click to submit
4. Show AI generating the concept brief (loading → results)
5. **Highlight:** AI-generated product vision, target users, value props

**What to capture:**
- Clean typing animation
- AI processing indicator
- Generated concept appearing

### Scene 3: Discovery Agent (15-25s)
**Action:** Run market research
1. Navigate to Discovery stage (click on stage or auto-advance)
2. Show AI analyzing the market
3. **Highlight:** Competitor analysis, market sizing, user insights
4. Quick scroll through generated research

**What to capture:**
- Transition between stages
- Research results populating
- Key insights highlighted

### Scene 4: Define Agent (25-35s)
**Action:** Generate PRD
1. Move to Define stage
2. Show PRD being generated
3. **Highlight:** User stories, feature requirements, acceptance criteria
4. Quick scroll through PRD sections

**What to capture:**
- Professional PRD document
- Organized sections
- Detailed requirements

### Scene 5: Design Agent (35-45s)
**Action:** Create UI mockups
1. Navigate to Design stage
2. Show AI generating UI screens
3. **Highlight:** Multiple screens generated (dashboard, profile, settings)
4. Quick preview of responsive designs

**What to capture:**
- UI generation in progress
- Multiple screen mockups
- Clean, professional designs

### Scene 6: Develop Agent (45-55s)
**Action:** Generate code
1. Move to Develop stage
2. Show code generation process
3. **Highlight:** React/Next.js components, clean code structure
4. Show preview of running application

**What to capture:**
- Code being generated
- Syntax highlighting
- Live preview (if available)

### Scene 7: Closing (55-60s)
**Action:** Final shot
- Pull back to show all 5 stages completed
- Show unified project view
- End on "Start Building Free" CTA

---

## Recording Tips

### Pacing
- **Don't rush** - let each stage breathe for 2-3 seconds
- **Don't wait** - cut out loading times over 3 seconds
- Use Screen Studio's timeline trimming

### Cursor Movement
- Smooth, deliberate movements
- Pause briefly before clicking
- Avoid erratic movements

### Typing
- Type at a readable pace (not too fast)
- Use a simple, relatable product idea
- Avoid typos (re-record if needed)

### Transitions
- Let the app's built-in transitions show
- Cut between stages if transitions are slow
- Keep a consistent rhythm

---

## Post-Production

### Screen Studio Export Settings

**For Website Video (MP4):**
- Format: MP4 (H.264)
- Resolution: 1920x1080 or 1280x720
- Quality: High
- File: `productos-demo.mp4`

**For Hero GIF:**
- Format: GIF
- Resolution: 1280x720 (max)
- Frame rate: 15fps (for size)
- Colors: 256
- Max size: ~5MB
- File: `productos-demo.gif`

**For Video Poster:**
- Export a single frame showing the dashboard or a compelling moment
- Format: PNG or JPG
- Resolution: 1920x1080
- File: `productos-demo-poster.jpg`

### Output Location
Save all files to:
```
~/clawd/projects/productos-website-new/public/demo/
├── productos-demo.mp4      (full video)
├── productos-demo.gif      (compressed for hero)
├── productos-demo-poster.jpg (video poster/thumbnail)
└── productos-demo-720.mp4  (optional: smaller video)
```

---

## Alternative: Loom Recording

If Screen Studio isn't working well:
1. Use Loom (loom.com) for quick recording
2. Same storyboard applies
3. Export as MP4
4. Convert to GIF using: `ffmpeg -i input.mp4 -vf "fps=15,scale=1280:-1" -loop 0 output.gif`

---

## After Recording

### Integration Checklist
1. [ ] Video exported to `/public/demo/productos-demo.mp4`
2. [ ] GIF exported to `/public/demo/productos-demo.gif`
3. [ ] Poster image saved to `/public/demo/productos-demo-poster.jpg`
4. [ ] Test video plays on website
5. [ ] Test mobile shows poster (no autoplay)
6. [ ] Compress if files too large (>10MB video, >5MB GIF)

### Code Update
The hero component has been updated to support video. Just ensure files are in place and the website will automatically use them.

---

## Sample Product Ideas for Demo

Pick one that's relatable:

1. **Developer Tool:** "A mobile app that helps developers track their coding habits and productivity"
2. **Health App:** "A wellness app that combines meditation, habit tracking, and mood journaling"
3. **Productivity:** "A task management app that uses AI to prioritize your daily todos"
4. **Learning:** "A language learning app that adapts to your speaking patterns"
5. **Finance:** "A budgeting app for freelancers with irregular income"

Choose something that will generate interesting, visual outputs across all 5 stages.
