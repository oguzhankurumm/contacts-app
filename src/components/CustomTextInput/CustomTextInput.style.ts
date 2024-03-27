import { StyleSheet } from "react-native";

import { scale, verticalScale } from "_styles/scaling";
import { TextStyle } from "_styles/typography";
import colors from "_styles/colors";

const styles = () =>
  StyleSheet.create({
    inputContainer: {
      padding: scale(12),
      minHeight: verticalScale(48),
      height: "auto",
      flexDirection: "row",
      alignItems: "center",
      borderRadius: scale(12),
      borderWidth: scale(1),
      borderColor: colors?.otherColors?.divider,
    },
    focusedInput: {
      backgroundColor: colors?.primaryColors?.primary50,
      borderColor: colors?.primaryColors?.primary400,
    },
    errorStyle: {
      backgroundColor: colors?.otherColors?.danger,
      borderColor: colors?.otherColors?.danger,
    },
    inputStyle: {
      ...TextStyle?.bodyLargeRegular,
      color: colors?.neutralColors?.neutral900,
      flex: 1,
      textAlign: "left",
    },
    disabledStyle: {
      backgroundColor: colors?.neutralColors?.neutral50,
      borderColor: colors?.neutralColors?.neutral50,
    },
    disabledInput: {
      ...TextStyle.bodyLargeRegular,
      flex: 1,
      color: colors?.neutralColors?.neutral400,
      textAlign: "left",
    },
  });

export default styles;
