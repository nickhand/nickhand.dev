<template>
  <section
    id="writing"
    aria-labelledby="writing-heading"
    class="grid grid-cols-1 gap-x-6 gap-y-4 border-b border-zinc-200 py-12 md:grid-cols-[5rem_1fr]"
  >
    <div class="flex gap-2 tabular-nums font-mono text-[12px] md:block">
      <span class="text-ink md:block">§04</span><span class="text-zinc-500 md:block">writing</span>
    </div>
    <div>
      <h2 id="writing-heading" class="max-w-xl text-2xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-3xl">Writing &amp; public data</h2>
      <p class="mt-5 max-w-xl text-[16px] leading-7 text-zinc-700">
        Pieces for
        <span class="font-medium text-zinc-800">The Philadelphia Citizen</span>:
        an op‑ed on the Consumer Financial Protection Bureau, and interactive
        explainers of the Philadelphia and Pennsylvania budgets that I built
        through Wissahickon Analytics.
      </p>
      <ul
        class="mt-6 divide-y divide-zinc-200"
      >
        <WritingItem
          v-for="item in writing"
          :key="item.title"
          :title="item.title"
          :href="item.href"
          :meta="item.meta"
          :date="item.date"
        />
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { writing } from "../data/writing";
import WritingItem from "./WritingItem.vue";
</script>
