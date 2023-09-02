<script></script>
<template>
  <header>
    <h1>Question 1/3</h1>
    <div class="bar">
      <div class="completion"></div>
    </div>
  </header>
  <main>
    <section>
      <h2 class="question">What is the chemical name of table salt</h2>
      <aside class="answers">
        <fieldset>
            <!-- The <fieldset> groups all the answer choices together, indicating they are related options for a single question.
The <legend> provides an accessible name for that group, describing that these options are answer choices that the user should select from. -->
          <legend>Select the correct answer:</legend>
          <ul>
            <li>
              <input type="radio" id="answer1" name="answer" />
              <label for="answer1">Sodium chloride</label>
            </li>
            <li>
              <input type="radio" id="answer2" name="answer" />
              <label for="answer2">Calcium chloride</label>
            </li>
            <li>
              <input type="radio" id="answer3" name="answer" />
              <label for="answer3">Potassium chloride</label>
            </li>
            <li>
              <input type="radio" id="answer4" name="answer" />
              <label for="answer4">Magnesium chloride</label>
            </li>
          </ul>
        </fieldset>
      </aside>
    </section>
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
