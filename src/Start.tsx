import { useHistory } from "react-router-dom";
import Button from "./Components/Button"
import Input from "./Components/Input"

function App() {
    let history = useHistory();
    function startGame() {
        history.push({
            pathname: '/play',
            state: { 
                player1Name: (document.getElementById("player1Name") as HTMLInputElement)?.value,
                player2Name: (document.getElementById("player2Name") as HTMLInputElement)?.value,
            }
          }); 
    }
  return (
    <div className="text-center lg:mx-52 md:mx-52 sm:mx-52 m-10">
      <Input type="text" id="player1Name">Player 1 Name</Input>
      <br />
      <Input type="text" id="player2Name">Player 2 Name</Input>
      <br />
      <Button disabled={false} bgColor="yellow-500" onClick={() => {startGame()}}>Start Game</Button>
    </div>
  );
}
export default App;
