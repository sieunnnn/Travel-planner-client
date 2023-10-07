<script setup>

import Navbar from "./Navbar.vue";
import Content from "./Content.vue";
</script>

<template>
  <div class="container">
    <div class="contents box">
      <Navbar />
      <Content />
    </div>
  </div>
</template>

<style scoped>
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    color: #1E1E1C;
  }

  .contents {
    display: grid;
    grid-template-columns:
  [linename1] minmax(235px, 1fr) [linename2] 5fr;
    height: 85%;
  }
</style>