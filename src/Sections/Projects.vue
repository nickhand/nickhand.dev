<template>
  <section id="projects" class="flex justify-center">
    <div class="container">
      <!-- Header for this section -->
      <header class="mb-20">
        <div
          class="text-5xl font-bold tracking-[5px] text-center uppercase py-[20px] px-0"
        >
          Projects
        </div>
        <div class="w-[100px] h-[2px] m-auto bg-[#FF4908]"></div>
      </header>

      <!-- List projects -->
      <div class="container mx-auto p-6 max-w-4xl">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white shadow-lg rounded-2xl p-6 mb-6"
        >
          <!-- Project Image -->
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full md:w-1/3 rounded-xl shadow-md object-cover"
          />

          <!-- Project Details -->
          <div class="text-center md:text-left flex-1">
            <h2 class="text-2xl font-semibold text-gray-800">
              {{ project.title }}
            </h2>
            <p class="text-gray-600 mt-2">{{ project.description }}</p>

            <!-- Buttons -->
            <div class="flex-row items-center mt-4">
              <a
                :href="project.link"
                class="inline-block bg-[#FF4908] text-white py-2 px-4 rounded-xl shadow-md hover:bg-[#d43800] transition"
              >
                View Project
              </a>
              <a
                :href="project.github"
                class="inline-block bg-[#FF4908] text-white py-2 px-4 rounded-xl shadow-md hover:bg-[#d43800] transition ml-4"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    title: "Mapping Philadelphia's Gun Violence",
    description:
      "An interactive app mapping shooting victims in Philadelphia for the current year, updated daily, with historical data dating back to 2015.",
    image: "https://phillygunviolence.netlify.app/gun-violence-dashboard.png",
    link: "https://nickhand.dev/philly-gun-violence-map",
    github: "https://github.com/nickhand/GunViolenceDashboard",
  },
  {
    title: "Parking Jawn",
    description:
      "An interactive dashboard allowing users to explore parking violations in Philadelphia from 2012 to 2017.",
    image: "https://nickhand.dev/parking-jawn.png",
    link: "https://parkingjawn.com",
    github: "https://github.com/nickhand/parking-jawn",
  },
  {
    title: "MUSA 550: Geospatial Data Science in Python",
    description:
      "The course materials for MUSA 550, a masters course at the University of Pennsylvania that teaches students to use Python to gather, visualize, and analyze geospatial data with an urban planning and public policy focus.",
    image: "https://nickhand.dev/musa-550.png",
    link: "https://musa-550-fall-2023.github.io",
    github:
      "https://github.com/MUSA-550-Fall-2023/musa-550-fall-2023.github.io",
  },
]);
</script>

<style>
body {
  background-color: #f8fafc;
}
</style>
