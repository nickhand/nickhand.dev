<script setup lang="ts">
import { capture } from '../lib/analytics'

const contact = 'mailto:nick@wissahickonanalytics.com?subject=Project%20inquiry'
</script>

<template>
  <section id="consulting" aria-labelledby="consulting-heading" class="grid grid-cols-1 gap-x-6 gap-y-4 border-b border-zinc-200 py-12 md:grid-cols-[5rem_1fr]">
    <div class="flex gap-2 tabular-nums font-mono text-[12px] md:block">
      <span class="text-ink md:block">§01</span><span class="text-zinc-500 md:block">consulting</span>
    </div>
    <div>
      <p class="font-mono text-[12px] text-ink">Wissahickon Analytics</p>
      <h2 id="consulting-heading" class="mt-3 max-w-xl text-2xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-3xl">Data analysis and custom software</h2>
      <p class="mt-5 max-w-xl text-[16px] leading-7 text-zinc-700">Wissahickon Analytics builds data analysis and software for organizations that want to understand an issue or explain it to the public. That covers the analysis, the data systems underneath it, and the application people use.</p>
      <p class="mt-4 max-w-xl text-[16px] leading-7 text-zinc-700">So far, that has mostly meant budget work: interactive explainers of the Philadelphia and Pennsylvania budgets for The Philadelphia Citizen, and a public budget dashboard for Montgomery County, Pennsylvania, now in progress. I also maintain the Philadelphia Gun Violence Dashboard pro bono for the Civic Coalition to Save Lives, and I’m open to similar public-data projects.</p>
      <p class="mt-4 max-w-xl text-[16px] leading-7 text-zinc-700">This is part-time work alongside my role at the Delaware Attorney General’s Office, so I take on a small number of projects at a time.</p>
      <div class="mt-8">
        <a :href="contact" class="action-link-primary" @click="capture('contact_click', { method: 'email', section: 'consulting' })">discuss a project</a>
        <p class="mt-3 max-w-xl text-[14px] leading-6 text-zinc-500">Email me with a short description of the work you have in mind.</p>
      </div>
    </div>
  </section>
</template>
