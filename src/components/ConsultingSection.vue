<script setup lang="ts">
import { capture } from '../lib/analytics'

const services = [
  { title: 'Budget & policy analysis', description: 'Make sense of public spending and complex records through clear analysis, explainers and visualizations.' },
  { title: 'Property analysis & modeling', description: 'Analyze property assessments, investigate equity, and build statistical models with documented methods and limitations.' },
  { title: 'Geospatial analysis in Python', description: 'Explore neighborhood patterns and access to services with spatial analysis and reproducible data workflows.' },
  { title: 'Dashboards & data tools', description: 'Turn scattered data into useful maps, interactive reports and repeatable reporting workflows.' },
]
const contact = 'mailto:nick@wissahickonanalytics.com?subject=Project%20inquiry'
</script>

<template>
  <section id="consulting" aria-labelledby="consulting-heading" class="scroll-mt-24 border-b border-zinc-200 py-12">
    <p class="font-mono text-[12px] text-ink">Wissahickon Analytics</p>
    <h2 id="consulting-heading" class="mt-3 max-w-xl text-2xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-3xl">Applied data science for public decisions.</h2>
    <p class="mt-5 max-w-xl text-[16px] leading-8 text-zinc-700">I help governments, newsrooms and civic organizations analyze complex data, build useful models, and communicate results through reports, maps and interactive tools.</p>
    <div class="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
      <div v-for="service in services" :key="service.title">
        <h3 class="text-[16px] font-medium text-zinc-900">{{ service.title }}</h3>
        <p class="mt-2 text-[15px] leading-7 text-zinc-600">{{ service.description }}</p>
      </div>
    </div>
    <div class="mt-8 border-l-2 border-ink/30 pl-5 text-[15px] leading-7 text-zinc-600">
      <p>Examples include <a class="text-ink underline underline-offset-4" href="https://thephiladelphiacitizen.org/mayor-parker-2026-budget/">per-person budget analysis for The Philadelphia Citizen</a> and <a class="text-ink underline underline-offset-4" href="/fair-measure/">Fair Measure</a>, my independent property-assessment project.</p>
      <p class="mt-3">I also taught <a class="text-ink underline underline-offset-4" href="https://musa-550-fall-2023.github.io/">graduate-level geospatial data science in Python at Penn</a>. Clear methods, useful documentation and understandable results are central to my work.</p>
    </div>
    <div class="mt-8">
      <a :href="contact" class="inline-flex rounded-sm bg-ink px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink" @click="capture('contact_click', { method: 'email', section: 'consulting' })">Tell me about your project &rarr;</a>
      <p class="mt-3 max-w-xl text-[14px] leading-6 text-zinc-500">Send a short description or RFP, your deadline, and a budget range if you have one. Small, focused projects are welcome.</p>
    </div>
  </section>
</template>
