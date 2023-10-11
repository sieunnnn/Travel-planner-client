<script setup>
// import { watchEffect } from 'vue';

const props = defineProps({
  profileImgUrl: String,
  // email: String,
  userNickname: String
});

// watchEffect(() => {
//   console.log('profileImgUrl:', props.profileImgUrl);
//   console.log('email:', props.email);
//   console.log('userNickname:', props.userNickname);
// });
</script>

<template>
  <div class="user_detail_container">
    <div class="user_detail_content">
      <div class="img-container">
        <div class="img-contents">
          <img v-if="profileImgUrl" :src="profileImgUrl" width="125"/>
          <img v-else src="../../assets/images/basic_profile.svg" width="125" style="margin: 5px 0 0 5px"/>
        </div>
      </div>
      <div class="sub_title_200" style="margin-left: 10px">
        {{ props.userNickname }}
      </div>
    </div>
  </div>
</template>

<style scoped>
  .user_detail_container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .user_detail_content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 25px;
  }
</style>