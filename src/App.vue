<script setup>
import { ref, nextTick, onMounted, onUnmounted } from "vue";
import { useMeta } from "vue-meta";
import SiteHeader from "./components/SiteHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import SelectedWork from "./components/SelectedWork.vue";
import WritingSection from "./components/WritingSection.vue";
import ContactSection from "./components/ContactSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import PhlMap from "./components/PhlMap.vue";

const description =
  "Nick Hand is a technologist, data scientist, and educator based in Philadelphia. His work focuses on data, technology, and public accountability.";
const title = "Nick Hand, PhD — technologist, data scientist, educator";

useMeta({
  title,
  htmlAttrs: { lang: "en" },
  meta: [
    { vmid: "description", name: "description", content: description },
    { vmid: "og:title", property: "og:title", content: title },
    {
      vmid: "og:description",
      property: "og:description",
      content: description,
    },
    { vmid: "og:url", property: "og:url", content: "https://www.nickhand.dev" },
  ],
});

const showEgg = ref(false);
const eggMap = ref(null);
let eggTimer = null;
const KONAMI = [
  "arrowup",
  "arrowup",
  "arrowdown",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "arrowleft",
  "arrowright",
  "b",
  "a",
];
let konamiIdx = 0;

function revealEgg() {
  showEgg.value = true;
  clearTimeout(eggTimer);
  eggTimer = setTimeout(dismissEgg, 12000);
  nextTick(() => {
    eggMap.value?.start();
  });
}

function dismissEgg() {
  showEgg.value = false;
  clearTimeout(eggTimer);
}

function onKeydown(e) {
  const k = e.key.toLowerCase();
  if (k === KONAMI[konamiIdx]) {
    konamiIdx++;
    if (konamiIdx === KONAMI.length) {
      konamiIdx = 0;
      revealEgg();
    }
  } else {
    konamiIdx = k === KONAMI[0] ? 1 : 0;
  }
}

onMounted(() => {
  console.log(
    "%cIn [42]: whoami",
    "font:600 13px ui-monospace, monospace; color:#355f7d;",
  );
  console.log(
    "%cNick Hand, PhD — technologist, data scientist, educator.\n" +
      "Most of the work here is public, and so is the data behind it.\n" +
      "If you're hiring for civic or public-interest data work —\n" +
      "or just building something good — the door's open.\n\n" +
      "%cSpeak, friend, and enter → nicholas.adam.hand@gmail.com",
    "font:12px ui-monospace, monospace; color:#52525b; line-height:1.65;",
    "font:600 12px ui-monospace, monospace; color:#355f7d; line-height:1.65;",
  );
  window.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
  clearTimeout(eggTimer);
});
</script>

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content }}</template>
  </metainfo>

  <div
    class="min-h-screen bg-zinc-50 font-sans text-zinc-800 antialiased selection:bg-ink/15"
  >
    <!-- you're reading the source. nice. the rest of the work is public too. say hi → nicholas.adam.hand@gmail.com -->
    <SiteHeader />
    <main id="main-content" class="mx-auto max-w-3xl px-6">
      <HeroSection />
      <AboutSection />
      <SelectedWork />
      <WritingSection />
      <ContactSection />
    </main>
    <SiteFooter />

    <Transition
      enter-active-class="transition-all duration-[450ms] ease-in-out"
      enter-from-class="opacity-0 translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-[450ms] ease-in-out"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-3"
    >
      <div
        v-if="showEgg"
        aria-live="polite"
        class="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4"
      >
        <div
          class="pointer-events-auto flex max-w-md items-center gap-4 rounded-md border border-zinc-300 bg-white/95 px-4 py-3.5 font-mono text-[12px] leading-5 text-zinc-600 shadow-xl backdrop-blur"
        >
          <PhlMap
            ref="eggMap"
            :height="116"
            :stroke-width="1.4"
            :pin-radius="2.8"
            :show-creek="true"
            class="shrink-0"
            aria-hidden="true"
          />
          <span class="flex-1">
            <span class="text-ink">Out&nbsp;[42]:</span> you found it.
            <br /><span class="text-zinc-400"
              >271&nbsp;steps from the Wissahickon. say hi &rarr;
              <a
                href="mailto:nicholas.adam.hand@gmail.com"
                class="text-ink underline"
                >email</a
              ></span
            >
          </span>
          <button
            class="shrink-0 self-start text-[14px] leading-none text-zinc-400 hover:text-zinc-700"
            aria-label="dismiss"
            @click="dismissEgg"
          >
            ×
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>
