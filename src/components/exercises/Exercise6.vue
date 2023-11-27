<template>
  <ExerciseDisplayer title="Exercise6.vue : Computed & v-model" :default-deploy="true">
    <template #content>
      <div class="content">
        <p @click="variable++">Clique</p>
        <Exercise61 :variable="variable" @update:variable="variable = $event"/>
      </div>
    </template>
    <template #code>
      <pre>{{ variable }}</pre>
    </template>
  </ExerciseDisplayer>
</template>

<script setup lang="ts">
import ExerciseDisplayer from "@/vue/layouts/ExerciseDisplayer.vue";
import {onMounted, ref} from "vue";
import Exercise61 from "@components/exercises/Exercise61.vue";

const variable = ref(42)
onMounted(() => {
  console.log("Mounted !")
})


</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>