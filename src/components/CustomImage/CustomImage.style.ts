import { StyleSheet } from 'react-native';

import { scale } from '_styles/scaling';
import colors from '_styles/colors';

const styles = () =>
  StyleSheet.create({
    imageStyle: {
      width: scale(24),
      height: scale(24),
      tintColor: colors?.neutralColors?.neutral50
    },
  });

export default styles;
