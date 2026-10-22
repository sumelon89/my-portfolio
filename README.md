# Suri Huang Portfolio

A personal marketing portfolio showing how I use funnel strategy, customer insight, and practical systems to solve growth problems across B2B and healthcare.

**[Visit the website](https://www.surihuang.com/)** · [Explore the work](https://www.surihuang.com/projects) · [About Suri](https://www.surihuang.com/about)

## Featured work

- **Funnel diagnosis** — identifying activation barriers and designing targeted responses.
- **Sales enablement** — turning sales feedback into training, talk tracks, and useful resources.
- **Growth operations** — connecting reporting, decisions, execution, and review.
- **MKT Coffee Chat** — a community co-founded and co-hosted with Jessie for Chinese-speaking marketers in North America.

## Tools and interactions

- A playable pixel scene: clear the bottleneck and unlock the path.
- Case diagrams showing customer-journey focus, approach, and supporting evidence.
- Before/after illustrations, expandable case notes, and screenshot galleries.
- Marketing Performance Dashboard, Sales Enablement Hub, and Partner Content Editors walkthroughs.
- An interactive tool inventory, community previews, and discussion topics.
- Light/dark themes, responsive layouts, keyboard controls, and reduced-motion support.

Tool walkthroughs use demonstration or synthetic data. They do not expose private company workspaces or establish achieved business results. Project credits and implementation boundaries appear on the relevant pages.

## Technology

Next.js 16 App Router · React 19 · TypeScript · Tailwind CSS 4 · Lucide React · CSS/SVG animation

## Run locally

Requires Node.js **20.9 or newer** and npm.

```bash
git clone https://github.com/sumelon89/my-portfolio.git
cd my-portfolio
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

Check the production build:

```bash
npm run build
npm run start
```

No environment variables are required for the current portfolio or prepared Q&A interface.

## Project structure

| Location | Purpose |
| --- | --- |
| `src/app/` | Pages, shared layout, styles, and the optional chat API |
| `src/components/` | Hero, pixel game, case diagrams, tools, community, and navigation |
| `src/data/projects.ts` | Case names, summaries, and links |
| `src/data/case-stories.ts` | Detailed case narratives and evidence |
| `src/data/work-samples.ts` | Tool walkthroughs, images, scope, and credits |
| `src/data/background.ts` | Background and experience reference data |
| `src/data/assistant-profile.json` | Reference context for the optional server-side guide |
| `public/images/` | Portrait and public demonstration images |
| `docs/MAINTENANCE.md` | Editing, publishing, rollback, and maintenance guide in Chinese |

Some About content is defined directly in `src/app/about/page.tsx`; updating the reference data alone will not change every visible section.

## Publishing

```text
GitHub main → Vercel production deployment → www.surihuang.com
```

Vercel project: `my-portfolio` in the `sumelon93` workspace. Pushing to `main` triggers a production build. Check that the new deployment is **Ready**, then verify the live domain. The previous successful deployment remains available for rollback in Vercel.

**The website has no Replit runtime or hosting dependency.** Domain registration and renewal are separate from hosting subscriptions.

## Current status

- The production website is hosted on Vercel at [www.surihuang.com](https://www.surihuang.com/).
- The resume link currently opens an email request. A downloadable resume will be added after the updated version is finalized.
- Ask Me Anything uses prepared answers and keyword matching. It does not call a model API.
- An optional server-side AI endpoint remains in the source, but the current chat UI does not use it. Adding an API key alone does not switch the UI to AI mode.
- Business estimates, contribution boundaries, and demo limitations are documented within the cases; do not remove those qualifications when updating copy.

## Checks

```bash
npm run build
npm run test:chat
npm run lint
```

The chat tests validate the optional API and input handling. Full-repository lint currently reports existing issues in `ThemeToggle.tsx` and CommonJS test imports, plus image-optimization warnings; it is not a clean release gate yet. See the maintenance guide.

## Content and attribution

Portfolio copy, portrait, original interface work, and project materials belong to their respective owners. Company and platform names identify work context, not endorsement. The reporting dashboard builds on an original tracking foundation by Vic; Suri's contribution and coding-assistance credits are described in the walkthrough. No reuse license is granted by this README.
