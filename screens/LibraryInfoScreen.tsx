import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  ScrollView,
  Text,
  View,
  SafeAreaViewWithFlex,
} from "../components/Themed";
import { LibraryTabParamList } from "../types";
import commonStyle from "../components/Common/Styles";
import Navbar from "../components/Navbar/Navbar";
import Calendar from "../components/LibraryTab/Calendar";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

type LibraryInfoNavigationProps = StackNavigationProp<
  LibraryTabParamList,
  "LibraryInfoScreen"
>;
type LibraryInfoRouteProps = RouteProp<
  LibraryTabParamList,
  "LibraryInfoScreen"
>;
type Props = {
  navigation: LibraryInfoNavigationProps;
  route: LibraryInfoRouteProps;
};

export default function LibraryInfoScreen({ navigation, route }: Props) {
  const { name, available, description } = route.params;
  return (
    <>
      <Navbar navigation={navigation} />
      <ScrollView style={[commonStyle.paddingSides, style.scrollContainer]}>
        <Text text="boldMediumTitle">{name}</Text>
        <View style={style.header}>
          <Text style={{ paddingBottom: 10 }}>{description}</Text>
          {available.length > 0 &&
            available.map((el, i) => (
              <Text text="secondaryText" key={i}>
                {el}
              </Text>
            ))}
          <View style={style.labelList}>
            <Label name="Available" color="green" />
            <Label name="Booked" color="red" />
            <Label name="Your Booking" color="orange" />
          </View>
        </View>
        <Calendar />
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  navbar: {
    alignItems: "center",
    width: "80%",
  },
  scrollContainer: {
    paddingTop: Constants.statusBarHeight + 50,
  },
  header: {
    paddingTop: 20,
  },
  labelList: {
    paddingTop: 30,
  },
  labelDot: {
    width: 20,
    height: 20,
    marginRight: 20,
    borderRadius: 5,
  },
  label: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
  },
});

const Label = ({ name, color }: { name: string; color: string }) => (
  <View style={style.label}>
    <View style={{ backgroundColor: color, ...style.labelDot }} />
    <Text text="secondaryText">{name}</Text>
  </View>
);
