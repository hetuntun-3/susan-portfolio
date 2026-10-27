# Susan Su Portfolio Site: Build Brief for Claude Code

Version 2 · Oct 27, 2026 · Owner: Shan (Susan) Su

This file is the single source of truth for building Susan's personal portfolio site. All copy below is final unless it's marked **[TODO]** or **[OPTIONAL]**. Build the site so content is easy to update later: new Lab projects, new case studies, and changed numbers should each be a one-file edit.

---

## 0. Instructions for the builder

1. **Use the copy exactly as written.** Don't invent metrics, tools, clients, or results. If something is missing, leave a clearly marked placeholder. Don't fill it in.
2. **Keep content separate from layout.** Each page and case study lives in its own Markdown/MDX file (for example `content/work/insta360.md`, `content/lab/*.md`). Adding a Lab project should mean adding one file with front-matter: `title`, `status` (`in-progress` | `published`), `date`, `skills[]`, `summary`, `link`.
3. **Stack (suggested):** a static site, either Astro or Next.js static export, deployed to Vercel or Netlify. No CMS and no backend.
4. **GA4:** add the Google tag with a placeholder ID `G-XXXXXXXXXX` in one config file. Track these custom events:
   - `resume_download`, when the Resume PDF is clicked
   - `case_study_view`, with param `case` (`insta360` | `dreame`)
   - `contact_click`, with param `method` (`email` | `linkedin`)
   - `lab_project_click`, with param `project`
   - scroll depth (90%) on case-study pages
5. **Responsive and accessible:** mobile-first; real headings in order; alt text on every image; color contrast that passes WCAG AA.
6. **Placeholders for images** that Susan will add later are listed in section 9. Use neutral boxes with a caption, never stock photos.
7. **Don't show** anything labeled "Notes for Susan," internal reasoning, or [CONFIRM] markers on the live site.

---

## 1. Positioning (for tone, not to be shown verbatim)

- **Who:** Shan (Susan) Su, MS Marketing Science candidate at Columbia Business School (graduating Dec 2027). BA Gender Studies, UCLA.
- **Targets:** Summer 2027 internships in Growth/GTM Marketing, Product Marketing, and Marketing Analytics.
- **Story arc:** *Past = insight* (why people buy: cultural research, branding, customer insight, from SHEIN, Dreame, and Insta360). *Now = measurement* (proving it with data: Python, regression, experiment design, web scraping, SQL, GA4, all learned at Columbia).
- **Audience:** recruiters and hiring managers scanning for 30–60 seconds. Put numbers first, keep paragraphs short, and use strong headlines.
- **Voice:** clear, confident, specific, warm. No buzzwords: never "passionate," "synergy," "leverage," "results-driven," or "guru."

---

## 2. Site map and navigation

Nav (top right): **work · lab · about · resume**. The wordmark at top left reads "susan su" and links home.
Footer: three boxes as specified in style-guide.md (© 2026 Susan Su · contact email · "built with Claude"). Add LinkedIn as a link inside the contact box.

| Page | URL | Purpose |
|---|---|---|
| Home | `/` | Hero, featured work, tools strip, CTA |
| Work | `/work` | Grid of case studies |
| Insta360 case | `/work/insta360` | Full case study |
| Dreame case | `/work/dreame` | Full case study |
| Lab & Writing | `/lab` | Analytics projects (in progress plus published) and cultural writing |
| About | `/about` | Story, AI view, Gender Studies edge |
| Resume | `/resume` | Embedded PDF plus download button |
| Contact | footer + `/about#contact` | Email and LinkedIn (no form needed) |

---

## 3. Home page

### Hero
**Headline (H1):**
> I find why customers buy, then test it with data.

**Intro (≤ 35 words):**
> Columbia Marketing Science MS. I turn customer data into decisions: ~300 survey responses into product insights and a 100-rider selection at Insta360, weekly sentiment and share-of-voice reports at Dreame, trend research at SHEIN.

**Availability line (small, under the intro):**
> Open to Summer 2027 internships in Growth/GTM, Product Marketing, and Marketing Analytics.

**Buttons:** `See my work` → /work · `Resume` → /resume (fires `resume_download` if it links straight to the PDF)

