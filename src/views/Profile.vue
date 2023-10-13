<script setup>
import { useStore } from "vuex";
import {useRoute} from "vue-router";
import { computed, onMounted, ref } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import axios from "axios";

const route = useRoute();
const store = useStore();

const profileUserId = computed(() => Number(route.query.userId));
const logInUserId = computed(() => store.getters.getUserId);
const checkUser = ref(profileUserId.value === logInUserId.value);
const userNickname = ref('');
const profileImgUrl = ref('');
const accessToken = sessionStorage.getItem("accessToken");

const currentProfileUserId = ref(profileUserId.value);

const getProfile = async () => {
  try {
    const response = await  axios.get('/profile', {
      headers: {
        'Authorization': `${accessToken}`
      },
      params: {
        userId: currentProfileUserId.value
      }
    })

    if (response.status === 200) {
      // email.value = response.data.email;
      userNickname.value = response.data.userNickname;
      profileImgUrl.value = response.data.profileImgUrl;
    }
    console.log(response.data)
  } catch (e) {
    console.log("error: ", e);
  }
}


onBeforeRouteUpdate(async (to, from) => {
  if (to.path === '/profile' && to.query.userId !== from.query.userId) {
    const updatedProfileUserId = Number(to.query.userId);
    currentProfileUserId.value = updatedProfileUserId;  // 프로필 값 업데이트
    checkUser.value = updatedProfileUserId === logInUserId.value;
    await getProfile();
    console.log(updatedProfileUserId, currentProfileUserId)
  }
});


onMounted(getProfile);

const handleProfileUpdate = (updatedProfile) => {
  userNickname.value = updatedProfile.userNickname;
  profileImgUrl.value = updatedProfile.profileImgUrl;
  getProfile()
}
</script>

<template>
  <div class="profile_container">
    <div class="profile_content_container box">
      <router-view :profileImgUrl="profileImgUrl" :userNickname="userNickname" @profileUpdated="handleProfileUpdate"/>
    </div>
    <div class="profile_button_container box">
      <router-link to="/profile/update" style="margin-top: 10px" v-if="checkUser">
        <img src="../assets/images/profile_edit_button.svg" width="95"/>
      </router-link>
      <router-link to="/profile/delete" v-if="checkUser">
        <img src="../assets/images/user_delete_button.svg" width="95"/>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .profile_container {
    display: grid;
    grid-template-columns: [linename1] 7.5fr [linename2] minmax(100px, 1fr);
    height: 90%;
    width: 90%;
    grid-column-gap: 20px;
  }

  .profile_content_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 50px;
  }

  .profile_button_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
</style>