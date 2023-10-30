<script setup>
</script>

<template>
  <div class="chatting_container">
    <!-- 채팅 부분 -->
    <div class="chatting_content">
      <!-- id != 본인 -->
      <div class="other_chatting_bubble_container">
        <div class="img-contents" style="width: 40px; height: 40px; margin-right: 10px">
          <img v-if="userProfileImgUrl" :src="userProfileImgUrl" width="40"/>
          <img v-else src="../../assets/images/basic_profile.svg" width="42" style="margin: 0 1px 0 3px; background-color: white"/>
        </div>
        <div class="chat_bubble_other_content">
          <div class="chat_bubble_other">
            안녕
          </div>
        </div>
      </div>

      <!-- id == 본인 -->
      <div class="my_chatting_bubble_container">
        <div class="chat_bubble_my_content">
          <div class="chat_bubble_my">
            안녕
          </div>
        </div>
        <div class="img-contents" style="width: 40px; height: 40px; margin-left: 10px">
          <img v-if="userProfileImgUrl" :src="userProfileImgUrl" width="40"/>
          <img v-else src="../../assets/images/basic_profile.svg" width="42" style="margin: 0 1px 0 3px; background-color: white"/>
        </div>
      </div>

      <div class="other_chatting_bubble_container">
        <div class="img-contents" style="width: 40px; height: 40px; margin-right: 10px">
          <img v-if="userProfileImgUrl" :src="userProfileImgUrl" width="40"/>
          <img v-else src="../../assets/images/basic_profile.svg" width="42" style="margin: 0 1px 0 3px; background-color: white"/>
        </div>
        <div class="chat_bubble_other_content">
          <div class="chat_bubble_other">
            안녕
          </div>
        </div>
      </div>
    </div>

    <!-- 인풋 부분 -->
    <form class="chatting_input_container">
      <div class="chatting_input_content">
        <textarea type="text" class="input"></textarea>
        <button type="submit" class="blue_button">
          <font-awesome-icon :icon="['fas', 'paper-plane']" />
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
  .chatting_container {
    height: 400px;
  }

  .chatting_content {
    width: 100%;
    height: 310px;
    overflow-y: scroll;
  }

  .other_chatting_bubble_container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    margin-bottom: 13px;
  }

  .chat_bubble_other_content {
    width: 250px;
    height: auto;
    padding: 10px 20px;
    background-color: #007AFF;
    border-radius: 15px 15px 15px 0;
    margin-bottom: 10px;
    //border: 1px solid #000;
  }

  .chat_bubble_other {
    max-height: 90px;
    overflow-y: scroll;
    font-family: 'pre-medium', sans-serif;
    font-size: 16px;
    color: white;
    word-wrap:break-word;
  }

  .my_chatting_bubble_container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 13px;
  }

  .chat_bubble_my_content {
    width: 250px;
    height: auto;
    padding: 10px 20px;
    background-color: #AEAEB2;
    margin-bottom: 10px;
    border-radius: 15px 15px 0 15px;
  //border: 1px solid #000;
  }

  .chat_bubble_my {
    max-height: 90px;
    overflow-y: scroll;
    font-family: 'pre-medium', sans-serif;
    font-size: 16px;
    color: white;
    word-wrap:break-word;
  }

  .chatting_input_container {
    width: 100%;
    height: 90px;
    border-top: #1E1E1C 1px solid;
    overflow-y: scroll;
    padding-top: 25px;
  }

  .chatting_input_content {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .input {
    width: 85%;
    height: 60px;
    margin: 0 10px 0 3px;

    font-family: 'pre-medium', sans-serif;
    font-size: 16px;
    padding: 10px;
  }

  .blue_button {
    padding: 0 15px 0 15px;
  }
</style>