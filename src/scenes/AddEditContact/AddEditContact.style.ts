import { StyleSheet } from 'react-native';

import colors from '_styles/colors';
import { scale, verticalScale } from '_styles/scaling';

const styles = () =>
  StyleSheet.create({
    headerContainer: {
      width: '100%',
      height: scale(100),
      backgroundColor: colors?.primaryColors?.primary400,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageStyle: {
      top: verticalScale(50),
      width: scale(148),
      height: scale(148),
      borderRadius: scale(74),
      borderColor: colors?.otherColors?.white,
    },
    contentContainer: {
      flex: 1,
      width: '100%',
      paddingHorizontal: scale(24),
      marginTop: verticalScale(94),
    },
    inputContainer: {
      marginTop: verticalScale(24),
    },
    buttonContainer: {
      marginTop: verticalScale(24),
      marginHorizontal: verticalScale(24),
    },
  });

export default styles;
