import React from "react";
import { StyleSheet } from "react-native";
import { red } from "../../constants/Colors";
import { TouchableOpacity, Text } from "../Themed";

type Props = {
  text: string;
  onPress: () => void;
  textStyle?: {};
  style?: {};
  disabled?: boolean;
};

export default function Button({
  text,
  onPress,
  textStyle,
  style,
  disabled,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style, disabled ? { opacity: 0.9 } : {}]}
      disabled={disabled}
    >
      <Text
        style={[styles.buttonText, textStyle]}
        color="white"
        text="semiBoldbodyText"
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 6,
    backgroundColor: red,
    padding: 10,
  },
  buttonText: {
    alignSelf: "center",
  },
});
