<script setup>
  import Container from "./Layouts/Container.vue";
  import { watchEffect } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();

  watchEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    if (!token) {
      store.dispatch('logout');
    }
  });

  const storedUserInfo = sessionStorage.getItem('userInfo');
  if (storedUserInfo) {
    store.commit('setLoginUser', JSON.parse(storedUserInfo));
  }
</script>

<template>
  <Container/>
</template>

