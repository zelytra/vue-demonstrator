<template>
  <ExerciseDisplayer title="Exercise3.vue : Props and immutability">
    <template #content>
      <div class="content">
        <input type="range" v-model.number="object.slider">
        <input type="text" v-model="object.text">
      </div>
      <Exercise31 :slider="object.slider"/>
      <Exercise32 :object="object"/>
    </template>
    <template #code>
      <pre>{{ JSON.stringify(object, null, '\t') }}</pre>
    </template>
  </ExerciseDisplayer>
</template>

<script setup lang="ts">
import ExerciseDisplayer from "@/vue/layouts/ExerciseDisplayer.vue";
import {ref} from "vue";
import Exercise31 from "@components/exercises/Exercise31.vue";
import Exercise32 from "@components/exercises/Exercise32.vue";


const object = ref<{slider:number,text:string}>({
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