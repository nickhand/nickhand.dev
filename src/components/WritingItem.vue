<template>
  <li>
    <a :href="href" class="group flex items-baseline justify-between gap-4 py-3">
      <span class="min-w-0 text-zinc-800 transition duration-[180ms] group-hover:translate-x-[2px] group-hover:text-ink">{{ title }}</span>
      <span class="text-right text-[12px] text-zinc-500 transition-colors duration-[180ms] group-hover:text-zinc-600">{{ meta }}</span>
    </a>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  href?: string
  meta: string
}>()
</script>
