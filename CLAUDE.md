# CLAUDE.md

## Project: nickhand.dev website overhaul

This repository is a Vue + Tailwind personal website for Nick Hand. The goal of this overhaul is to turn the site from a bold portfolio splash page into a quieter, more mature professional profile.

The new site should feel understated, text-forward, public-minded, and technically serious. It should not feel like a startup landing page, a personal brand funnel, or a flashy developer portfolio.

## Core direction

The site should communicate, without overselling:

> Nick Hand is a technologist, data scientist, and educator based in Philadelphia. His work focuses on data, technology, and public accountability. He cares about the public sector and the practical work of making government function better.

The site should let the work speak for itself. Avoid grand claims, inflated language, or overly polished “personal brand” copy.

## Audience

Design and content should work for several likely visitors:

1. **Hiring managers, fellowship reviewers, and policy people**
   - They want to understand the through-line across CFPB, Voyatek, Philadelphia government, teaching, and astrophysics.
   - They need a quick, credible explanation of the work.

2. **Government and public-sector people**
   - They want to know that Nick understands public institutions and respects the practical work of making government function better.
   - The tone should feel grounded and civic, not flashy.

3. **Technical people**
   - They want evidence that Nick can actually build systems.
   - Project descriptions should include quiet technical context: data pipelines, geospatial analysis, public data, dashboards, Python, Vue, etc.

4. **Journalists, civic people, and local Philadelphia readers**
   - They may care about the public-facing work: dashboards, budget explainers, public data, and Philadelphia-focused projects.

5. **People who already know Nick**
   - They need confirmation that this is the right person, what he is doing now, and how to reach him.

## Design principles

Use restraint, but not sterility. The goal is professional warmth, not asceticism.

Prefer:
- plain text
- generous whitespace
- narrow content width
- simple section dividers
- quiet typography
- simple links
- neutral colors
- clear hierarchy
- mobile-first readability
- small social icons (GitHub, LinkedIn) in the footer — inline SVG, ~20px, zinc-500 color, zinc-900 on hover
- name (“Nick Hand, PhD”) as a small, calm identifier in the hero before the tagline
- external link arrows (↗) on linked work/writing titles — `text-zinc-400`, appears inline after the title, signals clickability without being loud

Avoid:
- typing animations
- large splash typography
- gradients
- bright orange accent text
- big outlined CTA buttons
- “services” or consulting language for now
- skill-pill clutter
- excessive icons (social icons in the footer are the exception; do not add more)
- exaggerated claims
- “AI expert” visual language
- startup-style marketing sections
- profile photo in the hero (risks portfolio feel)
- section background color variation

## Suggested visual system

Use Tailwind with a calm, minimal palette.

Recommended base:

```html
<body class="bg-stone-50 text-zinc-950 antialiased">
```

Recommended layout wrapper:

```vue
<main class="min-h-screen bg-stone-50 text-zinc-950">
  <div class="mx-auto max-w-3xl px-6">
    ...
  </div>
</main>
```

Recommended section styling:

```vue
<section class="border-t border-zinc-200 py-12">
```

Recommended section heading:

```vue
<h2 class="text-sm font-medium uppercase tracking-wider text-zinc-500">
  Selected work
</h2>
```

Recommended body text:

```vue
<p class="max-w-2xl text-base leading-7 text-zinc-700">
  ...
</p>
```

## Proposed site structure

The site can remain a simple one-page site.

Recommended sections:

1. Header / nav
2. Hero
3. About
4. Selected work
5. Writing & public data
6. Contact
7. Footer

Suggested nav:

```text
Work · Writing & public data · Contact · Resume
```

Do not add a consulting or services section yet. That may come later.

## Hero copy

Use something close to this:

```text
Nick Hand, PhD

Technologist, data scientist, and educator based in Philadelphia.

My work focuses on data, technology, and public accountability. I care about the public sector and the practical work of making government function better.

Resume · GitHub · LinkedIn · Email
```

