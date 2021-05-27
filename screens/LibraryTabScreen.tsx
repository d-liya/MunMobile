import * as React from "react";
import { StyleSheet } from "react-native";
import { View, Text, SafeAreaScrollView } from "../components/Themed";
import commonStyles from "../components/Common/Styles";
import { libraryInfo } from "../assets/temp-data";
import Card from "../components/LibraryTab/Card";

export default function LibraryTabScreen() {
  const handleBookNowBtn = () => {};
  return (
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
          onPress={handleBookNowBtn}
        />
      ))}
    </SafeAreaScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
  },
});
