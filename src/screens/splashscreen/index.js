import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import splashscreen from "../splashscreen/dwipaSplash.png";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Tabs");
    }, 5000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={splashscreen}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
});

export default SplashScreen;
