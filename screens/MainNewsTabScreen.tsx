import * as React from "react";
import { StyleSheet } from "react-native";
import { ActivityIndicator, SafeAreaScrollView } from "../components/Themed";
import { View, Text } from "../components/Themed";
import { FeaturedNews } from "../components/NewsTab/FeaturedNews";
import { News, NewsTabParamList } from "../types";
import { NewsSection } from "../components/NewsTab/NewsSection";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { useEffect } from "react";
import { getNewsAsync } from "../redux/Slices/news";
import { useAppDispatch, useAppSelector } from "../hooks";
import commonStyles from "../components/Common/Styles";

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
    <SafeAreaScrollView style={commonStyles.paddingSides}>
      <Text text="boldMediumTitle" style={styles.headerTextOne}>
        MUN
      </Text>
      <Text text="boldTitle">News</Text>
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
      {newsReducer.status === "LOADING" && <ActivityIndicator style={styles.loaderContainer} />}
    </SafeAreaScrollView>
  );
}

const styles = StyleSheet.create({
  headerTextOne: {
    paddingTop: 15,
  },
  loaderContainer: {
    marginTop: 150,
  },
});
