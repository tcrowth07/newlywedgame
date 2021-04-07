function ScoreScreen(props: any) {
  return (
    <>
      <h3>Results</h3>
      <p>
        <b>{props.player1.name}'s guess: </b>
        {props.player1.guesses[props.currentQuestionIndex - 1]}
        <b>
          {props.player2.answers[props.currentQuestionIndex - 1]
            ? "\nCorrect Answer: " +
              props.player2.answers[props.currentQuestionIndex - 1]
            : null}
        </b>
      </p>
      <br />
      <p>
        <b>{props.player2.name}'s guess: </b>
        {props.player2.guesses[props.currentQuestionIndex - 1]}
        <b>
          {props.player1.answers[props.currentQuestionIndex - 1]
            ? "\nCorrect Answer: " +
              props.player1.answers[props.currentQuestionIndex - 1]
            : null}
        </b>
      </p>
      <h3>Total Score</h3>
      <p>
        {props.player1.name}: {props.player1.score}
      </p>
      <p>
        {props.player2.name}: {props.player2.score}
      </p>
      <button onClick={() => props.setScoreScreen(false)}>Continue</button>
    </>
  );
}
export default ScoreScreen;
