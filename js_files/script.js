let counter = 0;
let score = 0;

function main() {
	console.log(questions);


	function showQuestion(question) {


			$('.content').html(
					`
					<div class="card" style="width: 21rem; height: 25rem">
					<div class="card-body">
						<h6 class="card-subtitle mb-2 text-muted">${question.question}</h6>
						<p class="card-text"></p>
							<form>
									<div class="form-check">
											<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="${question.answers[0]}" checked>
											<label class="form-check-label" for="exampleRadios1">
													${question.answers[0]}
											</label>
									</div>
									<div class="form-check">
											<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="${question.answers[1]}">
											<label class="form-check-label" for="exampleRadios2">
													${question.answers[1]}
											</label>
									</div>
									<input type="submit" value="Submit">
							</form>
						</div>
				</div>
					`
			)


			$("form").submit(function (event) {
					event.preventDefault();
					console.log(question);
					let userAnswer = $("input:checked").val();
				 console.log(userAnswer);
					if (question.correctAnswer == userAnswer) {
							alert("Correct!");
							alert(question.info);

					} else {
							alert("Incorrect.");
							alert(question.info);
					}
					counter++;
					if (counter < questions.length) {
							showQuestion(questions[counter]);
					}
			})
	};

	showQuestion(questions[0]);






}

$(main)
