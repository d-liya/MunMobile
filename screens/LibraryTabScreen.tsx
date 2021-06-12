import * as React from "react";
import { StyleSheet } from "react-native";
import { View, Text, SafeAreaScrollView } from "../components/Themed";
import commonStyles from "../components/Common/Styles";
import { libraryInfo } from "../assets/temp-data";
import Card from "../components/LibraryTab/Card";
import SwipeableView from "../components/Common/SwipeableView";
import Calendar from "../components/LibraryTab/Calendar";
import { LibraryTabParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
type LibraryTabNaviagtorProps = StackNavigationProp<LibraryTabParamList, "LibraryTabScreen">;
type Props = {
  navigation: LibraryTabNaviagtorProps;
};
export default function LibraryTabScreen({ navigation }: Props) {
  const [open, set] = React.useState(false);
  const handleBookNowBtn = (name: string, description: string, available: string[]) => {
    navigation.navigate("LibraryInfoScreen", {
      name,
      description,
      available,
    });
  };
  return (
    <>
      <SafeAreaScrollView style={[commonStyles.paddingSides]}>
        <Text style={styles.header} text="boldTitle">
          Library
        </Text>
        {libraryInfo.map((el, i) => (
          <Card
            key={i}
            name={el.name}
            description={el.description}
            available={el.available}
            onPress={() => handleBookNowBtn(el.name, el.description, el.available)}
          />
        ))}
      </SafeAreaScrollView>
      <SwipeableView
        children={<Calendar />}
        header="Queen Elizabeth II Library"
        open={open}
        handleOpen={set}
        startPosition="HIDDEN"
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
  },
});
