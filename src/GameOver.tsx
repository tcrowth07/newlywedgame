function GameOver(props: any) {
  const player1 = props.location.state.player1;
  const player2 = props.location.state.player2;

  let winnerText = "";
  if (player1.score > player2.score) {
      winnerText = player1.name + " wins!"
  } else if (player2.score > player1.score) {
      winnerText = player2.name + " wins!"
  } else {
      winnerText = "It's a tie!"
  }
  return (
  <>
  <h4>{winnerText}</h4>
  <p>Final Score:</p>
  <p>{player1.name}: {player1.score}</p>
  <p>{player2.name}: {player2.score}</p>
  </>
  );
}
export default GameOver;
