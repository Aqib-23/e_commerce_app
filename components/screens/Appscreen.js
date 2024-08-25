import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "./Welcome";
import Authentication from "./Authentication";
import Homescreenone from "./Homescreenone";
import Cartitemscreen from "./Cartitemscreen";
import Basketitem from "./Basketitem";
import CompleteDetail from "./CompleteDetail";
import Ordercomplete from "./Ordercomplete";
export default function Appscreen() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcomescreen"
          component={Welcome}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Authenticationscreen"
          component={Authentication}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Homescreenone}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="ItemDetail"
          component={Cartitemscreen}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Basketscreen"
          component={Basketitem}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Completedetail"
          component={CompleteDetail}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Ordercompleteion"
          component={Ordercomplete}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
