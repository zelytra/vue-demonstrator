<template>
  <header>
    <nav>
      <router-link class="link" v-for="route in routes.routes" :key="route.name" :to="route.path">
        {{ route.name }}
      </router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import * as routes from '../router/index'

const router = useRouter()
</script>


<style scoped lang="scss">
header {
  background: var(--main);
  height: 30px;
  padding: 8px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  display: flex;
  justify-content: start;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    gap: 6px;

    .link {
      color: var(--revert-text);
      padding: 4px;
      border-radius: 3px;

      &:hover{
        background: var(--input-background);
        color: var(--main);
      }
    }


  }

}
</style>