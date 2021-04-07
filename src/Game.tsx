import { useState } from "react";
import { useHistory } from "react-router-dom";
import questions from "./questions.json";
import OpenIndividualQuestion from "./Questions/OpenIndividual";
import OpenCoupleQuestion from "./Questions/OpenCouple";
import WhichQuestion from "./Questions/Which";
import ScoreScreen from "./ScoreScreen";

import Button from "./Components/Button"

function Game(props: any) {
  let history = useHistory();
  if (props.location.state === undefined) {
    history.push("/")
  } 
  const [game, setGame] = useState<boolean>(false);
  const [gameQuestions, setGameQuestions] = useState<Array<Question>>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [player1Turn, setplayer1Turn] = useState<boolean>(true);
  const [scoreScreen, setScoreScreen] = useState<boolean>(false);
  const [player1, setPlayer1] = useState<Player>({
    playerNum: 1,
    name: props.location.state?.player1Name,
    answers: [],
    guesses: [],
    score: 0,
  });
  const [player2, setPlayer2] = useState<Player>({
    playerNum: 2,
    name: props.location.state?.player2Name,
    answers: [],
    guesses: [],
    score: 0,
  });
  

  function startGame(): void {
    setGameQuestions(chooseRandomQuestions(10));
    setGame(true);
  }

  function chooseRandomQuestions(numOfQuestions: Number): Array<Question> {
    let randomQuestions: Array<Question> = [];
    while (randomQuestions.length < numOfQuestions) {
      let randomInt = Math.floor(Math.random() * questions.length);
      if (
        randomQuestions.findIndex(
          (item: Question) => item === questions[randomInt]
        ) === -1
      ) {
        randomQuestions.push(questions[randomInt]);
      }
    }
    return randomQuestions;
  }

  function next(): void {
    if (player1Turn) {
      setplayer1Turn(false);
    } else {
      score();
      setCurrentQuestionIndex((curr: number) => curr + 1);
      setplayer1Turn(true);
    }
  }

  function score() {
    setScoreScreen(true);
    if (
      player1.guesses[currentQuestionIndex] ===
      player2.answers[currentQuestionIndex]
    ) {
      let temp = player1;
      temp.score += 10000;
      setPlayer1(temp);
    }
    if (
      player2.guesses[currentQuestionIndex] ===
      player1.answers[currentQuestionIndex]
    ) {
      let temp = player2;
      temp.score += 10000;
      setPlayer2(temp);
    }
    if (
      gameQuestions[currentQuestionIndex].questionType === "OpenCouple" ||
      gameQuestions[currentQuestionIndex].questionType === "Which"
    ) {
      if (
        player1.guesses[currentQuestionIndex] ===
        player2.guesses[currentQuestionIndex]
      ) {
        let temp = player1;
        temp.score += 10000;
        setPlayer1(temp);
        let temp2 = player2;
        temp2.score += 10000;
        setPlayer2(temp2);
      }
    }
  }

  function storeAnswers(answerSelf: string | null, guessPartner: string): void {
    if (player1Turn) {
      let tempPlayer1 = player1;
      tempPlayer1.answers.push(answerSelf);
      tempPlayer1.guesses.push(guessPartner);
    } else {
      let tempPlayer2 = player2;
      tempPlayer2.answers.push(answerSelf);
      tempPlayer2.guesses.push(guessPartner);
    }
    next();
  }

  if (!game) {
    startGame();
  }

  if (currentQuestionIndex > 9) {
    history.push({ pathname: "/gameover", state: { player1, player2 } });
  }

  let currentPlayer = "";
  if (player1Turn) {
    currentPlayer = player1.name;
  } else {
    currentPlayer = player2.name;
  }

  return (
    <div className="main">
      {!game ? (
        <h6>Loading game...</h6>
      ) : (
        <>
          {scoreScreen ? (
            <ScoreScreen
              player1Turn={player1Turn}
              currentQuestionIndex={currentQuestionIndex}
              player1={player1}
              player2={player2}
              setScoreScreen={(score: boolean) => setScoreScreen(score)}
            />
          ) : (
            <div className="m-5">
              <h3 className="bg-green-300 mb-7 rounded-md p-5 text-center text-white shadow-md font-bold text-3xl">{currentPlayer}'s turn</h3>
              {gameQuestions[currentQuestionIndex]?.questionType ===
                "OpenIndividual" && (
                <OpenIndividualQuestion
                  question={gameQuestions[currentQuestionIndex]}
                  player1Turn={player1Turn}
                  handleChange={(answerSelf: string, guessPartner: string) =>
                    storeAnswers(answerSelf, guessPartner)
                  }
                  player1={player1}
                  player2={player2}
                />
              )}
              {gameQuestions[currentQuestionIndex]?.questionType ===
                "OpenCouple" && (
                <OpenCoupleQuestion
                  question={gameQuestions[currentQuestionIndex]}
                  player1Turn={player1Turn}
                  handleChange={(answer: string) => storeAnswers(null, answer)}
                  player1={player1}
                  player2={player2}
                />
              )}
              {gameQuestions[currentQuestionIndex]?.questionType ===
                "Which" && (
                <WhichQuestion
                  question={gameQuestions[currentQuestionIndex]}
                  player1Turn={player1Turn}
                  handleChange={(answer: string) => storeAnswers(null, answer)}
                  player1={player1}
                  player2={player2}
                />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Game;

type Question = {
  questionId: number;
  question: string;
  questionType: string;
  intimicyLevel: number;
};

type Player = {
  playerNum: number;
  name: string;
  answers: Array<string | null>;
  guesses: Array<string>;
  score: number;
};
