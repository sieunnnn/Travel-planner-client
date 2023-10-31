<script setup>
</script>

<template>
  <div>
    <div class="user-container">
      <div class="user-content">
        <div class="img-contents" style="width: 40px; height: 40px; margin-right: 20px">
          <img src="../../assets/images/basic_profile.svg" width="42" style="margin-left: 2px"/>
        </div>
        <div class="user-title">
          김시은
        </div>
      </div>
      <button class="red_button"> 삭제 </button>
    </div>
    <div class="user-container">
      <div class="user-content">
        <div class="img-contents" style="width: 40px; height: 40px; margin-right: 20px">
          <img src="../../assets/images/basic_profile.svg" width="42" style="margin-left: 2px"/>
        </div>
        <div class="user-title">
          김시은
        </div>
      </div>
      <button class="red_button"> 삭제 </button>
    </div>
  </div>
</template>

<style scoped>

.user-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  border-bottom: #1E1E1C 1px solid;
  padding: 20px 0;
}

.user-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.red_button {
  font-size: 16px;
  padding: 3px 10px;
}

.user-title {
  font-family: 'pre-medium', sans-serif;
  font-size: 24px;
}
</style>