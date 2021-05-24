import React from "react";
import { Image, StyleSheet } from "react-native";
import { View, Text, ScrollView, ActivityIndicator } from "../components/Themed";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/core";
import { NewsTabParamList } from "../types";
import MarkDown from "../components/NewsTab/MarkDown";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect } from "react";
import { getArticleAsync } from "../redux/Slices/article";

type NewsTabNavigationProps = StackNavigationProp<NewsTabParamList, "NewsTabScreen">;
type NewsTabRouteProps = RouteProp<NewsTabParamList, "NewsTabScreen">;
type Props = {
  navigation: NewsTabNavigationProps;
  route: NewsTabRouteProps;
};

export default function NewsTabScreen({ route, navigation }: Props) {
  const dispatch = useAppDispatch();
  const articleRducer = useAppSelector((state) => state.article);
  const { category, title } = route.params;
  useEffect(() => {
    dispatch(getArticleAsync(title, category));
  }, []);
  const { image, description, markdownText } = articleRducer.article;

  return articleRducer.status === "SUCCEDDED" && markdownText ? (
    <ScrollView>
      <Image source={image} style={styles.image} />
      <View style={styles.textView}>
        <Text text="boldMediumTitle">{title}</Text>
        <Text text="bodyText">{description}</Text>
      </View>
      <MarkDown category={category} markdownText={markdownText} />
    </ScrollView>
  ) : (
    <ActivityIndicator style={{ flex: 1, justifyContent: "center" }} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  textView: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
