import React, { useState } from "react";
import { ExpandableSection, TouchableOpacity, View, Text } from "react-native-ui-lib";

type ExpandableCardProps = {
  color: string;
};

export default function ExpandableCard({ color }: ExpandableCardProps) {
  const [expanded, set] = useState(false);
  return (
    <ExpandableSection
      expanded={expanded}
      onPress={() => set(!expanded)}
      sectionHeader={<HeaderSection expanded={!expanded} color={color} />}
    >
      <View style={{ flexWrap: "wrap" }} row>
        <Card title="Date Range" information="From May 10 to June 23" color={color} />
        <Card title="Final Exam Date" information="June 5" color={color} />
        <Card title="Lecture Days" information="Mon , Ths , Fr" color={color} />
        <Card title="Instructor" information="Dr. Example Name" color={color} />
      </View>
    </ExpandableSection>
  );
}

type HeaderSectionProps = {
  expanded: boolean;
  color: string;
};

const HeaderSection = ({ expanded, color }: HeaderSectionProps) => {
  return (
    <View flex row paddingT-10 spread style={{ alignItems: "flex-end" }}>
      <View style={{ maxWidth: "70%" }}>
        <Text text70H>STAT 2550-061</Text>
        {expanded && <Text numberOfLines={1}>Stats For Science Students </Text>}
      </View>
      <View height={50} width={50} backgroundColor={color} br60></View>
    </View>
  );
};

type CardProps = {
  title: string;
  information: string;
  color: string;
};
const Card = ({ title, information, color }: CardProps) => (
  <View
    backgroundColor={color}
    flex
    margin-5
    marginL-0
    padding-5
    centerH
    style={{ borderRadius: 5, minWidth: "35%", maxWidth: "50%" }}
  >
    <Text color="white">{information}</Text>
    <Text color="white" text80H>
      {title}
    </Text>
  </View>
);
