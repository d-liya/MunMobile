import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from "../../Themed";

type Props = {
  name: string;
  code: string;
  color: string;
};

export default function SubjectCard({ name, code, color }: Props) {
  return (
    <TouchableOpacity style={[styles.container]}>
      <View style={{ maxWidth: "70%" }}>
        <Text text="semiBoldsecondaryText">{code}</Text>
        <Text numberOfLines={1}>{name}</Text>
      </View>
      <View style={[styles.circle, { backgroundColor: color }]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingTop: 10,
    flex: 1,
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 16,
  },
});
