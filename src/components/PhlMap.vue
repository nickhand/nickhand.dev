<template>
  <svg
    :key="drawKey"
    ref="svgEl"
    :class="['phl-svg', drawing && 'phl-go']"
    :width="svgWidth"
    :height="height"
    :viewBox="geo.viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="phl-city phl-draw"
      pathLength="1"
      :stroke-width="strokeWidth"
      :d="geo.cityPath"
    />
    <path
      v-if="showCreek"
      class="phl-creek phl-draw"
      pathLength="1"
      :stroke-width="strokeWidth * 0.75"
      :d="creekPath"
    />
    <circle class="phl-pin" :cx="geo.pin[0]" :cy="geo.pin[1]" :r="pinRadius" />
  </svg>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import geo from '../data/phl_geo.json'

const props = defineProps<{
  height: number
  strokeWidth: number
  pinRadius: number
  showCreek?: boolean
}>()

const svgWidth = computed(() =>
  Number((100 / geo.height * props.height).toFixed(1))
)

const creekPath = computed(() =>
  (geo.creek as [number, number][])
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]} ${p[1]}`)
    .join(' ')
)

const svgEl = ref<SVGSVGElement | null>(null)
const drawing = ref(false)
const drawKey = ref(0)

function start() {
  drawKey.value++
  drawing.value = false
  nextTick(() => {
    svgEl.value?.getBoundingClientRect()
    requestAnimationFrame(() => {
      drawing.value = true
    })
  })
}

defineExpose({ start })
</script>
