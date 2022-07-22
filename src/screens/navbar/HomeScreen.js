import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView backgroundColor="white">
      <View backgroundColor="white">
        <StatusBar backgroundColor="black"></StatusBar>

        <View style={StyleSheet.container}>
          <Image
            source={require("../../../assets/image/grand-canyon.jpg")}
            style={{
              width: "100%",
              height: 300,
            }}
          />
          <Text
            style={{
              padding: 10,
              fontSize: 15,
            }}
          >
            Quelques touches de coulers automnales sur le noir et blanc de la
            mer de glace et de la montagne enneigee
          </Text>
          <Text
            style={{
              left: 10,
              top: -5,
              fontSize: 12,
              opacity: 0.5,
              marginBottom: 10,
            }}
          >
            44 minutes ago
          </Text>
          <Image
            source={require("../../../assets/image/grand-canyon2.jpg")}
            style={{
              width: "100%",
              height: 300,
            }}
          />
          <Text
            style={{
              padding: 10,
              fontSize: 15,
            }}
          >
            Touches de coulers automnales sur le noir et blanc de la mer de
            glace et de la montagne enneigee
          </Text>
          <Text
            style={{
              left: 10,
              top: -5,
              fontSize: 12,
              opacity: 0.5,
              marginBottom: 10,
            }}
          >
            50 minutes ago
          </Text>
          <Image
            source={require("../../../assets/image/grand-canyon3.jpeg")}
            style={{
              width: "100%",
              height: 300,
            }}
          />
          <Text
            style={{
              padding: 10,
              fontSize: 15,
            }}
          >
            Coulers automnales sur le noir et blanc de la mer de glace et de la
            montagne enneigee
          </Text>
          <Text
            style={{
              left: 10,
              top: -5,
              fontSize: 12,
              opacity: 0.5,
              marginBottom: 10,
            }}
          >
            1 hour ago
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
