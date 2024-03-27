import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import useAssets from "_hooks/useAssets";
import AppNavigator from "_navigations/AppNavigator";
import NavigationServices from "_navigations/NavigationServices";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  const isAssetsLoaded = useAssets();
  const navigationRef = useNavigationContainerRef();

  return (
    isAssetsLoaded && (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer
          ref={(navigatorRef) => {
            navigationRef.current = navigatorRef;
            NavigationServices.setTopLevelNavigator(navigatorRef);
          }}
        >
          <AppNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    )
  );
};

export default App;
