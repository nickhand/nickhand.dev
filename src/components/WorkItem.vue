<template>
  <a :href="href" class="group flex items-start gap-4 py-4">
    <span class="mt-1 tabular-nums font-mono text-[12px] text-zinc-500">{{ index }}</span>
    <span class="flex-1">
      <span class="block text-[17px] font-medium text-zinc-900 transition-colors duration-[180ms] group-hover:text-ink">{{ title }}</span>
      <span class="mt-1 block max-w-md text-[14.5px] leading-6 text-zinc-600">{{ description }}</span>
      <span class="mt-2 block font-mono text-[12px] text-zinc-500">{{ meta }}</span>
    </span>
    <span class="mt-1 font-mono text-ink opacity-0 transition-all duration-[180ms] group-hover:translate-x-[3px] group-hover:opacity-100">→</span>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  index: string
  title: string
  href?: string
  description: string
  meta: string
}>()
</script>
