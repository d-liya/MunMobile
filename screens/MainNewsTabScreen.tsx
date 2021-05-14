import * as React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaScrollView } from "../components/Themed";
import { View, Text } from "react-native-ui-lib";
import { red } from "../constants/Colors";
import { FeaturedNews } from "../components/NewsTab/FeaturedNews";
import { News, NewsTabParamList } from "../types";
import { NewsSection } from "../components/NewsTab/NewsSection";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

type MainNewsTabNavigatorProps = StackNavigationProp<NewsTabParamList, "MainNewsTabScreen">;
type MainNewsTabRoute = RouteProp<NewsTabParamList, "MainNewsTabScreen">;
type Props = {
  navigation: MainNewsTabNavigatorProps;
  route: MainNewsTabRoute;
};

export default function MainNewsTabScreen({ navigation }: Props) {
  const handleOnPress = () => {
    navigation.navigate("NewsTabScreen", {
      category: "Research",
      title: "Testing the water",
    });
  };
  return (
    <SafeAreaScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
      <Text color={red} text20H style={{ paddingTop: 15 }}>
        News
      </Text>
      <FeaturedNews
        title={newsInfo[1].title}
        category={newsInfo[1].category}
        image={newsInfo[1].image}
        description={newsInfo[1].description}
        onPress={handleOnPress}
      />
      {newsInfo.map((el: News, i: number) => (
        <React.Fragment key={i}>
          {/* <LineSeperator /> */}
          <NewsSection
            category={el.category}
            title={el.title}
            image={el.image}
            date={el.date}
            description={el.description}
          />
        </React.Fragment>
      ))}
    </SafeAreaScrollView>
  );
}

const newsInfo = [
  {
    title: "Proof of concept",
    category: "Research",
    image: require("../assets/images/poc.jpg"),
    date: "May 6, 2021",
    description:
      "Chemistry researcher receives $655,900 to advance decarbonizing N.L. oil and gas ",
  },
  {
    title: "Testing the water",
    category: "Research",
    image: require("../assets/images/ttw.jpg"),
    date: "May 12, 2021",
    description:
      "Researchers, fish harvesters rely on Marine Institute’s flume tank for safe, accessible trial runs",
  },
  {
    title: "Funding available",
    category: "Campus And Community",
    image: require("../assets/images/fa.jpg"),
    date: "May 18, 2021",
    description: "Deadline June 15 for conference, cross-campus initiatives funds",
  },
];
