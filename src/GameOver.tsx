import { useHistory } from "react-router-dom";
import Button from "./Components/Button";
import { motion } from "framer-motion"
function GameOver(props: any) {
  let history = useHistory();
  const player1 = props.location.state.player1;
  const player2 = props.location.state.player2;

  let winnerText = "";
  if (player1.score > player2.score) {
    winnerText = player1.name + " wins!";
  } else if (player2.score > player1.score) {
    winnerText = player2.name + " wins!";
  } else {
    winnerText = "It's a tie!";
  }
  return (
    <motion.div
    exit={{ opacity: 0, y:"-100vh"}}
    animate={{ opacity: 1, y:0}}
    initial={{ opacity: 0, y:"-100vh" }}
  >
      <h3 className="bg-green-300 mb-7 rounded-md p-5 text-center text-white shadow-md font-bold text-3xl">
        {winnerText}
      </h3>
      <h3 className="bg-green-300 rounded-md px-5 py-2 text-center text-white shadow-md font-bold text-2xl">
        Final Score
      </h3>
      <p className="bg-green-100 mb-7 rounded-md p-5 text-center shadow-md font-bold text-2xl">
        {player1.name}: {player1.score}
        <br />
        {player2.name}: {player2.score}
      </p>
      <Button
        onClick={() => {
          history.push("/start");
        }}
        bgColor="yellow-500"
      >
        Play Again
      </Button>
    </motion.div>
  );
}
export default GameOver;
