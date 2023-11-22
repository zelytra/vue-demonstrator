<template>
  <ExerciseDisplayer title="Exercise3.1.vue">
    <template #content>
      <div class="content">
        <input type="range" @input="updateSliderValue" :value="slider">
        <p>I'm Exercise3.vue child ! And i receive props and i cannot change them !</p>
        <a href="https://vuejs.org/guide/components/props.html#one-way-data-flow" target="_blank">Vue3 Documentation :
          Props</a>
      </div>
    </template>
    <template #code>
      <pre>{{ JSON.stringify(slider, null, '\t') }}</pre>
    </template>
  </ExerciseDisplayer>
</template>

<script setup lang="ts">
import ExerciseDisplayer from "@/vue/layouts/ExerciseDisplayer.vue";

const props = defineProps({
  slider: Number
})

function updateSliderValue(event: any) {
  //@ts-ignore For educational purpose only, do not reproduce at home
  props.slider = event.target.value
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>