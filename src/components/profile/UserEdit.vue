<script setup>

import ProfileHeader from "./ProfileHeader.vue";
</script>

<template>
  <ProfileHeader/>
  <div>
    <div class="title" style="top: 25px; position: relative;">회원 정보 수정</div>
    <div class="sub_title" style="top: 40px; position: relative;">프로필 이미지 변경</div>
    <form class="input file_form">
      <input type="file">
    </form>
    <div class="sub_title" style="top: 70px; position: relative;">닉네임 변경</div>
    <form class="edit_form" style="top: 75px; position: relative;">
      <input type="text" class="edit_input input">
      <button type="submit" class="blue_button">변경</button>
    </form>
    <div>
      <div class="sub_title" style="top: 100px; position: relative;">비밀번호 변경</div>
      <form class="edit_form" style="top: 105px; position: relative;">
        <input type="password" class="edit_input input">
        <button type="submit" class="blue_button">변경</button>
      </form>
      <p style="top: 118px; position: relative; color: #D70015">* 비밀번호 변경을 위해 현재 비밀번호를 입력해주세요.</p>
    </div>
    <div>
      <div class="sub_title" style="top: 100px; position: relative;">변경하실 비밀번호를 입력해주세요.</div>
      <form class="edit_form" style="top: 105px; position: relative;">
        <input type="password" class="edit_input input">
        <button type="submit" class="blue_button">변경</button>
      </form>
      <p style="top: 118px; position: relative; color: #D70015">* 비밀번호는 8 ~ 15 자리 이하, 영문, 숫자, 특수문자를 조합하여 만들어주세요.</p>
    </div>
  </div>
</template>

<style scoped>

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