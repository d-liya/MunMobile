import React, { useEffect, useState } from "react";
import { SafeAreaViewWithFlex, ScrollView, Text, View } from "../components/Themed";
import commonStyles from "../components/Common/Styles";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import Button from "../components/Common/Button";
import SwipeableView from "../components/Common/SwipeableView";
import { StackNavigationProp } from "@react-navigation/stack";
import { StudentTabParamList } from "../types";
import Navbar from "../components/Navbar/Navbar";
import { useColorScheme } from "../hooks";
import Animated, { useAnimatedStyle, withSpring } from "react-native-reanimated";
import Constants from "expo-constants";

type NewsTabNavigationProps = StackNavigationProp<StudentTabParamList, "CourseLookUpScreen">;
type Props = {
  navigation: NewsTabNavigationProps;
};

function CourseLookUpScreen({ navigation }: Props) {
  const [term, setTerm] = useState(null);
  const [course, setCourse] = useState(0);
  const [open, handleOpen] = useState(false);
  const onPress = () => {
    handleOpen(true);
  };
  const theme = useColorScheme();
  return (
    <View style={styles.backgroundWrapper}>
      <View style={[commonStyles.paddingSides, styles.container]}>
        <Navbar navigation={navigation} containerStyle={styles.navbar} />
        <Picker
          itemStyle={{
            color: theme === "light" ? "black" : "white",
          }}
          selectedValue={term}
          onValueChange={(itemValue, itemIndex) => setTerm(itemValue)}
        >
          <Picker.Item label="Select The Term" value="" />
          <Picker.Item label="Fall 2021" value="fall 2021" />
          <Picker.Item label="Winter 2021" value="winter 2021" />
        </Picker>
        <View style={styles.buttonContainer}>
          <Button text="Look Up" onPress={onPress} />
        </View>
      </View>
      <SwipeableView
        header="Look-Up Class to Add"
        children={
          <Picker
            selectedValue={course}
            onValueChange={(itemValue, itemIndex) => setCourse(itemValue)}
          >
            <Picker.Item label="-- SELECT --" value="0" />
            <Picker.Item label="Computer Science" value="comp" />
            <Picker.Item label="Mathematics" value="math" />
            <Picker.Item label="Physics" value="physics" />
          </Picker>
        }
        startPosition="HIDDEN"
        open={open}
        handleOpen={handleOpen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    marginTop: 50,
  },
  navbar: {
    // position: "relative",
    // height: 50,
  },
  backgroundWrapper: {
    flex: 1,
    backgroundColor: "rgb(229,229,234)",
  },
});

export default CourseLookUpScreen;
