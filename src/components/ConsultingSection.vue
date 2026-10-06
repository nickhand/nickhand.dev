<script setup lang="ts">
import { capture } from '../lib/analytics'

const contact = 'mailto:nick@wissahickonanalytics.com?subject=Project%20inquiry'
</script>

<template>
  <section id="consulting" aria-labelledby="consulting-heading" class="scroll-mt-24 border-b border-zinc-200 py-12">
    <p class="font-mono text-[12px] text-ink">Wissahickon Analytics</p>
    <h2 id="consulting-heading" class="mt-3 max-w-xl text-2xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-3xl">Data analysis and custom software</h2>
    <p class="mt-5 max-w-xl text-[16px] leading-8 text-zinc-700">I’m a data scientist and software developer. Through Wissahickon Analytics, I help organizations answer questions with data and build tools their staff or the public can use. I work on the analysis, the underlying data systems, and the application people interact with.</p>
    <p class="mt-4 max-w-xl text-[15px] leading-7 text-zinc-600">I like working on hard problems, especially when the work helps people understand an issue or improves how a public service works. I’m particularly interested in making budget data more accessible and helping government deliver better services.</p>
    <div class="mt-7 max-w-2xl text-[15px] leading-7 text-zinc-600">
      <p class="font-medium text-zinc-900">My work has included:</p>
      <ul class="mt-3 list-disc space-y-3 pl-5 marker:text-ink/60">
        <li>Building the <a class="text-ink underline underline-offset-4" href="/philly-gun-violence-map">Philadelphia Gun Violence Dashboard</a> at the City Controller’s Office. I now maintain it independently.</li>
        <li>Analyzing city budgets at the Controller’s Office and writing per-person explainers of the <a class="text-ink underline underline-offset-4" href="https://thephiladelphiacitizen.org/mayor-parker-2026-budget/">Philadelphia</a> and <a class="text-ink underline underline-offset-4" href="https://thephiladelphiacitizen.org/pa-budget-2026/">Pennsylvania</a> budgets for The Philadelphia Citizen.</li>
        <li>Studying property assessments at the Controller’s Office and building <a class="text-ink underline underline-offset-4" href="/fair-measure">Fair Measure</a>, an independent project that uses statistical models to examine property assessments.</li>
        <li>Leading a team at Voyatek that developed data engineering and analytics tools on a contract supporting the Internal Revenue Service’s anti-money laundering compliance examinations.</li>
        <li>Developing <a class="text-ink underline underline-offset-4" href="https://controller.phila.gov/philadelphia-audits/progressphl/">ProgressPHL</a>, a neighborhood well-being dashboard, at the Controller’s Office.</li>
      </ul>
    </div>
    <p class="mt-7 max-w-xl text-[15px] leading-7 text-zinc-600">I also developed and taught <a class="text-ink underline underline-offset-4" href="https://musa-550-fall-2023.github.io/">Geospatial Data Science in Python</a> in the University of Pennsylvania’s Master of Urban Spatial Analytics program. The course covered data analysis, visualization and machine learning through examples from urban planning and public policy.</p>
    <div class="mt-8">
      <a :href="contact" class="inline-flex rounded-sm bg-ink px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink" @click="capture('contact_click', { method: 'email', section: 'consulting' })">Discuss a project</a>
      <p class="mt-3 max-w-xl text-[14px] leading-6 text-zinc-500">Email me with a short description of the work you have in mind.</p>
    </div>
  </section>
</template>
