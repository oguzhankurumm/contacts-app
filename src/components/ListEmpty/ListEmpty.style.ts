import { StyleSheet } from "react-native";

import { height, verticalScale } from "_styles/scaling";
import colors from "_styles/colors";

const styles = () =>
  StyleSheet.create({
    container: {
      paddingTop: verticalScale(height * 0.25),
      alignItems: "center",
      justifyContent: "center",
      gap: verticalScale(8),
    },
    textStyle: {
      color: colors?.primaryColors?.primary300,
      textAlign: "center",
    },
    descriptionStyle: {
      color: colors?.neutralColors?.neutral300,
      textAlign: "center",
    },
  });

export default styles;
