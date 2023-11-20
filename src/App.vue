<template>
  <Header/>
  <router-view v-slot="{ Component }">
    <transition mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<script setup lang="ts">

import Header from "@components/Header.vue";
</script>

<style scoped lang="scss">
#app {
  width: 100%;
  height: 100%;
}

.v-enter-active,
.v-leave-active {
  transition: 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