Notes:
- "Nick Hand, PhD" should appear as a small, calm name line (`text-sm font-medium text-zinc-900`) above the h1. Not enormous — just a quiet identifier.
- Do not use a typing animation.
- The h1 should be the tagline ("Technologist, data scientist, and educator."), not the name.
- The first mobile viewport should quickly answer who Nick is, what he works on, and where to click next.
- Keep the tone calm and direct.

## About copy

Use 2–3 short paragraphs.

Suggested copy:

```text
I currently lead analytics work at Voyatek, supporting data engineering and analytics tools for IRS anti-money-laundering compliance exams. Previously, I worked as an enforcement technologist at the Consumer Financial Protection Bureau, where I focused on technology issues including AI/ML, algorithmic bias, data security, and privacy.

Before that, I led the Finance, Policy, and Data unit in the Philadelphia City Controller’s Office, producing public analysis on property assessments, gun violence, spending, taxes, and city operations. I have also taught geospatial data science in Python at the University of Pennsylvania.

I started my career in astrophysics, earning a PhD from UC Berkeley and a BA from Princeton.
```

This should feel like a professional summary, not a pitch.

## Selected work section

Use a vertical list rather than a grid. A vertical list feels more mature and less template-like.

Include 3–5 selected projects.

Recommended items:

### Mapping Philadelphia’s Gun Violence

Description:

```text
An interactive public data project tracking shootings in Philadelphia using public records, geospatial analysis, and web-based visualization.
```

Metadata:

```text
Public data · geospatial analysis · data visualization · Philadelphia
```

### ProgressPHL

Description:

```text
A neighborhood well-being dashboard developed at the Philadelphia City Controller’s Office.
```

Metadata:

```text
Civic indicators · public dashboard · Philadelphia
```

### Geospatial Data Science in Python

Description:

```text
Course materials for a graduate course I taught at the University of Pennsylvania.
```

Metadata:

```text
Teaching · Python · geospatial analysis · public policy
```

### Parking Jawn

Description:

```text
An older civic data project exploring parking violations in Philadelphia.
```

Metadata:

```text
Archived project · maps · civic data
```

Parking Jawn can be visually or textually marked as an older/archive project.

## Writing & public data section

This should be specific to The Philadelphia Citizen. Do not make the writing sound broader than it is.

Suggested intro:

```text
Selected work for The Philadelphia Citizen, including an op-ed on the Consumer Financial Protection Bureau and interactive data pieces on the Philadelphia and Pennsylvania budgets.
```

Recommended items:

### Who will protect you now?

Description:

```text
Op-ed on the CFPB and consumer protection.
```

### Philadelphia budget interactive

Description:

```text
A visual explainer of the city budget.
```

### Pennsylvania budget interactive

Description:

```text
A visual explainer of the state budget.
```

Use the real URLs once available. Dates are optional.

## Contact section

Keep it simple.

Suggested copy:

```text
Email is the best way to reach me.
```

Then provide an email link, GitHub, LinkedIn, and resume link.

Do not use a contact form unless one already exists and works reliably.

## Footer

The footer should include the copyright line and small inline SVG social icons for GitHub and LinkedIn.

- Icons should be ~20px, `text-zinc-500`, `hover:text-zinc-900`, with a smooth transition
- No Font Awesome — use inline SVGs (GitHub mark and LinkedIn mark)
- Place icons to the right of the copyright line, or as a second row on mobile
- Do not add more than 2 icons (GitHub + LinkedIn); email and resume are already reachable from the contact section

## Tone rules

Use plain language.

Avoid:
- “at the intersection of”
- “leveraging”
- “driving impact”
- “thought leader”
- “expert”
- “mission-driven”
- “I help organizations...”
- “transforming”
- “innovative solutions”
- “AI leader”

Prefer:
- “My work focuses on...”
- “I care about...”
- “I currently...”
- “Previously...”
- “Selected work...”
- “Course materials...”
- “Public data...”

