import React, { useState } from "react";
import { PageContainer } from "./components/PageContainer";
import { StressGame } from "./components/StressGame";
import { SuccessButton } from "./components/SuccessButton";
import { DangerButton } from "./components/DangerButton";

export default function App() {
  const [gameState, setGameState] = useState("starting");
  const startGame = () => setGameState("playing");
  const winGame = () => setGameState("won");
  const loseGame = () => setGameState("lost");
  return (
    <PageContainer>
      {gameState === "playing" && <StressGame winGame={winGame} loseGame={loseGame} />}
      {gameState === "starting" && <SuccessButton onPress={startGame}>Start</SuccessButton>}
      {gameState === "won" && <SuccessButton onPress={startGame}>You Won! Try Again?</SuccessButton>}
      {gameState === "lost" && <DangerButton onPress={startGame}>You Lost! Try Again?</DangerButton>}
    </PageContainer>
  );
}
