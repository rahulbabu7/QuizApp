<script setup>
import { defineProps } from 'vue';
const {questionStatus} = defineProps(['questionStatus'])
</script>

<template>
    <header>
    <h1>Question {{ questionStatus }}  </h1>
    <div class="bar">
      <div class="completion"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  margin: top 20px;
}
h1 {
  font-size: 30px;
}
.bar {
  width: 300px;
  height: 50px;
  border: 3px solid rebeccapurple;
}
.completion {
  height: 100%;
  width: 0%;
  background-color: rebeccapurple;
}
</style>