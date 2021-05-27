import React from "react";
import { StyleSheet } from "react-native";
import Colors, { red } from "../../constants/Colors";
import { useColorScheme } from "../../hooks";
import Button from "../Common/Button";
import { View, Text, TouchableOpacity } from "../Themed";

type Props = {
  name: string;
  description: string;
  available: [];
  onPress: () => void;
};

export default function Card({ name, description, available = [], onPress }: Props) {
  const theme = useColorScheme();
  return (
    <View style={[styles.container, { borderColor: Colors[theme].border }]}>
      <Text text="boldMediumTitle">{name}</Text>
      <Text style={styles.description}>{description}</Text>
      {available.map((el, i) => (
        <Text key={i}>{el}</Text>
      ))}
      <Button text="Book Now" onPress={onPress} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 6,
    margin: 10,
  },
  description: {
    marginTop: 10,
    marginBottom: 10,
  },
});
