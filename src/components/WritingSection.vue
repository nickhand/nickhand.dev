<template>
  <section
    id="writing"
    class="grid grid-cols-1 gap-x-6 gap-y-4 border-b border-zinc-200 py-12 md:grid-cols-[5rem_1fr]"
  >
    <div class="tabular-nums font-mono text-[12px]">
      <span class="text-ink">§03</span><br /><span class="text-zinc-500">writing &amp; public&nbsp;data</span>
    </div>
    <div>
      <p class="max-w-xl text-[16px] leading-8 text-zinc-600">
        I'm an occasional contributor to
        <span class="font-medium text-zinc-800">The Philadelphia Citizen</span>,
        with an op-ed on the Consumer Financial Protection Bureau and
        interactive data pieces on the Philadelphia and Pennsylvania budgets.
      </p>
      <ul
        class="mt-6 divide-y divide-zinc-200 border-y border-zinc-200 font-mono text-[14px]"
      >
        <WritingItem
          v-for="item in writing"
          :key="item.title"
          :title="item.title"
          :href="item.href"
          :meta="item.meta"
        />
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { writing } from "../data/writing";
import WritingItem from "./WritingItem.vue";
</script>
