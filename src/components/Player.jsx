import { useState } from "react";

function Player({ playerName: pName, playerSymbol, isActive }) {
  const [editing, setEditing] = useState(false);
  const [playerName, setPlayerName] = useState(pName);
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editing ? (
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={() => setEditing((edit) => !edit)}>
        {editing ? "Save" : "Edit"}
      </button>
    </li>
  );
}

export default Player;
