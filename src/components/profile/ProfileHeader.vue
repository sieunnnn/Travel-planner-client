<script setup>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <div style="width: 100%; margin-top: 20px">
    <router-link to="/profile"><font-awesome-icon :icon="['fas', 'circle-arrow-left']" class="icon"/></router-link>
    <div class="line"></div>
  </div>
</template>

<style scoped>
  .icon {
    font-size: 25px;
    margin: 10px 0;
    color: #34C759;
    border: 1px solid #1E1E1C;
    border-radius: 50%
  }
</style>