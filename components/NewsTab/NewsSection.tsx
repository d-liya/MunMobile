import React, { FunctionComponent } from "react";
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from "react-native-ui-lib";
import { red } from "../../constants/Colors";
import { News } from "../../types";

type NewsSectionProps = News & TouchableOpacityProps;

export const NewsSection: FunctionComponent<NewsSectionProps> = ({
  category,
  title,
  date,
  image,
  description,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} row spread paddingB-10 marginB-10 flex>
    <View style={{ width: "60%" }} spread>
      <View>
        <Text color={red}>{category}</Text>
        <Text text60M>{title}</Text>
        {description && (
          <Text text80L numberOfLines={3} style={{ paddingTop: 5, paddingBottom: 5 }}>
            {description}
          </Text>
        )}
      </View>
      <View>
        <Text text90L color="gray">
          {date}
        </Text>
      </View>
    </View>
    {image && (
      <Image
        style={{
          width: "35%",
          height: 125,
          resizeMode: "cover",
          borderRadius: 5,
        }}
        source={image}
      />
    )}
  </TouchableOpacity>
);
