---
type: system-description
title: SAP ECC planning flow, Lyon
description: How IT describes planning in SAP: MRP, planning board, standard routings, ATP
tags: [system, sap, lyon, planning]
author: Group IT, François Petit
date: 2024-11-04
status: active
---

## Flow

1. Sales orders are created in SD by the customer service team or by EDI for Codra Retail.
2. MRP runs nightly at 02:00 and creates planned orders per product, using lot sizes from the material master.
3. The planner converts planned orders into process orders and sequences them on the planning board (transaction CM25 equivalent for process industries).
4. Routings hold one standard changeover time per product: 60 minutes, set in 2011 for every product.
5. Capacity is checked against the work center calendar: 3 shifts, 7 days. Capacity is infinite at the MRP step and checked only on the planning board.
6. ATP checks stock and planned receipts. Promise dates use the process orders as they are in SAP.
7. Confirmations are entered by the scheduling clerk from the shift reports.

## Known limits (from the 2024 IT review)

- Changeover times do not depend on the sequence.
- Line capabilities in the work center master list every family on every line.
- No interface with LineLog, the lab database or MaintPro.
