 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "Speed of the cylinder is accelerated by using:", ///// Write the question inside double quotes
            answers: {
                a: "Time delay Valve", ///// Write the option 1 inside double quotes
                b: "Shuttle Valve", ///// Write the option 2 inside double quotes
				c: "Twin pressure valve",
				d: "Quick exhaust valve"
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

    {
            question: "Quick exhaust valve has", ///// Write the question inside double quotes
            answers: {
                a: "one working port, one pressure port, one exhaust port", ///// Write the option 1 inside double quotes
                b: "two working port, one pressure port, one exhaust port", ///// Write the option 2 inside double quotes
				c: "one working port, two pressure port, one exhaust port",
				d: "two working port, two pressure port, one exhaust port"
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },
		{
            question: "Twin pressure valve has", ///// Write the question inside double quotes
            answers: {
                a: "one signal receiving port, two outlet port", ///// Write the option 1 inside double quotes
                b: "two signal receiving port, one outlet port", ///// Write the option 2 inside double quotes
				c: "one signal receiving port, one outlet port",
				d: "two signal receiving port, two outlet port"
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },{
            question: "Shuttle valve has", ///// Write the question inside double quotes
            answers: {
                a: "one signal receiving port, two outlet port", ///// Write the option 1 inside double quotes
                b: "one signal receiving port, one outlet port", ///// Write the option 2 inside double quotes
				c: "two signal receiving port, one outlet port",
				d: "two signal receiving port, two outlet port"
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },{
            question: "Following pneumatic valves are called as signal generating valve:", ///// Write the question inside double quotes
            answers: {
                a: "Twin pressure valve", ///// Write the option 1 inside double quotes
                b: "Quick exhaust valve", ///// Write the option 2 inside double quotes
				c: "Flow Valve",
				d: "Time delay Valve"
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },


     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
