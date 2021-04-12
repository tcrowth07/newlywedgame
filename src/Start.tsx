import { useHistory } from "react-router-dom";
import Button from "./Components/Button";
import Input from "./Components/ParagraphInput";

function App() {
  let history = useHistory();
  function startGame() {
    history.push({
      pathname: "/play",
      state: {
        player1Name: (document.getElementById(
          "player1Name"
        ) as HTMLInputElement)?.value,
        player2Name: (document.getElementById(
          "player2Name"
        ) as HTMLInputElement)?.value,
      },
    });
  }
  return (
    <>
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
      <div className="text-center">
        <Button
          bgColor="yellow-500"
          onClick={() => {
            startGame();
          }}
        >
          Start Game
        </Button>
      </div>
    </>
  );
}
export default App;
