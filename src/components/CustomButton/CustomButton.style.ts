import { StyleSheet } from 'react-native';

import { scale } from '_styles/scaling';
import colors from '_styles/colors';

const styles = () =>
  StyleSheet.create({
    containerStyle: {
      backgroundColor: colors?.primaryColors?.primary400,
      borderRadius: scale(16),
      padding: scale(18),
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
       color: colors?.otherColors?.white 
    },
    disabledStyle: {
      backgroundColor: colors?.primaryColors?.primary200,
    },
  });

export default styles;