**Hero visual:** [TODO: Susan's headshot or a simple original illustration of her. Don't copy the reference site's illustration.]

### Featured work (2 cards, same component as /work)
See section 4 for card content.

### Tools strip
- **Tools:** GA4 · Meltwater · SurveyMonkey · Excel · R · Canva · ChatGPT · Claude
- **Currently learning:** SQL · Python · Regression · Web scraping
- **Certified:** Google Analytics · Meta Social Media Marketing

Render each item as a small bordered chip, as in the reference skills page. "Currently learning" chips get a dashed border so it's visibly different. Keep these lists in one data file so Susan can move a skill from "learning" to "tools" in one line.

### Closing CTA band
> Hiring for a growth, product marketing, or analytics intern? I'd love to talk.
> `Email me` (mailto) · `LinkedIn`

---

## 4. Work page (`/work`)

Page title: **work**. Right-aligned subtitle: *case studies, newest first*

Card grid. Each card has a timeline label, company name, cover image, and a one-line tag. Give each card a colored backing block offset behind it, as in the reference site.

| Order | Timeline | Title | Tag line | Accent | Link |
|---|---|---|---|---|---|
| 1 | Summer 2026 | Insta360 | Community event · rider selection + launch decks | `--block-insta360` | /work/insta360 |
| 2 | Summer 2025 | Dreame | Back-to-School · creators, social plan, press data | `--block-dreame` | /work/dreame |
| 3 | Dec 2026 | Coming soon: Digital campaign A/B test | Columbia Digital Marketing × client company | `--block-soon`, not clickable | — |

The third card is a "coming soon" placeholder. Label it clearly, keep it non-clickable, and make it easy to delete or replace.

---

## 5. Case study template (all case pages use this order)

1. **TL;DR card**: a bordered box with Role · Timeline · Tools · My output · Result
2. Context & Problem
3. Approach
4. Analysis: 2–3 visuals, each followed by a bold **So what:** line
5. Recommendation & Impact
6. Reflection
7. Footer nav: ← previous case · next case →

Visuals: build tables as styled HTML tables, never images. Dreame Visual 2 is four phase cards in a row (section 5B).

### 5A. Insta360 case (`/work/insta360`)

**Title (H1):** Picking the 100 riders who filmed Paris for Insta360

**Lead:** Insta360's first cycling community event put 200+ riders on the Tour de France finale route. I chose the 100 who rode with cameras, and wrote the workshop decks that showed them what to film with.

**TL;DR card**
| | |
|---|---|
| Role | Brand Marketing Intern, Insta360 |
| Timeline | Summer 2026 · event July 24–26, 2026 |
| Event | "Vibrez en Jaune" Pop-Up (Ride Bold), Paris, with Le Peloton Cycling Club |
| Tools | Canva · Instagram and TikTok (creator video research) |
| My output | 100 riders selected · 10 rider stories pulled for promo · 2 audience decks (cycling, running) · 4 cameras positioned · 18 creator demo videos curated |
| Result | 200+ riders, 90 km Versailles → Champs-Élysées · covered by PR Newswire, Paris Zigzag, Cyclism'Actu and RideApart |

**Context & Problem**
The event's content would only be as good as the people filming it. Insta360 planned a three-day pop-up for the Tour de France finale weekend: creator workshops, a small group run, and a Sunday "Hero Ride" from Versailles to the Champs-Élysées. The goals were brand awareness, rider-made content, and a cycling community around the brand.

Two problems landed on my desk:
- **Who rides with a camera?** Selected riders got a branded jersey and an Insta360 camera to film the route. The sign-up form drew far more people than there were cameras. We needed riders who ride often and have stories worth filming.
- **What do we show them?** The product team's brochure covered every feature for every use. Workshop attendees were cyclists and runners who needed to know, in a few minutes, which camera fits their sport and why.

**Approach**
I treated rider selection as a data problem and the decks as a positioning problem.

1. **Clean the sign-up data.** I removed duplicate and incomplete responses from the Hero Ride sign-up survey, so every remaining row was one real, reachable rider.
2. **Score for content potential, not just fitness.** I read each rider on two signals:
   - **Riding frequency.** Regular riders are comfortable on a 90 km route and know what's worth filming.
   - **Answer quality.** Their replies to "Why do you want to join?" and "Tell us a cycling story" showed who could tell a story on camera.

   I selected 100 riders and flagged the 10 strongest stories for post-event promotional material.
3. **Cut the brochure down to what riders need.** For the cycling deck I chose four cameras: GO Ultra, X5, Ace Pro 2 and X4 Air. They are the core lineup, they fit riding, and each has bike accessories that go with it. For each camera I kept the features that matter on a bike and paired them with three creator videos from Instagram and TikTok.
4. **Write the belief, then adapt it.** I wrote the partnership story for both decks. The cycling version: "Cycling isn't just about the ride. It's about the people you meet and the memories you create." For the run deck I rewrote it around movement and added a slide on the five moments of a run worth capturing.

**Analysis**

*Visual 1: The selection funnel.* Render as a simple horizontal funnel of 4 steps:
`Sign-up responses` → `Cleaned (duplicates and incompletes removed)` → **`100 selected riders`** → **`10 featured stories`**
(Counts for the first two steps are [TODO]. Show them as labels only, without numbers, until Susan adds them.)

**So what:** The camera riders were the event's content team. Choosing them on riding habit and storytelling, not first-come-first-served, was a bet on better footage from the same 100 cameras.

*Visual 2: What made the cut (cycling deck).*
| Camera | What the deck led with |
|---|---|
| GO Ultra | 53g hands-free POV · Stats Dashboard · multi-angle bike mounting · 200-min run time · FlowState + Horizon Lock |
| X5 | 360° video, reframe after filming · "one camera, any perspective" · 208-min run time |
| Ace Pro 2 | Leica lens · low-light performance · flip touchscreen · 4K60 Sport HDR |
| X4 Air | Hands-free POV · invisible selfie stick · wind guard · InstaFrame |

**So what:** Every slide answers one rider question: can I film the ride without touching the camera? Photo specs and studio features stayed in the brochure.

*Visual 3: One event, two audiences.*
| | Cycling deck | Run deck |
|---|---|---|
| Cameras | 4 (GO Ultra, X5, Ace Pro 2, X4 Air) | 2 (GO Ultra, X4 Air) |
| Belief line | "Cycling isn't just about the ride" | "Movement is about more than the distance" |
| Extra slide | — | "How Insta360 Fits Running": people, stops, places, journey, memories |
| GO Ultra edition shown | Tadej Pogačar Edition | Hello Kitty Edition |
| Lucky draw entry | Attend, buy, or post | Post a carousel or Reel with #Insta360RideBold |
| Cross-promotion | — | Weekend pop-up + Sunday Hero Ride |

**So what:** The run deck did two jobs. It sold cameras to runners, and it pointed a smaller audience toward the weekend's main event.

**Recommendation & Impact**
On July 26, 200+ riders rode 90 km to the Champs-Élysées, and the riders I selected filmed it from the inside.
- **The ride:** Riders went out in supervised packs of 20–25 across four difficulty levels, so the route worked for a wide range of riders. ([press release](https://www.prnewswire.com/news-releases/think-bold-ride-bold-insta360-takes-over-the-champs-elysees-with-200-rider-community-event-302833050.html))
- **The content:** Camera-equipped riders recorded first-person footage of the group, which Insta360 framed as a community-made documentary of the ride.
- **The coverage:** [Paris Zigzag](https://www.pariszigzag.fr/paris-au-quotidien/actualites-paris/insta360-tour-france-2026/), [Cyclism'Actu](https://www.cyclismactu.net/news-cyclisme-route-materiel-think-bold-ride-bold-insta360-presente-dans-paris-avec-250-cyclistes-95254.html), [Presse Agence](https://presseagence.fr/paris-cyclisme-insta360-reunit-250-passionnes-pour-une-experience-immersive-en-marge-du-tour-de-france/) and [RideApart](https://www.rideapart.com/news/803889/insta360s-paris-pop-up-cycling-event-was-crazy-good-please-make-one-for-motorcyclists/). RideApart noted it was Insta360's first event of its kind.

**My recommendation for the next edition: measure the community, not just the crowd.** Tag each sign-up with its source and selection score. Then compare which riders actually posted. That turns rider selection from a judgment call into a model the team can improve every year.

**Reflection**
- **Write the rubric down.** I scored riders on frequency and story quality, but the scoring lived in my head. A simple 1–3 score on each signal would let teammates screen the same way, and would make the selection easy to check later.
- **Tailor every slide, not just the story.** The run deck's belief copy was rewritten for runners, but the GO Ultra feature grid still showed bike mounting. Next time I'd swap in running mounts, like the headband or wrist strap.
- **Ask for the data before the event, not after.** I wasn't on site in Paris and never saw how many selected riders posted. Agreeing up front on two or three numbers to track would have let me close the loop on my own decisions.

### 5B. Dreame case (`/work/dreame`)

**Title (H1):** One season, two buyers: Dreame's Back-to-School push

**Lead:** Parents pay for back-to-school, but students decide what's cool. I hired on as a PR intern, asked the marketing team for more work, and ended up building the creator shortlist and a four-phase social concept for Dreame's U.S. Back-to-School campaign.

**TL;DR card**
| | |
|---|---|
| Role | Marketing & PR Intern, Dreame Technology (U.S. team, working with Shenzhen) |
| Timeline | Summer 2025 |
| Tools | Creonix (AI creator search) · Instagram · Meltwater · Canva |
| My output | 40+ nano-creators screened → 8 seeded with product · 5-concept social plan across 4 funnel phases · 200+ journalist media list · weekly Meltwater sentiment and share-of-voice reports |
| Campaign | Up to 50% off · hero product: G10 wet-dry vacuum |
| Status | Creator seeding ran. The social concepts were shelved during an internal restructuring. |

**Context & Problem**
Dreame's best-known products are vacuums and robot cleaners, and students don't buy vacuums. The Back-to-School campaign had to drive sales during a season when the shopper and the user are different people.
- **Parents hold the budget.** U.S. families with K–12 students were projected to spend about $858 each on back-to-school in 2025 ([MoneyLion, citing NRF](https://www.moneylion.com/learn/back-to-school-deal-guide)). The hero product, the G10 wet-dry vacuum, is Dreame's entry-level way into wet-dry cleaning, pitched for apartments and light routines ([Dreame](https://www.dreametech.com/blogs/blog/g10-vs-g10-pro-vs-g10-combo-wet-dry-vacuum-comparison)).
- **Students shape what feels worth buying.** Dreame also sells hair care. Its foldable, 300g Pocket dryer fits a dorm much better than a floor cleaner does ([Dreame](https://store.dreametech.com/hair-care/pocket-hair-dryer)).
- **The U.S. team was small.** The marketing team sat in Shenzhen, and the PR lead was in the U.S. Interns who wanted more than admin work had to ask for it.

The question: how do you make a vacuum sale feel like part of starting school, for the parent who pays and the student who lives with it?

**Approach**
I worked on three tracks at once: creators, social, and press.

1. **Find small creators with real audiences.** I used Creonix, an AI creator-search tool, alongside manual Instagram searches. I screened 40+ creators on three criteria:
   - Content about student life or parenting
   - Under 10K followers
   - Comment sections with real back-and-forth, not just likes

   My manager approved the shortlist. I wrote each creator's campaign brief myself inside Dreame's brand template and do's-and-don'ts, filling in the offer, product, content themes and deliverables. **8 creators agreed** and received the G10 in exchange for content, with no fee.
2. **Build a social plan from my own dorm life.** I'm a recent college student, and I knew dorm life is messy and chaotic, and that students respond to humor and aesthetic routines. I turned that into five concepts across a four-phase funnel. I presented them to the U.S. digital social specialist leading the campaign, and shared updates in weekly calls with the Shenzhen team.
3. **Pitch the press.** I built and segmented a 200+ journalist list across tech, lifestyle, and parenting, and pitched seasonal stories and product launches all summer. Few journalists replied.
4. **Track what the press actually covers.** Every week I pulled Dreame and competitor coverage from Meltwater into a report: mentions, reach, engagement, sentiment, and top headlines.

**Analysis**

*Visual 1: Who pays vs. who uses.*
| | Parents (buyers) | Students (users) |
|---|---|---|
| What they care about | A clean reset for the new school year, and time back | A dorm that looks good and doesn't stress them out |
| Product fit | G10 wet-dry vacuum | Pocket hair dryer, cordless vac |
| Offer | Up to 50% off, limited time | Extra 10% off with student ID |
| Channel | Parenting nano-creators (seeded) | Organic social: memes, carousels, UGC-style posts |
| Creative angle | "Mom/Dad's Secret Weapon" | "Dorm Realities vs. Dreame Solutions" |

**So what:** One campaign had to speak in two voices. Parents needed a practical reason to buy; students needed a reason to care.

*Visual 2: The four-phase social plan.* Build as 4 cards in a row (stacked on mobile) with arrows between them. Title above: **"Five concepts move students from dorm memes to a student-ID sale."** Subtitle: *Social concept plan, Dreame U.S. Back-to-School 2025 (not launched).* Highlight the 4th card with the accent color.

| Phase | Concept | Format | Job |
|---|---|---|---|
| 1 · Pre-heat | Dorm Realities vs. Dreame Solutions | 4-grid meme | Name the problem: dorms get messy |
| 2 · Launch | Main Character Cleaning | 3-frame carousel + doodle-note poster | Make cleaning feel fun, not a chore |
| 3 · Engagement | Dorm Survival Kit | 5-slide UGC-style carousel | Earn saves and shares |
| 4 · Conversion | Student Deal Days | Split-frame poster, student-ID discount | Turn interest into a purchase |

**So what:** Each post had one job, and each job led to the next: recognize the mess, enjoy the fix, share the list, use the discount.

*Visual 3: What the press actually wrote about Dreame.*
I sorted the 9 Dreame headlines from one week's Meltwater report (Aug 1, 2025) by story type.
| Story type | Headlines | Examples |
|---|---|---|
| Deals and price drops | 3 | Mashable on the Pocket dryer's record-low price · Tom's Guide robovac deals |
| Product reviews and tests | 3 | Homes & Gardens on the R20 · GearLab on the X40 Ultra |
| "Best of" roundups | 2 | MSN and The Spruce best robot mops |
| Market news | 1 | Global market-share story |
| Seasonal campaign stories | 0 | — |

[OPTIONAL, only if Susan confirms these internal figures can be public: "That week: 63 mentions (down 50% from the week before), 880M reach (down 38%), 326 engagements (up 35%), and 85.7% positive sentiment with no negative mentions." Leave this sentence out by default.]

**So what:** Journalists covered price, tests, and rankings, not brand campaigns. That explains the quiet inbox: a Back-to-School pitch without a deal or a review unit gave writers nothing to file.

**Recommendation & Impact**
What shipped: **8 nano-creators seeded with the G10**, chosen on fit and engagement rather than follower count. My internship ended before their posts went live, so I don't have reach or sales results.

What didn't ship: the social concepts were shelved when the team restructured. They still show how I'd turn one insight into a funnel, from relatable memes to a student-ID offer.

What the data told me: earned media for Dreame was driven by deals and product tests. What I'd recommend next time:
- **Pitch the offer, not the season.** Lead with the price drop and a link, the way Mashable and Tom's Guide already write about Dreame.
- **Send review units to the writers who already test vacuums.** Homes & Gardens, GearLab and Vacuum Wars were covering Dreame products that same week.
- **Give lifestyle and parenting writers a story with people in it.** Pair the pitch with a creator's real dorm or family reset, so the article has a scene, not just a product.

**Reflection**
- **Initiative gets you in the room; data keeps you there.** Asking the marketing team for work got me onto the campaign. But my concepts were judged on taste, because I had no numbers behind them. Next time I'd bring one data point, such as a trend count or a creator benchmark, to every pitch.
- **Read the coverage before you write the pitch.** I built the media reports and the pitches as separate tasks. The reports already showed what journalists wanted. Connecting the two sooner would have changed what I sent.
- **Set up tracking before the product ships.** Seeding 8 creators with no codes or links meant nobody could say which ones drove sales. A unique discount code per creator costs nothing and turns seeding into a test.

---

## 6. Lab & Writing page (`/lab`)

Page title: **lab & writing**. Right-aligned subtitle: *where I test what I'm learning*

**Intro line:**
> My internships taught me why people buy. At Columbia I'm learning to prove it: Python, regression, experiment design, web scraping, and SQL. This is where those projects live as I build them.

Two sections, both card lists generated from `content/lab/*.md`.

### Lab (analytics)
Each card shows: title · status badge (**In progress** in amber or **Published** in green) · skills chips · 1–2 sentence summary.

| Title | Status | Skills | Summary |
|---|---|---|---|
| What diners really say: restaurant review analysis | In progress (Columbia class project) | Python · Web scraping · Text analysis | Collecting and analyzing online reviews for a set of restaurants to find what drives ratings up or down. |
| How 25–34s see Ralph Lauren | In progress (Columbia class project) | Ethnography · Interviews · Data analysis | Combining ethnography, interviews and a company dataset to map how young adults perceive the brand. |

(Builder: make it easy to add a `results` section and charts to a card's detail page when its status changes to Published.)

(Builder: support a `draft: true` front-matter field. Draft entries are built but hidden from the live site. Create the GA4 project below as a draft file, `content/lab/ga4-funnel.md`, so Susan can publish it later by deleting one line.)

| Title | Status | Skills | Summary |
|---|---|---|---|
| Where shoppers drop off: a GA4 funnel analysis | Draft (hidden until late Nov 2026) | SQL · GA4 · BigQuery · Python | Using Google's public GA4 ecommerce dataset to find where visitors leave before buying, and whether it differs by device and traffic source. |

(Notes for Susan: add real progress to the two class projects within two weeks, such as the research question, data collected so far, and one early finding. An "In progress" card with nothing behind it reads as filler.)

### Writing (cultural insight)
| Title | Type | Summary | Link |
|---|---|---|---|
| The "Pilates Princess" Phenomenon | Video essay | Why a workout aesthetic became a signal of class and identity for Gen Z women, backed by data on class prices and regional access. Brand implications for beauty, fitness and athleisure. | https://youtu.be/z5ZQB3-qQ9s |
| The "That Girl" Aesthetic | Zine | How TikTok's "That Girl" routines turn wellness into self-discipline, and what that means for brands talking to Gen Z women. | [TODO: upload zine PDF to /public and link it] |

---

## 7. About page (`/about`)

Page title: **about**. Right-aligned subtitle: *a little more about me*

**Opening (H2):**
> I study why people want what they want, then I measure it.

I'm Susan Su, a Marketing Science MS candidate at Columbia Business School. Before that I studied Gender Studies at UCLA, where I learned to read the culture behind a purchase. Now I'm learning to put numbers on it, and to use AI to move faster without losing the human part.

**My path** (render as a vertical timeline):
| When | Where | What it added |
|---|---|---|
| 2022 | SHEIN, Fashion Trend Analyst Intern | Spotting a trend early, and turning it into a product story |
| 2022–2026 | UC Santa Barbara, then UCLA, BA Gender Studies | Reading the culture and identity behind what people buy |
| 2025 | Dreame, Marketing & PR Intern | Creators, press and weekly media data: who's talking about a brand, and why |
| 2026 | Insta360, Brand Marketing Intern | Survey research and launch storytelling for a global audience |
| 2026–2027 | Columbia Business School, MS Marketing Science | The models and measurement to prove an insight, not just argue it |

I grew up speaking Mandarin and work in English, so I've spent most of my career translating, between U.S. and China teams, and between what a product does and why someone would care.

**How I think about marketing in the AI era**

AI makes the *what* cheap: the data pull, the first draft, the long list. That makes the *why* worth more. Three things I believe, each from something I've actually done:

1. **AI finds the pattern. People decide what it means.** At Insta360 I used AI to organize about 300 survey responses, then checked every calculation myself. At Dreame, Meltwater's AI monitoring pulled in coverage that had nothing to do with us until I added keyword exclusions. The tool was fast. Knowing what counted was still my job.
2. **When anyone can make content, trust is the edge.** At Dreame I used an AI search tool to find creators, but I chose them by reading their comments, not counting their followers. A smaller audience that actually talks back is worth more than reach that doesn't care.
3. **Moving fast only helps if you measure.** AI lets a team ship ten ideas in the time it used to take to ship one. Without tracking, that's just ten guesses. I want every experiment to come with a way to tell whether it worked, even if it's just a discount code per creator.

**What Gender Studies gave me**

People ask why a Gender Studies major went into marketing. To me it's the same subject: how culture shapes what people want, and who they want to become. Three habits I bring to every project:

- **I read the subtext.** In my video essay on the "Pilates Princess" trend, I argued that a workout aesthetic was really a signal of class and identity. Then I backed it up with data on average class prices and regional access. Brands that only see "Pilates" miss what people are actually buying.
- **I ask who the message is for, and who it leaves out.** The "average customer" is usually an assumption. At Dreame, the person paying for back-to-school and the person using the product were different people, so the campaign needed two voices.
- **I treat the data as a story someone chose to tell.** A survey shows what people answered. My training makes me ask who didn't answer, and what the questions assumed. That habit makes my analysis more careful, not less rigorous.

**Right now**
- **At Columbia:** learning Python, regression and statistical modeling, experiment design, web scraping, and qualitative research
- **Building:** a restaurant-review analysis and a Ralph Lauren brand-perception study (see Lab)
- **Learning SQL**, so I can pull my own data instead of waiting for someone else's export
- **Board member, Columbia Entrepreneurs Organization**, and a member of the CBS AI and Technology clubs
- **Recruiting for Summer 2027 internships** in Growth/GTM, Product Marketing, and Marketing Analytics

**Outside work**
You'll find me surfing, scuba diving, hiking, or mixing a new cocktail. Mixology turns out to be a lot like marketing: you test, adjust, and watch people's faces. I speak English and Mandarin, and I'm working on my French.

[Photo collage: 4–6 personal photos in a polaroid style, as in the reference site. TODO: Susan to supply.]

**Contact** (anchor `#contact`)
- Email: ssu28@gsb.columbia.edu
- LinkedIn: https://www.linkedin.com/in/shan-susan-su

---

## 8. Resume page (`/resume`)

- Embed the PDF inline, with a `Download PDF` button that fires `resume_download`.
- File: `/public/Susan-Su-Resume.pdf` [TODO: Susan to supply the updated version; see section 10 for edits to make first]

---

## 9. Design direction

**All visual decisions are in `style-guide.md` (sent alongside this brief): colors, fonts, sizes, spacing, cards, buttons, footer.** This brief sets no design values of its own. Where the brief mentions a color or style in passing (for example the card accents in section 4), use the matching token from the style guide (`--block-insta360`, `--block-dreame`, `--block-soon`).

Reference site: gracesportfolio.com. Borrow its structure and feel only, never its content or illustration.

**Image placeholders to create**
| Location | What goes there |
|---|---|
| Home hero | Headshot or original illustration [TODO] |
| Insta360 card + case cover | Event photo or deck slide [TODO: Susan confirms permission] |
| Dreame card + case cover | One concept mockup, labeled "Concept, not launched" [TODO] |
| About | 4–6 personal photos [TODO] |
| Writing | Pilates Princess video thumbnail (YouTube embed is fine) |

---

## 10. Open items (for Susan, not for the site)

- [ ] Accent color is set to Signal Orange #C2410C in style-guide.md; swap the token if you prefer another
- [ ] Insta360 survey project (~300 responses): it's a separate project from the Paris event and is mentioned on Home and About, but has no case study yet. Write it up as a second Insta360 case, or a Lab entry, so the claim has a page behind it
- [ ] Update the LinkedIn link on the old Canva site to linkedin.com/in/shan-susan-su
- [ ] Provide headshot and photos
- [ ] Insta360: number of sign-ups and the count after cleaning (adds numbers to the funnel)
- [ ] Insta360: permission for event photos and deck screenshots
- [ ] Dreame: OK to publish Meltwater figures? (default: leave out)
- [ ] Dreame: OK to show concept mockups? (labeled "Concept, not launched")
- [ ] Update the resume to match the case studies:
  - Insta360: *Adapted product messaging for 4 cameras into cycling and running workshop decks for a Tour de France pop-up, curating 18 creator demo videos.* · *Cleaned and screened Hero Ride sign-ups by riding frequency and story quality; selected 100 camera-equipped riders for a 200+ rider ride and pulled 10 stories for promo.* · Use the official event name, "Vibrez en Jaune" Pop-Up.
  - Dreame: *Proposed a four-phase social concept for the U.S. Back-to-School campaign; wrote creator briefs within brand guidelines and seeded 8 nano-creators sourced with an AI search tool.*
- [ ] Google Analytics certification: renew through the Columbia Digital Marketing course (due Nov 19, 2026), then add the new credential on LinkedIn
- [ ] Upload the "That Girl" zine PDF

## 11. Planned updates (next versions)

| When | Update |
|---|---|
| Early Nov 2026 | Add real progress to the restaurant-review and Ralph Lauren Lab cards |
| Late Nov 2026 | Un-draft Lab #1 (GA4 funnel analysis) once it has a first finding |
| When ready | Add the Insta360 survey case study (separate from the Paris event) |
| Dec 2026 | Replace the "Coming soon" card with the Digital Marketing client campaign case study (A/B tests) |
| When done | Restaurant-review and Ralph Lauren projects: status → Published, add results |
| Ongoing | Move skills from "Currently learning" to "Tools" as each is used in a published project |
