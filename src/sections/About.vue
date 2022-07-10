<script setup></script>

<template>
  <section id="about-me" class="flex justify-center">
    <div class="container">
      <!-- Header -->
      <div class="font-medium text-center text-[#FF4908] text-5xl mb-20">
        Hi there, I'm Nick.
      </div>

      <!-- Main content -->
      <div
        class="flex md:flex-row flex-col justify-center items-center md:items-start"
      >
        <div class="md:w-1/3 w-full max-w-md flex justify-center">
          <!-- Circular portrat -->
          <img
            class="overflow-hidden rounded-full max-w-[350px]"
            src="../assets/profile.jpg"
            alt="profile"
          />
        </div>

        <div class="md:w-2/3 w-full md:ml-20 mt-20 md:mt-0 text-lg">
          <p class="mb-5">
            I'm the director of the Finance, Policy, and Data unit in the
            <a
              class="underline decoration-solid text-[#FF4908]"
              href="https://controller.phila.gov/"
              target="blank_"
              >Office of the City Controller
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
                class="ml-1"
              ></font-awesome-icon
            ></a>
            in Philadelphia. My team works to produce data-driven, objective
            <a
              class="underline decoration-solid text-[#FF4908]"
              href="https://controller.phila.gov/policy-analysis/reports/"
              target="blank_"
              >analysis
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
                class="ml-1"
              ></font-awesome-icon
            ></a>
            of issues with financial impact for the City of Philadelphia and
            improve transparency around the City's spending of taxpayer dollars.
          </p>

          <p class="mb-5">
            I also teach a Python-based geospatial data science course in the
            <a
              class="underline decoration-solid text-[#FF4908]"
              href="https://www.design.upenn.edu/musa/about"
              target="blank_"
              >Masters of Urban Spatial Analytics
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
                class="ml-1"
              ></font-awesome-icon>
            </a>
            program at the University of Pennsylvania. Course materials for the
            latest iteration of the course are available
            <a
              class="underline decoration-solid text-[#FF4908]"
              href="https://musa-550-fall-2021.github.io/"
              target="blank_"
              >on Github
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
                class="ml-1"
              ></font-awesome-icon></a
            >.
          </p>

          <p class="mb-5">
            I am passionate about data visualization, predictive analytics, and
            effective communication of complex ideas to a broad audience. I am a
            strong supporter of transparency in government, open-source
            software, and the open science framework.
          </p>
          <p class="mb-5">
            I'm an astrophysics Ph.D. graduate from UC Berkeley, where I studied
            the Universe as a
            <a href="http://www.nsfgrfp.org/" target="_blank"
              >National Science Foundation Graduate Research Fellow</a
            >. My dissertation research focused on cosmology, and in particular,
            the study of the large-scale structure of the Universe. One of my
            most exciting research achievements involved leading a team that
            measured the kinematic Sunyaev-Zel'dovich effect
            <a
              class="underline decoration-solid text-[#FF4908]"
              href="http://www.princeton.edu/main/news/archive/S33/21/69O40/index.xml?section=topstories"
              target="blank_"
              >for the first time ever
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
                class="ml-1"
              ></font-awesome-icon></a
            >.
          </p>

          <p class="mb-5">
            I graduated from Princeton in 2011 with a B.A. in astrophysics and a
            certificate in the applications of computing. When not analyzing
            interesting data sets, I enjoy gardening, reading, running long
            distances, and watching and playing baseball. I live in Fairmount in
            Philadelphia, PA, with my wife, our 7-month-old daughter, and our
            5-year-old rescue dog.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
