import { useHistory } from "react-router-dom";
import Button from "./Components/Button";
import Input from "./Components/ParagraphInput";
import { motion } from "framer-motion";

function App() {
  let history = useHistory();
  function startGame() {
    let player1Name = (document.getElementById("player1Name") as HTMLInputElement)?.value
    let player2Name = (document.getElementById("player2Name") as HTMLInputElement)?.value

    if(player1Name !== "" && player2Name !== "") {
      history.push({
        pathname: "/play",
        state: {
          player1Name,
          player2Name
        },
      });
    } else {
      document.getElementById("error")!.innerHTML = "Both players need a name"
    }
  }
  return (
    <motion.div
      exit={{ opacity: 0, y: "-100vh" }}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: "-100vh" }}
    >
      <Input
        label="Player 1 Name"
        placeholder="Player 1 Name"
        type="text"
        id="player1Name"
      />
      <br />
      <Input
        label="Player 2 Name"
        placeholder="Player 2 Name"
        type="text"
        id="player2Name"
      >
        Player 2 Name
      </Input>
      <span id="error" style={{color: "red"}}></span>
      <div className="text-center">
        <Button
          bgColor="bg-yellow-500"
          onClick={() => {
            startGame();
          }}
        >
          Start Game
        </Button>
      </div>
    </motion.div>
  );
}
export default App;
