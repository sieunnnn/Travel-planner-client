<script setup>
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  import axios from "axios";

  const router = useRouter();
  const goToLogin = () => {
    router.push('/auth/login');
  };

  // 데이터 바인딩
  const email = ref('');
  const userNickname = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const passwordError = ref(null);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 검증 정규식
    return emailRegex.test(email);
  }

  const isPasswordValid = (password) => {
    const lengthRegex = /^.{8,15}$/;
    const letterRegex = /[A-Za-z]/;
    const numberRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*]/;

    return lengthRegex.test(password) &&
        letterRegex.test(password) &&
        numberRegex.test(password) &&
        specialCharRegex.test(password);
  }

  const signUp = async () => {
    if (!isEmailValid(email.value)) {
      alert('유효한 이메일 주소를 입력해주세요.');
      return;
    }

    if (!isPasswordValid(password.value)) {
      passwordError.value = "* 비밀번호는 8 ~ 15 자리 이하, 영문, 숫자, 특수문자를 조합하여 만들어주세요."
      return;
    }

    if (password.value !== confirmPassword.value) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const response = await axios.post('/auth/signup', {
        email: email.value,
        userNickname: userNickname.value,
        password: password.value,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        alert('회원가입이 완료되었습니다.');
        router.push('/auth/login');
      } else {
        alert('회원가입에 실패하였습니다.');
      }
    } catch (error) {
      console.error('API 요청 중 오류가 발생했습니다: ', error);
      alert('오류가 발생했습니다.');
    }
  }
</script>

<template>
  <div class="signup_container">
    <div class="signup_logo_container">
      <img src="../../assets/images/logo_big.svg" width="160" style="margin: 15px 15px 5px 0">
    </div>
    <div class="signup_content">
      <div class="signup_title">
        Signup
      </div>
      <div class="signup_form">
        <form>
          <input type="text" v-model="email" placeholder="이메일을 입력해주세요."><br>
          <input type="text" v-model="userNickname" placeholder="닉네임을 입력해주세요."><br>
          <input type="password" v-model="password" placeholder="비밀번호를 입력해주세요."><br>
          <input type="password" v-model="confirmPassword" placeholder="비밀번호를 다시한번 입력해 주세요."><br>
          <p v-if="passwordError">{{ passwordError }}</p>
          <p v-else-if="!passwordError"></p>
          <div class="signup_button_container">
            <button @click.prevent="signUp" style="background: #007AFF;">회원 가입</button>
            <button @click.prevent="goToLogin" style="background: #8E8E93;">로그인</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.signup_container {
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

.signup_content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 50px;
  width: 100%;
}

.signup_logo_container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;

  width: 100%;
}

.signup_title {
  color: #1E1E1C;
  font-family: 'pre-black', sans-serif;
  font-size: 60px;
  margin: 0 0 15px 0;
}

.signup_form {
  width: 100%;
}

.signup_form input {
  width: 100%;
  height: 35px;
  flex-shrink: 0;
  margin-bottom: 15px;

  border-radius: 10px;
  border: 1px solid #1E1E1C;
  background: rgba(255, 255, 255, 0.90);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.10) inset;

  padding-left: 10px;
  font-size: 17px;
}

.signup_form input:focus {
  outline: none;
  border: 2.5px solid rgba(58, 108, 217, 0.6);
}

.signup_form p {
  font-family: 'pre-regular', serif;
  font-size: 16px;
  margin: 0 0 25px 0;
  color: #D70015;
}

.signup_button_container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
//background-color: orange;
}

.signup_button_container button {
  width: 49%;
  height: 36px;
  flex-shrink: 0;
  margin: 10px 5px 45px 5px;

  font-family: 'pre-medium', sans-serif;
  border-radius: 10px;
  border: 1px solid #1E1E1C;
  outline: none;
  color: white;
}

</style>