# Portfolio Improvement Spec — jameskok.me
> A complete list of fixes, additions, and content updates for the portfolio site.
> Intended for use with an AI code agent or as a personal checklist.

---

## 1. Content Fixes (Quick Wins)

### 1.1 Fix placeholder text on the Minor project page
- **File/location:** `/projects/minor` page content / data source
- **Issue:** The project card description reads `"Placeholder description for Minor project."` and the case study page says `"Minor case study coming soon. ⌛"`
- **Fix:** Replace with the following:

**Card description (short):**
> Information Design minor at AUAS — a semester-long deep dive into data visualization, visual storytelling, and communicating complex information clearly.

**Page description (long, for the case study body):**
> During my Information Design minor at the Amsterdam University of Applied Sciences, I spent a semester exploring how to translate complex data and ideas into clear, compelling visuals. The minor covered data visualization principles, visual hierarchy, typography for information design, and narrative-driven design. I worked with tools including Figma and Flourish to produce data-driven visual outputs. [Add specific projects/deliverables from the minor here.]

- **Tags to keep:** 🎨 UI, 🔎 UX
- **Tools to keep:** Figma, Flourish

---

### 1.2 Fix duplicate project descriptions
- **File/location:** Project card data (likely a `projects.ts` / `projects.json` or similar data file)
- **Issue:** GameScout and Gameboxd both have the description `"A social platform for gamers to share and discover video games."` — they are different projects and need distinct descriptions.
- **Fix suggestions:**

  **GameScout:**
  > A game discovery platform where players can scout, rate, and track video games. [Add the actual differentiator — e.g., built with a specific API, focused on a specific feature like recommendations.]

  **Gameboxd:**
  > A social platform concept inspired by Letterboxd, designed for gamers to log, review, and share their gaming experiences with friends.

*(Adjust based on what the actual projects do — these are placeholders based on the names.)*

---

### 1.3 Fix typos and copy errors

| Location | Issue | Fix |
|----------|-------|-----|
| About page — Propedeutic Diploma description | `"first year of secondary education"` | Change to `"first year of higher education (HBO)"` |
| About page — Propedeutic Diploma description | `"succesfully"` | Change to `"successfully"` |
| Footer | `© 2025 James Kok` | Update to `© 2026 James Kok` |

---

### 1.4 Rephrase "outside of work" on About page
- **Issue:** You're a student; "outside of work" sounds overly formal.
- **Fix:** Change heading/label to `"outside of CMD"` or `"in my free time"`

---

### 1.5 Improve the traits/qualities list on About page
- **Issue:** The emoji bullet list (Creative, Detail Oriented, Precise, etc.) reads like a generic CV buzzword dump.
- **Fix options (pick one):**
  - **Option A:** Remove the list entirely — the "my story" and "designer's ethos" sections already communicate these qualities more convincingly through writing.
  - **Option B:** Trim to 3-4 of the most distinctive traits only (e.g., keep "Problem Solving", "Detail Oriented", cut the rest).

---

## 2. New Projects to Add

### 2.1 Add: `writedown`
- **What it is:** A minimalist note-taking app built around the idea of frictionless writing. Lets users dump thoughts and save them as `.md`, `.txt`, or locally. No formatting rules, no timers, no pressure.
- **Project card details:**
  - **Title:** `writedown`
  - **Year:** 2025 (or actual year)
  - **Tags:** 💻 DEV, 🎨 UI
  - **Short description:** A distraction-free note-taking app. Just write — save as .md, .txt, or keep it local.
  - **Cover image:** Add a cover (screenshot, mockup, or minimal typographic cover)
- **Case study / project page content:**
  > writedown is a note-taking app built around one idea: just write. Dump your thoughts, clear your head, save what sticks — as .md, .txt, or locally. No formatting rules, no timers, no pressure. Just you and a blank page.
  >
  > [Add: screenshots, tech stack used, any interesting implementation details, link to GitHub repo]

---

### 2.2 Add: `ChatGPT HTML to JSON Extractor`
- **What it is:** A browser-based tool that converts messy ChatGPT HTML exports into clean, structured JSON — useful for feeding chat history to other AI models without losing context.
- **Project card details:**
  - **Title:** `ChatGPT HTML → JSON Extractor` (or shorter: `Chat Extractor`)
  - **Year:** 2025 (or actual year)
  - **Tags:** 💻 DEV
  - **Short description:** Browser tool that converts ChatGPT HTML exports to clean JSON — 100% local, no server, no install.
  - **Cover image:** Add a cover (screenshot or UI mockup of the tool)
