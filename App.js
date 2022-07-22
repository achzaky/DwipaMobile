import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React, { useMemo } from "react";
import { Text } from "react-native";
import "react-native-gesture-handler";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import Tabs from "./navigation/tabs";
import About from "./src/screens/about";
import { LoadingView } from "./src/screens/loading";
import LoadResult from "./src/screens/loading/LoadResult";
import ObjRecognition from "./src/screens/objrecognition";
import ResultPage from "./src/screens/result";
import SplashScreen from "./src/screens/splashscreen";

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
        backgroundColor: "white",
        height: 30,
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
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Loading"
          component={LoadingView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            title: "",
            headerTintColor: "green",
            headerShown: "false",
          }}
        />
        <Stack.Screen
          name="ObjRecognition"
          component={ObjRecognition}
          options={{
            unmountOnBlur: true,
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
          name="LoadResult"
          component={LoadResult}
          options={{ headerShown: false }}
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
        <Stack.Screen
          name="ResultPage"
          component={ResultPage}
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
  return <ExampleWithHoc></ExampleWithHoc>;
};

export default App;
