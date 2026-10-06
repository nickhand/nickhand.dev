<template>
  <section id="about" class="border-b border-zinc-200 py-14">
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
    <div class="mt-5 max-w-2xl space-y-4 text-[17px] leading-8 text-zinc-700 sm:text-lg">
      <p>
        I’m a data scientist and software developer working on government
        accountability and consumer protection. I’m the Senior AI Policy and
        Technology Fellow at the Delaware Attorney General’s Office.
      </p>
      <p>
        Before that, I was an enforcement technologist at the Consumer Financial
        Protection Bureau, where I worked on investigations involving AI,
        algorithmic bias and data security. Earlier, I was
        director of finance, policy and data in Philadelphia’s City
        Controller’s Office.
      </p>
    </div>
    <div class="mt-7 flex flex-wrap gap-2 font-mono text-[13px]">
      <a
        :href="links.resume"
        aria-label="Resume (PDF)"
        class="action-link"
        @click="capture('resume_click', { section: 'hero' })"
        >resume.pdf</a
      >
      <a
        :href="links.github"
        target="_blank"
        rel="noopener noreferrer"
        class="action-link"
        @click="capture('contact_click', { method: 'github', section: 'hero' })"
        >github</a
      >
      <a
        :href="links.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        class="action-link"
        @click="capture('contact_click', { method: 'linkedin', section: 'hero' })"
        >linkedin</a
      >
      <a
        :href="links.email"
        class="action-link"
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
