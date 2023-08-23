<script setup>
import ques from '../data/Quiz.json'   //importing jsoin file 
import { ref,watch } from 'vue'
import Card from '../components/Card.vue';
const quizes = ref(ques); //converting the q into a state for search feature  we can for loop through this array
const search = ref("");
//const quizes = q;  even without ref we can loop through json using this line . But ref is provided to display cards based on the search results
watch(search ,()=>{
    //watch is used to continuosly listen to the search .
    //whenever the searcg changes it state we should updates the quizes state also.

    //logic
    quizes.value = ques.filter(quiz =>
        quiz.name.toLowerCase().includes(search.value.toLowerCase())
        //filters the cards that has the value related to the search .
        //quiz is a looping variable in the array ques
        //the quiz name should include the letters from the search
    )

})
</script>
<template>
    <div>
        <header>
            <h1> Quizes</h1>
            <input type="text" placeholder="search" v-model.trim="search">
        </header>
        <main>
            <!-- <section class="card" v-for="quiz in quizes" :key="quiz.id">
                <img :src="quiz.img" alt=" MATHS">
                <section class="card-text">
                    <h2>{{ quiz.name }}</h2>
                    <p>{{ quiz.questions.length }}</p>
                </section>
            </section> -->
            <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>  <!-- :quiz prop -->
        </main>
    </div>
</template>


<style scoped>


header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 50px;

}

h1 {
    font-weight: bold;
    margin-right: 30px;
}

input {
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
}

main {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
}
</style>