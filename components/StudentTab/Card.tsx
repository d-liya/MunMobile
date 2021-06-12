import React from "react";
import { TouchableOpacity, Text, View, TouchableOpacityProps } from "../Themed";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import Colors, { border, red } from "../../constants/Colors";
import { useColorScheme } from "../../hooks";
import { StyleSheet } from "react-native";
type Props = {
  iconName: string;
  text: string;
} & TouchableOpacityProps;
export default function Card({ iconName, text, ...otherProps }: Props) {
  const theme = useColorScheme();
  return (
    <TouchableOpacity style={styles.container} {...otherProps}>
      <View tintColor style={[styles.iconView]}>
        <FontAwesome5 name={iconName} size={30} color={red} />
      </View>
      <View style={[styles.textView, { borderColor: Colors[theme].border }]}>
        <Text text="semiBoldbodyText">{text}</Text>
      </View>
    </TouchableOpacity>
  );

  // return (
  //   <TouchableOpacity style={styles.container} {...otherProps}>
  // <View tintColor style={[styles.iconView]}>
  //   <FontAwesome5 name={iconName} size={40} color={red} />
  // </View>
  //     <View
  //       style={[
  //         styles.textView,
  //         Platform.OS === "ios"
  //           ? {
  //               borderBottomWidth: 1,
  //               borderBottomColor: Colors[theme].border,
  //               marginRight: -100,
  //             }
  //           : {},
  //       ]}
  //     >
  //       <Text text="semiBoldbodyText">{text}</Text>
  //     </View>
  //     <Ionicons name="chevron-forward-sharp" size={20} color={Colors[theme].border} />
  //   </TouchableOpacity>
  // );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flexDirection: "row",
  },
  iconView: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 6,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  textView: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: "center",
    borderWidth: Platform.OS === "ios" ? 0.7 : 0.5,
    borderLeftWidth: 0,
    borderRadius: 6,
  },
});
