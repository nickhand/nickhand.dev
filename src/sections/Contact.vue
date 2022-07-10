<script setup>
import SocialIcons from "../components/SocialIcons.vue";
import { ref, reactive, computed, nextTick } from "vue";
import { email, maxLength, required } from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
import axios from "axios";

// Show/hide form submission outcome
const showSuccess = ref(false);
const showFailure = ref(false);

// The form state
const state = reactive({
  name: "",
  email: "",
  message: "",
});

// Rules
const rules = computed(() => {
  return {
    name: { required },
    email: { required, email },
    message: { required, maxLength: maxLength(500) },
  };
});
const v$ = useValidate(rules, state);

// Function to send email
function sendEmail() {
  // Validate
  v$.value.$validate(); // checks all inputs

  // Update and return if we had errors
  nextTick(() => {
    if (v$.value.$error) {
      return;
    }

    // If no issues, submit
    axios
      .post("https://formspree.io/f/nicholas.adam.hand@gmail.com", {
        name: state.name,
        from: state.email,
        _subject: `${state.name} | Contact Form from nickhand.dev`,
        message: state.message,
      })
      .then((response) => {
        // Success
        showSuccess.value = true;

        // Reset
        state.name = "";
        state.email = "";
        state.message = "";

        // Set the success
      })
      .catch((error) => {
        // Failure
        showFailure.value = true;
      });
  });
}
</script>

<template>
  <section id="contact-me" class="flex justify-center">
    <div class="container">
      <!-- Header for this section -->
      <header class="mb-20">
        <div
          class="text-5xl font-bold tracking-[5px] text-center uppercase py-[20px] px-0"
        >
          Contact
        </div>
        <div class="w-[100px] h-[2px] m-auto bg-[#FF4908]"></div>
      </header>

      <!-- Left side: contact details -->
      <div class="flex md:flex-row flex-col p-2">
        <div class="md:w-1/2 w-full">
          <h2 class="font-bold text-2xl mb-5">Contact Info</h2>

          <!-- Email -->
          <div>
            <p style="font-size: 20px">
              <font-awesome-icon
                icon="fa-solid fa-envelope"
              ></font-awesome-icon>
              &nbsp;nicholas.adam.hand@gmail.com
            </p>

            <!-- Location -->
            <p style="font-size: 20px">
              <font-awesome-icon
                icon="fa-solid fa-location-pin"
              ></font-awesome-icon>
              &nbsp;Philadelphia, PA
            </p>

            <!-- Social icons -->
            <SocialIcons class="mt-5" />
          </div>
        </div>

        <!-- Right side: form -->
        <div class="md:w-1/2 w-full md:mt-0 mt-14">
          <h2 class="font-bold text-2xl mb-5">Get in Touch</h2>

          <form
            class="w-full"
            id="contact-form"
            role="form"
            method="POST"
            @submit.prevent="sendEmail"
          >
            <!-- Name -->
            <div class="form-input-group">
              <label class="form-input-label" for="name">Name</label>
              <div class="form-input">
                <input
                  class="input-lg w-full border-2 border-solid border-black p-5"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  v-model="state.name"
                />
              </div>
              <span v-if="v$.name.$error" class="text-red-500 italic text-sm">
                Error: {{ v$.name.$errors[0].$message }}
              </span>
            </div>

            <!-- Email address -->
            <div class="form-input-group mt-2">
              <label class="form-input-label" for="email">Email Address</label>
              <div class="form-input">
                <input
                  class="input-lg w-full border-2 border-solid border-black p-5"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Your email address"
                  v-model="state.email"
                />
              </div>
              <span v-if="v$.email.$error" class="text-red-500 italic text-sm">
                Error: {{ v$.email.$errors[0].$message }}
              </span>
            </div>

            <!-- Message -->
            <div class="form-input-group mt-2">
              <label class="form-input-label" for="message">Message</label>
              <div class="form-input">
                <textarea
                  class="input-lg w-full border-2 border-solid border-black p-5"
                  name="message"
                  id="message"
                  rows="8"
                  v-model="state.message"
                ></textarea>
              </div>
              <span
                v-if="v$.message.$error"
                class="text-red-500 italic text-sm"
              >
                Error: {{ v$.message.$errors[0].$message }}
              </span>
            </div>

            <!-- For success/fail messages -->
            <div id="success" v-if="showSuccess">
              <div class="flex flex-row items-start">
                <div>
                  <!-- Green checkmark for success -->
                  <font-awesome-icon
                    icon="fa-solid fa-check"
                    class="text-green-600"
                  ></font-awesome-icon>

                  <!-- Success message -->
                  <span class="font-bold ml-1"
                    >Your message has been sent.</span
                  >
                </div>

                <!-- Close button -->
                <button
                  type="button"
                  class="close ml-3 rounded-full"
                  aria-hidden="true"
                  @click="showSuccess = false"
                >
                  <font-awesome-icon
                    icon="fa-regular fa-circle-xmark"
                    size="lg"
                    class="hover:bg-slate-500/25 rounded-full"
                  ></font-awesome-icon>
                </button>
              </div>
            </div>

            <!-- Failure message -->
            <div id="failure" v-if="showFailure">
              <div class="flex flex-row items-start">
                <div>
                  <!-- Red x for failure -->
                  <font-awesome-icon
                    icon="fa-solid fa-xmark"
                    class="text-red-600"
                  ></font-awesome-icon>

                  <!-- Message -->
                  <span class="font-bold ml-1">
                    Sorry, it seems that the mail server is not
                    responding...</span
                  >
                  Could you please email me directly to
                  <a href="mailto:nicholas.adam.hand@gmail.com"
                    >nicholas.adam.hand@gmail.com</a
                  >? Sorry for the inconvenience!
                </div>

                <!-- Close button -->
                <button
                  type="button"
                  class="close ml-3 rounded-full"
                  aria-hidden="true"
                  @click="showFailure = false"
                >
                  <font-awesome-icon
                    icon="fa-regular fa-circle-xmark"
                    size="lg"
                    class="hover:bg-slate-500/25 rounded-full"
                  ></font-awesome-icon>
                </button>
              </div>
            </div>

            <!-- Submit -->
            <div class="form-actions mt-5">
              <button type="submit" class="btn-default">Submit Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
