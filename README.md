# Ayoub ELMORTAJI — Portfolio

Personal portfolio site for **Ayoub ELMORTAJI**, Cybersecurity & Cloud Computing
engineering student at ENSAM Casablanca.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS** and
**Framer Motion**. Every route is statically prerendered, so it deploys to Vercel
with zero configuration.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in the values (see "Environment variables")
npm run dev                  # http://localhost:3000
```

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Dev server with hot reload                    |
| `npm run build`     | Production build (fails on type errors)       |
| `npm run start`     | Serve the production build locally            |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript) |
| `npm run typecheck` | TypeScript only, no emit                      |

> **Don't run `npm run build` while `npm run dev` is running.** Both write to
> `.next/`, and the production build overwrites the dev server's chunks — the
> running dev server then serves `Internal Server Error`. If that happens: stop
> the dev server, `rm -rf .next`, and start it again.

---

## Folder structure

```
.
├── app/
│   ├── layout.tsx            # <html>, fonts, SEO metadata, no-flash theme script
│   ├── page.tsx              # Composes every section + JSON-LD structured data
│   ├── globals.css           # * Theme tokens (the accent color lives here)
│   ├── icon.tsx              # Favicon, generated at build time
│   ├── opengraph-image.tsx   # Social share card, generated at build time
│   ├── robots.ts             # /robots.txt
│   └── sitemap.ts            # /sitemap.xml
│
├── components/               # Presentation only - no content lives here
│   ├── Nav.tsx               # Sticky nav, scroll-spy, mobile drawer
│   ├── CompanyLogo.tsx       # Experience logo chip, with monogram fallback
│   ├── ScrollProgress.tsx    # Hairline progress bar under the nav
│   ├── ScrambleText.tsx      # "Decrypting" heading effect
│   ├── Terminal.tsx          # Typed shell session in the hero
│   ├── Providers.tsx         # "Certified by" logo wall
│   ├── LogoImage.tsx         # <img> that falls back to text if a file is missing
│   ├── SpotlightCard.tsx     # Pointer-following glow on cards
│   ├── ThemeToggle.tsx       # Light/dark switch (dark is the default)
│   ├── Section.tsx           # Shared section shell (eyebrow + heading + rule)
│   ├── Reveal.tsx            # Scroll-triggered fade-up (respects reduced motion)
│   ├── Icons.tsx             # Inline SVG icon set
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Achievements.tsx      # Competitions + Awards + Extracurriculars
│   ├── Certificates.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
│
├── data/                     # * ALL CONTENT LIVES HERE - edit these, never JSX
│   ├── site.ts               # Name, SEO title/description, nav links, resume path
│   ├── about.ts              # Hero text, bio, education, languages
│   ├── experience.ts         # Internship timeline
│   ├── projects.ts           # Project cards
│   ├── competitions.ts       # CTFs and competition results
│   ├── awards.ts             # Awards & prizes
│   ├── certificates.ts       # Certificates, grouped by category
│   ├── extracurriculars.ts   # Clubs / associative roles
│   ├── skills.ts             # Skills, grouped by domain
│   ├── providers.ts          # Certification providers shown in the logo wall
│   └── contact.ts            # Email, phone, socials, contact blurb
│
├── public/
│   ├── resume.pdf            # * Replace with your real CV
│   └── logos/                # * Drop inwi-logo.png + jesa-logo.png here
│
├── .env.example              # Template - copy to .env.local
├── tailwind.config.ts        # Maps Tailwind color names to the CSS variables
└── next.config.mjs
```

**The rule:** every section renders by mapping over an array in `/data`. Add an
entry and a new card, row or timeline item appears automatically. You should
never need to open a `.tsx` file to change content.

---

## How to edit each `/data` file

Every file is typed, so your editor autocompletes the fields and the build fails
loudly if something is missing or misspelled.

### `data/site.ts`
Browser tab title, SEO description, keywords and the nav links.
Nav `href` values are anchors (`#projects`) and **must match a section `id`** in
`app/page.tsx`. To hide a section from the nav, delete its line from `navLinks`.

### `data/about.ts`
Three exports:
- `hero` - the opening screen (`eyebrow`, `name`, `title`, `tagline`)
- `hero` also carries `status` (the pulsing availability pill) and `terminal` -
  the list of `{ command, output }` lines typed out in the hero terminal card
- `about` - the `bio` paragraph and the `facts` cards. A fact's `value` can be a
  plain string (renders as one line) or an array of strings (renders as tag
  pills on a card spanning the full row) - that is how `Focus` is set up
- `education` / `languages` - arrays rendered in the right-hand column

### `data/experience.ts`
Newest first. Each entry has `role`, `company`, `location`, `period`, a
`highlights` array (one bullet per string) and an optional `tech` array of tags.

`logo` is optional and points at a file in `public/logos/`:

```ts
logo: "/logos/inwi-logo.png",
```

**Add the two company logos:** save them into `public/logos/` as

