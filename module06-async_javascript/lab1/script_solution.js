/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question after a 1 seconds delay and log it on the console, together with the possible answers (each question should have a number) 
(Hint: write a function that returns a promise).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and return the result after after 2 seconds delay and  print to the console whether the answer is correct ot nor (Hint: write another method that returns a promise for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


(function() {

    function selectRandomItem(arr){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                let inx = Math.floor(Math.random() * arr.length);
                resolve(arr[inx]);
            },1000)
        })
    }

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if (ans === this.correct) {
                    resolve('Correct answer!');
                } else {
                    reject('Wrong answer. Try again :)')
                }
            },2000)
        });
  
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['Haim', 'Yossi', 'Nir'],
                          2);

    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);

    var questions = [q1, q2, q3];

    selectRandomItem(questions).then((question)=>{
        question.displayQuestion();

        var answer = parseInt(prompt('Please select the correct answer.'));

        return question.checkAnswer(answer);
    })
    .then((msg)=>console.log(msg),
           (msg) => console.log(msg) );
    
})();

