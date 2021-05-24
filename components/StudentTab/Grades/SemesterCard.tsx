import React from "react";
import { TouchableOpacity, Text, View } from "../../Themed";
import Colors from "../../../constants/Colors";
import { useColorScheme } from "../../../hooks";
import { LineSeperator } from "../../Common/LineSeperator";
import { StyleSheet } from "react-native";
type Props = {
  name: string;
  gpa: number;
  handleOnPress: () => void;
};
export default function SemesterCard({ name, gpa, handleOnPress }: Props) {
  const theme = useColorScheme();
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={handleOnPress}>
        <View>
          <Text text="semiBoldsecondaryText">{name.split(" ")[1]}</Text>
          <Text>{name.split(" ")[0]}</Text>
        </View>
        <Text
          text="semiBoldsecondaryText"
          style={[
            styles.gpaText,
            {
              borderColor: Colors[theme].border,
            },
          ]}
        >
          {gpa.toFixed(2)}
        </Text>
      </TouchableOpacity>
      <LineSeperator />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  gpaText: {
    padding: 10,
    textAlign: "center",
    borderRadius: 6,
    borderWidth: 0.8,
  },
});
