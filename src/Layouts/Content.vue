<script setup>
import Feed from "../views/Feed.vue";
</script>

<template>
  <div class="content-container">
    <Feed />
  </div>
</template>

<style scoped>
  .content-container {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .content-container::-webkit-scrollbar {
    display: none;
  }
</style>