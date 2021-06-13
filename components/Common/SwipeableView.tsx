import React from "react";
import { Platform, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Text, View } from "../Themed";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LineSeperator } from "./LineSeperator";
import Colors from "../../constants/Colors";
import { useColorScheme } from "../../hooks";
import { useEffect } from "react";
import Constants from "expo-constants";

const SPRING_CONFIG = {
  damping: 50,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};
type PositionProps = "HIDDEN" | "HALF";

type Props = {
  header?: string;
  children: JSX.Element;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  startPosition?: PositionProps;
  handleOpen?: (el: boolean) => void;
  open?: boolean;
  headerLineSeperator?: boolean;
};
const _handlePosition = (position: PositionProps, height: number) => {
  switch (position) {
    case "HIDDEN":
      return height;
    case "HALF":
      return height / 2;
  }
};
export default function SwipeableView({
  header,
  children,
  icon,
  startPosition = "HALF",
  open,
  handleOpen,
  headerLineSeperator,
}: Props) {
  const windowHeight =
    Platform.OS == "ios" ? Dimensions.get("window").height : Dimensions.get("screen").height;
  let START_VALUE = _handlePosition(startPosition, windowHeight);
  const translateY = useSharedValue(START_VALUE);
  const handleViewState = () => {
    if (typeof open === "boolean" && handleOpen) {
      open ? (translateY.value = 100) : (translateY.value = START_VALUE);
    }
  };
  useEffect(() => {
    if (open && handleOpen) {
      handleViewState();
      handleOpen(false);
    }
  }, [open]);
  const handleIconPress = () => {
    if (open && handleOpen) {
      handleViewState();
      handleOpen(false);
    } else {
      translateY.value === 100 ? (translateY.value = START_VALUE) : (translateY.value = 100);
    }
  };

  const theme = useColorScheme();

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx: { offsetY: number }) => {
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      if (ctx.offsetY + event.translationY > 0) {
        translateY.value = ctx.offsetY + event.translationY;
      }
    },
    onEnd: ({ velocityY, absoluteY, velocityX }, ctx) => {
      if (velocityY > 0) {
        velocityY > 500
          ? (translateY.value = START_VALUE)
          : absoluteY > START_VALUE - 100
          ? (translateY.value = START_VALUE)
          : (translateY.value = 100);
        absoluteY > START_VALUE && translateY.value === START_VALUE
          ? (translateY.value = windowHeight - 140)
          : null;
      } else {
        absoluteY < START_VALUE
          ? velocityY < -500
            ? (translateY.value = 100)
            : absoluteY < 250
            ? (translateY.value = 100)
            : (translateY.value = START_VALUE)
          : (translateY.value = START_VALUE);
      }
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(translateY.value, SPRING_CONFIG) }],
    };
  });
  return (
    <>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View style={[style, styles.container, { backgroundColor: Colors[theme].tint }]}>
          <View style={styles.khob} />
          {header && (
            <Text style={styles.headerText} text="boldMediumTitle" numberOfLines={1}>
              {header}
            </Text>
          )}
          {icon && (
            <Ionicons
              style={styles.icon}
              onPress={handleIconPress}
              name={icon}
              color={Colors[theme].text}
              size={25}
            />
          )}
          {headerLineSeperator && (
            <LineSeperator
              styles={theme === "dark" ? { borderBottomColor: Colors[theme].background } : {}}
            />
          )}
          {children}
        </Animated.View>
      </PanGestureHandler>
    </>
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
  background: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    backgroundColor: "black",
    opacity: 0.5,
  },
  headerText: {
    paddingBottom: 20,
  },
  icon: {
    position: "absolute",
    right: 30,
    top: 20,
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
