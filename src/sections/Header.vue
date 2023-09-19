<script setup>
import TypeWriter from "../components/TypeWriter.vue";
import SocialIcons from "../components/SocialIcons.vue";
</script>

<template>
  <div class="flex-col-center h-screen bg-gradient-to-b from-[#25cef7] px-0.5">
    <!-- Name header -->
    <h1 class="text-7xl font-bold text-center">NICK HAND, PHD</h1>

    <!-- Sub-header: typewriter for jobs -->
    <TypeWriter
      class="text-6xl mt-5 mb-10 text-center min-h-[140px]"
      highlight-color="#FF4908"
      :display-text-array="['Public Servant', 'Technologist', 'Educator']"
      :typingSpeed="100"
      :erasingSpeed="75"
      :newTextDisplay="1250"
    />

    <!-- Contact button -->
    <a href="#contact-me" class="btn-default">Contact Me</a>

    <!-- Social icons -->
    <SocialIcons class="mt-5" />
  </div>
</template>
