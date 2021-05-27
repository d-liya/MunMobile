import * as React from "react";
import { StyleSheet } from "react-native";
import { View, Text, SafeAreaViewWithFlex, SafeAreaScrollView } from "../components/Themed";
import commonStyles from "../components/Common/Styles";
import HeaderCard from "../components/InformationTab/MapCard";
import { StackNavigationProp } from "@react-navigation/stack";
import { InfromationTabParamList } from "../types";
import TouchableCard from "../components/InformationTab/TouchableCard";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { red } from "../constants/Colors";

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
  const handleButtonPress = () => {};
  return (
    <SafeAreaScrollView style={[commonStyles.paddingSides]}>
      <Text style={styles.header} text="boldTitle">
        General
      </Text>
      <HeaderCard onPress={handleMapView} />
      <View style={styles.btnView}>
        <TouchableCard
          icon={<Entypo name="phone" size={34} color={red} />}
          name="Emergency Numbers"
          onPress={handleButtonPress}
        />
        <TouchableCard
          icon={<AntDesign name="contacts" size={34} color={red} />}
          name="Directory"
          onPress={handleButtonPress}
        />
      </View>
    </SafeAreaScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
  },
  btnView: {
    width: "100%",
    flex: 1,
    marginTop: 20,
    flexDirection: "row",
  },
});
