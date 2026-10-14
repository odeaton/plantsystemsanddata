---
type: procedure
title: PRO-PLN-004 Weekly production planning, extrusion
description: The official planning process: one weekly plan, frozen, changes by exception
tags: [procedure, lyon, planning, polymex-way]
version: 3
approved: 2021-03-15, Didier (production manager), Sandrine Faure (CI director)
status: active
---

## Purpose

Give every line a stable weekly plan that sales can promise from and the floor can execute.

## Process

| Step | When | Who | What |
|---|---|---|---|
| 1. Demand freeze | Thursday 17:00 | Sales | All orders for next week are entered in SAP. No order enters the week after the cut-off. |
| 2. MRP run | Friday 06:00 | SAP (automatic) | Material requirements and planned orders for next week. |
| 3. Weekly plan | Friday 08:00 to 14:00 | Planner | Sequence the planned orders on lines M01 to M07 in the SAP planning board, using the standard routings. |
| 4. Approval and freeze | Friday 16:00 | Production manager | Approves the plan. The plan is frozen from Monday 06:00 to the following Monday 06:00. |
| 5. Execution | Monday to Sunday | Shift leaders | Execute the plan in sequence. Report deviations in LineLog. |
| 6. Change by exception | Any time | Requester, production manager | A change inside the frozen week needs form CR-PLN, approved by the production manager. At most one change per line per day. |
| 7. Promise dates | Any time | Sales | Promise from SAP available-to-promise (ATP). |

## Indicator

Schedule adherence at least 95% (orders produced in the planned sequence and day).

## RACI

| Step | Responsible | Accountable | Consulted | Informed |
|---|---|---|---|---|
| Weekly plan | Planner | Production manager | Maintenance, quality | Shift leaders, sales |
| Change by exception | Requester | Production manager | Planner | Shift leaders |
