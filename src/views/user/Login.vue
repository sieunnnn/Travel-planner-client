<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import axios from "axios";
import eventBus from "../../util/eventBus.js";

const router = useRouter();
const store = useStore();

const goToSignup = () => {
  router.push('/auth/signup');
};

const email = ref('');
const password = ref('');

const login = async () => {
  try {
    const response = await axios.post('/auth/login', {
      email: email.value,
      password: password.value
    });

    if (response.status === 200) {
      const accessToken = response.headers.authorization;
      const userInfo = response.data;
      console.log(userInfo);

      if (accessToken) {
        sessionStorage.setItem('accessToken', accessToken);
      }
      if (userInfo) {
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
      }

      store.commit('setLoginUser', userInfo);
      eventBus.emit('login-success', userInfo);
      await router.push('/feed');
    }
  } catch (error) {
    console.error("로그인 에러: ", error);
  }
}
</script>


<template>
  <div class="login_container box">
    <div class="login_logo_container">
      <img src="../../assets/images/logo_big.svg" width="160" style="margin: 15px">
    </div>
    <div class="login_content">
      <div class="login_title">
        Login
      </div>
      <div class="login_form">
        <form>
          <input v-model="email" type="text" placeholder="이메일을 입력해주세요." class="input"><br>
          <input v-model="password" type="password" placeholder="비밀번호를 입력해주세요." class="input"><br>
          <div class="login_button_container">
            <button @click.prevent="login" class="blue_button">로그인</button>
            <button @click.prevent="goToSignup" class="gray_button">회원 가입</button>
          </div>
        </form>
      </div>
      <div class="social_login_container">
        <a :href="'https://dev.travel-planner.xyz/oauth/authorize/google'">
          <img src="../../assets/images/google_login_button.svg" />
        </a>
        <a :href="'https://dev.travel-planner.xyz/oauth/authorize/naver'">
          <img src="../../assets/images/naver_login_button.svg" />
        </a>
        <a :href="'https://dev.travel-planner.xyz/oauth/authorize/kakao'">
          <img src="../../assets/images/kakao_login_button.svg" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .login_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 40%;
    height: 85%;
    flex-shrink: 0;
  }

  .login_content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 50px;
    width: 100%;
  }

  .login_logo_container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-content: center;

    width: 100%;
  }

  .login_title {
    color: #1E1E1C;
    font-family: 'pre-black', sans-serif;
    font-size: 60px;
    margin: 18px 0 15px 0;
  }

  .login_form {
    width: 100%;
  }

  .login_form input {
    width: 100%;
    height: 37px;
    flex-shrink: 0;
    margin-bottom: 16px;

    padding-left: 10px;
    font-size: 17px;
  }

  .login_button_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    //background-color: orange;
  }

  .login_button_container button {
    width: 49%;
    height: 36px;
    flex-shrink: 0;
    margin: 13px 5px 45px 5px;
  }

  .social_login_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .social_login_container img {
    width: 55px;
    margin: 10px;
  }
</style>