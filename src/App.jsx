import { useState } from "react";
import Player from "./components/Player";

function App() {
  const [firstPlayerName, setFirstPlayerName] = useState("Player 1");
  const [secondPlayerName, setSecondPlayerName] = useState("Player 2");
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playerName={"Omar"} playerSymbol={"X"} />
          <Player playerName={"Magdi"} playerSymbol={"O"} />
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
