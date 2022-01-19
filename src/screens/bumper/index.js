import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import gambar from "./splash.jpg";

const Bumper = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Loading");
    }, 5000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ImageBackground source={gambar} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Dwipa III</Text>
      </ImageBackground>
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

export default Bumper;
