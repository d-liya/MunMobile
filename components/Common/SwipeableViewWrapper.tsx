import Constants from "expo-constants";
import React, { useEffect, useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Colors from "../../constants/Colors";
import { useColorScheme } from "../../hooks";

const SPRING_CONFIG = {
  damping: 50,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};
type Props = {
  bottomSheetChildren: JSX.Element;
  children: JSX.Element;
  open: boolean;
  handleOpen: (val: boolean) => void;
  bottomSheetStyle?: {};
};
export default function SwipeableViewWrapper({
  bottomSheetChildren,
  children,
  open,
  handleOpen,
  bottomSheetStyle,
}: Props) {
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  const START_VALUE = windowHeight;
  const MAX_HEIGHT = 50;
  const translateY = useSharedValue(START_VALUE);
  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(translateY.value, SPRING_CONFIG) }],
    };
  });
  useEffect(() => {
    if (open && handleOpen) {
      translateY.value = MAX_HEIGHT;
      handleOpen(false);
    }
  }, [open]);
  const theme = useColorScheme();
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx: { offsetY: number }) => {
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      if (ctx.offsetY + event.translationY > 5) {
        translateY.value = ctx.offsetY + event.translationY;
      }
    },
    onEnd: ({ velocityY, absoluteY }) => {
      if (velocityY > 0) {
        velocityY > 500
          ? (translateY.value = START_VALUE)
          : absoluteY > START_VALUE - 100
          ? (translateY.value = START_VALUE)
          : (translateY.value = MAX_HEIGHT);
        absoluteY > START_VALUE && translateY.value === START_VALUE
          ? (translateY.value = windowHeight - 140)
          : null;
      } else {
        translateY.value = MAX_HEIGHT;
      }
    },
  });
  const wrapperStyle = useAnimatedStyle(() => {
    const valueTop = interpolate(
      translateY.value,
      [windowHeight, MAX_HEIGHT],
      [0, Constants.statusBarHeight]
    );
    const valueSide = interpolate(translateY.value, [windowHeight, MAX_HEIGHT], [0, 20]);
    return {
      left: withSpring(valueSide, SPRING_CONFIG),
      top: withSpring(valueTop, SPRING_CONFIG),
      width: withSpring(windowWidth - 2 * valueSide, SPRING_CONFIG),
    };
  });

  return (
    <Animated.View style={[styles.wrapper]}>
      <Animated.View style={[styles.container, wrapperStyle]}>
        <View style={styles.khob} />

        {children}
      </Animated.View>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View
          style={[
            styles.bottomSheetContainer,
            style,
            { backgroundColor: Colors[theme].background },
            bottomSheetStyle,
          ]}
        >
          <View style={styles.khob} />
          {bottomSheetChildren}
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  wrapper: {
    flex: 1,
    backgroundColor: "rgba(44,44,46,0.8)",
  },
  bottomSheetContainer: {
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject,
  },

  khob: {
    width: 30,
    height: 5,
    borderRadius: 100,
    backgroundColor: Colors["light"].border,
    alignSelf: "center",
    position: "absolute",
    top: 8,
  },
});
