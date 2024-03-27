import { StyleSheet } from "react-native";

import { scale, verticalScale } from "_styles/scaling";
import { TextStyle } from "_styles/typography";
import colors from "_styles/colors";

const styles = () =>
  StyleSheet.create({
    container: {
      padding: scale(12),
      height: verticalScale(48),
      borderRadius: scale(12),
      borderWidth: scale(1),
      borderColor: colors?.otherColors?.divider,
    },
    disabledContainer: {
      backgroundColor: colors?.neutralColors?.neutral50,
      borderColor: colors?.neutralColors?.neutral50,
    },
    disabledText: {
      color: colors?.neutralColors?.neutral400,
    },
    placeholderStyle: {
      ...TextStyle?.bodyLargeRegular,
      color: colors?.neutralColors?.neutral300,
      textAlign: "left",
    },
    selectedTextStyle: {
      ...TextStyle?.bodyLargeRegular,
      color: colors?.neutralColors?.neutral900,
      textAlign: "left",
    },
    searchInputStyle: {
      ...TextStyle?.bodyMediumRegular,
      color: colors?.neutralColors?.neutral900,
    },
    titleStyle: {
      color: colors?.neutralColors?.neutral600,
      marginBottom: verticalScale(8),
    },
    errorHintTextStyle: {
      color: colors?.otherColors?.danger,
      marginTop: verticalScale(8),
    },
    hintTextStyle: {
      color: colors?.neutralColors?.neutral600,
      marginTop: verticalScale(8),
    },
  });

export default styles;
