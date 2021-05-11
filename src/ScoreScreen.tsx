import { useState, useEffect } from "react";
import Button from "./Components/Button";
import Similarity from "./Helpers/Similarity";
import Sleep from "./Helpers/Sleep";
function ScoreScreen(props: any) {
  const COMPARE_TOLERANCE = 0.6;
  const player1Name = props.player1.name;
  const player2Name = props.player2.name;
  const player1Guess = props.player1.guesses[props.currentQuestionIndex - 1];
  const player2Guess = props.player2.guesses[props.currentQuestionIndex - 1];
  const player1Answer = props.player1.answers[props.currentQuestionIndex - 1];
  const player2Answer = props.player2.answers[props.currentQuestionIndex - 1];
  const [player1Correct, setPlayer1Correct] = useState<boolean>();
  const [player2Correct, setPlayer2Correct] = useState<boolean>();

  useEffect(() => {
    if (player1Guess !== undefined && player2Guess !== undefined) {
      if (player1Answer !== null && player2Answer !== null) {
        setPlayer1Correct(
          Similarity(player1Guess, player2Answer) > COMPARE_TOLERANCE
        );
        setPlayer2Correct(
          Similarity(player2Guess, player1Answer) > COMPARE_TOLERANCE
        );
      } else if (player1Answer === null && player2Answer == null) {
        setPlayer1Correct(
          Similarity(player1Guess, player2Guess) > COMPARE_TOLERANCE
        );
        setPlayer2Correct(
          Similarity(player1Guess, player2Guess) > COMPARE_TOLERANCE
        );
      }
    }
  }, [player1Guess, player2Guess, player1Answer, player2Answer]);

  return (
    <>
      <h3 className="mb-5 px-5 text-center font-bold text-3xl">Score</h3>
      <div
        className={
          "p-5 rounded-md " + (player1Correct ? "bg-green-300" : "bg-red-300")
        }
      >
        <b>{player1Name}'s guess:</b> {player1Guess}
        <br />
        {player2Answer ? (
          <>
            <b>Correct Answer: </b> {player2Answer}
          </>
        ) : null}
        {!player1Correct ? (
          <Button
            onClick={() => {
              setPlayer1Correct(true);
              props.overrideScore(1, 1000);
            }}
            bgColor="bg-green-300"
            className="ml-5"
          >
            Mark as Correct
          </Button>
        ) : null}
      </div>
      <br />
      <div
        className={
          "p-5 rounded-md " + (player2Correct ? "bg-green-300" : "bg-red-300")
        }
      >
        <b>{player2Name}'s guess:</b> {player2Guess}
        <br />
        {player1Answer ? (
          <>
            <b>Correct Answer: </b> {player1Answer}
          </>
        ) : null}
        {!player2Correct ? (
          <Button
            onClick={() => {
              setPlayer2Correct(true);
              props.overrideScore(2, 1000);
            }}
            bgColor="bg-green-300"
            className="ml-5"
          >
            Mark as Correct
          </Button>
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
        onClick={async () => {
          props.setScoreScreen(false);
          props.setSlideY("-100vh");
          await Sleep(400);
          props.setSlideY("0");
        }}
        className="mb-6 ml-5"
      >
        Continue
      </Button>
    </>
  );
}
export default ScoreScreen;
