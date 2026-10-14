# Data dictionary

## change_log_w15-w18.csv
One row per event that changed the plan after Friday's publication, 6 April to 3 May 2026 (weeks 15 to 18). Consolidated by the FDE team from Sylvie's notebook, Stéphane's mailbox, LineLog comments and the lab database; checked by Sylvie.
- `channel`: email, phone, LineLog, morning meeting, MaintPro, workbook
- `type`: date_change, quantity_change, rush_order, cancellation, machine_breakdown, material_late, quality_hold, night_swap, maintenance_window, planner_resequence
- `horizon_hours`: hours between the event and the planned start of the first affected order (0 = the order was due to run or running)
- `lines_affected`: number of lines whose sequence had to change
- `in_sap_same_day`: whether the change was keyed in SAP before midnight of the same day
- `customer_answer_hours`: for customer requests, hours until the customer received an answer (empty if no answer was needed)

## plan_stability_w15-w18.csv
Per day, from the saved versions of Corinne's workbook: orders in Friday's plan for that week, orders whose line, sequence or day changed since Friday (cumulative), orders added, cancelled, the share of Friday's plan unchanged, and the number of workbook versions saved that day.

## kpi_weekly_2026-w06-w18.csv
Thirteen weeks, 2 February to 3 May 2026. OTIF against the promise date (Julien's definition); OTIF for Codra only; retail share of volume; changeovers counted in LineLog; changeover hours at 66 minutes average (LineLog); change events from the change log (W15 to W18) and Sylvie's notebook (W06 to W14); replans per day (workbook versions minus one, weekdays); median hours to answer a customer change; average quoted lead time; Corinne's hours above 40; Sylvie's hours keying the plan; scrap as % of material input; share of orders whose start moved less than 24 hours before.
