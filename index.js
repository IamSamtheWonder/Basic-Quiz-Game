const questions = [
    {
        questionText: "Q.1: What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
        // correctAnswer: 0
    },
    {
        questionText: "Q.2: What is the capital of United Kingdom?",
        options: ["London", "Nairobi", "Paris", "Berlin"],
        correctAnswer: "London"
        // correctAnswer: 0
    },
    {
        questionText: "Q.3: Which of the following is not an animal?",
        options: ["Goat", "Dog", "Samsung", "Elephant"],
        correctAnswer: "Samsung"
        // correctAnswer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Display the corresponding answer options.

function displayQuestion() {
    const questionContainer = document.getElementById('question');
    const optionsContainer = Array.from(document.getElementsByClassName('option'));
    console.log(optionsContainer);

    const currentQuestion = questions[currentQuestionIndex];

    questionContainer.textContent = currentQuestion.questionText;
    optionsContainer.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
        option.disabled = false; // Enable options
    });

    // Update score display
    document.getElementById('score').textContent = score;
}


document.addEventListener('DOMContentLoaded', () => {
    displayQuestion();

    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', () => {
            const selectedOptionValue = option.textContent;
            const currentQuestion = questions[currentQuestionIndex];
            console.log(selectedOptionValue);
            // Check if the selected option matches the correct answer

            if (selectedOptionValue === currentQuestion.correctAnswer) {
                alert("Correct!");

                 // Increment the score if the answer is correct
                 score++;

            } else {
                alert("Incorrect.");
            }
            
            // currentQuestionIndex++;
            // if (currentQuestionIndex >= questions.length) {
            //     alert(`Quiz completed! Your final score is ${score}/${questions.length}`);
            //     document.getElementById('score').textContent = score;
            //     // location.reload(); // Reload the page to restart the quiz
            // } else if (currentQuestionIndex < questions.length) {
            //     displayQuestion();
            // } else {
            //      location.reload(); // Reload the page to restart the quiz
            // }

            currentQuestionIndex++;
            if (currentQuestionIndex >= questions.length) {
                alert(`Quiz completed! Your final score is ${score}/${questions.length}`);
                document.getElementById('score').textContent = score;
                setTimeout(location.reload(), 5000); // Reload the page to restart the quiz
            } else {
                displayQuestion();
            } 
        });
    });
});


