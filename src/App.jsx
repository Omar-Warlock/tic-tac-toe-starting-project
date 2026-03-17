import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare() {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X",
    );
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName={"Omar"}
            playerSymbol={"X"}
            isActive={activePlayer === "X"}
          />
          <Player
            playerName={"Magdi"}
            playerSymbol={"O"}
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          activePlayer={activePlayer}
          handleSelectSquare={handleSelectSquare}
        />
      </div>
    </main>
  );
}

export default App;
