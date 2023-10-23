<script setup>
import BackButton from "../../components/common/BackButton.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import ModalComponent from "../../components/common/Modal.vue";

const openModal = (modalId) => {
  const modalElement = document.getElementById(modalId);
  const modalInstance = new bootstrap.Modal(modalElement);
  modalInstance.show();
};

</script>

<template>
<div class="planner_detail_container">
  <!-- 헤더 -->
  <div class="planner_detail_header">
    <div class="planner_icons">
      <BackButton style="font-size: 22px;"/>
    </div>
    <div class="planner_title">
      신나는 제주 여행
    </div>
    <div class="planner_icons" style="margin-top: 4px">
      <div class="btn-group dropdown">
        <button type="button" class="dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <font-awesome-icon icon="fa-solid fa-bars" class="icons" style="margin-right: 5px"/>
        </button>
        <ul class="dropdown-menu">
          <li>🧾<span>가계부</span></li>
          <li>💬<span>그룹 채팅</span></li>
          <li>⚙️<span>그룹 멤버 관리</span></li>
          <li>🗽<span>여행지 추천</span></li>
          <li>💁‍♀️<span>도움말</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 그룹멤버 추가 / 그룹멤버 리스트 -->
  <div class="planner_group_member_container">
    <div class="img-contents" style="width: 60px; height: 60px; margin-right: 10px; background-color: rgba(0, 0, 0, 0.25);">
      <font-awesome-icon icon="fa-solid fa-user-plus" style="font-size: 25px; margin-left: 8px; color: white" />
    </div>
    <div class="group_member_list">
      <div class="img-contents" style="width: 60px; height: 60px; margin-right: 10px">
        <img v-if="userProfileImgUrl" :src="userProfileImgUrl" width="60"/>
        <img v-else src="../../assets/images/basic_profile.svg" width="62" style="margin: 4px 0 0 3px; background-color: white"/>
      </div>
      <div class="img-contents" style="width: 60px; height: 60px">
        <img v-if="userProfileImgUrl" :src="userProfileImgUrl" width="60"/>
        <img v-else src="../../assets/images/basic_profile.svg" width="62" style="margin: 4px 0 0 3px; background-color: white"/>
      </div>
    </div>
    <div>
    </div>
  </div>

  <!-- 플래너 리스트 -->
  <div class="planner_list_container">
    <!-- 반복되는 요소 -->
    <div class="planner_list_content">
      <div class="date_box" style="margin-bottom: 20px">
      </div>
      <button class="add_box" data-bs-toggle="modal" data-bs-target="#plannerAddModal" @click="openModal('plannerAddModal')">
      </button>
      <ModalComponent :modalId="'plannerAddModal'">
        <template #title>
          첫 번째 모달의 제목
        </template>
        <template #body>
          첫 번째 모달의 본문 내용...
        </template>
      </ModalComponent>
      <div>
      </div>
    </div>
    <div class="planner_list_content">
      <div class="date_box" style="margin-bottom: 20px">
      </div>
      <div class="add_box">
      </div>
      <div>
      </div>
    </div>
    <div class="planner_list_content">
      <div class="date_box" style="margin-bottom: 20px">
      </div>
      <div class="add_box">
      </div>
      <div>
      </div>
    </div>
    <!-- 플래너 리스트 추가 버튼 -->
    <div class="planner_list_content">
      <div class="add_box">
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
 .planner_detail_container {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
   padding: 0;
   width: 100%;
   height: 100%;
 }

 .planner_detail_header {
   width: 100%;
   height: 44px;
   padding: 0 20px;

   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;

   border-radius: 0px 20px 0px 0px;
   border-bottom: 1px solid #1E1E1C;
   background: rgba(255, 255, 255, 0.80);
   backdrop-filter: blur(20px);
 }

 .planner_icons {
   display: flex;
   flex-direction: row;
   align-items: center;
 }

 .planner_icons button {
   border: 0;
   background-color: transparent;
   color: #6C6C70;
 }

 .icons {
   font-size: 20px;
   color: #6C6C70;
   margin-right: 16px;
 }

 .planner_title {
   font-family: 'pre-bold', sans-serif;
   font-size: 20px;
   color: #1E1E1C;
 }

 .dropdown-menu {
   padding: 10px;
   font-family: 'pre-medium', sans-serif;
   width: 220px;
   border: #1E1E1C 1px solid;
   box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10);
 }

 .dropdown-menu span {
   margin-left: 8px;
 }

 .dropdown-menu li {
   display: flex;
   align-items: center;
   justify-content: flex-start;
   border-radius: 5px;
   padding: 0 10px;
   margin: 5px 0;
   height: 30px;
 }

 .dropdown-menu li:hover {
   background-color: #007AFF;
   color: white;
 }

 .planner_group_member_container {
   display: flex;
   flex-direction: row;
   align-items: center;
   padding: 30px 40px;
   width: 100%;
 }

 .group_member_list {
   display: flex;
   flex-direction: row;
   align-items: center;
 }

 .planner_list_container {
   width: 100%;
   height: 100%;

   padding: 0 40px;
   overflow: scroll;
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: flex-start;
 }

 .planner_list_container::-webkit-scrollbar {
   width: 15px;
 }

 .planner_list_container::-webkit-scrollbar-track {
   display: none;
 }

 .planner_list_container::-webkit-scrollbar-thumb {
   border-radius: 100px;
   background-color: #AEAEB2;
 }

 .planner_list_container::-webkit-scrollbar-corner {
   display: none;
 }

 .planner_list_content {
   width: 310px;
   height: 100%;
   overflow-y: scroll;
   padding:10px 0;
   margin-right: 20px;
   flex-shrink: 0;
 }

 .planner_list_content::-webkit-scrollbar {
   width: 15px;
 }

 .planner_list_content::-webkit-scrollbar-track {
   display: none;
 }

 .planner_list_content::-webkit-scrollbar-thumb {
   border-radius: 100px;
   background-color: #AEAEB2;
 }

 .planner_list_content::-webkit-scrollbar-corner {
   display: none;
 }

 .date_box {
   width: 100%;
   height: 55px;
   border-radius: 15px;
   border: 1px solid #1E1E1C;
   background: #0A84FF;
 }

 .add_box {
   width: 100%;
   height: 55px;
   border-radius: 13px;
   border: 1px solid #1E1E1C;
   background: rgba(255, 255, 255, 0.5);
 }
</style>