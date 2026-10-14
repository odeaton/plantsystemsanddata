---
type: inventory
title: Systems that touch the plan, Lyon
description: Every system and file a planning fact lives in, with access
tags: [systems, lyon]
owner: Nadia
date: 2026-05-06
status: active
---

| Source | What lives there | Format and refresh | Access for the FDE team |
|---|---|---|---|
| SAP ECC (SD, PP) | Customer orders, due dates, process orders, routings (60 min changeover), ATP | Database, real time; plan as keyed by Sylvie | Read-only reporting user |
| Corinne's workbook Plan_L1-7_2026.xlsm | The real sequence per line, one tab per week, a version per save | Excel on the shared drive, 3 to 6 versions a day | Read-only copy of the folder |
| Corinne's head | Changeover rules, priorities, the freeze window | Interviews | Corinne, two hours a week agreed |
| Jean-Pierre's notebooks | The rules since 2009 | Paper, scanned | Copy given on Day 3 afternoon |
| LineLog | What ran, stops, changeovers, free-text comments of shift leaders | CSV per day at 06:00 | Shared folder, read-only |
| Lab database | Lot tests and releases, by batch number | Access on the lab PC | Nightly copy |
| MaintPro | Preventive windows, breakdown work orders | REST API | Read-only token |
| Stéphane's mailbox | Customer change requests | Email | No. A shared planning mailbox can be created |
| Sylvie's notebook | Every change since February: date, who, order, what | Paper | Typed by the FDE team with her consent |

## What could change, according to Nadia

- **SAP.** Write-back of process orders is possible through the group interface; a project with group IT, six to eight weeks, test plan and runbook first.
- **LineLog.** The vendor can export every hour instead of once a day (licence option). The comment field could carry a reason code.
- **Lab database.** Nadia can add an order number field next to the batch number; Amina's team would fill it.
- **MaintPro.** Patrick's team can enter every preventive window, including the ones announced at the morning meeting.
- **Mail.** A shared planning mailbox can be created; Stéphane's mailbox stays private.
- **Corinne's workbook.** Stays readable on the share as long as needed.
