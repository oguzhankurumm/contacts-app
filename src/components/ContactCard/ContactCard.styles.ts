import { StyleSheet } from "react-native";

import { scale, verticalScale } from "_styles/scaling";
import colors from "_styles/colors";

export const styles = () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: colors?.otherColors?.white,
    },
    avatarStyle: {
      width: scale(56),
      height: scale(56),
      borderRadius: scale(28),
    },
    textContainer: {
      flex: 1,
      marginLeft: scale(16),
      marginRight: scale(8),
    },
    phoneNumberText: {
      color: colors?.neutralColors?.neutral300,
      marginTop: verticalScale(4),
    },
  });
