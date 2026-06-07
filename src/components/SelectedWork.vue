<template>
  <section id="work" class="grid grid-cols-1 gap-x-6 gap-y-4 border-b border-zinc-200 py-12 md:grid-cols-[5rem_1fr]">
    <div class="tabular-nums font-mono text-[12px]">
      <span class="text-ink">§02</span><br /><h2 class="m-0 p-0 font-mono text-[12px] font-normal text-zinc-500">selected work</h2>
    </div>
    <div class="divide-y divide-zinc-200 border-y border-zinc-200">
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
  </section>
</template>

<script setup lang="ts">
import { work } from '../data/work'
import WorkItem from './WorkItem.vue'
</script>
