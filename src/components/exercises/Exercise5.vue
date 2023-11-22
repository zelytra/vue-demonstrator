<template>
  <ExerciseDisplayer title="Exercise5.vue : Template">
    <template #content>
      <div class="content">
        <p>Under your nose since the beginning...</p>
        <a href="https://vuejs.org/guide/components/slots.html#slots" target="_blank">Vue3 Documentation
          : Slot</a>
      </div>
      <ExerciseDisplayer title="Slotception">
        <template #content>
          <ExerciseDisplayer title="Slotception">
            <template #content>
              <ExerciseDisplayer title="Slotception">
                <template #content>
                  <ExerciseDisplayer title="Slotception">
                    <template #content>
                      <ExerciseDisplayer title="Slotception">
                        <template #content>

                        </template>
                        <template #code>
                          <pre></pre>
                        </template>
                      </ExerciseDisplayer>
                    </template>
                    <template #code>
                      <pre></pre>
                    </template>
                  </ExerciseDisplayer>
                </template>
                <template #code>
                  <pre></pre>
                </template>
              </ExerciseDisplayer>
            </template>
            <template #code>
              <pre></pre>
            </template>
          </ExerciseDisplayer>
        </template>
        <template #code>
          <pre></pre>
        </template>
      </ExerciseDisplayer>
    </template>
    <template #code>
      <pre></pre>
    </template>
  </ExerciseDisplayer>
</template>

<script setup lang="ts">
import ExerciseDisplayer from "@/vue/layouts/ExerciseDisplayer.vue"
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>