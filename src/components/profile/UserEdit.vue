<script setup>
import ProfileHeader from "./ProfileHeader.vue";
import axios from "axios";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { defineEmits } from 'vue';

const emit = defineEmits(["profileUpdated"]);
const store = useStore();

const storedUser = JSON.parse(sessionStorage.getItem("userInfo") || '{}');
const currUserNickname = storedUser.userNickname || "";

const accessToken = sessionStorage.getItem("accessToken");

const selectedImg = ref(null);
const profileUpdateRequest = reactive({
  userNickname: currUserNickname,
  changeProfileImg: false
});

const imgSelect = (e) => {
  selectedImg.value = e.target.files[0];
  if (selectedImg.value) {
    profileUpdateRequest.changeProfileImg = true;
  }
}

const patchUserProfile = async () => {
  try {
    const formData = new FormData();

    if (!selectedImg.value || typeof selectedImg.value === 'string') {
      const ImageBlob = new Blob([''], {
        type: 'application/json',
      });
      formData.append('profileImg', ImageBlob);
    } else {
      formData.append('profileImg', selectedImg.value);
    }

    const profileUpdateRequestBlob = new Blob(
        [
          JSON.stringify({
            userNickname: profileUpdateRequest.userNickname,
            changeProfileImg: profileUpdateRequest.changeProfileImg,
          }),
        ],
        {
          type: 'application/json',
        }
    );

    formData.append('profileUpdateRequest', profileUpdateRequestBlob);

    const response = await axios.patch('/profile', formData, {
      headers: {
        'Authorization': `${accessToken}`,
        'Content-Type': 'multipart/form-data'
      }
    });

    if (response.status === 200) {
      alert('회원정보가 변경되었습니다.');

      // 스토어 업데이트
      await store.dispatch('updateUserProfile', response.data.profileImgUrl, response.data.userNickname);

      // 현재의 userInfo 값을 가져온다.
      const currentUserInfo = JSON.parse(sessionStorage.getItem("userInfo") || '{}');
      console.log(currentUserInfo)
      // userInfo를 업데이트 한다. 나머지는 그대로 유지.
      const updatedUserInfo = {
        ...currentUserInfo,
        userNickname: response.data.userNickname,
        profileImgUrl: response.data.profileImgUrl
      };

      // 세션 스토리지 업데이트
      sessionStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

      // 부모컴포넌트에 업데이트 데이터 전달
      emit('profileUpdated', {
        userNickname: response.data.userNickname,
        profileImgUrl: response.data.profileImgUrl
      });

    } else {
      throw new Error('Failed to update profile');
    }
  } catch (e) {
    console.log("error: ", e);
    alert('회원정보 변경에 실패했습니다. 잠시 후 다시 시도해주세요.');
  }

  return {
    profileUpdateRequest,
    patchUserProfile,
    imgSelect
  }
}



let passwordValidated = ref(false);
let newPasswordValidated = ref(true);
const currPassword = ref('');
const checkPassword = async () => {
  try {
    const requestBody = {
      password: currPassword.value
    };

    const response = await axios.post('/profile/user/check', requestBody, {
      headers: {
        'Authorization': `${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      passwordValidated.value = true;
      console.log(passwordValidated.value);
    }

  } catch (error) {
    console.error('Error updating password:', error);
  }
};


const newPassword = ref('');
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

const changePassword = async () => {
  try {

    if (!isPasswordValid(newPassword.value)) {
      newPasswordValidated.value = false;
    } else {
      const requestBody = {
        password: newPassword.value
      };

      const response = await axios.patch('/profile/user/updateInfo', requestBody, {
        headers: {
          'Authorization': `${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        alert("비밀번호가 변경되었습니다.");
      }
    }
  } catch (error) {
    console.error('Error updating password:', error);
  }
};
</script>

<template>
  <ProfileHeader/>
  <div>
    <div class="title" style="top: 25px; position: relative;">회원 정보 수정</div>
    <div class="sub_title" style="top: 40px; position: relative;">프로필 이미지 변경</div>
    <form class="input file_form">
      <input type="file" @change="imgSelect">
      <button type="submit" class="blue_button" @click.prevent="patchUserProfile">변경</button>
    </form>
    <div class="sub_title" style="top: 70px; position: relative;">닉네임 변경</div>
    <form class="edit_form" style="top: 75px; position: relative;">
      <input type="text" class="edit_input input" v-model="profileUpdateRequest.userNickname">
      <button type="submit" class="blue_button" @click.prevent="patchUserProfile">변경</button>
    </form>
    <div v-if="!passwordValidated">
      <div class="sub_title" style="top: 100px; position: relative;">비밀번호 변경</div>
      <form class="edit_form" style="top: 105px; position: relative;" @submit.prevent="checkPassword">
        <input type="password" class="edit_input input" v-model="currPassword">
        <button type="submit" class="blue_button">변경</button>
      </form>
      <p style="top: 118px; position: relative; color: #D70015">* 비밀번호 변경을 위해 현재 비밀번호를 입력해주세요.</p>
    </div>
    <div v-else-if="passwordValidated">
      <div class="sub_title" style="top: 100px; position: relative;">변경하실 비밀번호를 입력해주세요.</div>
      <form class="edit_form" style="top: 105px; position: relative;">
        <input type="password" class="edit_input input" v-model="newPassword">
        <button type="submit" class="blue_button" @click.prevent="changePassword">변경</button>
      </form>
      <p v-if="!newPasswordValidated" style="top: 118px; position: relative; color: #D70015">* 비밀번호는 8 ~ 15 자리 이하, 영문, 숫자, 특수문자를 조합하여 만들어주세요.</p>
    </div>
  </div>
</template>

<style scoped>

.input {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

  .file_form {
    margin-top: 5px;
    position: relative;
    top: 40px;
    padding: 5px 10px;
  }

  .blue_button {
    width: 20%;
    height: 34px;
  }

</style>