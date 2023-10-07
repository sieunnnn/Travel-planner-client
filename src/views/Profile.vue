<script setup>

</script>

<template>
  <div class="profile_container">
    <div class="profile_content_container box">
      <router-view/>
    </div>
    <div class="profile_button_container box">
      <router-link to="/profile/update" style="margin-top: 10px">
        <img src="../assets/images/profile_edit_button.svg" width="95"/>
      </router-link>
      <router-link to="/profile/delete">
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