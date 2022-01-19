import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useTensorFlowLoaded } from "../../hooks/useTensorFlow";

export function LoadingView({ navigation }) {
  const { isLoaded, model } = useTensorFlowLoaded();
  useEffect(() => {
    if (isLoaded && model) {
      navigation.replace("Home", { model });
    }
  }, [navigation, isLoaded, model]);
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
