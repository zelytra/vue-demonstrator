<template>
  <section class="exercise-wrapper">
    <div class="content">
      <h1>{{ title }}</h1>
      <div class="sub-content">
        <slot name="content"/>
      </div>
      <div class="code-display">
        <slot name="code"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String
})
</script>

<style scoped lang="scss">
section.exercise-wrapper {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;


  .content {
    position: relative;
    width: 100%;
    margin: 18px 8px 8px;
    border-radius: 4px;
    border: solid 4px var(--main);
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    .sub-content {
      padding: 16px 8px 8px;
      width: 100%;
      display: flex;
      flex-flow: column;
      align-items: stretch;
    }

    h1 {
      position: absolute;
      top: -15px;
      background: var(--main);
      color: var(--revert-text);
      padding: 4px;
      font-weight: 600;
      font-size: 16px;
      border-radius: 20px;
    }

    .code-display {
      width: 25%;;
      background: var(--input-background);
      padding: 8px;
    }
  }
}
</style>