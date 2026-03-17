# 📚 OMNIGRID Class 5 — Content Guide

## 📁 Folder Structure

```
omnigrid/
│
├── index.html              ← Main book (Welcome + Subjects + Chapter list)
│
├── assets/
│   ├── chapter.css         ← Shared styles for ALL chapter pages
│   └── jojo.js             ← JoJo utilities shared by all pages
│
├── maths/
│   ├── ch1.html  ✅        ← SAMPLE: The Fish Tale (READY)
│   ├── ch2.html            ← Shapes and Angles (ADD CONTENT)
│   ├── ch3.html            ← How Many Squares? (ADD CONTENT)
│   └── ... ch4 to ch14
│
├── science/
│   ├── ch1.html            ← Super Senses
│   └── ... ch1 to ch15
│
├── english/
│   └── ... ch1 to ch10
│
├── evs/
│   └── ... ch1 to ch22
│
├── hindi/
│   └── ... ch1 to ch18
│
└── sst/
    └── ... ch1 to ch20
```

---

## ✏️ HOW TO ADD CONTENT TO A CHAPTER

### Step 1 — Copy the sample file
Copy `maths/ch1.html` and rename it (e.g. `maths/ch2.html`).

### Step 2 — Change the top config (3 things only)
At the very top of the `<script>` section, change:
```js
const SUBJECT = 'maths';  // subject folder name
const CH_NUM  = 2;        // chapter number
```
And in the `<style>` block change `--accent` colours if needed.

### Step 3 — Fill in your content
Every editable area is marked with a comment like:
```html
<!-- ✏️ EDIT: JoJo's opening tip for this chapter -->
<!-- ➕ ADD more concept cards by copying one block above -->
```

**Sections you fill in:**

| Section | What to write |
|---|---|
| JoJo Tip | A fun 2-sentence hook for the chapter |
| Introduction | 2–3 paragraphs explaining the topic |
| Key Concepts | 3–5 concept cards with icon + title + description |
| Did You Know? | 1–2 fun facts about the topic |
| Activity | 4–6 step hands-on activity kids can do |
| Quiz | 4–6 MCQ questions with correct answer index |
| Summary | 4–6 bullet points of what was learned |

### Step 4 — Fix Prev/Next links
At the bottom of each file:
```html
<button onclick="window.location.href='ch1.html'">← Prev</button>
<button onclick="window.location.href='ch3.html'">Next Ch →</button>
```

### Step 5 — Upload to GitHub Pages
1. Go to github.com → New repository → name it `omnigrid`
2. Upload the entire `omnigrid/` folder
3. Settings → Pages → Deploy from `main` branch → root `/`
4. Your book is live at: `https://yourusername.github.io/omnigrid/`

---

## 🎨 Changing Subject Colours

Each chapter has these CSS variables at the top — change them to match the subject:

```css
:root {
  --accent:      #FF9F43;   /* main colour */
  --accent-dark: #C05E00;   /* dark version for text */
  --accent-light:#FFF3E0;   /* light version for backgrounds */
  --header-bg:   linear-gradient(135deg,#FFD93D,#F4A800);
  --header-txt:  #4A2000;   /* text colour on header */
}
```

| Subject | --accent | --header-bg |
|---|---|---|
| Maths | #FF9F43 | #FFD93D → #F4A800 |
| Science | #06D6A0 | #06D6A0 → #009E6E |
| English | #4CC9F0 | #4CC9F0 → #0095C2 |
| EVS | #56CFE1 | #56CFE1 → #189AAD |
| Hindi | #FF9F43 | #FF9F43 → #C05E00 |
| Social Studies | #C77DFF | #C77DFF → #8B2FE0 |

---

## 🧩 Adding a Quiz Question

Copy this block inside `<div id="quiz">` above the submit button:

```html
<div class="q-item" data-correct="0">
  <!-- data-correct = 0 means option A is correct (0-indexed) -->
  <div class="q-text">Q5. Your question here?</div>
  <div class="q-options">
    <button class="q-opt" onclick="selectOpt(this)"><span class="opt-letter">A</span> Option A (correct)</button>
    <button class="q-opt" onclick="selectOpt(this)"><span class="opt-letter">B</span> Option B</button>
    <button class="q-opt" onclick="selectOpt(this)"><span class="opt-letter">C</span> Option C</button>
    <button class="q-opt" onclick="selectOpt(this)"><span class="opt-letter">D</span> Option D</button>
  </div>
  <div class="q-feedback">✅ Explanation shown after answering.</div>
</div>
```

**data-correct values:**
- `0` = A is correct
- `1` = B is correct
- `2` = C is correct
- `3` = D is correct

---

## 🚀 Quick Checklist for Each Chapter

- [ ] Copied `ch1.html` and renamed it
- [ ] Changed `SUBJECT` and `CH_NUM` in script
- [ ] Changed header title and subject name
- [ ] Filled in JoJo tip
- [ ] Filled in Introduction (2-3 paragraphs)
- [ ] Added 4+ concept cards
- [ ] Added 1-2 Did You Know facts
- [ ] Filled in Activity steps
- [ ] Added 4+ quiz questions
- [ ] Filled in Summary points
- [ ] Fixed Prev/Next chapter links

---

*Built with ❤️ for OMNIGRID*
