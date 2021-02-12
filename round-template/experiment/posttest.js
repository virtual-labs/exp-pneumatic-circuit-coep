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
            question: "3/2 way pneumatic DCV, pilot signal must be:", ///// Write the question inside double quotes
            answers: {
                a: "Manual", ///// Write the option 1 inside double quotes
                b: "Timer contact", ///// Write the option 2 inside double quotes
				c: "Electronic",
				d: "Pneumatic"
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

    {
            question: "If air is fed to port P2, and port p1 is closed and air moves to 'A'. This is operation of:", ///// Write the question inside double quotes
            answers: {
                a: "Twin valve", ///// Write the option 1 inside double quotes
                b: "Quick exhaust valve", ///// Write the option 2 inside double quotes
				c: "Shuttle valve",
				d: "Time delay valve"
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },{
            question: "If air is fed to port P2, port p1 and air moves to 'A'. This is operation of:", ///// Write the question inside double quotes
            answers: {
                a: "Shuttle valve", ///// Write the option 1 inside double quotes
                b: "Twin valve", ///// Write the option 2 inside double quotes
				c: "Quick exhaust valve",
				d: "Time delay valve"
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },{
            question: "4/2 way pneumatic DCV, pilot signal must be:", ///// Write the question inside double quotes
            answers: {
                a: "Foot pedal", ///// Write the option 1 inside double quotes
                b: "Push button", ///// Write the option 2 inside double quotes
				c: "Electronic",
				d: "Pneumatic"
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },{
            question: "In order to attain maximum benefit out of quick exhaust valve, the port A of the valve should be directly connected to the:", ///// Write the question inside double quotes
            answers: {
                a: "Cylinder port", ///// Write the option 1 inside double quotes
                b: "Pilot port", ///// Write the option 2 inside double quotes
				c: "Pressure port",
				d: "Exhaust port"
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
