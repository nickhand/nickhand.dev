<script setup>
import HeaderSection from "./sections/Header.vue";
import AboutSection from "./sections/About.vue";
import ContactSection from "./sections/Contact.vue";
</script>

<template>
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
