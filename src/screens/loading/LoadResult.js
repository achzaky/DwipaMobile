import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import splashscreen from "../../screens/splashscreen/dwipaSplash.png";

const LoadResult = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Result");
    }, 3000);
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

export default LoadResult;
