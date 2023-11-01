<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import axios from "axios";
import {ref} from "vue";

const accessToken = sessionStorage.getItem("accessToken");
const userData = ref([]);

// groupMember api
const email = ref("");
const searchGroupMember = async (searchEmail) => {
  try {
    const response = await  axios.get('/search/member', {
      headers: {
        'Authorization' : `${accessToken}`
      },
      params: {
        email: searchEmail
      }
    })

    if (response.status === 200) {
      userData.value = response.data;
    }
  } catch (e) {
    console.log(e)
  }
}

const submitForm = async (event) => {
  event.preventDefault();
  await searchGroupMember(email.value);
}

</script>

<template>
  <form @submit="submitForm" style="padding: 10px 0">
    <input v-model="email" type="search" class="search-box">
    <button type="submit" class="search-button">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="margin-right: 5px; font-size: 16px" />
      <span>검색</span>
    </button>
  </form>
  <div>
    <div class="user-container" v-for="user in userData" :key="user.userId">
      <div class="user-content">
        <div class="img-contents" style="width: 40px; height: 40px; margin-right: 20px">
          <img :src="user.profileImageUrl || '../../assets/images/basic_profile.svg'" width="42" style="margin-left: 2px"/>
        </div>
        <div class="user-title">
          {{ user.userNickname }}
        </div>
      </div>
      <button class="green_button"> 추가 </button>
    </div>
  </div>
</template>

<style scoped>
.search-box {
  width: 345px;
  height: 36px;
  margin-right: 10px;
  padding-left: 10px;

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
  border-radius: 10px;
  border: 1px solid #1E1E1C;
  outline: none;
  background: #8E8E93;
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

.user-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  border-bottom: #1E1E1C 1px solid;
  padding: 20px 0;
}

.user-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.green_button {
  font-size: 16px;
  padding: 3px 10px;
}

.user-title {
  font-family: 'pre-medium', sans-serif;
  font-size: 24px;
}
</style>