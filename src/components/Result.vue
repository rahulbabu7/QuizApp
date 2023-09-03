<script setup>

import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
const {quizQuestionLength,noOfCorrectAns} = defineProps(['quizQuestionLength','noOfCorrectAns'])
</script>

<template>

<section>
    <p>
        Your Results...
    </p>
    <h1>{{ noOfCorrectAns }} / {{ quizQuestionLength }}</h1>
    <RouterLink to="/"> Go Back</RouterLink>
</section>

</template>

<style scoped>
section{
    text-align: center;
    padding: 100px 0;
}
p{
    font-size: 25px;

}
h1{
    font-size: 80px;
}

</style>