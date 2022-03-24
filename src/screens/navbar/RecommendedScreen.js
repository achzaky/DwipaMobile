import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const RecommendedScreen = ({ navigation }) => {
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
              marginBottom: 5,
            }}
          >
            44 minutes ago
          </Text>
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              left: 5,
              marginBottom: 5,
            }}
          >
            <Image
              source={require("../../../assets/icon/love.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                padding: 10,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                marginBottom: 5,
                top: 3,
                marginLeft: 5,
              }}
            >
              12
            </Text>
            <Image
              source={require("../../../assets/icon/comment.png")}
              resizeMode="contain"
              style={{
                width: 28,
                height: 28,
                marginLeft: 10,
                top: -1,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                marginBottom: 5,
                top: 3,
                marginLeft: 5,
              }}
            >
              5
            </Text>
          </View>
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
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              left: 5,
              marginBottom: 5,
            }}
          >
            <Image
              source={require("../../../assets/icon/love.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                padding: 10,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                marginBottom: 5,
                top: 3,
                marginLeft: 5,
              }}
            >
              14
            </Text>
            <Image
              source={require("../../../assets/icon/comment.png")}
              resizeMode="contain"
              style={{
                width: 28,
                height: 28,
                marginLeft: 10,
                top: -1,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                marginBottom: 5,
                top: 3,
                marginLeft: 5,
              }}
            >
              7
            </Text>
          </View>
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
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              left: 5,
              marginBottom: 5,
            }}
          >
            <Image
              source={require("../../../assets/icon/love.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                padding: 10,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                marginBottom: 5,
                top: 3,
                marginLeft: 5,
              }}
            >
              20
            </Text>
            <Image
              source={require("../../../assets/icon/comment.png")}
              resizeMode="contain"
              style={{
                width: 28,
                height: 28,
                marginLeft: 10,
                top: -1,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                marginBottom: 5,
                top: 3,
                marginLeft: 5,
              }}
            >
              10
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default RecommendedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
