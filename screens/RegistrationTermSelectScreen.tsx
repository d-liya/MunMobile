import React from "react";
import { Text, View } from "../components/Themed";
import commonStyles from "../components/Common/Styles";
import { StyleSheet } from "react-native";
import Button from "../components/Common/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { RegistrationStackScreens } from "../types";
import Navbar from "../components/Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../hooks";
import Picker from "../components/Common/Picker";
import { handleTermChange } from "../redux/Slices/course-registration";

type NewsTabNavigationProps = StackNavigationProp<
  RegistrationStackScreens,
  "RegistrationTermSelectScreen"
>;
type Props = {
  navigation: NewsTabNavigationProps;
};

const pickerTwo = [
  { label: "Fall 2021", value: "Fall 2021" },
  { label: "Winter 2021", value: "Winter 2021" },
  { label: "Summer 2021", value: "Summer 2021" },
];
function RegistrationTermSelectScreen({ navigation }: Props) {
  const { term } = useAppSelector((state) => state.registration);
  const dispatch = useAppDispatch();

  const onPress = () => {
    navigation.push("RegistrationInfoScreen");
  };
  return (
    <View style={[commonStyles.paddingSides, styles.container]}>
      <Navbar containerStyle={styles.containerStyle} navigation={navigation} />
      <Text text="boldMediumTitle" style={{ paddingTop: 10 }}>
        Select The Term
      </Text>
      <Picker
        value={term}
        setValue={(value) => dispatch(handleTermChange(value))}
        defaultLabel="Select The Term"
        items={pickerTwo}
      />
      <View style={styles.buttonContainer}>
        <Button text="Select" onPress={onPress} disabled={term === ""} />
      </View>
    </View>
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

export default RegistrationTermSelectScreen;
