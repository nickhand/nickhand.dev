<script setup lang="ts">
import { capture } from '../lib/analytics'

const contact = 'mailto:nick@wissahickonanalytics.com?subject=Project%20inquiry'
</script>

<template>
  <section id="consulting" aria-labelledby="consulting-heading" class="scroll-mt-24 border-b border-zinc-200 py-12">
    <p class="font-mono text-[12px] text-ink">Wissahickon Analytics</p>
    <h2 id="consulting-heading" class="mt-3 max-w-xl text-2xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-3xl">Data analysis for research and public policy</h2>
    <p class="mt-5 max-w-xl text-[16px] leading-8 text-zinc-700">I run Wissahickon Analytics, a consulting practice focused on data analysis and software for research and public policy.</p>
    <p class="mt-4 max-w-xl text-[15px] leading-7 text-zinc-600">I previously led policy and data analysis at Philadelphia’s City Controller’s Office. My experience also includes consulting, independent projects and teaching.</p>
    <div class="mt-7 max-w-2xl text-[15px] leading-7 text-zinc-600">
      <p class="font-medium text-zinc-900">My work has included:</p>
      <ul class="mt-3 list-disc space-y-3 pl-5 marker:text-ink/60">
        <li>Analyzing city budgets at the Controller’s Office and writing <a class="text-ink underline underline-offset-4" href="https://thephiladelphiacitizen.org/mayor-parker-2026-budget/">per-person budget articles for The Philadelphia Citizen</a>.</li>
        <li>Building interactive dashboards, including <a class="text-ink underline underline-offset-4" href="https://controller.phila.gov/philadelphia-audits/progressphl/">ProgressPHL</a>, a neighborhood well-being dashboard I developed at the Controller’s Office.</li>
        <li>Analyzing gun violence at the Controller’s Office and maintaining the <a class="text-ink underline underline-offset-4" href="/philly-gun-violence-map">Philadelphia Gun Violence Dashboard</a>.</li>
        <li>Studying property assessments at the Controller’s Office and building <a class="text-ink underline underline-offset-4" href="/fair-measure">Fair Measure</a>, an independent project that uses statistical models to examine property assessments.</li>
        <li>Teaching <a class="text-ink underline underline-offset-4" href="https://musa-550-fall-2023.github.io/">graduate-level geospatial data science in Python at Penn</a>.</li>
      </ul>
    </div>
    <div class="mt-8">
      <a :href="contact" class="inline-flex rounded-sm bg-ink px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink" @click="capture('contact_click', { method: 'email', section: 'consulting' })">Discuss a project</a>
      <p class="mt-3 max-w-xl text-[14px] leading-6 text-zinc-500">Email me with a short description of the work you have in mind.</p>
    </div>
  </section>
</template>
