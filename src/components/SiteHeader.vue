<template>
  <header class="sticky top-0 z-10 border-b border-zinc-200 bg-zinc-50/85 backdrop-blur">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-1.5 focus:font-mono focus:text-sm focus:text-ink focus:shadow"
    >Skip to main content</a>
    <div class="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
      <a href="#main-content" class="font-mono text-[14px] font-medium text-zinc-900 transition-colors duration-[180ms] hover:text-ink">nickhand<span class="text-ink">.dev</span></a>
      <nav class="flex gap-5 font-mono text-[13px] text-zinc-500">
        <a href="#work" class="transition-colors duration-[180ms] hover:text-ink">work</a>
        <a href="#writing" class="hidden transition-colors duration-[180ms] hover:text-ink sm:inline">writing</a>
        <a href="#contact" class="transition-colors duration-[180ms] hover:text-ink">contact</a>
        <a href="/resume.pdf" aria-label="Resume (PDF)" class="text-ink">resume</a>
      </nav>
    </div>
  </header>
</template>
