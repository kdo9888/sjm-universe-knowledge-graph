# SJM Universe Knowledge Graph

## What this project is

A knowledge-graph application cataloging entities, relationships, and cross-series patterns across Sarah J. Maas's three interconnected fantasy series: ACOTAR, TOG, and Crescent City (16+ books). Frontend tool for exploring the SJM universe via multiple entry points — not a wiki.

## Who's working on this

Krystal (kdo9888) is the canon authority, product owner, and sole developer. **Krystal is a non-developer learning as she goes**, so:

- Explain commands before running them
- Pause for permission on anything destructive
- Be patient with mistakes; correct them constructively
- Avoid dense jargon; plain English first, technical terms second

## Tech stack

| Layer | Tool |
|---|---|
| Frontend framework | React 18 |
| Build tool | Vite |
| Code hosting | GitHub (`github.com/kdo9888/sjm-universe-knowledge-graph`) |
| Web hosting | Vercel (Hobby plan, auto-deploys on push to `main`) |
| Database | Firebase Firestore — project `sjm-knowledgegraph` (Spark/free plan) |
| Graph engine (planned) | graphology.js (in-browser) |
| AI layer (planned) | Claude API |
| Local editor | VS Code |
| Version control | Git |

Neo4j is deferred. André's Python kg-pipeline is not in use — Krystal works from structured wiki content, not raw book text.

## Where things live

- **Code:** in this folder (`~/code/sjm-universe-knowledge-graph`) and on GitHub
- **Data:** in Firestore (`sjm-knowledgegraph` project)
- **Firebase config:** Krystal has it saved offline; do not commit Firebase secrets to git without checking with Krystal first
- **Live site:** auto-deployed to Vercel on every push to `main` branch

## Communication preferences

- Direct, minimal, technically precise
- One question at a time (ADHD-friendly cadence)
- Claude drives and recommends; never asks "what next?"
- Acknowledge mistakes fast, no defensiveness
- Always be honest about uncertainty — don't fake confidence
- Krystal expects pushback when an idea is bad

## Working pattern

- **One step at a time** for any sequence of commands. Show, explain, run, verify, move on.
- **Pause for approval** before any destructive action (rm, force push, delete from Firestore, modify package.json dependencies, etc.)
- **Show the diff** for any code edit, especially in larger files. Confirm Krystal has seen the change before saving.

## Canon discipline (when working with SJM data)

Krystal is the sole canon authority. Specific standing rules:

- Canonically-defined terms (mate, blood oath, carranam, the Drop, the Made, thin place, Wyrdmarks, etc.) receive definitional concept-node treatment — not casual labels
- Tier discipline applies at the assertion level — theory-tier claims route to pattern nodes, not character fields
- Never invent canon — if something can't be sourced to a book, wiki, or chapter, flag it as canon-verify-pending

## Standing canon corrections

These are book-canon facts Krystal has caught Claude getting wrong before:

- Feyre Made by the seven High Lords collectively (resurrection), not Cauldron-Made
- Manon and Dorian are NOT canonically mated; Mor and Azriel are NOT canonically mated
- Lidia's aliases: Hind / Daybright / Day (not Hawk / Daybreak)
- Einar Danaan was killed by Ruhn, not Bryce
- First Lock: forged by Mala and Rhiannon Crochan (two beings, not three); Elena's role was misuse
- Second Lock: multi-stage — Dorian's father substituted for Dorian mid-forging
- Bryce has a scar (not tattoo) from her Drop event
- Wind-Cleaver (not Wing-Cleaver)
- Wyrdkeys forged BY Wyrdmarks (the language is the forging mechanism); the Book of Breathings is the canonical Cauldron-substrate vessel
- Aelin-Rowan are both mates AND carranam (two distinct bonds, not one)
- Fire-Bringer is unique to Aelin within the Galathynius line (per Mala wiki Tier-1) — NOT broadly Galathynius
- Briggs purchased obsidian-salt; Micah was the actual invoker for Kristallos summoning
- Four River Courts: Istros/Blue, Melanthos/Black, Niveus/White, Rubellus/Red — in Valbara, sister-queens
- CC Houses are species-caste legal instruments (Imperial Senate decree, 33 V.E.) — distinct from TOG/ACOTAR bloodline-based houses

## Migration governance (when changing data structures)

Six-step protocol for any data change:
1. Understand current use
2. Plan redistribution
3. Build new shape alongside old
4. Verify replacement reproduces all content
5. Archive pre-change snapshot (30-day retention)
6. Remove legacy only after verification closes

## Firebase write pattern

When writing to Firestore from a one-off script: produce a single self-initializing Firebase v9 modular SDK script (hardcoded config, gstatic CDN imports, doc/getDoc/setDoc). Idempotent where possible (skip-if-exists). For application reads/writes (inside the React app), use the standard SDK pattern.

**Krystal must approve every batch of canon data before it is written to Firestore.** Never auto-save.

## Current phase

**BUILD PHASE.** Week 2 (started 2026-05-16).
Goals: wire Firebase into React → extract first ~10-20 entities (Option A slow-and-sure) → first UI slice.

Phase 2 catalog finalization PAUSED. Reader Companion spec PAUSED. Existing LOCKED schema work (characters, organizations, places, magic) is preserved as reference but not actively being extended.

## Files of note

- `WEEK-1-CLOSE.md` — what got built in Week 1 (in chat history; ask if needed)
- `MAGIC-NODE-FINAL.md` — consolidated magic master-node reference (offline; ask Krystal if needed)
- `firebase-config-v2.txt` — Firebase web config (offline only; do not commit)