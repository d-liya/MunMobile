import { useEffect } from "react";
import { Typography } from "react-native-ui-lib";

export default function useTypography() {
  useEffect(() => {
    Typography.loadTypographies({
      h1: { fontSize: 58, fontWeight: "300", lineHeight: 80 },
      h2: { fontSize: 46, fontWeight: "300", lineHeight: 64 },
    });
  }, []);
}
