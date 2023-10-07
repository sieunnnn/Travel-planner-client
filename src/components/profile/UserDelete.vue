<script setup>

  import { ref } from 'vue';
  import ProfileHeader from "./ProfileHeader.vue";
  const showDeleteContainer = ref(false);

  function showDeleteDialog() {
        showDeleteContainer.value = true;
  }
</script>

<template>
  <ProfileHeader/>
  <div>
    <div class="title" style="top: 25px; position: relative;">회원 탈퇴</div>
    <div class="sub_title" style="top: 40px; position: relative;">회원 탈퇴를 하면 정보를 다시 복구할 수 없어요. <br> 정말 진행하시겠어요? 🫨</div>
    <div class="user_delete_button_container">
      <button @click="showDeleteDialog" class="blue_button">예</button>
      <router-link to="/profile"><button class="gray_button">아니요</button></router-link>
    </div>
    <div v-if="showDeleteContainer" class="user_delete_input_container">
      <div class="sub_title">회원 탈퇴를 진행하기 위해 비밀번호를 입력 해주세요.</div>
      <form class="edit_form">
        <input type="text" class="edit_input input">
        <button type="submit" class="blue_button">변경</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .user_delete_button_container {
    position: relative;
    top: 60px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  button {
    width: 120px;
    height: 38px;
    margin-right: 12px;
    font-size: 18px;
  }

  .user_delete_input_container {
    position: relative;
    top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .edit_form {
    position: relative;
    top: 15px;
  }
</style>