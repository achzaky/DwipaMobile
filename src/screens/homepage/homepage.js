import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-ico-material-design";

var iconWidth = 26;
var iconHeight = 26;

const Homepage = ({ navigation }) => {
  state = {
    screenText: "Press a Button!",
  };

  changeText = (text) => {
    console.log(text + " has been pressed!");
    this.setState({
      screenText: text,
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 30, color: "white" }}>
          {this.state.screenText}
        </Text>
        <StatusBar style="light" />
      </View>

      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable
            onPress={() => this.changeText("Favourites")}
            style={styles.IconBehave}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <Icon
              name="favorite-heart-button"
              height={iconHeight}
              width={iconWidth}
              color="#448aff"
            />
          </Pressable>

          <Pressable
            onPress={() => this.changeText("Chat")}
            style={styles.IconBehave}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <Icon
              name="chat-bubble"
              height={iconHeight}
              width={iconWidth}
              color="#448aff"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3962FF",
    aligntItems: "center",
    justifyContent: "center",
  },

  NavContainer: {
    position: "absolute",
    alignItems: "center",
    bottom: 20,
  },

  NavBar: {
    flexDirection: "row",
    backgroundColor: "#eee",
    width: "90%",
    justifyContent: "space-evenly",
    borderRadius: 40,
  },

  IconBehave: {
    padding: 14,
  },
});

export default Homepage;
