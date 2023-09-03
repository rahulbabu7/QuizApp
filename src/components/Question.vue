<script setup>

import { defineProps,defineEmits } from 'vue';

const emit = defineEmits(["selectOption"])
const {question} = defineProps(['question'])

const emitSelectedOption = (isCorrect)=>{
  emit("selectOption",isCorrect)

}
</script>
<template>
  <section>
    <h2 class="question">{{question.text}}</h2>
    <aside class="answers">
      <fieldset name="options">
        <!-- The <fieldset> groups all the answer choices together, indicating they are related options for a single question.
The <legend> provides an accessible name for that group, describing that these options are answer choices that the user should select from. -->
        <legend>Select the correct answer:</legend>
        <ul v-for="option in question.options" 
        :key="option.id"
        @click="emitSelectedOption(option.isCorrect)"
        >
          <li>
            <input type="radio" id="`answer{{ option.id }}`" name="answer" />
            <label for="answer1">{{ option.text }}</label>
          </li>
        </ul>
      </fieldset>
    </aside>
  </section>
</template>

<style scoped> 
ul{
    list-style-type: none;
}
li{
    margin-bottom: 10px;
}
/* fieldset{
    border: none;
} */
</style>
