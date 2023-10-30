<script setup>
import BackButton from "../../components/common/BackButton.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import ModalComponent from "../../components/common/Modal.vue";
import GroupMemberSearch from "../../components/planner/GroupMemberSearch.vue";
import GroupMemberEdit from "../../components/planner/GroupMemberEdit.vue";
import Chatting from "../../components/planner/Chatting.vue";

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
          <li data-bs-toggle="modal" data-bs-target="#chatModal" @click="openModal('chatModal')">💬<span>그룹 채팅</span></li>
          <li data-bs-toggle="modal" data-bs-target="#groupMemberEditModal" @click="openModal('groupMemberEditModal')">⚙️<span>그룹 멤버 관리</span></li>
          <li>🗽<span>여행지 추천</span></li>
          <li>💁‍♀️<span>도움말</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 그룹멤버 추가 / 그룹멤버 리스트 -->
  <div class="planner_group_member_container">
    <div class="img-contents"
         style="width: 60px; height: 60px; margin-right: 10px; background-color: rgba(0, 0, 0, 0.25);"
         data-bs-toggle="modal" data-bs-target="#groupMemberAddModal" @click="openModal('groupMemberAddModal')">
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
        <div>
          2023. 11. 20
        </div>
        <div class="btn-group dropend planner_icons">
          <button type="button" class="dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" style="font-size: 20px; color: white"/>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li data-bs-toggle="modal" data-bs-target="#dateEditModal" @click="openModal('dateEditModal')">📆️<span>날짜 수정</span></li>
            <li data-bs-toggle="modal" data-bs-target="#dateDeleteModal" @click="openModal('dateDeleteModal')">🗑️️<span>날짜 삭제</span></li>
            <li data-bs-toggle="modal" data-bs-target="#plannerAddModal" @click="openModal('plannerAddModal')">🆕️<span>플래너 추가</span></li>
          </ul>
        </div>
      </div>
      <div>
      </div>
    </div>
    <!-- 플래너 리스트 추가 버튼 -->
    <div class="planner_list_content">
      <button class="add_box" data-bs-toggle="modal" data-bs-target="#plannerListAddModal" @click="openModal('plannerListAddModal')">
        <font-awesome-icon icon="fa-regular fa-calendar-plus"/>
      </button>
    </div>
  </div>

  <!-- 그룹 멤버 추가 모달 -->
  <ModalComponent :modalId="'groupMemberAddModal'">
    <template #title>
      그룹 멤버 모달
    </template>
    <template #body>
      <GroupMemberSearch />
    </template>
  </ModalComponent>

  <!-- 날짜 추가 모달 -->
  <ModalComponent :modalId="'plannerListAddModal'">
    <template #title>
      ✅ 여행 날짜 선택
    </template>
    <template #body>
      <div style="display: flex; flex-direction: row; align-items: center; margin-top: 15px">
        <input type="date" class="input" style="padding: 0 10px; margin-right: 10px; width: 70%">
        <button type="submit" class="blue_button" style="height: 36px; font-size: 18px; padding: 0 10px">전송</button>
      </div>
    </template>
  </ModalComponent>

  <!-- 날짜 수정 모달 -->
  <ModalComponent :modalId="'dateEditModal'">
    <template #title>
      여행 날짜 수정
    </template>
    <template #body>
      <div style="display: flex; flex-direction: row; align-items: center; margin-top: 15px">
        <input type="date" class="input" style="padding: 0 10px; margin-right: 10px; width: 70%">
        <button type="submit" class="blue_button" style="height: 36px; font-size: 18px; padding: 0 10px">전송</button>
      </div>
    </template>
  </ModalComponent>

  <!-- 날짜 alert -->

  <!-- 플래너 추가 모달 -->
  <ModalComponent :modalId="'plannerAddModal'">
    <template #title>
      플래너 추가
    </template>
    <template #body>
      <div style="display: flex; flex-direction: column">
        <div>
          <input type="checkbox" style="width: 16px; height: 14px; margin-right: 5px">
          <span style="font-size: 18px; font-family: 'pre-medium', sans-serif">비공개</span>
        </div>
        <div style="margin-top: 10px">
          <div style="font-size: 20px; font-family: 'pre-bold', sans-serif">플래너 제목</div>
          <input type="text" class="input_small">
        </div>
        <div style="margin-top: 10px">
          <div style="font-size: 20px; font-family: 'pre-bold', sans-serif">시간</div>
          <input type="time" class="input_small">
        </div>
        <div style="margin-top: 10px">
          <div style="font-size: 20px; font-family: 'pre-bold', sans-serif">카테고리</div>
          <select class="input_small"></select>
        </div>
        <div style="margin-top: 10px">
          <div style="font-size: 20px; font-family: 'pre-bold', sans-serif">예산</div>
          <input type="text" class="input_small">
        </div>
        <div style="margin-top: 10px">
          <div style="font-size: 20px; font-family: 'pre-bold', sans-serif">일정 주소</div>
          <input type="text" class="input_small">
        </div>
        <div style="margin: 10px 0 20px 0">
          <div style="font-size: 20px; font-family: 'pre-bold', sans-serif">일정 내용</div>
          <textarea class="input_small" style="height: 100px; margin-top: 5px"></textarea>
        </div>
        <button type="submit" class="blue_button" style="width: 90%">전송</button>
      </div>
    </template>
  </ModalComponent>

  <!-- 플래너 수정 모달 -->
  <ModalComponent :modalId="'plannerAddModal'">
    <template #title>
      플래너 수정
    </template>
    <template #body>
      <div style="display: flex; flex-direction: column">
        <div>
          <input type="checkbox" style="width: 16px; height: 14px; margin-right: 5px">
          <span style="font-size: 18px; font-family: 'pre-medium', sans-serif">비공개</span>
        </div>
        <div style="margin-top: 10px">
          <div style="font-size: 20px; font-family: 'pre-bold', sans-serif">플래너 제목</div>
          <input type="text" class="input_small">
        </div>
        <div style="margin-top: 10px">
          <div style="font-size: 20px; font-family: 'pre-bold', sans-serif">시간</div>
          <input type="time" class="input_small">
        </div>
        <div style="margin-top: 10px">
          <div style="font-size: 20px; font-family: 'pre-bold', sans-serif">카테고리</div>
          <select class="input_small"></select>
        </div>
        <div style="margin-top: 10px">
          <div style="font-size: 20px; font-family: 'pre-bold', sans-serif">예산</div>
          <input type="text" class="input_small">
        </div>
        <div style="margin-top: 10px">
          <div style="font-size: 20px; font-family: 'pre-bold', sans-serif">일정 주소</div>
          <input type="text" class="input_small">
        </div>
        <div style="margin: 10px 0 20px 0">
          <div style="font-size: 20px; font-family: 'pre-bold', sans-serif">일정 내용</div>
          <textarea class="input_small" style="height: 100px; margin-top: 5px"></textarea>
        </div>
        <button type="submit" class="blue_button" style="width: 90%">전송</button>
      </div>
    </template>
  </ModalComponent>

  <!-- 플래너 삭제 모달 -->
  <ModalComponent :modalId="'plannerAddModal'">
    <template #title>
      첫 번째 모달의 제목
    </template>
    <template #body>
      첫 번째 모달의 본문 내용...
    </template>
  </ModalComponent>

  <!-- 채팅 모달 -->
  <ModalComponent :modalId="'chatModal'" class="chatting_modal">
    <template #title>
      <span> </span>
    </template>
    <template #body>
      <Chatting/>
    </template>
  </ModalComponent>

  <!-- 그룹멤버 관리 모달 -->
  <ModalComponent :modalId="'groupMemberEditModal'">
    <template #title>
      그룹 멤버 관리
    </template>
    <template #body>
      <GroupMemberEdit/>
    </template>
  </ModalComponent>
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

   border-radius: 0 20px 0 0;
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
   box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.10);
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
   width: 10px;
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
   width: 10px;
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
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 0 15px 0 30px;

   width: 100%;
   height: 55px;
   border-radius: 15px;
   border: 1px solid #1E1E1C;
   background: #0A84FF;

   font-family: 'pre-bold', sans-serif;
   font-size: 24px;
   color: white;
 }

 .add_box {
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;

   width: 100%;
   height: 55px;
   border-radius: 13px;
   border: 1px solid #1E1E1C;
   background: rgba(255, 255, 255, 0.5);

   font-size: 24px;
   color: #6C6C70;
 }
</style>