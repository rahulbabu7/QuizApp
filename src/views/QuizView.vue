<script setup>

import Question from '../components/Question.vue' ;
import QuizHeader from '../components/QuizHeader.vue';
import { useRoute} from 'vue-router';
import { ref } from 'vue';
const route = useRoute();
// console.log(route.params.id) returns the id of the router
const quizId = parseInt(route.params.id);
const currentQuesIndex = ref(0);
</script>

<template>
  <QuizHeader />
  <main>
    <Question />
  </main>
</template>

<style scoped></style>
