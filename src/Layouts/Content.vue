<script setup>

</script>

<template>
  <div class="content-container">
    <router-view />
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
    justify-content: center;
    align-items: center;
  }

  .content-container::-webkit-scrollbar {
    display: none;
  }
</style>