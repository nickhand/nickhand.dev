<script setup>
import HeaderSection from "./Sections/Header.vue";
import AboutSection from "./Sections/About.vue";
import ContactSection from "./Sections/Contact.vue";
import { useMeta } from "vue-meta";

const description = "Personal website for Nick Hand in Philadelphia, PA.";
const title = "Nick Hand | Philadelphia";
useMeta({
  title: title,
  htmlAttrs: {
    lang: "en",
    amp: true,
  },
  meta: [
    { vmid: "description", name: "description", content: description },
    {
      vmid: "og:title",
      property: "og:title",
      content: title,
    },
    {
      vmid: "og:description",
      property: "og:description",
      content: description,
    },
    {
      vmid: "og:image:alt",
      property: "og:image:alt",
      content: description,
    },
    {
      vmid: "og:url",
      property: "og:url",
      content: "https://www.nickhand.dev",
    },
  ],
});
</script>

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content }}</template>
  </metainfo>

  <!-- Main Sections -->
  <HeaderSection />
  <AboutSection class="w-full" />
  <ContactSection class="w-full mt-20" />

  <!-- Footer -->
  <footer
    class="text-sm text-[#a1a1a1] mt-20 mb-5 flex flex-row justify-center"
  >
    <div class="copyright">
      <p>&copy; Nick Hand 2022</p>
    </div>
  </footer>
</template>

<style>
#app {
  font-family: "Oxygen", sans-serif;
  color: #2c3e50;
}
</style>