| File                          | Company               |
| ----------------------------- | --------------------- |
| `public/logos/inwi-logo.png`  | Wana Corporate (INWI) |
| `public/logos/jesa-logo.png`  | JESA S.A.             |

That is the only step — the paths are already wired up in `data/experience.ts`.
A square-ish PNG with a transparent background looks best; the site renders it
in a white chip, so light and dark logos both stay readable in either theme.

Until those files exist (or if one fails to load) the chip falls back to a
two-letter monogram built from the company name (`IN`, `JE`), so nothing ever
renders as a broken-image icon. Leave `logo` out entirely and you get the same
monogram.

### `data/projects.ts`
One object per card. `title`, `description` and `tech` are required.
- `featured: true` pins the card to the front of the grid and adds a badge.
- `link` and `repo` are optional - leave them out and the card hides those
  buttons entirely.

### `data/competitions.ts`
`result` is the highlighted line (e.g. `"2nd place"`, `"Top 1%"`); `detail` is
the optional track or region.

### `data/awards.ts`
`title`, `issuer`, `year`.

### `data/certificates.ts`
Grouped: each entry in `certificateGroups` has a `category` heading and an
`items` array. Each certificate has a `credentialUrl` that currently holds `""`
with a `// TODO` beside it. Paste the verification link there and a "Verify"
link appears on that card automatically.

### `data/extracurriculars.ts`
`organization`, `kind` (e.g. "Cybersecurity Club"), `role`, `period`.

### `data/skills.ts`
Each group becomes a card; each string in `items` becomes a pill.

### `data/providers.ts`
The "Certified by" logo wall under the hero. One entry per provider:

```ts
{ name: "AWS", logo: "/logos/aws-logo.png" },
```

`providersHeading` is the line above the wall. Add or remove entries freely -
the row wraps and centres itself at any count.

**Add the provider logos:** save them into `public/logos/` as

| File                                | Provider        |
| ----------------------------------- | --------------- |
| `public/logos/fortinet-logo.png`    | Fortinet        |
| `public/logos/aws-logo.png`         | AWS             |
| `public/logos/oracle-logo.png`      | Oracle          |
| `public/logos/azure-logo.png`       | Azure           |
| `public/logos/tryhackme-logo.png`   | TryHackMe       |
| `public/logos/deeplearning-logo.png`| DeepLearning.AI |

The paths are already wired up. Wide, transparent PNGs look best - each chip is
about 144x56 and the logo is contained inside it. Until a file exists, that chip
shows the provider name in text instead.

### `data/contact.ts`
Email, phone (note the separate `phoneHref` used for the `tel:` link), location,
LinkedIn, GitHub, and the `blurb` shown under the section heading. The `socials`
array drives both the contact list and the footer icons.

---

## How to swap the accent color

The entire site is driven by **one hue**. Open `app/globals.css` and change the
two knobs at the top of `:root`:

```css
:root {
  --accent-hue: 162;   /* <- change this */
  --accent-sat: 84%;   /* <- and optionally this */
}
```

Handy hues: `190` cyan, `217` blue, `265` violet, `330` pink, `38` amber,
`4` red, `140` green.

Light and dark mode each derive their own lightness from that hue, so contrast
stays accessible in both themes without any extra work:

```css
:root { --accent: var(--accent-hue) var(--accent-sat) 27%; }  /* light mode */
.dark { --accent: var(--accent-hue) var(--accent-sat) 52%; }  /* dark mode  */
```

Two build-time images cannot read CSS variables, so if you change the hue also
update the `ACCENT` hex constant in **`app/icon.tsx`** and
**`app/opengraph-image.tsx`** (currently `#1eebae`).

The rest of the palette (`--bg`, `--surface`, `--line`, `--fg`, `--muted`) sits
in the same block if you want to adjust the neutrals.

---

## How to add your resume PDF

1. Drop your CV into `public/` and name it **`resume.pdf`**, replacing the
   placeholder that ships with the repo.
2. That is all - the hero button, the nav button and the mobile menu all read
   the path from `site.resumePath` in `data/site.ts`.

Prefer a different filename (e.g. `Ayoub-ELMORTAJI-CV.pdf`)? Put it in `public/`
and update one line:

```ts
// data/site.ts
resumePath: "/Ayoub-ELMORTAJI-CV.pdf",
```

---

## Environment variables

Copy `.env.example` to `.env.local` and fill it in. **`.env.local` is
git-ignored** (`.env*` is listed in `.gitignore`) - never commit it.

| Variable               | Purpose                                                     |
| ---------------------- | ----------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used for metadata, Open Graph and the sitemap |

Point `NEXT_PUBLIC_SITE_URL` at your real domain once it is live, so the
canonical link, `sitemap.xml` and the Open Graph tags all agree. It is optional
and forgiving: leave it unset, blank, or write a bare hostname
(`ayoub-elmortaji.com`) and `resolveSiteUrl()` in `data/site.ts` sorts it out -
falling back to Vercel's own deployment URL, then to a literal default. A bad
value can never fail the build.

