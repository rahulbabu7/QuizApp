import { createRouter,createWebHistory } from "vue-router";
import Quiz from "../views/Quiz.vue";
import Quizview from '../views/QuizView.vue';
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes :[{
        path:'/',
        name:"quizes",
        component:Quiz
    },
    {
        path:'/quiz/:id',
        name:"quizview",
        component:Quizview
    }
    
]})
export default router