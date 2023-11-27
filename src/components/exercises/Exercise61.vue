<template>
  <ExerciseDisplayer title="Exercise6.vue : Computed & v-model" :default-deploy="true">
    <template #content>
      <div class="content">
        <p @click="(counterComputed as number)++">Clique</p>
      </div>
    </template>
    <template #code>
      <pre>{{ counterComputed }}</pre>
    </template>
  </ExerciseDisplayer>
</template>

<script setup lang="ts">
import ExerciseDisplayer from "@/vue/layouts/ExerciseDisplayer.vue";
import {computed} from "vue";

const props = defineProps({
  variable: {
    type: Number,
    required: true
  }
})
const emits = defineEmits(["update:variable"])

const counterComputed = computed({
  get: (): Number => props.variable,
  set: (value: Number): void => {
    emits("update:variable", value);
  },
});

</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>