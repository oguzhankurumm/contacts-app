import { StyleSheet } from "react-native";

import colors from "_styles/colors";
import { scale } from "_styles/scaling";
import { TextStyle } from "_styles/typography";

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    headerContainer: {
      paddingHorizontal: scale(12),
      paddingBottom: scale(12),
      backgroundColor: colors?.primaryColors?.primary400,
    },
    contactContainerStyle: {
      padding: scale(8),
    },
    actionButton: {
      width: scale(64),
      height: scale(64),
      borderRadius: scale(32),
      backgroundColor: colors?.primaryColors?.primary400,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: scale(16),
      right: scale(16),
    },
    listHeaderStyle: {
      paddingHorizontal: scale(12),
      paddingVertical: scale(8),
      backgroundColor: colors?.primaryColors?.primary50,
      justifyContent: "center",
    },
    indexContainerStyle: {
      marginRight: scale(8),
    },
    indexLetterStyle: {
      ...TextStyle.bodyMedium,
      color: colors?.primaryColors?.primary300,
    },
  });

export default styles;
