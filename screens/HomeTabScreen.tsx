import React from "react";
import { StyleSheet, ScrollView, Text as DefaultText } from "react-native";
import { View, Text, ScrollBar, Image, Card, Carousel } from "react-native-ui-lib";
import { red } from "../constants/Colors";
import { EvilIcons } from "@expo/vector-icons";
import { SafeAreaViewWithFlex } from "../components/Themed";
export default function HomeTabScreen() {
  return (
    <SafeAreaViewWithFlex>
      <ScrollView>
        <View padding-15>
          <View>
            <Text color={red} text20H>
              News
            </Text>
            {/* <ScrollView horizontal>
            <KeyWord content={"Home"} />
            <KeyWord content={"Campus and Community"} />
            <KeyWord content={"Public Engagement"} />
            <KeyWord content={"Research"} />
            <KeyWord content={"Student Life"} />
            <KeyWord content={"Teaching and Learning"} />
            <KeyWord content={"Special Features"} />
          </ScrollView> */}
          </View>
          <NewsCarousel />
          <Section />
        </View>
      </ScrollView>
    </SafeAreaViewWithFlex>
  );
}

const Section = () => {
  return (
    <View>
      <Text>Campus and Community</Text>
      <ScrollView horizontal>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </ScrollView>
    </View>
  );
};

const KeyWord = ({ content, ...otherProps }: { content: String; otherProps: DefaultText["props"] }) => (
  <Text black text200 style={styles.keyWord} {...otherProps}>
    {content}
  </Text>
);

const HeaderCard = () => {
  return (
    <View center paddingT-5>
      <Image cover height={180} borderRadius={5} source={require("../assets/images/poc.jpg")} style={styles.headerCardImage} />
      <View style={styles.headerCardView}>
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

const images = [require("../assets/images/poc.jpg"), require("../assets/images/ttw.jpg")];

const NewsCarousel = () => {
  return (
    <Carousel containerStyle={{ height: 250 }} loop autoplay>
      {images.map((img, i) => (
        <View flex centerV key={i}>
          <View paddingB-20>
            <Text text200B style={{ paddingBottom: 5, color: red }}>
              Research
            </Text>
            <Text text60L>Proof Of Concept</Text>
          </View>
          <Image style={{ flex: 1, width: "100%", borderRadius: 15 }} source={img} />
        </View>
      ))}
    </Carousel>
  );
};

const NewsCard = () => (
  <Card style={{ width: "45%" }} padding-10 margin-10 enableShadow={false}>
    <Card.Section
      imageStyle={{ width: "100%", height: 150, borderRadius: 5 }}
      center
      centerH
      imageSource={require("../assets/images/ttw.jpg")}
    />
    <Card.Section content={[{ text: "Proof Of Concept" }, { text: "May 5, 2021" }]} />
  </Card>
);

const styles = StyleSheet.create({
  keyWord: {
    padding: 10,
  },
  headerCardView: {
    position: "absolute",
  },
  headerCardImage: {
    position: "relative",
  },
});
