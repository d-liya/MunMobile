/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import * as React from "react";
import { ScrollView as DefaultScrollView } from "react-native";
import {
  SafeAreaViewProps,
  SafeAreaView as DefaultSafeAreaView,
} from "react-native-safe-area-context";
import { ThemeManager } from "react-native-ui-lib";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Constants from "expo-constants";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ScrollViewProps = ThemeProps & DefaultScrollView["props"];

export function ScrollView(props: ScrollViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  return (
    <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />
  );
}

export function SafeAreaScrollView(props: ScrollViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  return (
    <DefaultScrollView
      style={[
        { backgroundColor, paddingTop: Constants.statusBarHeight },
        style,
      ]}
      {...otherProps}
    />
  );
}

export function SafeAreaViewWithFlex(props: SafeAreaViewProps & ThemeProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  return (
    <DefaultSafeAreaView
      style={[{ backgroundColor, flex: 1 }, style]}
      {...otherProps}
    />
  );
}

export default function useThemedComponents() {
  const color = useColorScheme();
  ThemeManager.setComponentTheme("Text", {
    color: Colors[color].text,
  });
  ThemeManager.setComponentTheme("View", {
    backgroundColor: Colors[color].background,
  });
  ThemeManager.setComponentTheme("TouchableOpacity", {
    backgroundColor: Colors[color].background,
  });
}
