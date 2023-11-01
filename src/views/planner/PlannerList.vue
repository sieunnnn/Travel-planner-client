<script setup>
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const store = useStore();

// access token, 유저 프로필, userId 꺼내오기
const accessToken = sessionStorage.getItem("accessToken");
const userProfileImgUrl = computed(() => store.getters.getUserProfileImgUrl).value;
const userId = computed(() => store.getters.getUserId).value;

// plannerList api 연결
const plannerList = ref([]);

const getPlannerList = async () => {
  try {
    const response = await axios.get('/planner', {
      headers: {
        'Authorization': `${accessToken}`
      },
      params: {
        userId: userId
      }
    })

    if (response.status === 200) {
       plannerList.value = response.data.content;
    }
  } catch (e) {
    console.log(e)
  }
}

onMounted(getPlannerList);

// 플래너 수정 api 연결
const editingStates = ref({});
const toggleEditForm = (plannerId) => {
  editingStates.value[plannerId] = !editingStates.value[plannerId];
};

const data = ref({
  plannerId: null,
  planTitle: '',
  isPrivate: false,
});

const editPlannerTitle = async (planner, formData) => {
  try {
    const requestBody = {
      plannerId: planner.plannerId,
      planTitle: formData.planTitle,
      isPrivate: formData.isPrivate,
    };

    const response = await axios.patch('/planner', requestBody, {
      headers: {
        'Authorization': `${accessToken}`
      },
    });

    if (response.status === 200) {
      editingStates.value[planner.plannerId] = !editingStates.value[planner.plannerId];
      planner.isPrivate = formData.isPrivate;
      planner.planTitle = formData.planTitle;

      data.isPrivate = false;
      data.planTitle = '';
    }
  } catch (e) {
    console.error(e);
  }
}

// 플래너 삭제
const deletePlanner = async (plannerId) => {
  try {
    const requestBody = {
      plannerId: plannerId,
    };

    const response = await axios.delete('/planner', {
      headers: {
        'Authorization': `${accessToken}`
      },
      data: requestBody
    });

    if (response.status === 200) {
      plannerList.value = plannerList.value.filter(planner => planner.plannerId !== plannerId);
    }
  } catch (e) {
    console.log(e)
  }
}

// 플래너 생성 Api 연결
const createState = ref(false);
const toggleCreateForm = () => {
  createState.value = !createState.value;
};

const createPlanner = async (formData) => {
  try {
    const requestBody = {
      planTitle: formData.planTitle,
      isPrivate: formData.isPrivate,
    };

    const response = await axios.post('/planner', requestBody, {
      headers: {
        'Authorization': `${accessToken}`
      },
    });

    if (response.status === 200) {
      plannerList.value.unshift(response.data);
      createState.value = false;
      data.isPrivate = false;
      data.planTitle = '';
    }
  } catch (e) {
    console.error(e);
  }
}
</script>

<template>
  <div class="planner_list_container">
    <div class="planner_list_header_container">
      <div style="margin: 50px 0 35px 0">
        <router-link :to="`/profile?userId=${userId}`">
          <div class="img-contents">
            <img v-if="userProfileImgUrl" :src="userProfileImgUrl" width="125" style="background-color: white"/>
            <img v-else src="../../assets/images/basic_profile.svg" width="125" style="margin: 5px 0 0 5px; background-color: white"/>
          </div>
        </router-link>
      </div>
    </div>
    <div class="planner_list_content">
      <div class="planner_create_container">
        <span v-if="!createState" @click="toggleCreateForm"><font-awesome-icon icon="fa-regular fa-calendar-plus"/> 일정 추가하기</span>
        <form v-if="createState">
          <input v-model="data.isPrivate" type="checkbox" style="width: 16px; height: 14px; margin-right: 5px"><label style="font-size: 18px">비공개</label><br>
          <input v-model="data.planTitle" type="text" class="input">
          <button @click="createPlanner(data)" type="button" class="blue_button" style="width: 50px; font-size: 17px;">등록</button>
        </form>
      </div>
      <router-link :to="`/planner/${planner.plannerId}`" v-for ="planner in plannerList" :key="planner.plannerId" class="planner_container">
        <div class="planner_container_header">
          <div>
            <font-awesome-icon v-if="planner.isPrivate" icon="fa-solid fa-lock" style="margin-right: 10px"/>
            <font-awesome-icon v-else-if="!planner.isPrivate" icon="fa-solid fa-lock-open" style="margin-right: 10px"/>
            <font-awesome-icon v-if="planner.groupMembers && planner.groupMembers.size > 1" icon="fa-solid fa-users"/>
            <font-awesome-icon v-else icon="fa-solid fa-user"  />
          </div>
          <div>
            <div class="btn-group dropend">
              <button type="button" class="dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
              </button>
              <ul class="dropdown-menu">
                <li @click="toggleEditForm(planner.plannerId)">플래너 제목 수정</li>
                <li @click="deletePlanner(planner.plannerId)">플래너 삭제</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div v-if="!editingStates[planner.plannerId]" class="planner_title"  style="margin: 20px 0 5px 0;">
            {{planner.planTitle}}
          </div>
          <form v-if="editingStates[planner.plannerId]" style="margin: 5px 0 5px 0">
            <input v-model="data.isPrivate" type="checkbox" style="width: 16px; height: 14px; margin-right: 5px"><label style="font-size: 18px">비공개</label><br>
            <input v-model="data.planTitle" type="text" class="input" style="margin: 2px 10px 0 0">
            <button @click="editPlannerTitle(planner, data)" type="button" class="blue_button" style="width: 50px; font-size: 16px;">수정</button>
          </form>
        </div>
        <div class="group_member_container">
          <div v-for="(member, index) in planner.groupMembers && planner.groupMembers.slice(0, 5)" :key="index" class="group_member_img">
            <img v-if="member.profileImageUrl" :src="member.profileImageUrl" width="40"/>
            <img v-else src="../../assets/images/basic_profile.svg" width="40" style="margin:2px 0 0 2px;"/>
          </div>
        </div>
      </router-link>
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
   justify-content: flex-start;
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
   width: 310px;
   height: 190px;
   margin-left: 10px;
   flex-shrink: 0;
   padding: 15px 20px;
   text-overflow : ellipsis;
   text-decoration: none;
 }

 .planner_container:visited {
   color: #1E1E1C;
 }

 .planner_create_container {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   border-radius: 15px;
   border: 1px solid #1E1E1C;
   background: rgba(255, 255, 255, 0.60);
   box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10);

   width: 310px;
   height: 190px;
   margin-left: 10px;
   flex-shrink: 0;
   padding:0 20px;
   text-overflow : ellipsis;

   font-size: 24px;
   font-style: italic;
   color: #636366;
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
   padding: 0;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;

   width: 40px;
   height: 40px;

   border-radius: 40px;

   border: 1px solid #1E1E1C;
   box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.10);
   overflow: hidden;
 }

 .input {
   margin: 2px 10px 0 0;
   width: 200px;
   height: 27px;
   font-size: 18px;
   padding:10px;
 }
</style>