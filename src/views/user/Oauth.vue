<template>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from "vuex";

const route = useRoute();
const router = useRouter();
const store = useStore();

const userId = ref('');
const email = ref('');
const nickname = ref('');
const provider = ref('');
const profileImgUrl = ref('');
const token = ref('');

onMounted(() => {
  userId.value = route.query.userId;
  email.value = route.query.email;
  nickname.value = route.query.nickname;
  provider.value = route.query.provider;
  profileImgUrl.value = route.query.profileImgUrl;
  token.value = route.query.token;

  if (token.value) {
    sessionStorage.setItem('accessToken', token.value);
  }

  const userInfo = {
    userId: userId.value,
    email: email.value,
    nickname: nickname.value,
    provider: provider.value,
    profileImgUrl: profileImgUrl.value,
  };

  if (userInfo) {
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  store.commit('setLoginUser', userInfo);
  router.push('/feed');
});
</script>
