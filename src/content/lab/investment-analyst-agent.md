---
title: "A stock screener where AI sets the assumptions and code does the math"
kind: lab
status: in-progress
statusNote: CBS AI Club workshop · part 1 of 2
date: 2026-11-07
skills: [n8n, Claude API, SEC EDGAR data]
summary: An n8n workflow that screens 24 companies, has an AI agent research the top 6, and flags which clear a 12% annual return.
---

## How it works

1. **Data.** Pulls 10-K figures from SEC filings and current prices from Yahoo.
2. **Screen.** A simple 5-year return model ranks all 24 companies, using last year's revenue growth and the median valuation multiple of each company's industry.
3. **Research.** For the top 6, an AI agent reads the last 7 days of Google News and sets two numbers: 5-year revenue growth and the exit multiple.
4. **Model.** Code reruns the return model with guardrails: growth stays between −10% and 30%, the multiple between 5x and 40x.
5. **Call.** **Research** if the return is 12% or more, **Watch** if it's within 3 points, **Pass** otherwise.
6. **Track.** Every run is saved to a table that feeds a dashboard.

## The design choice I'd defend

The AI only touches two inputs. All the math happens in code that anyone can read, so every call can be traced back to the numbers behind it.

*A personal learning project, not investment advice.*
