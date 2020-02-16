import React from "react";
import styled from "styled-components/native"

const BaseText = styled.Text`
  color: white;
`

const BaseButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 40px;
  min-width: 100px;
`;

export const Button = props => (
  <BaseButton {...props}>
    <BaseText >{props.children}</BaseText>
  </BaseButton>
);
