import React from "react";
import { LoaderScreen, View } from "react-native-ui-lib";
import Colors from "../../../constants/Colors";
import { useAppSelector, useColorScheme } from "../../../hooks";
import AgendaComponenet from "./AgendaComponent";

export default function Agenda() {
  const theme = useColorScheme();
  const coursesReducer = useAppSelector((state) => state.courses);
  return (
    <>
      {coursesReducer.status === "SUCCEDDED" ? (
        theme === "dark" ? (
          <AgendaComponenet backgroundColor={Colors["dark"].tint} />
        ) : (
          <View flex>
            <AgendaComponenet backgroundColor={Colors["light"].tint} />
          </View>
        )
      ) : (
        <View marginT-60>
          <LoaderScreen message="Loading.." />
        </View>
      )}
    </>
  );
}
