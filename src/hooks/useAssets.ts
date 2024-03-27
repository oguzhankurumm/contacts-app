import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import * as Font from 'expo-font';

import fontsObject from '_assets/fonts/fontsObject';

const SFProDisplay = fontsObject?.SFProDisplay;
const SFProDisplayMedium = fontsObject?.SFProDisplayMedium;
const SFProDisplaySemibold = fontsObject?.SFProDisplaySemibold;
const SFProDisplayBold = fontsObject?.SFProDisplayBold;

export default function useAssets() {
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          'SFProDisplay-Regular': SFProDisplay,
          'SFProDisplay-Medium': SFProDisplayMedium,
          'SFProDisplay-Semibold': SFProDisplaySemibold,
          'SFProDisplay-Bold': SFProDisplayBold,
        });
      } catch (e) {
        Alert.alert('Failed to load assets', (e as Error).message);
      } finally {
        setIsAssetsLoaded(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isAssetsLoaded;
}
