import styled from "styled-components/native";
import { Button } from "./Button";

export const DefaultButton = styled(Button)`
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: ${props => props.bg};
  color: ${props => props.color || "black"};
  height: 40px;
  min-width: 100px;
`;
