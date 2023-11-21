<template>
  <ExerciseDisplayer title="Exercise3.1.vue">
    <template #content>
      <div class="content">
        <input type="range" @input="slider=Number.parseInt($event.target.value)" :value="slider">
        <p>I'm Exercise3.vue child ! And i receive props and i cannot change them !</p>
        <a href="https://vuejs.org/guide/components/props.html#props" target="_blank">Vue3 Documentation : Props</a>
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
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>