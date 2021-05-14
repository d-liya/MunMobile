import React from "react";
import { View, Text, Image } from "react-native-ui-lib";
import { SafeAreaScrollView, ScrollView } from "../components/Themed";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/core";
import { NewsTabParamList } from "../types";
import MarkDown from "../components/NewsTab/MarkDown";

type NewsTabNavigationProps = StackNavigationProp<NewsTabParamList, "NewsTabScreen">;
type NewsTabRouteProps = RouteProp<NewsTabParamList, "NewsTabScreen">;
type Props = {
  navigation: NewsTabNavigationProps;
  route: NewsTabRouteProps;
};

export default function NewsTabScreen({ route, navigation }: Props) {
  const { category, title } = route.params;
  return (
    <ScrollView>
      <Image source={require("../assets/images/poc.jpg")} style={{ width: "100%", height: 250 }} />
      <View padding-10 paddingL-20 paddingR-20>
        <Text text50>Proof Of Concept</Text>
        <Text text60M>
          Chemistry researcher receives $655,900 to advance decarbonizing N.L. oil and gas{" "}
        </Text>
      </View>
      <MarkDown category="Research" />
    </ScrollView>
  );
}
