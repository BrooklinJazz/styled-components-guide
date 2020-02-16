import styled, { css } from "styled-components/native";
import { Column } from "./Column";

export const Bar = styled(Column)`
  height: ${props => props.stressLevel}px;
  background-color: ${props => css`rgb(${props.stressLevel}, ${255 - props.stressLevel}, 0)`}
`;
