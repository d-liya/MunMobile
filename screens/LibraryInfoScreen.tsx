import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { SafeAreaScrollView, Text, View, SafeAreaViewWithFlex } from "../components/Themed";
import { LibraryTabParamList } from "../types";
import commonStyle from "../components/Common/Styles";
import Navbar from "../components/Navbar/Navbar";
import Calendar from "../components/LibraryTab/Calendar";
import { StyleSheet } from "react-native";

type LibraryInfoNavigationProps = StackNavigationProp<LibraryTabParamList, "LibraryInfoScreen">;
type LibraryInfoRouteProps = RouteProp<LibraryTabParamList, "LibraryInfoScreen">;
type Props = {
  navigation: LibraryInfoNavigationProps;
  route: LibraryInfoRouteProps;
};

export default function LibraryInfoScreen({ navigation, route }: Props) {
  const { name, available, description } = route.params;
  return (
    <>
      <Navbar
        navigation={navigation}
        children={
          <View style={style.navbar}>
            <Text text="semiBoldbodyText" numberOfLines={1}>
              {name}
            </Text>
          </View>
        }
      />
      <SafeAreaScrollView style={[commonStyle.paddingSides, style.scrollContainer]}>
        <View style={style.header}>
          <Text style={{ paddingBottom: 10 }}> {description}</Text>
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
      </SafeAreaScrollView>
    </>
  );
}

const style = StyleSheet.create({
  navbar: {
    alignItems: "center",
    width: "80%",
  },
  scrollContainer: {
    paddingTop: 70,
  },
  header: {
    padding: 20,
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