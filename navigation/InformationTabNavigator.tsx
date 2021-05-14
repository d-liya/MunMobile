import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { InfromationTabParamList } from "../types";
import InformationTabScreen from "../screens/InfromationTabScreen";

const InformtaionTabStack = createStackNavigator<InfromationTabParamList>();

export default function InformationTabNaviagtor() {
  return (
    <InformtaionTabStack.Navigator screenOptions={{ headerShown: false }}>
      <InformtaionTabStack.Screen
        name="InformationTabScreen"
        component={InformationTabScreen}
      />
    </InformtaionTabStack.Navigator>
  );
}
