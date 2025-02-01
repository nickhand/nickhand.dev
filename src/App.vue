<template>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/mapping-philadelphia-gun-violence">Go to Map</RouterLink>
  </nav>
  <main>
    <RouterView :key="$route.path" />
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>
