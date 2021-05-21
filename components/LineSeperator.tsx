import * as React from "react";
import { View } from "react-native-ui-lib";
import Colors from "../constants/Colors";
import { useColorScheme } from "../hooks";
export const LineSeperator = () => {
  const theme = useColorScheme();

  return (
    <View
      style={{
        borderBottomColor: Colors[theme].border,
        borderBottomWidth: 0.5,
        marginLeft: -10,
        marginRight: -10,
        marginBottom: 8,
      }}
    />
  );
};
