# Polymex Lyon: the planning process, stated and true

FDE School, Day 3 morning. Lab kit for Exercises 1 and 2. Open this folder in Claude Code and read `CLAUDE.md` first.

## The situation

Wednesday 6 May 2026. Two weeks ago the diagnostic team chose Lyon and the planning problem: OTIF fell from 87% in 2025 to 84% in April, Codra Retail decides in September whether to keep 5,000 t a year, and Corinne rewrites the plan every day. Hervé wants an APS. Before anyone buys or builds anything, you need to know how planning really works today.

The company's answer is in `stated/`: a procedure and a description of the SAP flow. The plant's answer is in `field/` and `data/`: eight process-walk interviews, a shadowing log of Corinne's Wednesday, and four weeks of consolidated change events.

## Exercise 1. Stated process, true process, target (70 minutes)

1. Read `stated/`. Fill the stated process in `templates/as-is-vsm.md` (10 min).
2. With Claude, read `field/` and `data/`, and infer the true process. Every step cites a file. Quantify the loops from the change log (25 min).
3. Read `knowledge/`: every rule a person applies today, with its source and owner. Count them by kind (10 min, split the folder in the team).
4. Fill `templates/target-process.md`, `templates/target-architecture.md` (with `platform/PLATFORM_CATALOGUE.md` and `data/systems-inventory.md`) and `templates/ontology.md` (15 min).
5. Readout: two teams, four minutes each (10 min).

## Exercise 2. What good looks like (25 minutes)

Fill `templates/what-good-looks-like.md` from `data/kpi_weekly_2026-w06-w18.csv`, the interviews in `field/` and `context/` (Hervé, Julien, Stéphane) and the P&L in `context/`: at most five measures, each with a baseline, the best demonstrated week, a target with a date, an owner, how it is measured and the guardrail that stops you from cheating.

## Folder map

| Path | What it holds |
|---|---|
| `stated/` | The procedure PRO-PLN-004 and IT's description of the SAP planning flow |
| `field/` | Eight process-walk interviews and the shadowing log, in the bundle's knowledge format |
| `data/` | Change events, plan stability, weekly KPIs, the systems inventory |
| `knowledge/` | The rules people apply today: notebooks, Corinne's rules session, maintenance, quality, customers, equipment, production, run rates, holidays, carriers |
| `context/` | From the Day 2 bundle: Hervé, Julien, Stéphane, Amina, Marc, the Lyon P&L, the lost and at-risk orders |
| `platform/` | The catalogue of what the FDE platform gives out of the box |
| `templates/` | The six deliverables: as-is, target process, target architecture, ontology, what good looks like |
| `knowledge-index.md` | What every file is and who owns it |
