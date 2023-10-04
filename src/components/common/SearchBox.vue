<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, defineEmits } from 'vue';

const query = ref('');
const emit = defineEmits();

const emitSearchQuery = () => {
  emit('search', query.value);
};

</script>

<template>
  <form @submit.prevent="emitSearchQuery">
    <input type="search" v-model="query" class="search-box">
    <button type="submit" class="search-button">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="margin-right: 5px" />
      <span>검색</span>
    </button>
  </form>
</template>

<style scoped>
  form {
    position: fixed;
  }

  .search-box {
    width: 550px;
    height: 36px;
    padding-left: 10px;

    margin: 20px 10px 0 0;
    border-radius:10px;
    border: 1px solid #1E1E1C;
    background: rgba(255, 255, 255, 0.90);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.10) inset;
    font-size: 18px;
  }

  .search-box:focus {
    outline: none;
    border: 2.5px solid rgba(58, 108, 217, 0.6);
  }

  .search-button {
    width: 80px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 10px;
    //border: 1px solid #1E1E1C;
    border: none;
    outline: none;
    background: #007AFF;
    color: white;
  }

  .search-button span {
    font-size: 18px;
    font-family: 'pre-medium', sans-serif;
  }

  input[type=search] {
    padding-right: 3px;
  }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration{
    -webkit-appearance: none;
    width: 20px; height: 20px; background: url('../../assets/images/clear_button.svg') center center no-repeat;
    cursor: pointer;
  }
</style>