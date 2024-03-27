import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Contacts from "_scenes/Contacts/Contacts.component";
import AddEditContact from "_scenes/AddEditContact/AddEditContact.component";

import Scenes from "./Scenes";
import colors from "_styles/colors";
import { TextStyle } from "_styles/typography";

const MainStackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <MainStackNavigator.Navigator
      initialRouteName={Scenes.contacts}
      screenOptions={{
        gestureEnabled: true,
        headerShown: true,
        animation: "slide_from_right",
        headerTintColor: colors?.otherColors?.white,
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerTitleStyle: {
          ...TextStyle.h5,
        },
        headerStyle: {
          backgroundColor: colors?.primaryColors?.primary400,
        },
      }}
    >
      <MainStackNavigator.Screen name={Scenes.contacts} component={Contacts} />
      <MainStackNavigator.Screen
        name={Scenes.addEditContact}
        component={AddEditContact}
      />
    </MainStackNavigator.Navigator>
  );
};

export default AppNavigator;
