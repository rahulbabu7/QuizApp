<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["selectOption"]);
const { question } = defineProps(["question"]);

const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect);
  //   emitSelectedOption is the name of the method. It accepts one parameter isCorrect.
  // Inside the method, it calls emit(). This is a function available in all Vue components that allows emitting a custom event up to the parent.
  // The first argument to emit() is the name of the event - here it is "selectOption".
  // The second argument is the payload data to emit - here it is passing the isCorrect value
};
</script>
<template>
  <section>
    <h2 class="question">{{ question.text }}</h2>
    <aside class="answers">
      <fieldset name="options">
        <!-- The <fieldset> groups all the answer choices together, indicating they are related options for a single question.
The <legend> provides an accessible name for that group, describing that these options are answer choices that the user should select from. -->
        <legend>Select the correct answer:</legend>
        <ul>
          <li
            v-for="option in question.options"
            :key="option.id"
            @click="emitSelectedOption(option.isCorrect)"
          >
            <input type="radio" id="`answer{{ option.id }}`" name="answer" />
            <label for="answer1">{{ option.text }}</label>
          </li>
        </ul>
      </fieldset>
    </aside>
  </section>
</template>

<style scoped>
ul {
  list-style-type: none;
}
li {
  margin-bottom: 10px;
}
/* fieldset{
    border: none;
} */
</style>
