<template>
  <ExerciseDisplayer title="Exercise4.vue : onMounted ?">
    <template #content>
      <div class="content">
        <p>RTFM (Read The Fucking Manual)</p>
        <a href="https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram" target="_blank">Vue3 Documentation
          : Lifecycle</a>
        <a href="https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram" target="_blank">Vue3 Documentation
          : Composition or Options ? (spoiler: Composition)</a>
      </div>
    </template>
    <template #code>
      <pre></pre>
    </template>
  </ExerciseDisplayer>
</template>

<script setup lang="ts">
import ExerciseDisplayer from "@/vue/layouts/ExerciseDisplayer.vue";
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated} from "vue";

const initVariable = 42;

// Born here
onBeforeMount(() => {
  console.log("Before mount !")
})

onMounted(() => {
  console.log("Mounted !")
})

//On data changes
/* HEAVY EVENT HANDLER, USE WITH MODERATION */
onBeforeUpdate(() => {
  console.log("Before data updated !")
})

onUpdated(() => {
  console.log("After data updated !")
})

//Dead here
onBeforeUnmount(()=>{
  console.log("Before unMounted !")
})

onUnmounted(()=>{
  console.log("unMounted !")
})

</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>