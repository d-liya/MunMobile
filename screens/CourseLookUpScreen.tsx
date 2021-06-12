import React, { useEffect, useRef, useState } from "react";
import { SafeAreaViewWithFlex, ScrollView, Text, View } from "../components/Themed";
import commonStyles from "../components/Common/Styles";
import { StyleSheet } from "react-native";
import Button from "../components/Common/Button";
import SwipeableView from "../components/Common/SwipeableView";
import { StackNavigationProp } from "@react-navigation/stack";
import { StudentTabParamList } from "../types";
import Navbar from "../components/Navbar/Navbar";
import { useColorScheme } from "../hooks";
import Animated, { useAnimatedStyle, withSpring } from "react-native-reanimated";
import Constants from "expo-constants";
import SwipeableViewWrapper from "../components/Common/SwipeableViewWrapper";
import Picker from "../components/Common/Picker";
import ClassLookUp from "../components/CourseLookUp/ClassLookUp";

type NewsTabNavigationProps = StackNavigationProp<StudentTabParamList, "CourseLookUpScreen">;
type Props = {
  navigation: NewsTabNavigationProps;
};

const pickerTwo = [
  { label: "Fall 2021", value: "fall" },
  { label: "Winter 2021", value: "winter" },
  { label: "Summer 2021", value: "summer" },
];
function CourseLookUpScreen({ navigation }: Props) {
  const [term, setTerm] = useState("");
  const [open, handleOpen] = useState(false);
  const onPress = () => {
    handleOpen(true);
  };
  const theme = useColorScheme();
  return (
    <SwipeableViewWrapper
      bottomSheetChildren={<ClassLookUp />}
      bottomSheetStyle={commonStyles.paddingSides}
      open={open}
      handleOpen={handleOpen}
    >
      <View style={[commonStyles.paddingSides, styles.container]}>
        <Navbar navigation={navigation} />
        <Picker value={term} setValue={setTerm} defaultLabel="Select The Term" items={pickerTwo} />
        <View style={styles.buttonContainer}>
          <Button text="Look Up" onPress={onPress} />
        </View>
      </View>
    </SwipeableViewWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 50,
  },
});

export default CourseLookUpScreen;
