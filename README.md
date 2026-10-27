# Susan Su · portfolio site

Built with [Astro](https://astro.build). Every push to `main` on GitHub redeploys the site on Vercel automatically.

## Where to change things

| I want to… | Edit this file |
|---|---|
| Change the homepage headline, intro, tools, or email | `src/data/site.json` |
| Add my headshot | Put the photo in `public/images/` (e.g. `headshot.jpg`), then set `"headshot": "/images/headshot.jpg"` in `src/data/site.json` |
| Edit a case study | `src/content/work/insta360.md` or `dreame.md` |
| Add a cover photo to a case card | Put it in `public/images/`, then uncomment the `cover:` lines at the top of the case file |
| Add a new case study | Copy `src/content/work/dreame.md`, rename it, change the text and `order:` |
| Remove the "Coming soon" card | Delete `src/content/work/coming-soon-ab-test.md` |
| Add progress to a Lab project | Write below the front-matter in `src/content/lab/<project>.md`. It gets its own page automatically |
| Mark a Lab project done | Change `status: in-progress` to `status: published` |
| Publish the GA4 project | Delete the `draft: true` line in `src/content/lab/ga4-funnel.md` |
| Add the That Girl zine | Put the PDF in `public/`, then follow the note in `src/content/lab/that-girl.md` |
| Edit the About page or add photos | `src/content/pages/about.md` |
| Update my resume | Replace `public/Susan-Su-Resume.pdf` (keep the same file name) |
| Change colors or fonts | `src/styles/global.css` (top of the file) |
| Turn on Google Analytics | Replace `G-XXXXXXXXXX` in `src/data/site.json` with your GA4 Measurement ID |

The easiest way to edit: open the file on github.com, click the ✏️ pencil, make the change, and click **Commit changes**. Vercel updates the site in about a minute.

## Analytics events (GA4)

`resume_download` · `case_study_view` (param `case`) · `contact_click` (param `method`) · `lab_project_click` (param `project`) · `scroll_depth_90` on case pages.

## Run it on a computer (optional)

```
npm install
npm run dev
```

Design rules live in `docs/style-guide.md`; the content brief is `docs/site-brief.md`.
