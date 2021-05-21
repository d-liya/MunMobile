import React from "react";
import { TouchableOpacity, Text, View } from "react-native-ui-lib/";
import Colors from "../../../constants/Colors";
import { useColorScheme } from "../../../hooks";
import { LineSeperator } from "../../LineSeperator";
type Props = {
  name: string;
  gpa: number;
};
export default function SemesterCard({ name, gpa }: Props) {
  const theme = useColorScheme();
  return (
    <>
      <TouchableOpacity spread row padding-10 centerH>
        <View>
          <Text text60>{name.split(" ")[1]}</Text>
          <Text>{name.split(" ")[0]}</Text>
        </View>
        <Text
          text70
          style={{
            padding: 10,
            textAlign: "center",
            borderRadius: 6,
            borderWidth: 0.8,
            borderColor: Colors[theme].border,
          }}
        >
          {gpa.toFixed(2)}
        </Text>
      </TouchableOpacity>
      <LineSeperator />
    </>
  );
}
