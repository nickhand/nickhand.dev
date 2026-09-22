<template>
  <section
    id="about"
    class="grid grid-cols-1 gap-x-6 gap-y-4 border-b border-zinc-200 py-12 md:grid-cols-[5rem_1fr]"
  >
    <div class="tabular-nums font-mono text-[12px]">
      <span class="text-ink">§02</span><br /><h2 class="m-0 p-0 font-mono text-[12px] font-normal text-zinc-500">about</h2>
    </div>
    <div>
      <p class="max-w-xl text-[16px] leading-8 text-zinc-700">
        I also run Wissahickon Analytics, where I help local governments analyze
        their data and build interactive tools for the public. If you have a
        project in mind,
        <a
          :href="links.email"
          class="text-ink underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-ink"
          @click="capture('contact_click', { method: 'email', section: 'about' })"
          >get in touch</a
        >.
      </p>
      <p class="mt-4 max-w-xl text-[16px] leading-8 text-zinc-600">
        I started my career in astrophysics, earning a PhD from UC&nbsp;Berkeley
        and a BA from Princeton. I also taught graduate-level geospatial data
        science in Python at the University of Pennsylvania.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { links } from "../data/links";
import { capture } from "../lib/analytics";
</script>
