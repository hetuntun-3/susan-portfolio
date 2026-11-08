---
title: "An AI-built lead router, and my audit of it"
kind: lab
status: in-progress
statusNote: Self-initiated GTM experiment
date: 2026-11-08
skills: [n8n, Claude API, Firecrawl, Brave Search API]
summary: An n8n workflow that enriches, scores and routes inbound demo requests, built for Clay as a test case. AI wrote the first version; I'm auditing it node by node.
---

## Why Clay

I picked a real company so the scoring had to answer to a real ICP, not a generic one. Clay sells to GTM teams, so its ideal buyer is easy to define and easy to argue with. This is a simulation: I don't work at Clay and have no affiliation with it.

## How it works

1. **Capture.** A demo-request form collects name, work email, company, title and use case.
2. **Filter.** Personal and .edu emails skip enrichment, so no API credits are spent on them.
3. **Enrich.** Firecrawl reads the company website; Brave Search looks for funding and hiring signals.
4. **Score.** Claude scores the lead 0–100 on four parts: firmographics 40, persona 25, use case 20, timing 15.
5. **Route.** A (75+) goes to an AE with a draft first email for a human to review, never auto-sent. B (50–74) goes to nurture. C (under 50) goes to self-serve.
6. **Save.** Score, reasoning and draft are written back to the lead's row.

## Where it stands

I generated the first version with AI from a single prompt. Before I call it mine, I'm checking:

- **Who decides the tier.** Right now the model adds up the points *and* picks the tier. Tiers should be computed in code, so the thresholds behave the same every time.
- **The weights.** 40 / 25 / 20 / 15 is an untested assumption.
- **Real runs.** It hasn't been run end to end yet. Next: a set of sample leads with the tier I expect for each, then compare.

## What's next

The ICP is written straight into the prompt today. I want to move it into one settings step, so the same workflow can be pointed at any company's ICP. Clay stays as the worked example.
