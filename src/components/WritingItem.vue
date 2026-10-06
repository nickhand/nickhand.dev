<template>
  <li>
    <a :href="href" target="_blank" rel="noopener noreferrer" class="group flex items-baseline justify-between gap-4 py-4" @click="capture('writing_click', { title, href })">
      <span class="min-w-0">
        <h3 class="m-0 p-0 text-[17px] font-medium text-zinc-900 transition-colors duration-[180ms] group-hover:text-ink">{{ title }}</h3>
        <span class="mt-1 block font-mono text-[12px] text-zinc-500">{{ meta }}<template v-if="date"> · <time :datetime="date">{{ formatDate(date) }}</time></template></span>
      </span>
      <LinkArrow :external="isExternal(href)" />
    </a>
  </li>
</template>

<script setup lang="ts">
import { capture } from '../lib/analytics'
import { isExternal } from '../lib/links'
import LinkArrow from './LinkArrow.vue'

defineProps<{
  title: string
  href?: string
  meta: string
  date?: string
}>()

// Format from the ISO parts so server and browser render the same text.
const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
function formatDate(iso: string): string {
  const [year, month] = iso.split('-').map(Number)
  return `${MONTHS[month - 1]} ${year}`
}
</script>
