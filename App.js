import React, { useState } from "react";
import { PageContainer } from "./PageContainer";
import { DefaultButton } from "./DefaultButton";
import styled from "styled-components/native";
import { StressGame } from "./StressGame";

const green = "#4caf50";

const GreenButton = props => <DefaultButton {...props} bg={green} />;

export default function App() {
  const [gameState, setGameState] = useState("starting");
  const startGame = () => setGameState("playing")
  return (
    <PageContainer>
      {gameState === "playing" ? <StressGame/> : <GreenButton onPress={startGame}>Start</GreenButton>}
    </PageContainer>
  )
}
