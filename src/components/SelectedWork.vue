<template>
  <section id="work" aria-labelledby="work-heading" class="grid grid-cols-1 gap-x-6 gap-y-4 border-b border-zinc-200 py-12 md:grid-cols-[5rem_1fr]">
    <div class="flex gap-2 tabular-nums font-mono text-[12px] md:block">
      <span class="text-ink md:block">§03</span><span class="text-zinc-500 md:block">work</span>
    </div>
    <div>
      <h2 id="work-heading" class="max-w-xl text-2xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-3xl">Selected work</h2>
      <div v-for="(group, g) in numbered" :key="group.label" :class="g === 0 ? 'mt-6' : 'mt-10'">
        <h3 class="m-0 p-0 font-mono text-[12px] font-normal text-zinc-500">{{ group.label }}</h3>
        <div class="mt-3 divide-y divide-zinc-200">
          <WorkItem
            v-for="item in group.items"
            :key="item.title"
            :index="item.index"
            :title="item.title"
            :href="item.href"
            :description="item.description"
            :meta="item.meta"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { work } from '../data/work'
import WorkItem from './WorkItem.vue'

// Number items continuously across groups.
let n = 0
const numbered = work.map(group => ({
  ...group,
  items: group.items.map(item => ({ ...item, index: String(++n).padStart(2, '0') })),
}))
</script>
