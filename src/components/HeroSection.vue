<template>
  <section class="border-b border-zinc-200 py-14">
    <div
      class="mb-6 flex items-center gap-3 font-mono text-[12px] text-zinc-500"
    >
      <span>Philadelphia, PA</span>
      <span class="h-px flex-1 bg-zinc-200"></span>
      <PhlMap
        ref="heroMap"
        :height="40"
        :stroke-width="2"
        :pin-radius="4.4"
        :show-creek="false"
        class="shrink-0 self-center"
        aria-hidden="true"
        title="Philadelphia"
      />
    </div>
    <h1
      class="text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[40px]"
    >
      Nick Hand<span class="text-ink">, PhD</span>
    </h1>
    <p class="mt-5 max-w-2xl text-[17px] leading-8 text-zinc-700 sm:text-lg">
      I’m a data scientist working in consumer protection, currently focused on
      AI at the Delaware Attorney General’s Office. Previously, I worked at the
      Consumer Financial Protection Bureau and led policy and data analysis in
      Philadelphia’s City Controller’s Office.
    </p>
    <p class="mt-4 max-w-2xl text-[17px] leading-8 text-zinc-600 sm:text-lg">
      Philadelphia is home. I build and maintain public tools like the
      <a
        href="/philly-gun-violence-map"
        class="text-ink underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-ink"
        @click="capture('project_click', { title: 'Mapping Philadelphia\'s Gun Violence', href: '/philly-gun-violence-map', section: 'hero' })"
        >Philadelphia Gun Violence Dashboard</a
      > and
      <a
        href="/fair-measure"
        class="text-ink underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-ink"
        @click="capture('project_click', { title: 'Fair Measure Philadelphia', href: '/fair-measure', section: 'hero' })"
        >Fair Measure</a
      >, a model for fairer, more transparent property assessments, built entirely
      from public data.
    </p>
    <div class="mt-7 flex flex-wrap gap-2 font-mono text-[13px]">
      <a
        :href="links.resume"
        aria-label="Resume (PDF)"
        class="rounded-sm border border-zinc-300 px-3 py-1.5 text-zinc-700 transition-colors duration-[180ms] hover:border-ink"
        @click="capture('resume_click', { section: 'hero' })"
        >resume</a
      >
      <a
        :href="links.github"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-sm border border-zinc-300 px-3 py-1.5 text-zinc-700 transition-colors duration-[180ms] hover:border-ink"
        @click="capture('contact_click', { method: 'github', section: 'hero' })"
        >github</a
      >
      <a
        :href="links.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-sm border border-zinc-300 px-3 py-1.5 text-zinc-700 transition-colors duration-[180ms] hover:border-ink"
        @click="capture('contact_click', { method: 'linkedin', section: 'hero' })"
        >linkedin</a
      >
      <a
        :href="links.email"
        class="rounded-sm border border-zinc-300 px-3 py-1.5 text-zinc-700 transition-colors duration-[180ms] hover:border-ink"
        @click="capture('contact_click', { method: 'email', section: 'hero' })"
        >email</a
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import PhlMap from "./PhlMap.vue";
import { links } from "../data/links";
import { capture } from "../lib/analytics";

const heroMap = ref<InstanceType<typeof PhlMap> | null>(null);

onMounted(() => {
  setTimeout(() => heroMap.value?.start(), 450);
});
</script>
