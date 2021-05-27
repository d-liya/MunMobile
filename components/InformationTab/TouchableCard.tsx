import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity, View, Text } from "../Themed";

type Props = {
  icon: React.ReactNode;
  name: string;
  onPress: () => void;
};
export default function TouchableCard({ icon, name, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View tintColor style={styles.iconView}>
        {icon}
      </View>
      <Text style={styles.text} text="semiBoldbodyText">
        {name}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "40%",
    marginRight: 20,
  },
  iconView: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  text: {},
});
