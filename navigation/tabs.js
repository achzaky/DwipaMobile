import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import HomeScreen from "../src/screens/navbar/HomeScreen";
import ActivityScreen from "../src/screens/navbar/ActivityScreen";
import RecommendedScreen from "../src/screens/navbar/RecommendedScreen";
import SettingScreen from "../src/screens/navbar/SettingScreen";
import ObjRecognition from "../src/screens/objrecognition";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#FF8503",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name=" "
        component={HomeScreen}
        options={{
          headerStyle: {
            height: 65,
          },
          headerLeft: () => (
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 24,
                padding: 17,
              }}
            >
              Dwipa III
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <Image
                source={require("../assets/icon/home.png")}
                resizeMode="contain"
                style={{
                  width: 23,
                  height: 23,
                  tintColor: focused ? "#FF8503" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#FF8503" : "#748c94", fontSize: 10 }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="  "
        component={ActivityScreen}
        options={{
          headerStyle: {
            height: 65,
          },
          headerLeft: () => (
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 24,
                padding: 17,
              }}
            >
              Activity
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <Image
                source={require("../assets/icon/activity.png")}
                resizeMode="contain"
                style={{
                  width: 23,
                  height: 23,
                  tintColor: focused ? "#FF8503" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#FF8503" : "#748c94", fontSize: 10 }}
              >
                Activity
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="    "
        component={ObjRecognition}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icon/camera.png")}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: "#fff",
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="   "
        component={RecommendedScreen}
        options={{
          headerStyle: {
            height: 65,
          },
          headerLeft: () => (
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 24,
                padding: 17,
              }}
            >
              Recommended
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <Image
                source={require("../assets/icon/recommended.png")}
                resizeMode="contain"
                style={{
                  width: 23,
                  height: 23,
                  tintColor: focused ? "#FF8503" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#FF8503" : "#748c94", fontSize: 10 }}
              >
                Recommended
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="     "
        component={SettingScreen}
        options={{
          headerStyle: {
            height: 65,
          },
          headerLeft: () => (
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 24,
                padding: 17,
              }}
            >
              Settings
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <Image
                source={require("../assets/icon/settings.png")}
                resizeMode="contain"
                style={{
                  width: 23,
                  height: 23,
                  tintColor: focused ? "#FF8503" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#FF8503" : "#748c94", fontSize: 10 }}
              >
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
