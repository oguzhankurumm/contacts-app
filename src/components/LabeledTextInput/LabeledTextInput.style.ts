import { StyleSheet } from 'react-native';

import { verticalScale } from '_styles/scaling';
import colors from '_styles/colors';

const styles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'flex-start',
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
    subContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputContainerStyle: { 
      flex: 1
    },
  });

export default styles;
