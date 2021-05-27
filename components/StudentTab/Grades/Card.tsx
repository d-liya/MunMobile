import React from "react";
import Colors from "../../../constants/Colors";
import { useColorScheme } from "../../../hooks";
import { ScrollView, View, Text } from "../../Themed";
import CircularProgress from "./CircularProgress";
import { Course } from "../../../redux/Slices/grades";
import { StyleSheet } from "react-native";
type Props = {
  data: Course[];
};

export default function CourseCards({ data }: Props) {
  return (
    <ScrollView tintColor>
      {data &&
        data.length > 0 &&
        data.map((el, i) => (
          <View tintColor key={i} style={[styles.container]}>
            <View tintColor style={[styles.textWrapper]}>
              <Text text="semiBoldsecondaryText">{el.code}</Text>
              <Text style={styles.nameText} numberOfLines={1}>
                {el.name}
              </Text>
            </View>
            <CircularProgress fill={el.marks} />
          </View>
        ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
  },
  textWrapper: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  nameText: {
    justifyContent: "center",
  },
});
