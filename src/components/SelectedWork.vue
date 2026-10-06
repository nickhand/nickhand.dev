<template>
  <section id="work" aria-labelledby="work-heading" class="grid grid-cols-1 gap-x-6 gap-y-4 border-b border-zinc-200 py-12 md:grid-cols-[5rem_1fr]">
    <div class="flex gap-2 tabular-nums font-mono text-[12px] md:block">
      <span class="text-ink md:block">§02</span><span class="text-zinc-500 md:block">work</span>
    </div>
    <div>
      <h2 id="work-heading" class="max-w-xl text-2xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-3xl">Selected work</h2>
      <div class="mt-6 divide-y divide-zinc-200 border-y border-zinc-200">
        <WorkItem
          v-for="(item, i) in work"
          :key="item.title"
          :index="String(i + 1).padStart(2, '0')"
          :title="item.title"
          :href="item.href"
          :description="item.description"
          :meta="item.meta"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { work } from '../data/work'
import WorkItem from './WorkItem.vue'
</script>
