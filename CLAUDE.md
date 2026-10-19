# CLAUDE.md

Repo overview is in [README.md](README.md). This file only adds what an agent session needs on top of it.

## Pull requests

- Open every pull request as a **draft** first (`gh pr create --draft`, or `draft: true` in the API). Mark
  it ready for review only when the work is done.
- CI must not run on draft PRs. Any workflow that triggers on `pull_request` includes `ready_for_review`
  in its `types` and gates its jobs on `github.event.pull_request.draft == false`. Keep that when you add
  or edit workflows.
