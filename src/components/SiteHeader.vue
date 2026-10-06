<template>
  <header class="sticky top-0 z-10 border-b border-zinc-200 bg-zinc-50/85 backdrop-blur">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-1.5 focus:font-mono focus:text-sm focus:text-ink focus:shadow"
    >Skip to main content</a>
    <div class="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-6 py-3">
      <a href="/" class="font-mono text-[14px] font-medium text-zinc-900 transition-colors duration-[180ms] hover:text-ink">nickhand<span class="text-ink">.dev</span></a>
      <nav class="flex flex-wrap gap-3 font-mono text-[13px] sm:gap-5">
        <a href="#about" class="nav-link">about</a>
        <a href="#consulting" class="nav-link">consulting</a>
        <a href="#work" class="nav-link">work</a>
        <a href="#writing" class="nav-link hidden sm:inline">writing</a>
        <a href="#contact" class="nav-link">contact</a>
        <a href="/resume.pdf" aria-label="Resume (PDF)" class="nav-link" @click="capture('resume_click', { section: 'header' })">resume.pdf</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { capture } from '../lib/analytics'
</script>
