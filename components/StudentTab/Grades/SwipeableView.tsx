import React from "react";
import Animated from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { ScrollView } from "../../Themed";

export default function SwipeableView({ childern }) {
  return (
    <PanGestureHandler>
      <Animated.ScrollView style={{ backgroundColor: "blue" }}>{childern}</Animated.ScrollView>
    </PanGestureHandler>
  );
}
