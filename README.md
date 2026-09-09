# B Kasinath — Portfolio

A dashboard-styled portfolio site (Next.js + Tailwind), built to look like a
Power BI report: page-tab navigation, KPI cards, and report-style sections.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## How to update content (no code knowledge needed for most of this)

Everything on the site is read from two files — you never need to touch the
components:

- **`data/profile.ts`** — your name, tagline, email, LinkedIn, summary,
  education, experience, skills, certifications, achievements, involvement,
  and the KPI numbers shown at the top of the page.
- **`data/projects.ts`** — your project list. To add a new project after you
  finish one, copy an existing object in the array and edit the fields:

  ```ts
  {
    id: "unique-id-for-this-project",
    title: "Project Name",
    period: "Where / when",
    description: "One or two sentences on what it does and how.",
    stack: ["Power BI", "Python"],
    metric: "Optional small stat",
    chart: "bar", // or "line" or "donut" — purely decorative
    link: "https://github.com/kasitpm/your-repo", // optional
  },
  ```

Save the file, commit, and push — Vercel redeploys automatically (see below).

## Deploy to Vercel

1. Create a new GitHub repository and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to https://vercel.com/new and import that repository.
3. Vercel auto-detects Next.js — just click **Deploy**. No config needed.
4. You'll get a live URL (e.g. `your-project.vercel.app`). You can add a
   custom domain later from the Vercel dashboard if you want one.

From then on, every `git push` to `main` auto-redeploys the live site —
that's your whole "update over time" workflow: edit `data/projects.ts`,
commit, push.

## Structure

```
app/            Next.js app router — layout, page, global styles
components/     Hero, PageTabs, Section, ProjectCard, ContactCard, MiniChart
data/           profile.ts and projects.ts — all editable content lives here
```
