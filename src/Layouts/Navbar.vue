<script setup>
  import { useStore } from 'vuex';
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { useRouter } from 'vue-router';
  import axios from "axios";
  import {computed} from "vue";

  const router = useRouter();
  const store = useStore();

  const user = computed(() => store.state.loginUser);
  const userProfileImgUrl = computed(() => store.getters.getUserProfileImgUrl);
  const userId = computed(() => store.getters.getUserId).value;
  const isLoggedIn = computed(() => user.value && user.value.isLoggedIn);

  const logout = async () => {
    try {
      const response = await axios.post('/auth/logout');
      if (response.status === 200) {
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('userInfo');
        store.commit('logout');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const toggleLogin = () => {
    if (!isLoggedIn.value) {

      router.push('/auth/login');
    } else {
      logout()
    }
  };

</script>

<template>
  <div class="nav-container">
    <div class="logo-container">
      <img src="../assets/images/logo_big.svg" width="150" style="margin: 23px 0 8px 20px">
    </div>
    <div class="line"></div>

    <!-- 유저 프로필 이미지 -->
    <div class="img-container" style="width: 100%; margin: 50px 0 35px 0">
      <router-link :to="`/profile?userId=${userId}`">
        <div class="img-contents">
          <img v-if="userProfileImgUrl" :src="userProfileImgUrl" width="125"/>
          <img v-else src="../assets/images/basic_profile.svg" width="125" style="margin: 5px 0 0 5px"/>
        </div>
      </router-link>
    </div>

    <!-- 메뉴 리스트 -->
    <div class="menu-container">
      <div class="menu-contents">
        <router-link to="/planner" class="menu-lists" active-class="active">
          <font-awesome-icon icon="fa-regular fa-calendar" style="margin: 0 11px 0 18px" />
          <span>PLANNER</span>
        </router-link>

        <router-link to="/post" class="menu-lists" active-class="active">
          <font-awesome-icon icon="fa-solid fa-images" style="margin: 0 10px 0 15px" />
          <span>POST</span>
        </router-link>

        <router-link to="/message" class="menu-lists" active-class="active">
          <font-awesome-icon icon="fa-regular fa-envelope" style="margin: 0 10px 0 17px"/>
          <span>MESSAGE</span>
        </router-link>

        <router-link to="/feed" class="menu-lists" active-class="active">
          <font-awesome-icon icon="fa-solid fa-list" style="margin: 0 10px 0 17px" />
          <span>FEED</span>
        </router-link>

        <router-link to="/community" class="menu-lists" active-class="active">
          <font-awesome-icon icon="fa-solid fa-earth-americas" style="margin: 0 8px 0 18px" />
          <span>COMMUNITY</span>
        </router-link>

        <div>
          <label class="switch">
            <input type="checkbox" :checked="isLoggedIn"  @click.prevent="toggleLogin">
            <span class="slider"></span>
          </label>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
  .nav-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: scroll;

    width: 100%;
    height: 100%;
    border-radius: 20px 0 0 20px;
    border-right: 1px solid #1E1E1C;
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(20px);
    padding: 0;
    margin: 0;
  }

  .nav-container::-webkit-scrollbar {
    display: none;
  }

  .logo-container {
    width: 100%;
  }

  .menu-container {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }

  .menu-container::-webkit-scrollbar {
    display: none;
  }

  .menu-contents {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 15px;
  }

  .menu-lists {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 7px;

    width: 100%;
    height: 40px;
    border-radius: 7px;
    font-size: 20px;
    color: #1E1E1C;
    text-decoration: none;
  }

  .menu-lists.active {
    background-color: #007AFF;
    color: white;
    text-decoration: none;
  }

  .switch {
    margin: 75px 0 30px 16px;
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #AEAEB2;
    transition: .4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    //background-image: linear-gradient(180deg, #00E7F7 0%, #FB5160 0.01%, #ED2E4C 100%);
    background-color: #34C759;
  }


  input:checked + .slider:before {
    transform: translateX(25px);
  }
</style>