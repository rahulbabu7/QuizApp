<script setup>

import Question from '../components/Question.vue' ;
import QuizHeader from '../components/QuizHeader.vue';
import Result from '../components/Result.vue'
import { useRoute} from 'vue-router';
import { ref, computed } from 'vue';
const route = useRoute();
import quizes from '../data/Quiz.json'
// console.log(route.params.id) returns the id of the router
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q => q.id===quizId));  //gives an object based on the subject
const currentQuesIndex = ref(0);
const noOfCorrectAnswers = ref(0);
const showResults = ref(false)
// const quesStatus = ref(`${currentQuesIndex.value +1} / ${quiz.questions.length}`)


// // watch(currentQuesIndex, ()=>{

// // quesStatus.value = `${currentQuesIndex.value +1} / ${quiz.questions.length}`

// // })

// //whenever the currentQuestion index changes the question status also needs to be changes
// watch(()=>currentQuesIndex.value, ()=>{
//   quesStatus.value = `${currentQuesIndex.value +1} / ${quiz.questions.length}`

// })


// The key differences:

// The first one watches the currentQuesIndex ref directly. This will trigger the callback on any change to currentQuesIndex, even if the value hasn't changed.
//     The second one watches the result of currentQuesIndex.value. This only triggers when the value changes.
//     Watching the result function is better for performance - it will only run when needed.

// So the second approach is correct because:

//     It watches the unwrapped value of currentQuesIndex
//     This avoids unnecessary runs of the callback
//     More efficient since it only runs when the value changes

// In general, when watching refs, you want to watch the result of .value rather than the ref itself.

// The second example is the better, more performant way to watch a ref value change.

/*
 use compute for much more efficient way than using watch
*/
const quesStatus = computed(()=>{
  return `${currentQuesIndex.value} / ${quiz.questions.length}`
})
const barpercentage = computed(()=>`${currentQuesIndex.value / quiz.questions.length *100}%`)

const onSelectedOption  =(isCorrect)=>{
if(isCorrect)
{
 
  noOfCorrectAnswers.value++;
}
if(quiz.questions.length -1 === currentQuesIndex.value)
{
  // -1 is used because length starts from 1 and index starts form 0
  showResults.value = true
}
currentQuesIndex.value ++; //incrementing to next ques
}
</script>

<template>
  <QuizHeader 
  :questionStatus = "quesStatus" 
  :barpercentage = barpercentage
  />
  <!-- it is not a state at now -->
  <main>
    <Question 
    v-if="!showResults"
    :question="quiz.questions[currentQuesIndex]"
    @selectOption="onSelectedOption"
    /> 
    <!--  here we create a prop question which shows the quiz of our subject  with the question to be displayed  -->
  <Result 
  v-else
  :quizQuestionLength = "quiz.questions.length"
  :noOfCorrectAns = "noOfCorrectAnswers"
  />
  </main>
</template>

<style scoped>

</style>
