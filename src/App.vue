<template>
  <Header/>
  <div class="app-wrapper">
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">

import Header from "@components/Header.vue";
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100vh;
}

.app-wrapper {
  height: calc(100vh - 46px);
  overflow: hidden;
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
