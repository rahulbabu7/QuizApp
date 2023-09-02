<template>
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
</template>
