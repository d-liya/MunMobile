import * as React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaScrollView } from "../components/Themed";
import { View, Text, LoaderScreen } from "react-native-ui-lib";
import { red } from "../constants/Colors";
import { FeaturedNews } from "../components/NewsTab/FeaturedNews";
import { News, NewsTabParamList } from "../types";
import { NewsSection } from "../components/NewsTab/NewsSection";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { useEffect } from "react";
import { getNewsAsync } from "../redux/Slices/news";
import { useAppDispatch, useAppSelector } from "../hooks";

type MainNewsTabNavigatorProps = StackNavigationProp<NewsTabParamList, "MainNewsTabScreen">;
type MainNewsTabRoute = RouteProp<NewsTabParamList, "MainNewsTabScreen">;
type Props = {
  navigation: MainNewsTabNavigatorProps;
  route: MainNewsTabRoute;
};

export default function MainNewsTabScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();
  const newsReducer = useAppSelector((state) => state.news);
  useEffect(() => {
    dispatch(getNewsAsync());
  }, []);
  const handleOnPress = (category: string, title: string) => {
    navigation.navigate("NewsTabScreen", {
      category,
      title,
    });
  };
  return (
    <SafeAreaScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
      <Text text50 style={{ paddingTop: 15 }}>
        MUN
      </Text>
      <Text text30H>News</Text>
      {newsReducer.status === "SUCCEDDED" && (
        <>
          <FeaturedNews
            title={newsReducer.news[0].title}
            category={newsReducer.news[0].category}
            image={newsReducer.news[0].image}
            description={newsReducer.news[0].description}
            onPress={() => handleOnPress(newsReducer.news[0].category, newsReducer.news[0].title)}
          />
          {newsReducer.news.map(
            (el: News, i: number) =>
              i > 0 && (
                <React.Fragment key={i}>
                  <NewsSection
                    category={el.category}
                    title={el.title}
                    image={el.image}
                    date={el.date}
                    description={el.description}
                    onPress={() => handleOnPress(el.category, el.title)}
                  />
                </React.Fragment>
              )
          )}
        </>
      )}
      {newsReducer.status === "LOADING" && (
        <View marginT-100>
          <LoaderScreen message="Loading.." />
        </View>
      )}
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
