import * as React from "react";
import { View } from "../Themed";
import Colors from "../../constants/Colors";
import { useColorScheme } from "../../hooks";
type Props = {
  styles?: {};
};
export const LineSeperator = ({ styles }: Props) => {
  const theme = useColorScheme();
  return (
    <View
      style={{
        borderBottomColor: Colors[theme].border,
        borderBottomWidth: 0.5,
        marginLeft: -10,
        marginRight: -10,
        marginBottom: 8,
        ...styles,
      }}
    />
  );
};
