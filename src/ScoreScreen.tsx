import Button from "./Components/Button";
import Similarity from "./Helpers/Similarity"
function ScoreScreen(props: any) {
  const COMPARE_TOLERANCE = 0.6
  const player1Name = props.player1.name;
  const player2Name = props.player2.name;
  const player1Guess = props.player1.guesses[props.currentQuestionIndex - 1];
  const player2Guess = props.player2.guesses[props.currentQuestionIndex - 1];
  const player1Answer = props.player1.answers[props.currentQuestionIndex - 1];
  const player2Answer = props.player2.answers[props.currentQuestionIndex - 1];
  return (
    <>
      <h3 className="mb-5 px-5 text-center font-bold text-3xl">
        Score
      </h3>
        <div
          className={
            "p-5 rounded-md " +
            (player2Answer
              ? (Similarity(player1Guess, player2Answer) > COMPARE_TOLERANCE
                ? "bg-green-300"
                : "bg-red-300")
              : Similarity(player1Guess, player2Guess) > COMPARE_TOLERANCE
              ? "bg-green-300"
              : "bg-red-300"
            )
          }
        >
          <b>{player1Name}'s guess:</b> {player1Guess}
          <br />
          {player2Answer ? (
            <>
              <b>Correct Answer: </b> {player2Answer}
            </>
          ) : null}
        </div>
        <br />
        <div
          className={
            "p-5 rounded-md " +
            (player1Answer
              ? Similarity(player2Guess, player1Answer) > COMPARE_TOLERANCE
                ? "bg-green-300"
                : "bg-red-300"
              : Similarity(player2Guess, player1Guess) > COMPARE_TOLERANCE
              ? "bg-green-300"
              : "bg-red-300")
          }
        >
          <b>{player2Name}'s guess:</b> {player2Guess}
          <br />
          {player1Answer ? (
            <>
              <b>Correct Answer: </b> {player1Answer}
            </>
          ) : null}
        </div>
        <br />
        <h3 className="bg-gray-700 rounded-md px-5 py-2 text-center text-white shadow-md font-bold text-2xl">
          Total Score
        </h3>
        <p className="bg-green-100 rounded-md p-3 text-center shadow-md font-bold text-2xl">
          {player1Name}: {props.player1.score}
        </p>
        <p className="bg-green-100 mb-7 rounded-md p-5 text-center shadow-md font-bold text-2xl">
          {player2Name}: {props.player2.score}
        </p>
        <Button
          onClick={() => props.setScoreScreen(false)}
          className="mb-5 ml-5"
        >
          Continue
        </Button>
    </>
  );
}
export default ScoreScreen;