> **Note on `NEXT_PUBLIC_`:** variables with this prefix are inlined into the
> browser bundle, so treat them as public. Never put a real secret (API key,
> token, password) behind a `NEXT_PUBLIC_` name; those belong in a server-only
> variable.

---

## Deploying to Vercel

### Option A - Git (recommended)

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit: portfolio"
   git branch -M main
   git remote add origin https://github.com/AyoubElmortaji/portfolio.git
   git push -u origin main
   ```

   Confirm `.env.local` is not in the commit: `git status --ignored`.

2. **Import the project** - go to [vercel.com/new](https://vercel.com/new), sign
   in with GitHub, pick the repo and click **Import**. Vercel auto-detects
   Next.js; leave every build setting at its default.

3. **Add the environment variable** - in the import screen (or later under
   *Settings -> Environment Variables*), add:
   - `NEXT_PUBLIC_SITE_URL` -> your final domain, e.g. `https://ayoub-elmortaji.com`

   Apply it to **Production, Preview and Development**.

4. **Deploy.** The first build takes about a minute. Every later `git push` to
   `main` redeploys automatically, and every pull request gets a preview URL.

5. **Add a custom domain** *(optional)* - *Settings -> Domains -> Add*, then
   point your registrar at the records Vercel shows. Afterwards update
   `NEXT_PUBLIC_SITE_URL` and redeploy, so the canonical URL, sitemap and Open
   Graph tags use the new domain.

### Option B - Vercel CLI

```bash
npm i -g vercel
vercel            # preview deployment
vercel --prod     # production deployment
```

Set the variable once with `vercel env add NEXT_PUBLIC_SITE_URL`.

---

## Design & motion

The look borrows from the tools of the trade: a terminal, a scope, a rack of
infrastructure. Each effect is deliberately cheap - transform and opacity only,
no canvas, no animation library beyond Framer Motion, which was already a
dependency.

| Effect | Where | Lives in |
| ------ | ----- | -------- |
| Typed shell session | Hero | `components/Terminal.tsx`, content in `data/about.ts` |
| "Decrypting" headings | Hero name + every section title | `components/ScrambleText.tsx` |
| Drifting grid + scope sweep | Hero background | `.grid-backdrop`, `.scanline` in `globals.css` |
| Pulsing status dot | Hero pill, timeline nodes | `.ping-ring` in `globals.css` |
| Logo wall, lift on hover | Strip under the hero | `components/Providers.tsx`, content in `data/providers.ts` |
| Pointer-following glow | Project + skill cards | `components/SpotlightCard.tsx`, `.spotlight` |
| Scroll progress hairline | Under the sticky nav | `components/ScrollProgress.tsx` |
| Fade-up on scroll | Every section | `components/Reveal.tsx` |

**Tuning it down.** Every looping decoration is a single utility class. To drop
one, delete the class from the element - for example remove `scanline` from the
hero in `components/Hero.tsx` to lose the sweep, or `float-y` to stop the
terminal drifting. Typing speed is the three constants at the top of
`components/Terminal.tsx`; scramble speed is `FRAME_MS` in `ScrambleText.tsx`.

**Reduced motion.** Nothing here ignores the OS setting. `Reveal`, `Hero` and
`Terminal` check `prefers-reduced-motion` in JavaScript and render
their final state immediately; the CSS loops are switched off by a
`@media (prefers-reduced-motion: reduce)` block in `globals.css`. Turn the
setting on and the site is fully static - and still complete.

**No layout shift.** `ScrambleText` renders an invisible copy of the final
string underneath the animating one, so varying glyph widths can never reflow
the page.

---

## Responsive behaviour

Mobile-first, with these breakpoints (Tailwind defaults: `sm` 640px, `md`
768px, `lg` 1024px):

| Section | Mobile | `sm` | `lg` |
| ------- | ------ | ---- | ---- |
| Hero | stacked, terminal below | - | two columns, terminal right |
| Certified by | wrapped rows, centred | - | single row |
| About facts | stacked | 2 columns, Focus full width | - |
| Experience | single column timeline | - | - |
| Projects | 1 card | 2 cards | 3 cards |
| Certificates | 1 column | 2 columns | 3 columns |
| Skills | 1 card | 2 cards (`md`) | - |
| Contact | stacked | 2 columns | - |
| Nav | hamburger drawer | + Resume button | full link bar |

Headings scale fluidly with `clamp()` rather than snapping at breakpoints, so
they stay proportionate on every width in between.

---

## Accessibility & performance notes

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), a single
  `<h1>`, and exactly one `<h2>` per section, each labelled by its heading.
- "Skip to content" is the first focusable element on the page.
- Visible focus ring on every interactive element; the mobile menu closes on
  `Escape`.
- `prefers-reduced-motion` disables all animation and smooth scrolling.
- The theme is applied before first paint, so there is no light/dark flash.
- Fonts are self-hosted by `next/font` (no external request, no layout shift),
  icons are inline SVG (no icon library), and every route is prerendered static.
- Decorative layers (grid, sweep, terminal, logo chips) are `aria-hidden`, so a
  screen reader hears the content and none of the scenery.
