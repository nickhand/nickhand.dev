<template>
  <section id="contact" class="grid grid-cols-1 gap-x-6 gap-y-4 py-12 md:grid-cols-[5rem_1fr]">
    <div class="tabular-nums font-mono text-[12px]">
      <span class="text-ink">§04</span><br /><h2 class="m-0 p-0 font-mono text-[12px] font-normal text-zinc-500">contact</h2>
    </div>
    <div>
      <p class="max-w-xl text-xl leading-8 text-zinc-800">Email is the best way to reach me.</p>
      <a
        :href="links.email"
        class="mt-2 inline-block font-mono text-[15px] text-ink transition-colors duration-[180ms] hover:text-ink/80"
        @click="capture('contact_click', { method: 'email', section: 'contact' })"
        >nicholas.adam.hand@gmail.com</a
      >
      <div class="mt-5 flex flex-wrap gap-2 font-mono text-[13px]">
        <a
          :href="links.github"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-sm border border-zinc-300 px-3 py-1.5 text-zinc-700 transition-colors duration-[180ms] hover:border-ink"
          @click="capture('contact_click', { method: 'github', section: 'contact' })"
          >github</a
        >
        <a
          :href="links.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-sm border border-zinc-300 px-3 py-1.5 text-zinc-700 transition-colors duration-[180ms] hover:border-ink"
          @click="capture('contact_click', { method: 'linkedin', section: 'contact' })"
          >linkedin</a
        >
        <a
          :href="links.resume"
          class="rounded-sm border border-zinc-300 px-3 py-1.5 text-zinc-700 transition-colors duration-[180ms] hover:border-ink"
          @click="capture('resume_click', { section: 'contact' })"
          >resume</a
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { links } from '../data/links'
import { capture } from '../lib/analytics'
</script>
