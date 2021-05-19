import React, { FunctionComponent } from "react";
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from "react-native-ui-lib";
import { red } from "../../constants/Colors";
import { News } from "../../types";

type FeaturedNewsProps = News & TouchableOpacityProps;

export const FeaturedNews: FunctionComponent<FeaturedNewsProps> = ({
  image,
  title,
  category,
  description,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} flex paddingT-10 paddingB-10>
      <Image style={{ flex: 1, width: "100%", borderRadius: 6, height: 200 }} source={image} />
      <View paddingT-10 paddingB-10>
        <Text text200B style={{ paddingBottom: 5, color: red }}>
          {category}
        </Text>
        <Text text50>{title}</Text>
        <Text text60M>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};
