<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" class="group flex items-start gap-4 py-4" @click="capture('project_click', { title, href })">
    <span class="mt-1 tabular-nums font-mono text-[12px] text-zinc-500">{{ index }}</span>
    <span class="flex-1">
      <h3 class="m-0 block p-0 text-[17px] font-medium text-zinc-900 transition-colors duration-[180ms] group-hover:text-ink">{{ title }}</h3>
      <span class="mt-1 block max-w-md text-[14.5px] leading-6 text-zinc-600">{{ description }}</span>
      <span class="mt-2 block font-mono text-[12px] text-zinc-500">{{ meta }}</span>
    </span>
    <LinkArrow :external="isExternal(href)" class="mt-1" />
  </a>
</template>

<script setup lang="ts">
import { capture } from '../lib/analytics'
import { isExternal } from '../lib/links'
import LinkArrow from './LinkArrow.vue'

defineProps<{
  index: string
  title: string
  href?: string
  description: string
  meta: string
}>()
</script>
