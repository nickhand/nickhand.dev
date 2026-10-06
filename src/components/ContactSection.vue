<template>
  <section id="contact" aria-labelledby="contact-heading" class="grid grid-cols-1 gap-x-6 gap-y-4 py-12 md:grid-cols-[5rem_1fr]">
    <div class="flex gap-2 tabular-nums font-mono text-[12px] md:block">
      <span class="text-ink md:block">§04</span><span class="text-zinc-500 md:block">contact</span>
    </div>
    <div>
      <h2 id="contact-heading" class="max-w-xl text-2xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-3xl">Contact</h2>
      <p class="mt-5 max-w-xl text-[16px] leading-7 text-zinc-700">Email is the best way to reach me.</p>
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
          class="action-link"
          @click="capture('contact_click', { method: 'github', section: 'contact' })"
          >github</a
        >
        <a
          :href="links.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="action-link"
          @click="capture('contact_click', { method: 'linkedin', section: 'contact' })"
          >linkedin</a
        >
        <a
          :href="links.resume"
          aria-label="Resume (PDF)"
          class="action-link"
          @click="capture('resume_click', { section: 'contact' })"
          >resume.pdf</a
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { links } from '../data/links'
import { capture } from '../lib/analytics'
</script>
