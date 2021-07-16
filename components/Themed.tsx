/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import * as React from "react";
import {
  ScrollView as DefaultScrollView,
  Text as DefaultText,
  View as DefaultView,
  TouchableOpacity as DefaultTouchableOpacity,
  ActivityIndicator as DefaultActivityIndicator,
  TextInput as DefaultTextInput,
} from "react-native";
import {
  SafeAreaViewProps,
  SafeAreaView as DefaultSafeAreaView,
} from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import { useColorScheme } from "../hooks";
import Constants from "expo-constants";
import {
  FontAwesome5 as FAIcons5,
  Ionicons as DefaultIoniconcs,
} from "@expo/vector-icons";
import Typography from "../constants/Typography";

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

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ScrollViewProps = ThemeProps &
  DefaultScrollView["props"] & { tintColor?: boolean };

export function ScrollView(props: ScrollViewProps) {
  const { style, lightColor, darkColor, tintColor, ...otherProps } = props;
  const backgroundColor = tintColor
    ? useThemeColor({ light: lightColor, dark: darkColor }, "tint")
    : useThemeColor({ light: lightColor, dark: darkColor }, "background");
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

export type FontAwesome5Props = ThemeProps &
  React.ComponentProps<typeof FAIcons5>;
export function FontAwesome5(props: FontAwesome5Props) {
  const { lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  return <FAIcons5 color={color} {...otherProps} />;
}

export type IoniconsProps = ThemeProps & React.ComponentProps<typeof FAIcons5>;
export function Ionicons(props: IoniconsProps) {
  const { lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  return <DefaultIoniconcs color={color} {...otherProps} />;
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

export type TextProps = ThemeProps &
  DefaultText["props"] & { color?: string; text?: keyof typeof Typography };
export function Text(props: TextProps) {
  const { style, lightColor, darkColor, color, text, ...otherProps } = props;
  const themecolor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );
  return (
    <DefaultText
      style={[
        { color: color ? color : themecolor },
        style,
        text ? Typography[text] : Typography["bodyText"],
      ]}
      {...otherProps}
    />
  );
}

export type ViewProps = ThemeProps &
  DefaultView["props"] & { tintColor?: boolean };
export function View(props: ViewProps) {
  const { style, lightColor, darkColor, tintColor, ...otherProps } = props;
  const backgroundColor = tintColor
    ? useThemeColor({ light: lightColor, dark: darkColor }, "tint")
    : useThemeColor({ light: lightColor, dark: darkColor }, "background");

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export type TextInputProps = ThemeProps &
  DefaultTextInput["props"] & { tintColor?: boolean };

export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, tintColor, ...otherProps } = props;
  const backgroundColor = tintColor
    ? useThemeColor({ light: lightColor, dark: darkColor }, "tint")
    : useThemeColor({ light: lightColor, dark: darkColor }, "background");
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  return (
    <DefaultTextInput
      style={[{ backgroundColor, color }, style]}
      {...otherProps}
    />
  );
}

export type TouchableOpacityProps = ThemeProps &
  DefaultTouchableOpacity["props"];
export function TouchableOpacity(props: TouchableOpacityProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  return (
    <DefaultTouchableOpacity
      style={[{ backgroundColor }, style]}
      {...otherProps}
    />
  );
}
export type ActivityIndicatorProps = ThemeProps &
  DefaultActivityIndicator["props"];
export function ActivityIndicator(props: ActivityIndicatorProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  return (
    <DefaultActivityIndicator
      style={[{ backgroundColor }, style]}
      {...otherProps}
      size="large"
    />
  );
}
