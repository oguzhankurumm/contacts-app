import { Platform, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import colors from '_styles/colors';
import { verticalScale } from '_styles/scaling';

const styles = () =>
  StyleSheet.create({
    mainContainerStyle: {
      flex: 1,
      backgroundColor: colors?.otherColors?.white,
    },
    containerStyle: {
      flex: 1,
      paddingBottom: verticalScale(20)
    },
    body: {
      flex: 1,
      ...Platform.select({
        ios: {
          paddingTop: 0,
        },
        android: {
          paddingTop: getStatusBarHeight(),
        },
        default: {
          paddingTop: 0,
        },
      }),
    },
  });

export default styles;
