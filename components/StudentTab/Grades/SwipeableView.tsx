import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { createContext } from "react";

export default function SwipeableView({ childern }) {
  const translateY = useSharedValue(0);
  //   const velocityY = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateY.value = ctx.offsetY + event.translationY;
    },
    onEnd: ({ velocityX, velocityY }, ctx) => {
      translateY.value = withDecay({ velocity: velocityY, clamp: [-200, 200] });
    },
  });
  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  return (
    <PanGestureHandler {...{ onGestureEvent }}>
      <Animated.View style={[{ ...StyleSheet.absoluteFillObject, ...style }]}>
        {childern}
      </Animated.View>
    </PanGestureHandler>
  );
}
