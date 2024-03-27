import { scale, verticalScale } from "_styles/scaling";
import { StyleSheet } from "react-native";

const styles = () =>
  StyleSheet.create({
    container: {
      width: scale(165),
      flexDirection: "row",
      paddingVertical: verticalScale(8),
    },
    actionItem: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: scale(12),
      width: scale(50),
    },
  });

export default styles;
