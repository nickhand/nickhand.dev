<template>
  <span
    :class="[
      'font-mono text-zinc-500 transition-all duration-[180ms] group-hover:text-ink',
      external ? 'group-hover:-translate-y-[2px] group-hover:translate-x-[2px]' : 'group-hover:translate-x-[3px]',
    ]"
  ><span aria-hidden="true">{{ external ? '↗' : '→' }}</span><span v-if="external" class="sr-only">(external site)</span></span>
</template>

<script setup lang="ts">
defineProps<{ external: boolean }>()
</script>
