---
name: vercel-preview
description: Workflow for previewing changes to this site via Vercel before merging to main. Use whenever making a change to the site (React/TS app built with Vite) that the user should review before it goes live.
---

# Vercel preview workflow

This repo deploys to GitHub Pages from `main` via `.github/workflows/deploy.yml`
(GitHub Actions, Pages source = "GitHub Actions"). It's also connected to
Vercel for preview deployments, with Deployment Protection (Vercel
Authentication) turned on — preview links require the viewer to be logged
into Vercel, so they aren't publicly open.

There is no way to expose a live URL from this sandbox directly (no
external ingress / port tunneling — don't attempt ngrok, localtunnel,
cloudflared, etc., it will be denied). Vercel is the only way to give the
user a clickable preview link.

## Steps for every change

1. Branch off latest `main`: `git checkout main && git pull && git checkout -b <feature-branch>`.
2. Make the change, verify `npm run build` passes.
3. Commit and push the branch.
4. Open a PR (`head` = feature branch, `base` = main). This is required —
   Vercel's GitHub bot only comments with the preview link on PRs, it
   doesn't otherwise surface a link to fetch. **Do not comment on the PR
   yourself, ever** — the user reviews and merges through chat.
5. Read the PR comments once
   (`mcp__github__pull_request_read`, method `get_comments`) to get the
   `vercel[bot]` comment's Preview URL, or method `get_status` for the
   "Vercel" status's `target_url` (the check page, links to the same
   deployment). Give the user the plain preview URL
   (`https://<project>-git-<branch>-<team>.vercel.app`) directly — don't
   dress it up.
   - **Check once, immediately.** Vercel builds finish in well under a
     minute for this project. Do NOT loop with `sleep` waiting for the
     bot comment to appear — that wastes the user's time watching a
     background task. If the comment isn't there yet on the first check,
     say so and check again only when the user prompts, or after doing
     other useful work in the meantime.
6. Wait for the user's explicit go-ahead in chat before merging. Never
   merge on your own judgement just because the preview looks right.
7. On approval: `git checkout main && git pull && git merge --no-ff <feature-branch> && git push origin main`.
8. The push to `main` triggers the `Deploy to GitHub Pages` workflow
   automatically. Check its status **once** right after pushing
   (`mcp__github__actions_get`, method `get_workflow_run`, or
   `list_workflow_runs` filtered to branch `main` for the run id first).
   It normally completes in well under a minute — don't sleep-loop
   waiting on it. If it's still `in_progress` on that first check, just
   say so; don't block the conversation polling.

## Key facts

- GitHub Pages source: **GitHub Actions** (not the legacy "deploy from a
  branch" build) — set once in Settings → Pages.
- Vercel project is connected for previews only; production Vercel domain
  is not the live site (GitHub Pages is).
- Deployment Protection (Vercel Authentication) is ON — preview links need
  the user's own Vercel login to open.
