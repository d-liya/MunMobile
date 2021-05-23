import React from "react";
import { View, Text, TouchableOpacity } from "react-native-ui-lib";

type Props = {
  name: string;
  code: string;
  color: string;
};

export default function SubjectCard({ name, code, color }: Props) {
  return (
    <TouchableOpacity flex row paddingT-10 spread style={{ alignItems: "flex-end" }}>
      <View style={{ maxWidth: "70%" }}>
        <Text text70H>{code}</Text>
        <Text numberOfLines={1}>{name}</Text>
      </View>
      <View height={50} width={50} backgroundColor={color} br60></View>
    </TouchableOpacity>
  );
}
