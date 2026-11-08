# ClearPath by Denovo Credit

Marketing, readiness and intake site for **ClearPath**, Denovo Credit's credit
platform, built by **Innotel Labs**. It covers two programs: Denovo's existing
**personal credit repair** service and the new **Business Credit Build** product.

The business credit workspace behind the intake form is a separate service:
[`innotelinc/clearpath-business`](https://github.com/innotelinc/clearpath-business).

## Run it

```sh
npm install        # or: bun install
npm run dev        # http://localhost:5173 (Vite + the Worker in workerd)
npm run build      # dist/client (assets) + dist/clearpath/index.js (Worker)
npm run typecheck
```

## Structure

- `src/content.ts` — every string, question, price and disclosure. Start here.
- `src/sections/*` — page sections; `src/App.tsx` stacks them.
- `src/sections/Assessment.tsx` — the seven-question readiness check. Pure client
  state: no credit pull, no submission, nothing stored.
- `src/sections/Ladder.tsx` — the four-stage build (foundation → tier 1 → tier 2
  → tier 3).
- `src/worker/index.ts` — Cloudflare Worker. `POST /api/intake` validates the
  request and forwards it to the ClearPath Business workspace.

## Denovo integration

`/api/intake` hands a lead to the workspace at
`{CLEARPATH_INTAKE_URL}/api/denovo/leads`, signing the exact JSON body with
HMAC-SHA256 (`x-clearpath-signature`, secret in `CLEARPATH_SHARED_SECRET`). That
is the same contract the workspace documents, so the site and Denovo's own
systems deliver leads the same way.

Worker variables:

| Variable | Purpose |
| --- | --- |
| `CLEARPATH_INTAKE_URL` | Base URL of the ClearPath Business workspace |
| `CLEARPATH_SHARED_SECRET` | Shared HMAC secret for the signed handoff |

With neither set, the form still validates and acknowledges the visitor; the
Worker logs that the handoff was skipped rather than pretending it was sent.
The workspace stores leads regardless, so a missing webhook never loses an
inquiry.

## Notes

- Prices, timelines and plan names are product decisions in `src/content.ts`,
  not derived data. Change them in one place.
- Copy deliberately avoids guarantees of scores, limits or approvals; keep it
  that way when editing, and keep the footer disclosure intact.
- Business credit build is a commercial consulting engagement and is described
  separately from CROA-regulated consumer credit repair.

## Deploy

`deploy.json` points at the build output. After `npm run build` (or `bun run
build`), deploy from this directory with the `sites_deploy` tool.
