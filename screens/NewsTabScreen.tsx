import React from "react";
import { View, Text, Image, LoaderScreen } from "react-native-ui-lib";
import { SafeAreaScrollView, ScrollView } from "../components/Themed";
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
      <Image source={image} style={{ width: "100%", height: 250 }} />
      <View padding-10 paddingL-20 paddingR-20>
        <Text text50>{title}</Text>
        <Text text60M>{description}</Text>
      </View>
      <MarkDown category={category} markdownText={markdownText} />
    </ScrollView>
  ) : (
    <LoaderScreen message="Loading.." />
  );
}
