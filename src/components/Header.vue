<template>
  <header>
    <nav>
      <router-link to="exo1" class="link">
        Exercise 1
      </router-link>
      <router-link to="exo2" class="link">
        Exercise 2
      </router-link>
      <router-link to="exo3" class="link">
        Exercise 3
      </router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
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