The site should not sound like a cover letter. It should sound like a clear professional homepage.

## Suggested Vue structure

A simple component structure is enough:

```text
src/
  components/
    SiteHeader.vue
    HeroSection.vue
    AboutSection.vue
    WorkItem.vue
    SelectedWork.vue
    WritingItem.vue
    WritingSection.vue
    ContactSection.vue
    SiteFooter.vue
  data/
    links.ts
    work.ts
    writing.ts
  views/
    HomeView.vue
```

Use data files for work and writing items so the site is easy to update.

## Example components

### WorkItem.vue

```vue
<template>
  <article class="py-6">
    <h3 class="text-lg font-medium text-zinc-950">
      <a v-if="href" :href="href" class="hover:underline underline-offset-4">
        {{ title }}<span class="ml-1 text-sm font-normal text-zinc-400">↗</span>
      </a>
      <span v-else>{{ title }}</span>
    </h3>

    <p class="mt-2 max-w-2xl text-base leading-7 text-zinc-700">
      {{ description }}
    </p>

    <p class="mt-3 text-sm text-zinc-500">
      {{ meta }}
    </p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  href?: string
  description: string
  meta: string
}>()
</script>
```

The `↗` arrow should appear on all linked items, including both internal netlify-redirect links and external URLs. It signals "this goes somewhere" regardless of destination.

### SiteHeader.vue

```vue
<template>
  <header class="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
    <a href="/" class="text-sm font-medium tracking-tight text-zinc-900">
      Nick Hand
    </a>

    <nav class="flex gap-5 text-sm text-zinc-600">
      <a href="#work" class="hover:text-zinc-950">Work</a>
      <a href="#writing" class="hover:text-zinc-950">Writing</a>
      <a href="#contact" class="hover:text-zinc-950">Contact</a>
      <a href="/resume.pdf" class="hover:text-zinc-950">Resume</a>
    </nav>
  </header>
</template>
```

On small screens, allow wrapping or reduce gaps. Do not add a hamburger menu unless necessary.

### HeroSection.vue

```vue
<template>
  <section class="mx-auto max-w-3xl px-6 pb-16 pt-14">
    <p class="mb-4 text-sm text-zinc-500">Philadelphia, PA</p>

    <h1 class="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
      Technologist, data scientist, and educator.
    </h1>

    <p class="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
      My work focuses on data, technology, and public accountability. I care about
      the public sector and the practical work of making government function better.
    </p>

    <div class="mt-8 flex flex-wrap gap-4 text-sm">
      <a href="/resume.pdf" class="text-zinc-900 underline underline-offset-4">Resume</a>
      <a href="https://github.com/nickhand" class="text-zinc-900 underline underline-offset-4">GitHub</a>
      <a href="https://www.linkedin.com/in/nickhand" class="text-zinc-900 underline underline-offset-4">LinkedIn</a>
      <a href="mailto:nicholas.adam.hand@gmail.com" class="text-zinc-900 underline underline-offset-4">Email</a>
    </div>
  </section>
</template>
```

## Accessibility and quality

- Use semantic HTML: `header`, `main`, `section`, `article`, `footer`.
- Keep heading order logical.
- Ensure color contrast is accessible.
- Use visible focus states for links.
- Do not rely on animation to communicate identity.
- Make external links clear where appropriate.
- Ensure the resume link works.
- Ensure mobile layout is excellent.

## Definition of done

The overhaul is successful when:

- The first screen is useful on mobile.
- The site no longer feels like a splash page.
- The tone is understated and credible.
- The design is plain but polished.
- The work history has a clear through-line.
- The site communicates public sector, data, technology, and accountability.
- Projects and writing are easy to scan.
- There is no consulting/services section yet.
- The site makes it easy to find resume, GitHub, LinkedIn, and email.

The final impression should be:

> Nick is a technical person who has worked seriously in government, enforcement, public data, and teaching. He cares about making public institutions work better. He can build data systems, analyze technical issues, and explain them clearly.