- **Case study / project page content:**
  > A fast, browser-based tool that converts large and messy ChatGPT HTML exports into clean, structured JSON. Built to solve a real personal problem: wanting to feed complete chat histories to other AI models (like Claude or Gemini) without losing context or structure.
  >
  > **Key features:**
  > - 100% local & private — everything runs in the browser via JavaScript, nothing is uploaded to any server
  > - Automatically recognizes `user` and `assistant` roles, preserves paragraphs, strips HTML noise
  > - Multimodal ready — supports extracting screenshots and images (via Base64) when saved with SingleFile
  > - No install required — just open `index.html` in any modern browser
  >
  > [Add: link to GitHub repo, screenshot of the tool UI]

---

### 2.3 Add: `Sonora`
- **What it is:** A Spotify visualizer built as a TechTrack school project. Renders the currently playing track as a custom animated vinyl record, with visual properties driven by real Spotify data. Includes additional data visualizations (treemap) showing genre/artist distribution across your listening session.
- **Project card details:**
  - **Title:** `Sonora`
  - **Year:** 2025 (or actual year)
  - **Tags:** 💻 DEV, 🎨 UI, ✨ CREA
  - **Short description:** A Spotify visualizer that turns your currently playing track into a live, data-driven vinyl record.
  - **Cover image:** Use the existing homepage screenshot from the GitHub wiki (`wiki/homepage.png`)
- **Case study / project page content:**

  > Sonora is a web app that visualizes your Spotify listening session as a spinning vinyl record. Every track gets its own "custom vinyl" — shaped and styled by the actual data behind the song.
  >
  > **How the vinyl maps to data:**
  > - **Size of the record** → track popularity score
  > - **Rotation speed** → track duration or popularity
  > - **Number of grooves** → release year (older = more grooves)
  > - **Color & glow** → extracted from the album cover via `node-vibrant`
  >
  > The vinyl only spins when a track is actually playing — it syncs live with your Spotify session via the Spotify API (OAuth). Alongside the vinyl, a treemap visualization shows the distribution of genres and artists across your session, with a short auto-generated textual summary underneath.
  >
  > **Built with:** SvelteKit, Vite, Spotify Web API, node-vibrant
  >
  > [Add: link to GitHub repo, screenshots from wiki/session.png, wiki/recap.png, wiki/treemap.png]

- **Note on the to-do list from the README:** The following items were still open at submission time — worth noting in the case study as "planned improvements" or finishing them if time allows:
  - Add play/pause/next controls to the track info section
  - *(Already done: callback fix in tab title, sign-in button styling, mobile overflow-y)*

---

## 3. Minor Project — Content Gathering Checklist

Since the minor has now concluded, here's what to gather and add to the `/projects/minor` page:

- [ ] A short summary of what the minor covered (topics, methods, deliverables)
- [ ] 2–3 specific projects or assignments you worked on, with brief descriptions
- [ ] Visuals: screenshots, exported Flourish charts, Figma frames, or final deliverables
- [ ] Any notable outcome or thing you learned / takeaway
- [ ] Update the cover image if the current one is a placeholder

---

## 4. Minor Structural Suggestions

### 4.1 Framing on the homepage — "specializing in all 3 directions"
- **Issue:** The subtitle `CMD student · Learning frontend design & development` is fine, but elsewhere in the About page you list three separate specialization goals (UX, UI, Dev), which can read as unfocused.
- **Suggestion:** Add or update a short positioning line somewhere on the homepage or About intro, such as:
  > *"I work across the full design-to-code pipeline — from UX research and UI design to frontend development."*

### 4.2 Ensure contact form is functional
- **Check:** Verify the contact form on the homepage actually sends messages (to email, a form backend like Formspree, Resend, etc.).
- **If broken:** Hook it up to a working backend or a service like Formspree / EmailJS.

### 4.3 Verify "Minor" project tags
- Current tags: 🎨 UI, 🔎 UX — these seem correct for an information design minor, but consider whether to add ✨ CREA if Flourish data viz work was involved.

---

## 5. Priority Order

If tackling these one at a time, suggested order:

1. Fix placeholder text on Minor page (most visible issue)
2. Fix duplicate GameScout/Gameboxd descriptions
3. Fix typos (Propedeutic Diploma text, "succesfully", footer year)
4. Add `Sonora` project
5. Add `writedown` project
6. Add `ChatGPT HTML → JSON Extractor` project
6. Remove/trim traits list on About page
7. Fix "outside of work" label
8. Update homepage positioning line
9. Verify contact form works
