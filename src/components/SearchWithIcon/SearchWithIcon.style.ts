import { StyleSheet } from "react-native";

import { scale } from "_styles/scaling";
import colors from "_styles/colors";

const styles = () =>
  StyleSheet.create({
    rowContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    searchInputContainer: {
      borderWidth: scale(1),
      backgroundColor: `${colors?.otherColors?.white}16`,
      borderColor: `${colors?.otherColors?.white}16`,
    },
    searchIconStyle: {
      marginRight: scale(8),
    },
  });

export default styles;
