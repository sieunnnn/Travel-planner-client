<script setup>
  import SearchBox from "../components/common/SearchBox.vue";
  import { ref, computed, onMounted } from "vue";
  import axios from "axios";

  const feedData = ref([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/feed');
      feedData.value = response.data.content;
      console.log(response.data.content)

    } catch (error) {
      console.log("error: ", error);
    }
  }

  onMounted(fetchData);

  const currentMonth = computed(() => {
    const today = new Date();
    return today.getMonth() + 1;
  })

</script>

<template>
  <div class="feed-container">
    <div class="title">
      FEED
    </div>

    <!-- 검색 -->
    <div>
      <SearchBox style="position:fixed; top: 100px; z-index: 999"/>
    </div>

    <!-- 리스트 -->
    <div class="feed_planner_list_container">
      <div v-for="planner in feedData" :key="planner.plannerId" class="feed_planner_list">
        <div class="feed_profile">
          <img v-if="planner.hostUrl" :src="planner.hostUrl" width="40" alt="Profile Image" />
          <img v-else src="../assets/images/basic_profile.svg" width="40" alt="Default Image" />
        </div>
        <div class="feed_align">
          <div class="feed_title">{{ planner.planTitle }}</div>
          <div class="feed_date_container">
            <div class="feed_host_name">{{ planner.hostName}}</div>
            <div v-if="!planner.startDate && !planner.endDate" class="feed_date">
              | <span>{{ currentMonth }}</span> 월의 당일치기 여행
            </div>
            <div v-else class="feed_date">
              {{ planner.startDate }} - {{ planner.endDate }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .feed-container {
    width: 90%;
    height: 100%;
  }

  .feed_planner_list_container {
    position: fixed;
    overflow-y: scroll;
    margin-top: 200px;
    width: fit-content;
    height: 70%;
    bottom: 0
  }

  .feed_planner_list_container::-webkit-scrollbar {
    display: none;
  }

  .feed_planner_list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 750px;
    height: 70px;
    margin-bottom: 15px;

    border-radius: 15px;
    border: 1px solid #1E1E1C;
    background: rgba(255, 255, 255, 0.90);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10);
  }

  .feed_profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    margin: 0 20px;
    width: 40px;
    height: 40px;
    flex-shrink: 0;

    border-radius: 50%;
    border: 1px solid #1E1E1C;
  }

  .feed_profile img {
    margin: 2px 0 0 2px;
  }

  .feed_align {
    width: 100%;
    margin-right: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .feed_title {
    font-family: 'pre-bold', sans-serif;
    font-size: 24px;
    color: #1E1E1C;
  }

  .feed_date {
    font-family: 'pre-regular', sans-serif;
    font-size: 19px;
    color: #1E1E1C;
  }

  .feed_date span {
    font-family: 'pre-bold', sans-serif;
  }

  .feed_date_container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .feed_host_name {
    margin-right: 8px;
    padding: 1px 8px;
    color: white;
    font-family: 'pre-regular', sans-serif;

    border-radius: 8px;
    background: rgba(255, 255, 255, 0.22) linear-gradient(0deg, rgba(0, 0, 0, 0.56) 0%, rgba(0, 0, 0, 0.43) 90%);
    backdrop-filter: blur(32px);
  }
</style>