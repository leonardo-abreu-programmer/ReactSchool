import React from "react";
import { useState } from "react";

//import Painel from './painel';
import Player from "./player";

const infoconstruct = {
  confronto: {
    local: "Lisbon",
    rounds: 3
  },
  players: [
    {
      name: "Leo",
      health: 100,
      winns: 0
    },
    {
      name: "Danilo",
      health: 100,
      winns: 0
    }
  ],
}

export default function Game() {

  const [rounds, setRounds] = useState(infoconstruct.confronto.rounds);

  const [player1, setPlayer1] = useState({...infoconstruct.players[0]});

  const [player2, setPlayer2] = useState({...infoconstruct.players[1]});

  function attack(player, setter) {
    player.health -= Math.floor(Math.random() * 50)+1;
    if(player.health > 0) setter({...player});
    else won();
  }

  function resetHelth() {
    for(let player of infoconstruct.players) player.health = 100;
    setPlayer1({...infoconstruct.players[0]});
    setPlayer2({...infoconstruct.players[1]});
  }

  function won() {
    if(rounds === 1) return finish();
    setRounds(rounds-1);
    resetHelth();
  }

  function finish() {
    setRounds(3);
    resetHelth();
  }

  return(
    <div className="p-4 rounded border-2 border-black space-y-4">

      <h1>Game</h1>
      <h2>{infoconstruct.local}</h2>
      <h3>{rounds} {rounds > 1 ? "Rounds": "Round"}</h3>

      <div className="flex space-x-4">
        <Player onClick={() => {attack(player2, setPlayer2)}} player={player1}/>
        <Player onClick={() => {attack(player1, setPlayer1)}} player={player2}/>
      </div>

    </div>
  );
}
