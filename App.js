import { StatusBar } from "expo-status-bar";
import React, { useMemo } from "react";
import { Text } from "react-native";
import "react-native-gesture-handler";
import Home from "./src/screens/home";
import Bumper from "./src/screens/bumper";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import About from "./src/screens/about";
import { LoadingView } from "./src/screens/loading";

const Stack = createStackNavigator();

const ExampleWithHoc = gestureHandlerRootHOC(() => {
  const screenOptions = useMemo(() => {
    return {
      ...TransitionPresets.SlideFromRightIOS,
      // Header not showing in bottom sheet when set to "screen"
      headerMode: "float",
      headerStatusBarHeight: 0,
      cardShadowEnabled: false,
      headerStyle: {
        backgroundColor: "yellow",
      },
      cardStyle: {
        backgroundColor: "white",
        overflow: "visible",
      },
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName="ScreenOne"
      >
        <Stack.Screen
          name="Bumper"
          component={Bumper}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Loading"
          component={LoadingView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "",
            headerTintColor: "green",
            headerStyle: {
              height: 100,
            },
            headerLeft: () => (
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 25,
                  marginTop: 10,
                  marginLeft: 15,
                }}
              >
                Dwipa III
              </Text>
            ),
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: "",
            headerTintColor: "green",
            headerStyle: {
              backgroundColor: "orange",
              height: 100,
            },
            headerLeft: () => (
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 25,
                  marginTop: 10,
                  marginLeft: 15,
                }}
              >
                Dwipa III
              </Text>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

const App = () => {
  return (
    <ExampleWithHoc></ExampleWithHoc>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Bumper"
    //       component={Bumper}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="Home"
    //       component={Home}
    //       options={{
    //         title: "Dwipa III",
    //         headerTintColor: "white",
    //         headerTitleStyle: {
    //           fontWeight: "bold",
    //         },
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
