import React from "react";
import { Image, StyleSheet } from "react-native";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Ionicons,
} from "../components/Themed";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/core";
import { NewsTabParamList } from "../types";
import MarkDown from "../components/NewsTab/MarkDown";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect } from "react";
import { getArticleAsync } from "../redux/Slices/article";
import Constants from "expo-constants";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

type NewsTabNavigationProps = StackNavigationProp<NewsTabParamList, "NewsTabScreen">;
type NewsTabRouteProps = RouteProp<NewsTabParamList, "NewsTabScreen">;
type Props = {
  navigation: NewsTabNavigationProps;
  route: NewsTabRouteProps;
};

const IMAGE_HEIGHT = 250;
export default function NewsTabScreen({ route, navigation }: Props) {
  const dispatch = useAppDispatch();
  const articleRducer = useAppSelector((state) => state.article);
  const { category, title } = route.params;
  const { image, description, markdownText } = articleRducer.article;
  const scrollY = useSharedValue(0);
  useEffect(() => {
    dispatch(getArticleAsync(title, category));
  }, []);

  const handleBackButton = () => {
    navigation.goBack();
  };
  const onScroll = useAnimatedScrollHandler((event, ctx) => {
    scrollY.value = event.contentOffset.y;
  });
  const imageStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [-100, 0],
      [IMAGE_HEIGHT + 100, IMAGE_HEIGHT],
      Extrapolate.CLAMP
    );
    const top = interpolate(scrollY.value, [0, 200], [0, -IMAGE_HEIGHT], Extrapolate.CLAMP);
    return {
      height,
      top,
    };
  });

  const scrollViewStyles = useAnimatedStyle(() => {
    const height = interpolate(scrollY.value, [0, 200], [IMAGE_HEIGHT, 0], Extrapolate.CLAMP);
    return {
      top: height,
    };
  });
  return articleRducer.status === "SUCCEDDED" && markdownText ? (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconWrapper} onPress={handleBackButton}>
        <Ionicons name="arrow-back" size={20} />
      </TouchableOpacity>
      <Animated.Image source={image} style={[styles.image, imageStyle]} />
      <Animated.ScrollView
        style={[StyleSheet.absoluteFill, scrollViewStyles]}
        {...{ onScroll }}
        scrollEventThrottle={1}
      >
        <View style={styles.textView}>
          <Text text="boldMediumTitle">{title}</Text>
          <Text text="bodyText">{description}</Text>
        </View>
        <MarkDown category={category} markdownText={markdownText} />
      </Animated.ScrollView>
    </View>
  ) : (
    <ActivityIndicator style={{ flex: 1, justifyContent: "center" }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: IMAGE_HEIGHT,
  },
  textView: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  iconWrapper: {
    position: "absolute",
    top: Constants.statusBarHeight + 10,
    left: 10,
    zIndex: 100,
    borderRadius: 60,
    padding: 5,
  },
});
