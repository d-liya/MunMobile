import React from "react";
import { View, Text } from "react-native-ui-lib";
import Colors from "../../../constants/Colors";
import { useColorScheme } from "../../../hooks";
import { ScrollView } from "../../Themed";
import CircularProgress from "./CircularProgress";
import { Course } from "../../../redux/Slices/grades";
type Props = {
  data: Course[];
};

export default function CourseCards({ data }: Props) {
  const theme = useColorScheme();
  return (
    <ScrollView style={{ backgroundColor: Colors[theme].tint }}>
      {data &&
        data.length > 0 &&
        data.map((el, i) => (
          <View key={i} row padding-5 spread backgroundColor={Colors[theme].tint}>
            <View centerV backgroundColor={Colors[theme].tint}>
              <Text text70H>{el.code}</Text>
              <Text center numberOfLines={1}>
                {el.name}
              </Text>
            </View>
            <CircularProgress fill={el.marks} />
          </View>
        ))}
    </ScrollView>
  );
}
