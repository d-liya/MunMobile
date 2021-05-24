import React from "react";
import { ActivityIndicator, View } from "../../Themed";
import Colors from "../../../constants/Colors";
import { useAppSelector, useColorScheme } from "../../../hooks";
import AgendaComponenet from "./AgendaComponent";
import commonStyles from "../../Common/Styles";

export default function Agenda() {
  const theme = useColorScheme();
  const coursesReducer = useAppSelector((state) => state.courses);
  return (
    <>
      {coursesReducer.status === "SUCCEDDED" ? (
        theme === "dark" ? (
          <AgendaComponenet backgroundColor={Colors["dark"].tint} />
        ) : (
          <View style={commonStyles.flex}>
            <AgendaComponenet backgroundColor={Colors["light"].tint} />
          </View>
        )
      ) : (
        <ActivityIndicator style={{ marginTop: 60, backgroundColor: Colors[theme].tint }} />
      )}
    </>
  );
}
