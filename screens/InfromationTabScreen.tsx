import * as React from "react";
import { StyleSheet } from "react-native";
import { View, Text, SafeAreaViewWithFlex, SafeAreaScrollView } from "../components/Themed";
import commonStyles from "../components/Common/Styles";
import HeaderCard from "../components/InformationTab/MapCard";
import { StackNavigationProp } from "@react-navigation/stack";
import { InfromationTabParamList } from "../types";

type InformationTabNaviagtorProps = StackNavigationProp<
  InfromationTabParamList,
  "InformationTabScreen"
>;
type Props = {
  navigation: InformationTabNaviagtorProps;
};
export default function InformationTabScreen({ navigation }: Props) {
  const handleMapView = () => {
    navigation.navigate("MapScreen");
  };
  return (
    <SafeAreaScrollView style={[commonStyles.paddingSides]}>
      <Text style={styles.header} text="boldTitle">
        General
      </Text>
      <HeaderCard onPress={handleMapView} />
    </SafeAreaScrollView>
  );
  9;
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
  },
});
