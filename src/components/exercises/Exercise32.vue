<template>
  <ExerciseDisplayer title="Exercise3.2.vue">
    <template #content>
      <div class="content">
        <p>I'm Exercise3.vue child ! And i receive props and i cannot change them... heuuuuu wait what ?!</p>
        <a href="https://vuejs.org/guide/components/props.html#mutating-object-array-props" target="_blank">Vue3 Documentation : Props mutating</a>
        <input type="range" v-model.number="object.slider">
        <input type="text" v-model="object.text">
      </div>
    </template>
    <template #code>
      <pre>{{ JSON.stringify(object, null, '\t') }}</pre>
    </template>
  </ExerciseDisplayer>
</template>

<script setup lang="ts">
import ExerciseDisplayer from "@/vue/layouts/ExerciseDisplayer.vue";
import {PropType} from "vue";

const props = defineProps({
  object: {
    type: Object as PropType<{ slider: number, text: string }>,
    required: true
  }
})
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>