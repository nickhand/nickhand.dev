<script setup>
import { ref } from "vue";

// Define the input props
const props = defineProps({
  typingSpeed: { type: Number, default: 100 },
  erasingSpeed: { type: Number, default: 100 },
  newTextDisplay: { type: Number, default: 2000 },
  displayTextArray: {
    type: Array,
    default: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
  },
  highlightColor: { type: String, default: "#d2b94b" },
});

const typeValue = ref("");
const typeStatus = ref(false);

let displayTextArrayIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < props.displayTextArray[displayTextArrayIndex].length) {
    if (!typeStatus.value) typeStatus.value = true;

    typeValue.value +=
      props.displayTextArray[displayTextArrayIndex].charAt(charIndex);

    charIndex += 1;
    setTimeout(typeText, props.typingSpeed);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, props.newTextDisplay);
  }
}

function eraseText() {
  if (charIndex > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = props.displayTextArray[displayTextArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex -= 1;
    setTimeout(eraseText, props.erasingSpeed);
  } else {
    typeStatus.value = false;
    displayTextArrayIndex += 1;
    if (displayTextArrayIndex >= props.displayTextArray.length)
      displayTextArrayIndex = 0;
    setTimeout(typeText, props.typingSpeed + 1000);
  }
}

function useAn() {
  return typeValue.value.startsWith("E");
}

setTimeout(typeText, props.newTextDelay + 200);
</script>

<template>
  <div id="typewriter-container">
    <span>I'm a<span v-if="useAn()">n</span>&nbsp;</span>
    <span class="typed-text">{{ typeValue }}</span>
    <span class="blinking-cursor">|</span>
    <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
  </div>
</template>

<style lang="scss" scoped>
#typewriter-container {
  align-items: center;

  span.typed-text {
    color: v-bind(highlightColor);
  }
}

// Cursor blinking CSS Starts...
.blinking-cursor {
  color: #2c3e50;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
// Cursor blinking CSS Ends...
</style>
