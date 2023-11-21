<template>
  <ExerciseDisplayer title="Static value exercise">
    <template #content>
      <input type="range" v-model="object.slider">
      <input type="text" v-model="object.text">
    </template>
    <template #code>
      <pre>{{ JSON.stringify(object, null, '\t') }}</pre>
    </template>
  </ExerciseDisplayer>
</template>

<script setup lang="ts">
import ExerciseDisplayer from "@/vue/layouts/ExerciseDisplayer.vue";

const object = {
  slider: 42,
  text: 'Du texte'
}
</script>

<style scoped lang="scss">

</style>