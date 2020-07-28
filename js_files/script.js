function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
var myQuestions = [
	{
		question: "20% of immigrants are reported to be White.",
		answers: {
			a: 'True',
			b: 'False'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
		},
		correctAnswer: 'c'
  }
  ,
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
		},
		correctAnswer: 'c'
	}
];
