import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaViewWithFlex,
  ScrollView,
  Text,
  View,
} from "../components/Themed";
import commonStyles from "../components/Common/Styles";
import { StyleSheet } from "react-native";
import Button from "../components/Common/Button";
import SwipeableView from "../components/Common/SwipeableView";
import { StackNavigationProp } from "@react-navigation/stack";
import { StudentTabParamList } from "../types";
import Navbar from "../components/Navbar/Navbar";
import { useAppDispatch, useAppSelector, useColorScheme } from "../hooks";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import Constants from "expo-constants";
import SwipeableViewWrapper, {
  RefProps,
} from "../components/Common/SwipeableViewWrapper";
import Picker from "../components/Common/Picker";
import ClassLookUp from "../components/CourseLookUp/ClassLookUp";
import { handleTermChange } from "../redux/Slices/course-registration";

type NewsTabNavigationProps = StackNavigationProp<
  StudentTabParamList,
  "CourseLookUpScreen"
>;
type Props = {
  navigation: NewsTabNavigationProps;
};

const pickerTwo = [
  { label: "Fall 2021", value: "Fall 2021" },
  { label: "Winter 2021", value: "Winter 2021" },
  { label: "Summer 2021", value: "Summer 2021" },
];
function CourseLookUpScreen({ navigation }: Props) {
  const { term } = useAppSelector((state) => state.registration);
  const dispatch = useAppDispatch();

  const ref: RefProps = useRef();
  const onPress = () => {
    ref.current.open();
  };
  const theme = useColorScheme();
  return (
    <SwipeableViewWrapper
      bottomSheetChildren={<ClassLookUp />}
      bottomSheetStyle={commonStyles.paddingSides}
      ref={ref}
      style={commonStyles.paddingSides}
    >
      <>
        <Navbar
          containerStyle={styles.containerStyle}
          navigation={navigation}
        />
        <Text text="boldMediumTitle">Course Look Up</Text>
        <Picker
          value={term}
          setValue={(value) => dispatch(handleTermChange(value))}
          defaultLabel="Select The Term"
          items={pickerTwo}
        />
        <View style={styles.buttonContainer}>
          <Button text="Look Up" onPress={onPress} disabled={term === ""} />
        </View>
      </>
    </SwipeableViewWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 50,
  },
  containerStyle: {
    position: "relative",
    marginTop: 5,
    marginLeft: -15,
    padding: 0,
    backgroundColor: "transparent",
  },
});

export default CourseLookUpScreen;
