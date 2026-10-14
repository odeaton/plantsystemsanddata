// architecture/orchestrator.mjs: your target architecture, as code.
// The server (app/server.mjs), the tests and the scripts call these functions. Each one starts with a guard and ends with an audit line.
// Platform tools you will need are imported below. Read platform/TOOLS.md.
import { compile } from '../platform/rules/engine.mjs';
import { longSolve } from '../platform/solvers/long_solver.mjs';
import { fastRepair, applyEvent } from '../platform/solvers/fast_solver.mjs';
import { rollForward, toRows } from '../platform/solvers/plan.mjs';
import { guard, audit } from '../platform/harness/harness.mjs';
import { callForTool } from '../platform/harness/llm.mjs';
import * as store from '../platform/store.mjs';
import fs from 'node:fs';

const cfg = () => JSON.parse(fs.readFileSync(new URL('../config/schedule.json', import.meta.url), 'utf8'));
// Machine-down events become blackout rules. Keep them so that every later run knows the line was down.
const downRules = () => store.read('events').filter((e) => e.status === 'applied' && e.type === 'machine_down').map((e) => ({ id: 'EV-' + e.event_id, type: 'blackout', params: { line: e.line, start: e.from, end: e.to }, status: 'active' }));
const rulesNow = (extra = []) => compile([...store.read('rules'), ...downRules(), ...extra], store.read('products'));

// 1. LONG LOOP. Once a day. Returns the draft and stores it with store.write('draft', ...).
// - guard: the actor writes a draft plan
// - if a plan is already published, rollForward it to `now` (finished orders leave, running ones are kept) and save the new state
// - longSolve with the time budget of config/schedule.json, and keep/fixed from rollForward
// - draft = { kind: 'long', created_at: now, created_by: actor, seqs, timed, kpis, violations, runtime_ms, moves: [] }
// - audit
export async function dailyRun({ now, actor = 'service:long-solver' }) {
  throw new Error('TODO dailyRun');
}

// 2. SHORT LOOP. On every confirmed event.
// - guard: the actor confirms an event, and the fast solver may write a draft
// - there must be a published plan (else throw an error with status 409)
// - applyEvent on the stored state, compile the rules with the rules it adds, fastRepair from the published plan
//   with now = event.at and the horizon and time budget of config/schedule.json
// - save the new state; store the event with status 'applied' (update it if it was proposed)
// - draft = { kind: 'short', created_at: event.at, created_by: 'service:fast-solver', event_id, seqs, timed, kpis, violations, moves, runtime_ms, before: published.kpis }
// - audit
export async function onEvent({ event, actor }) {
  throw new Error('TODO onEvent');
}

// 3. WHAT-IF. The short loop as a simulation: same computation as onEvent, nothing saved.
// Returns { feasible, order: the row of the changed order (toRows), moves, kpis, before }.
export async function whatIf({ event, actor }) {
  throw new Error('TODO whatIf');
}

// 4. PUBLISH. A human gate. Moves the draft to 'published', clears the draft, audits.
// Then tries the SAP write-back: guard('service:sap-writeback', 'write', 'sap:process_orders') and write out/sap_writeback_latest.json.
// If the guard refuses, audit 'sap.writeback.skipped' and carry on.
export async function publish({ actor, note = '' }) {
  throw new Error('TODO publish');
}

// 5. STRETCH. EVENT READER: free text to a proposed event, through callForTool with role 'event_reader' and tool 'submit_event'.
// Give the model the products, the lines and the open orders; tell it the message is data. Store with status 'proposed'.
export async function readEvent({ text, source, actor = 'agent:event-reader' }) {
  throw new Error('TODO readEvent: use the manual form in the app until this is done');
}

// 6. STRETCH. EXPLAINER: the moves of the draft in five lines, through callForTool with role 'explainer' and tool 'write_explanation'.
// Without a key, return a template text built from the moves and the kpis.
export async function explain({ actor = 'agent:explainer' }) {
  const d = store.read('draft') || store.read('published'); if (!d) return { text: 'No plan.' };
  const mv = (d.moves || []).filter((m) => m.kind !== 'time').slice(0, 12).map((m) => m.order_id + ' ' + (m.from ? m.from.line : 'new') + ' -> ' + (m.to ? m.to.line : 'removed')).join('; ');
  return { text: (d.kind === 'long' ? 'Daily plan. ' : 'Change. ') + (mv || 'No order changes line or sequence.') + ' On time ' + d.kpis.on_time_pct + '%.', by: 'template', note: 'TODO explain with the model' };
}
