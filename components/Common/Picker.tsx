import { Picker as DefaultPicker } from "@react-native-picker/picker";
import React from "react";
import { useColorScheme } from "../../hooks";
import { View } from "../Themed";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  items: Array<{ label: string; value: string }>;
  defaultLabel?: string;
  style?: {};
};

export default function Picker({
  value,
  setValue,
  items,
  defaultLabel,
  style,
}: Props) {
  const theme = useColorScheme();
  return (
    <DefaultPicker
      selectedValue={value}
      onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
      itemStyle={{
        color: theme === "light" ? "black" : "white",
      }}
      style={style}
    >
      <DefaultPicker.Item
        label={defaultLabel ? defaultLabel : "-- SELECT --"}
        value=""
      />
      {items.length > 0 &&
        items.map((el, i) => (
          <DefaultPicker.Item key={i} label={el.label} value={el.value} />
        ))}
    </DefaultPicker>
  );
}
