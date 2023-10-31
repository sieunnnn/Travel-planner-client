<script setup>
import { ref, defineProps } from 'vue';
import CloseButton from "./CloseButton.vue";

const props = defineProps(['modalId']);
</script>

<template>
  <div :id="modalId" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content" >
        <div class="modal-header">
          <slot name="title"></slot>
          <CloseButton data-bs-dismiss="modal" aria-label="Close"></CloseButton>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
<!--          <button type="button" class="btn btn-secondary gray_button" data-bs-dismiss="modal">닫기</button>-->
<!--          <button type="button" class="btn btn-primary blue_button">전송</button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-content {
  border: #1E1E1C solid 1px;
  border-radius: 15px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.20);
}

 .modal-content {
   padding: 15px;
 }

 .modal-header {
   border-bottom: #D8D8DC solid 1px;
   font-family: 'pre-bold', sans-serif;
   font-size: 30px;
 }

 .modal-body {
   font-family: 'pre-light', sans-serif;
   font-size: 22px;
 }

 .modal-footer {
   border-top: none;
 }
</style>