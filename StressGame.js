import React, { useState, useEffect } from "react";
import { Bar } from "./Bar";
import { BarContainer } from "./BarContainer";
import { SuccessButton } from "./SuccessButton";
import styled from "styled-components/native";

const RelaxButton = styled(SuccessButton).attrs(props => ({
  children: "RELAX!"
}))`
  margin-top: 10px;
`;

export const StressGame = ({ loseGame, winGame }) => {
  const [stressLevel, setStressLevel] = useState(100);
  useEffect(() => {
    const stressInterval = setInterval(() => {
      setStressLevel(Math.min(stressLevel + 1, 255));
    }, 20);
    return () => clearInterval(stressInterval);
  }, [stressLevel]);

  useEffect(() => {
    if (stressLevel === 0) {
      winGame();
    } else if (stressLevel === 255) {
      loseGame();
    }
  }, [stressLevel]);

  const relax = () => setStressLevel(Math.max(stressLevel - 10, 0));

  return (
    <>
      <BarContainer>
        <Bar stressLevel={stressLevel} />
      </BarContainer>
      <RelaxButton onPress={relax} />
    </>
  );
};
