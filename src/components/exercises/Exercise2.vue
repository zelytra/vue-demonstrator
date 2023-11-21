<template>
  <ExerciseDisplayer title="Exercise2.vue : Ref values">
    <template #content>
      <div class="content">
        <input type="range" v-model="object.slider">
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
import {ref} from "vue";

const object = ref<any>({
  slider: 42,
  text: 'Du texte'
})
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>