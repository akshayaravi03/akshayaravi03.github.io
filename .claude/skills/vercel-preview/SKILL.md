---
name: vercel-preview
description: Workflow for previewing changes to this site via Vercel before merging to main. Use whenever making a change to the site (React/TS app built with Vite) that the user should review before it goes live.
---

# Vercel preview workflow

`main` auto-deploys to GitHub Pages via `.github/workflows/deploy.yml`
(Pages source = GitHub Actions). Vercel is connected for preview
deployments only, with Deployment Protection on (preview links need the
user's own Vercel login). No port tunneling is possible from this
sandbox — Vercel is the only way to hand the user a clickable link.

## Steps

1. Branch off latest `main`.
2. Make the change, verify `npm run build` passes.
3. Commit and push the branch.
4. Open a PR (feature branch → main) purely so Vercel's bot comments with
   the preview link — **not for review**. Don't request reviewers, don't
   comment on it yourself; the user approves through chat, not the PR.
5. Check PR comments **once**
   (`mcp__github__pull_request_read`, method `get_comments`, look for
   `vercel[bot]`) and give the user the plain preview URL. Don't
   sleep-loop waiting for the bot — if it's not there yet, say so and
   check again later.
6. Wait for the user's explicit go-ahead before merging.
7. On approval: merge the branch into `main` (`--no-ff`) and push.
8. Check the `Deploy to GitHub Pages` run **once** after pushing — don't
   sleep-loop on it either.
