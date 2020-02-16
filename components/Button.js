import React from "react";
import { Text, TouchableOpacity } from "react-native";
export const Button = props => (<TouchableOpacity {...props}>
  <Text>{props.children}</Text>
</TouchableOpacity>);
