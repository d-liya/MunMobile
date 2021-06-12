import { StackNavigationProp } from "@react-navigation/stack";
import Constants from "expo-constants";
import React from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import BackButton from "../Common/BackButton";
import { Text, TouchableOpacity, View } from "../Themed";

type Props = {
  navigation: any;
  children?: any;
  containerStyle?: any;
  backLabel?: string;
};
// @ts-ignore
export default function Navbar({ navigation, children, containerStyle, backLabel }: Props) {
  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.header, containerStyle]}>
      <TouchableOpacity style={styles.iconStyles} onPress={handleBackButton}>
        <BackButton />
        {backLabel && <Text text="semiBoldbodyText">{backLabel}</Text>}
      </TouchableOpacity>
      {children ? children : null}
    </View>
  );
}
const styles = StyleSheet.create({
  iconStyles: {
    borderRadius: 60,
    padding: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    position: "absolute",
    top: 0,
    paddingTop: Constants.statusBarHeight + 10,
    zIndex: 100,
    flexDirection: "row",
    alignItems: "center",
  },
});
