<script setup>

</script>

<template>
  <div class="planner_list_container">
    <div class="planner_list_header_container">
      <div style="margin: 50px 0 35px 0">
        <router-link :to="`/profile?userId=${userId}`">
          <div class="img-contents">
            <img v-if="userProfileImgUrl" :src="userProfileImgUrl" width="125"/>
            <img v-else src="../../assets/images/basic_profile.svg" width="125" style="margin: 5px 0 0 5px; background-color: white"/>
          </div>
        </router-link>
      </div>
    </div>
    <div class="planner_list_content">
      <div class="planner_container">
        <div class="planner_container_header">
          <div>
            <font-awesome-icon icon="fa-solid fa-lock" style="margin-right: 10px"/>
            <font-awesome-icon icon="fa-solid fa-lock-open" style="margin-right: 10px"/>
            <font-awesome-icon icon="fa-solid fa-user" />
            <font-awesome-icon icon="fa-solid fa-users" />
          </div>
          <div>
            <div class="btn-group dropend">
              <button type="button" class="dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
              </button>
              <ul class="dropdown-menu">
                <li>플래너 제목 수정</li>
                <li>플래너 삭제</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div class="planner_title"  style="margin: 20px 0 5px 0;">
            신나는 제주 여행 유후
          </div>
<!--          <form style="margin: 5px 0 5px 0">-->
<!--            <input type="checkbox" style="width: 16px; height: 14px; margin-right: 5px"><label style="font-size: 18px">비공개</label><br>-->
<!--            <input type="text" class="input" style="margin: 2px 10px 0 0">-->
<!--            <button type="submit" class="blue_button" style="width: 50px; font-size: 16px;">수정</button>-->
<!--          </form>-->
        </div>
        <div class="group_member_container">
          <div class="group_member_img">
          </div>
          <div class="group_member_img">
          </div>
          <div class="group_member_img">
          </div>
          <div class="group_member_img">
          </div>
          <div class="group_member_img">
          </div>
        </div>
      </div>
      <div class="planner_container">
      </div>
      <div class="planner_container">
      </div>
    </div>
  </div>
</template>

<style scoped>
 .planner_list_container {
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
   width: 90%;
   height: 100%;
 }

 .planner_list_header_container {
  display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
   width: 100%;
 }

 .planner_list_content {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: flex-start;
   width: 100%;
   height: 100%;
   overflow-y: scroll;
   flex-wrap: wrap;
 }

 .planner_list_content::-webkit-scrollbar {
   display: none;
 }

 .planner_container {
   border-radius: 15px;
   border: 1px solid #1E1E1C;
   background: rgba(255, 255, 255, 0.90);
   box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10);
   width: 30%;
   height: 190px;
   flex-shrink: 0;
   padding: 15px 20px;
   text-overflow : ellipsis;
 }

 .planner_container_header {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-content: center;

   font-size: 18px;
   color: #6C6C70;
 }

 .planner_container_header button {
   border: 0;
   background-color: transparent;
   color: #6C6C70;
 }

 .dropdown-menu {
   padding: 10px;
   font-family: 'pre-medium', sans-serif;
   width: 100px;
   border: #1E1E1C 1px solid;
   box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10);
 }

 .dropdown-menu li {
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 5px;
   margin: 5px 0;
   height: 30px;
 }

 .dropdown-menu li:hover {
   background-color: #007AFF;
   color: white;
 }

 .planner_title {
   font-size: 28px;
   font-family: 'pre-bold', sans-serif;
   overflow:hidden;
   white-space:nowrap;
   text-overflow:ellipsis
 }

 .group_member_container {
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
 }

 .group_member_img {
   margin: 10px 5px 0 0;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   width: 40px;
   height: 40px;
   flex-shrink: 0;
   border-radius: 40px;
   border: 1px solid #1E1E1C;
   box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.10);
 }
</style>