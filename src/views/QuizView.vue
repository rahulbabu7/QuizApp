<script setup>

import Question from '../components/Question.vue' 
</script>
<template>
  <header>
    <h1>Question 1/3</h1>
    <div class="bar">
      <div class="completion"></div>
    </div>
  </header>
  <main>
<Question />
  </main>
</template>
<style>
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
