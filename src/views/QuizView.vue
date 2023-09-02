<script setup>

import Question from '../components/Question.vue' ;
import QuizHeader from '../components/QuizHeader.vue';
import { useRoute} from 'vue-router';
import { ref, watch } from 'vue';
const route = useRoute();
import quizes from '../data/Quiz.json'
// console.log(route.params.id) returns the id of the router
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q => q.id===quizId));  //gives an object based on the subject
const currentQuesIndex = ref(0);
const quesStatus = ref(`${currentQuesIndex.value +1} / ${quiz.questions.length}`)

//whenever the currentQuestion index changes the question status also needs to be changes
watch(currentQuesIndex,()=>{
  quesStatus.value++;
})
</script>

<template>
  <QuizHeader :questionStatus = "quesStatus"/>
  <!-- it is not a state at now -->
  <main>
    <Question :question="quiz.questions[currentQuesIndex]"/> 
    <!--  here we create a prop question which shows the quiz of our subject  with the question to be displayed  -->
    <button @click="currentQuesIndex++"> NExt Ques</button>
  </main>
</template>

<style scoped></style>
