import React from "react";
import { TouchableOpacity, Text, Colors, View } from "react-native-ui-lib";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native-ui-lib";
import { Platform } from "react-native";
import { border, red } from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
type Props = {
  iconName: string;
  text: string;
} & TouchableOpacityProps;
export default function Card({ iconName, text, ...otherProps }: Props) {
  const theme = useColorScheme();
  return (
    <TouchableOpacity flex margin-5 row center {...otherProps}>
      <View
        backgroundColor={theme === "light" ? Colors.grey80 : "rgb(28,28,30)"}
        center
        width={100}
        height={100}
        br20
        marginR-10
      >
        <FontAwesome5 name={iconName} size={40} color={red} />
      </View>
      <View
        style={
          Platform.OS === "ios"
            ? {
                borderBottomWidth: 1,
                borderBottomColor: theme === "light" ? Colors.grey50 : "rgb(28,28,30)",
                marginRight: -100,
              }
            : {}
        }
        height={100}
        br20
        centerV
        flex
      >
        <Text text70L>{text}</Text>
      </View>
      <Ionicons
        name="chevron-forward-sharp"
        size={20}
        color={theme === "light" ? Colors.grey50 : "rgb(28,28,30)"}
      />
    </TouchableOpacity>
  );
}
