import "./App.css";
import { useHistory } from "react-router-dom";

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
    <>
      <label htmlFor="player1Name">Player 1 Name</label>
      <input type="text" id="player1Name" />
      <br />
      <label htmlFor="player2Name">Player 2 Name</label>
      <input type="text" id="player2Name" />
      <br />
      <button onClick={() => {startGame()}}>Play Single Device Mode</button>
    </>
  );
}
export default App;
