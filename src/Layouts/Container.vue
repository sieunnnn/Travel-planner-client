<script setup>

import Navbar from "./Navbar.vue";
import Content from "./Content.vue";
</script>

<template>
  <div class="container">
    <div class="contents">
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

    background: rgba(255, 255, 255, 0.80);
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.20);
    border-radius: 20px;
    border: 1px #1E1E1C solid;
    backdrop-filter: blur(40px);
  }
</style>