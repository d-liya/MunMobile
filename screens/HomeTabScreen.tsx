import * as React from "react";
import { StyleSheet, ScrollView, Text as DefaultText } from "react-native";
import { View, Text, ScrollBar, Image, Card } from "react-native-ui-lib";
import { SafeAreaView } from "react-native-safe-area-context";
import { red } from "../constants/Colors";
import { EvilIcons } from "@expo/vector-icons";

export default function HomeTabScreen() {
  return (
    <View flex>
      <View backgroundColor={red} padding-15 style={styles.brB}>
        <View paddingT-20>
          <Text text20H white>
            News
          </Text>
          <ScrollView horizontal>
            <KeyWord content={"Campus and Community"} />
            <KeyWord content={"Public Engagement"} />
            <KeyWord content={"Research"} />
            <KeyWord content={"Student Life"} />
            <KeyWord content={"Teaching and Learning"} />
            <KeyWord content={"Special Features"} />
          </ScrollView>
        </View>
        <HeaderCard />
      </View>
      <View></View>
    </View>
  );
}

const KeyWord = ({ content, ...otherProps }: { content: String; otherProps: DefaultText["props"] }) => (
  <Text white text200 style={styles.keyWord} {...otherProps}>
    {content}
  </Text>
);

const HeaderCard = () => {
  return (
    <View center paddingT-5>
      <Image cover height={180} borderRadius={5} source={require("../assets/images/poc.jpg")} style={styles.headerCardImage} />
      <View backgroundColor="white" style={styles.headerCardView}>
        <Text color={red}>Research</Text>
        <Text text60M>Proof Of Concept</Text>
        <View row centerV paddingT-5>
          <EvilIcons name="clock" size={24} color="black" style={{ marginRight: 5 }} />
          <Text grey10>May 5, 2021</Text>
        </View>
      </View>
    </View>
  );
};

const NewsCard = () => (
  <Card>
    <Card.Section imageSource={require("../assets/images/ttw.jpg")} />
    <Card.Section content={[{ text: "Proof Of Concept" }, { text: "May 5, 2021" }]} />
  </Card>
);

const styles = StyleSheet.create({
  brB: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  keyWord: {
    padding: 10,
  },
  headerCardView: {
    position: "absolute",
    bottom: -40,
    padding: 20,
    borderRadius: 5,
  },
  headerCardImage: {
    position: "relative",
  },
});
