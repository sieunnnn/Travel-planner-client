<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const goToSignup = () => {
    router.push('/auth/signup');
  };
</script>

<template>
  <div class="login_container">
    <div class="login_logo_container">
      <img src="../../assets/images/logo_big.svg" width="160" style="margin: 15px">
    </div>
    <div class="login_content">
      <div class="login_title">
        Login
      </div>
      <div class="login_form">
        <form>
          <input type="text" placeholder="이메일을 입력해주세요."><br>
          <input type="password" placeholder="비밀번호를 입력해주세요."><br>
          <div class="login_button_container">
            <button type="submit" style="background: #007AFF;">로그인</button>
            <button @click.prevent="goToSignup" style="background: #8E8E93;">회원 가입</button>
          </div>
        </form>
      </div>
      <div class="social_login_container">
        <img src="../../assets/images/google_login_button.svg" />
        <img src="../../assets/images/naver_login_button.svg" />
        <img src="../../assets/images/kakao_login_button.svg" />
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

    border-radius: 20px;
    border: 1px solid #1E1E1C;
    background: rgba(255, 255, 255, 0.80);
    box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.20);
    backdrop-filter: blur(20px);
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

    border-radius: 10px;
    border: 1px solid #1E1E1C;
    background: rgba(255, 255, 255, 0.90);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.10) inset;

    padding-left: 10px;
    font-size: 17px;
  }

  .login_form input:focus {
    outline: none;
    border: 2.5px solid rgba(58, 108, 217, 0.6);
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

    font-family: 'pre-medium', sans-serif;
    border-radius: 10px;
    border: 1px solid #1E1E1C;
    outline: none;
    color: white;
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