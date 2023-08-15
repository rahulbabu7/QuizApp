<script setup>
import q from '../data/Quiz.json'   //importing jsoin file 
import {ref} from 'vue' 
const quizes = ref(q); //converting the q into a state for search feature  we can for loop through this array
</script>
<template>

<div class="container">
    <header>
        <h1> Quizes</h1>
        <input type="text" placeholder="search">
    </header>
    <main>
     <section class="card" v-for="quiz in quizes" 
     :key="quiz.id">
        <img :src="quiz.img" alt=" MATHS">
        <section class="card-text">
            <h2>{{quiz.name}}</h2>
        <p>{{ quiz.questions.length}}</p>
        </section>
     </section>
    </main>
</div>
</template>


<style scoped>
.container{
    max-width: 1000px;
    margin: 0 auto;
}
header{
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 50px;

}
h1{
    font-weight: bold;
    margin-right: 30px;
}
input{
    border: none;
    background-color: rgba(128,128 , 128, 0.1);
    padding: 10px;
    border-radius: 5px;
}
main{
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
}
.card{
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0,0, 0, 0.1);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
}
.card img{
    width: 100%;
    height: 190px;
    margin: 0;
}
.card-text{
    padding: 0 5px;

}
.card-text h2{
    font-weight: bold;
}
</style>