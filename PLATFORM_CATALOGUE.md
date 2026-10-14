---
type: catalogue
title: The FDE platform: modules available out of the box
owner: Platform team
version: 2.3, May 2026
status: active
---

What every deployment gets without writing code, and what each deployment must build. Use it to decide, step by step, what is configured and what is designed for Lyon.

## Out of the box

| Module | What it does | What you configure |
|---|---|---|
| Rules engine | Applies rules of 13 types (changeover times and overrides, forbidden transitions, changeover windows, line capability, customer qualification, shared resource gap, changeovers per shift, blackout, run rate, release and transport lag, soft line preference, priority, freeze). Every decision cites a rule id | The rules, with their owners |
| Long solver | Sequences every open order on every line over a horizon. Minimizes late orders weighted by priority, then changeover minutes | Horizon, time budget, when it runs |
| Fast solver | Repairs a published plan after one event in milliseconds, keeps a freeze, minimizes moves | Horizon, freeze, which events it listens to |
| Plan evaluation | The same KPIs and violations for any plan, human or machine | Nothing |
| Harness | Identities, grants, human gates, kill switch, audit trail, secrets, redaction | Who may do what |
| Model gateway | One way to call a model; EU endpoint; structured answers only; logs tokens and latency | Which model for which role |
| Decision model (Jev) | Picks one option from a list you define, with a calibrated probability | The questions and the option lists |
| Language models | Small fast model for extraction into a schema; frontier model for explanations and drafts | Prompts, schemas, evals |
| Connectors | SAP reader (reporting user), file reader (CSV), REST reader, mailbox reader | Credentials, mapping |
| Store | Plant state, rule register, event log, plan versions, audit | Nothing |
| Evals | Tests per rule type, eval sets per model role | Your cases |

## Not in the platform: built for each deployment

- The ontology mapping: the client's fields to orders, products, lines, rules, events.
- The orchestrator: which loop runs when, on which trigger, with which gate.
- The mini-apps people use: review and publish, event intake, what-if, rules capture, execution capture, scorecard.
- Write-back into the client's systems: always a project with the client's IT.
- Any connector to a system without an API or an export (an Access database, a paper notebook).
