<template>
  <li>
    <a :href="href" target="_blank" rel="noopener noreferrer" class="group flex items-baseline justify-between gap-4 py-3" @click="capture('writing_click', { title, href })">
      <h3 class="m-0 min-w-0 p-0 text-[14px] font-normal text-zinc-800 transition duration-[180ms] group-hover:translate-x-[2px] group-hover:text-ink">{{ title }}</h3>
      <span class="text-right text-[12px] text-zinc-500 transition-colors duration-[180ms] group-hover:text-zinc-600">{{ meta }}</span>
    </a>
  </li>
</template>

<script setup lang="ts">
import { capture } from '../lib/analytics'

defineProps<{
  title: string
  href?: string
  meta: string
}>()
</script>
