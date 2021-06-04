import { useState } from "react";
import { useHistory } from "react-router-dom";
import questions from "./questions.json";
import { Question } from "./Types/QuestionType";
import { Player } from "./Types/PlayerType";
import OpenIndividualQuestion from "./Questions/OpenIndividual";
import OpenCoupleQuestion from "./Questions/OpenCouple";
import WhichQuestion from "./Questions/Which";
import ScoreScreen from "./ScoreScreen";
import Similarity from "./Helpers/Similarity";
import Sleep from "./Helpers/Sleep";
import { motion } from "framer-motion";

function Game(props: any) {
  ////////////////////////////////////////
  /////        State Variables       /////
  ////////////////////////////////////////
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
  const [slideX, setSlideX] = useState<string>("0");
  const [slideY, setSlideY] = useState<string>("0");

  ////////////////////////////////////////
  /////          Constants           /////
  ////////////////////////////////////////
  const NUMBER_OF_QUESTIONS: number = 10;
  const COMPARE_TOLERANCE: number = 0.6;
  const currentPlayer: string = player1Turn ? player1.name : player2.name;

  ////////////////////////////////////////
  ///// Private Method Declarations  /////
  ////////////////////////////////////////
  let chooseRandomQuestions: (numOfQuestions: number) => Array<Question>;
  let startGame: () => void;
  let score: () => void;
  let next: () => void;
  let storeAnswers: (answerSelf: string | null, guessPartner: string) => void;
  let hideScore: (score: boolean) => void;
  let overrideScore: (player: number, amount: number) => void;

  ////////////////////////////////////////
  /////       Private Methods        /////
  ////////////////////////////////////////
  chooseRandomQuestions = function (numOfQuestions: Number): Array<Question> {
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
  };

  startGame = function (): void {
    setGameQuestions(chooseRandomQuestions(NUMBER_OF_QUESTIONS));
    setGame(true);
  };

  next = async function () {
    setSlideX("-110%");
    await Sleep(200);
    setSlideX("0");
    if (player1Turn) {
      setplayer1Turn(false);
    } else {
      score();
      setCurrentQuestionIndex((curr: number) => curr + 1);
      setplayer1Turn(true);
    }
  };

  score = function (): void {
    setScoreScreen(true);
    if (
      gameQuestions[currentQuestionIndex].questionType === "OpenCouple" ||
      gameQuestions[currentQuestionIndex].questionType === "Which"
    ) {
      if (
        Similarity(
          player1.guesses[currentQuestionIndex],
          player2.guesses[currentQuestionIndex]
        ) > COMPARE_TOLERANCE
      ) {
        let temp = player1;
        temp.score += 1000;
        setPlayer1(temp);
        temp = player2;
        temp.score += 1000;
        setPlayer2(temp);
      }
    } else {
      if (
        Similarity(
          player1.guesses[currentQuestionIndex],
          player2.answers[currentQuestionIndex]!
        ) > COMPARE_TOLERANCE
      ) {
        let temp = player1;
        temp.score += 1000;
        setPlayer1(temp);
      }
      if (
        Similarity(
          player2.guesses[currentQuestionIndex],
          player1.answers[currentQuestionIndex]!
        ) > COMPARE_TOLERANCE
      ) {
        let temp = player2;
        temp.score += 1000;
        setPlayer2(temp);
      }
    }
  };

  storeAnswers = function (
    answerSelf: string | null,
    guessPartner: string
  ): void {
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
  };

  hideScore = function (score: boolean): void {
    setScoreScreen(score);
    if (currentQuestionIndex >= NUMBER_OF_QUESTIONS) {
      history.push({ pathname: "/gameover", state: { player1, player2 } });
    }
  };

  overrideScore = function (player: number, amount: number): void {
    if (player === 1) {
      let temp = player1;
      temp.score += amount;
      setPlayer1(temp);
    }
    if (player === 2) {
      let temp = player2;
      temp.score += amount;
      setPlayer2(temp);
    }
  };

  ////////////////////////////////////////
  /////            Logic             /////
  ////////////////////////////////////////
  let history = useHistory();
  if (props.location.state === undefined) {
    history.push("/");
  }

  if (!game) {
    startGame();
  }

  return (
    <motion.div
      exit={{ opacity: 0, y: "-100vh", x: 0 }}
      animate={{ opacity: 1, y: slideY, x: slideX }}
      initial={{ opacity: 0, y: "-100vh", x: 0 }}
    >
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
              setScoreScreen={(score: boolean) => hideScore(score)}
              setSlideY={(slideY: string) => setSlideY(slideY)}
              overrideScore={(player: number, amount: number) =>
                overrideScore(player, amount)
              }
            />
          ) : (
            <>
              <h3 className="bg-green-300 rounded-md p-5 text-center text-white shadow-md font-bold text-3xl">
                {currentPlayer}'s turn
              </h3>
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
            </>
          )}
        </>
      )}
    </motion.div>
  );
}

export default Game;
