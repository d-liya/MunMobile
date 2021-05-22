import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Text } from "react-native-ui-lib";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LineSeperator } from "../../LineSeperator";
import Colors from "../../../constants/Colors";
import { useColorScheme } from "../../../hooks";
import { useEffect } from "react";

const SPRING_CONFIG = {
  damping: 50,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};
type Props = {
  header: string;
  children: JSX.Element;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  handleIconPress?: () => void;
  startPosition?: "HIDDEN" | "HALF" | "FULL";
};
export default function SwipeableView({
  header,
  children,
  icon = "caret-up",
  handleIconPress,
  startPosition,
}: Props) {
  const windowHeight = Dimensions.get("window").height;
  let START_VALUE = Math.floor(startPosition === "HIDDEN" ? windowHeight : windowHeight / 2);
  const translateY = useSharedValue(START_VALUE);
  const theme = useColorScheme();
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateY.value = ctx.offsetY + event.translationY;
    },
    onEnd: ({ velocityY, absoluteY }, ctx) => {
      if (velocityY > 0) {
        velocityY > 500
          ? (translateY.value = START_VALUE)
          : absoluteY > START_VALUE - 100
          ? (translateY.value = START_VALUE)
          : (translateY.value = 0);
      } else {
        velocityY < -500
          ? (translateY.value = 0)
          : absoluteY < 250
          ? (translateY.value = 0)
          : (translateY.value = START_VALUE);
      }
    },
  });
  const iconStyles = useAnimatedStyle(() => {
    let rotate = interpolate(translateY.value, [START_VALUE, 0], [0, 180]);
    rotate < 0 ? (rotate = 0) : null;
    rotate > 180 ? (rotate = 180) : null;
    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });
  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(translateY.value, SPRING_CONFIG) }],
    };
  });
  return (
    <PanGestureHandler {...{ onGestureEvent }}>
      <Animated.View style={[style, styles.container, { backgroundColor: Colors[theme].tint }]}>
        <Text style={{ paddingBottom: 20 }} text50>
          {header}
        </Text>
        <Animated.View
          style={[
            {
              position: "absolute",
              right: 30,
              top: 20,
            },
            iconStyles,
          ]}
        >
          <Ionicons onPress={handleIconPress} name={icon} color={Colors[theme].text} size={30} />
        </Animated.View>
        <LineSeperator
          styles={theme === "dark" ? { borderBottomColor: Colors[theme].background } : {}}
        />
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    padding: 20,
    height: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
