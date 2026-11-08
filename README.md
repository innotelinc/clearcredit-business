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
- `src/lib/intake.ts` — the lead submission: posts to the Denovo platform's
  intake endpoint. `src/worker/index.ts` is the same-origin fallback.

## Denovo integration

The lead form posts straight at the platform: `POST {VITE_DENOVO_API_URL}/api/intake`.
The platform validates, routes the lead to a product and stores it in the workspace
inbox, so a submission is in the staff queue before anyone leaves the page.

`VITE_DENOVO_API_URL` is baked in at build time. In development it defaults to
`http://127.0.0.1:3200`, the platform's local port. With no variable set the form
posts to this origin, where the Worker validates it and forwards it instead.

The readiness check never sends anything on its own — it has no contact details — so
it hands its score, band and gaps to the form (`READINESS_EVENT`), which submits them
as the lead's `message`. A lead arrives with the result the visitor just saw.

The platform only answers a CORS preflight for the origins in its `SITE_ORIGINS`
variable (development defaults to `http://localhost:5183` and `http://127.0.0.1:5183`).
For a deploy, set `VITE_DENOVO_API_URL` to the platform's public URL and add the
site's origin to `SITE_ORIGINS` on the platform, then redeploy both.

### Same-origin fallback (Worker)

With no `VITE_DENOVO_API_URL`, `/api/intake` on this origin forwards a lead to
`{CLEARPATH_INTAKE_URL}/api/denovo/leads`, signing the exact JSON body with
HMAC-SHA256 (`x-clearpath-signature`, secret in `CLEARPATH_SHARED_SECRET`). That is
the platform's documented signed handoff.

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
