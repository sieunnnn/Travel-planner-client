<template>
  <!-- 여기에 컴포넌트 내용을 작성하세요 -->
</template>

<script setup>
import {ref, onMounted} from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import router from "../../router/index.js";
import eventBus from "../../util/eventBus.js";

const route = useRoute();
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
    userId: Number(userId.value),
    email: email.value,
    nickname: nickname.value,
    provider: provider.value,
    profileImgUrl: profileImgUrl.value,
  };

  if (userInfo) {
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
    store.commit('setLoginUser', userInfo);
    // 로그인 성공 이벤트 발송
    eventBus.emit('login-success', userInfo);
  }

  router.push('/feed');
});

</script>
