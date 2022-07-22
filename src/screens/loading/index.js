import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export function LoadingView({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("ResultPage");
    }, 1000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column" }}>
        <Text>Loading Dwipa III</Text>
        <ActivityIndicator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, textAlign: "center", marginRight: 8 },
});
