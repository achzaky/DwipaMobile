import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const SettingScreen = ({ navigation }) => {
  return (
    <ScrollView backgroundColor="white">
      <View backgroundColor="white">
        <StatusBar backgroundColor="black"></StatusBar>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../../../assets/profile.jpg")}
            style={{
              width: 85,
              height: 85,
              top: 20,
              left: 20,
              borderRadius: 80,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              top: 40,
              left: 37,
            }}
          >
            David Beckham
          </Text>
          <Text
            style={{
              fontSize: 16,
              top: 70,
              left: -103,
              color: "#748c94",
            }}
          >
            davidbeckham@gmail.com
          </Text>
          <Image
            source={require("../../../assets/icon/pen.png")}
            style={{
              width: 12,
              height: 12,
              marginLeft: -93,
              marginTop: 76,
              tintColor: "#FF8503",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              color: "#FF8503",
              marginLeft: 40,
            }}
          >
            150
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: "#FF8503",
              marginLeft: 80,
            }}
          >
            300
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: "#FF8503",
              marginLeft: 100,
            }}
          >
            7
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#748c94",
              marginLeft: 49,
            }}
          >
            Trip
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#748c94",
              marginLeft: 95,
            }}
          >
            Like
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#748c94",
              marginLeft: 95,
            }}
          >
            Share
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "#cacccf",
            borderBottomWidth: 0.25,
            marginTop: 10,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 15,
          color: "#748c94",
          marginLeft: 17,
          marginTop: 15,
        }}
      >
        Trip History
      </Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#FF8503",
            marginLeft: 18,
            marginTop: 20,
          }}
        >
          25
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#748c94",
            marginLeft: 25,
            marginTop: 20,
          }}
        >
          Trip to London
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#FF8503",
            marginLeft: 18,
          }}
        >
          Oct
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "black",
            marginLeft: 18,
            fontWeight: "bold",
          }}
        >
          London
        </Text>
        <Image
          source={require("../../../assets/icon/greater-than.png")}
          resizeMode="contain"
          style={{
            width: 12,
            height: 12,
            marginLeft: 220,
            tintColor: "#FF8503",
          }}
        />
      </View>
      <View
        style={{
          borderBottomColor: "#cacccf",
          borderBottomWidth: 0.5,
          marginTop: 15,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#FF8503",
            marginLeft: 18,
            marginTop: 20,
          }}
        >
          25
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#748c94",
            marginLeft: 25,
            marginTop: 20,
          }}
        >
          Trip to London
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#FF8503",
            marginLeft: 18,
          }}
        >
          Oct
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "black",
            marginLeft: 18,
            fontWeight: "bold",
          }}
        >
          London
        </Text>
        <Image
          source={require("../../../assets/icon/greater-than.png")}
          resizeMode="contain"
          style={{
            width: 12,
            height: 12,
            marginLeft: 220,
            tintColor: "#FF8503",
          }}
        />
      </View>
      <View
        style={{
          borderBottomColor: "#cacccf",
          borderBottomWidth: 0.5,
          marginTop: 15,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#FF8503",
            marginLeft: 18,
            marginTop: 20,
          }}
        >
          25
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#748c94",
            marginLeft: 25,
            marginTop: 20,
          }}
        >
          Trip to London
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#FF8503",
            marginLeft: 18,
          }}
        >
          Oct
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "black",
            marginLeft: 18,
            fontWeight: "bold",
          }}
        >
          London
        </Text>
        <Image
          source={require("../../../assets/icon/greater-than.png")}
          resizeMode="contain"
          style={{
            width: 12,
            height: 12,
            marginLeft: 220,
            tintColor: "#FF8503",
          }}
        />
      </View>
      <View
        style={{
          borderBottomColor: "#cacccf",
          borderBottomWidth: 0.5,
          marginTop: 15,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#FF8503",
            marginLeft: 18,
            marginTop: 20,
          }}
        >
          25
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#748c94",
            marginLeft: 25,
            marginTop: 20,
          }}
        >
          Trip to London
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#FF8503",
            marginLeft: 18,
          }}
        >
          Oct
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "black",
            marginLeft: 18,
            fontWeight: "bold",
          }}
        >
          London
        </Text>
        <Image
          source={require("../../../assets/icon/greater-than.png")}
          resizeMode="contain"
          style={{
            width: 12,
            height: 12,
            marginLeft: 220,
            tintColor: "#FF8503",
          }}
        />
      </View>
      <View
        style={{
          borderBottomColor: "#cacccf",
          borderBottomWidth: 0.5,
          marginTop: 15,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#FF8503",
            marginLeft: 18,
            marginTop: 20,
          }}
        >
          25
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#748c94",
            marginLeft: 25,
            marginTop: 20,
          }}
        >
          Trip to London
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#FF8503",
            marginLeft: 18,
          }}
        >
          Oct
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "black",
            marginLeft: 18,
            fontWeight: "bold",
          }}
        >
          London
        </Text>
        <Image
          source={require("../../../assets/icon/greater-than.png")}
          resizeMode="contain"
          style={{
            width: 12,
            height: 12,
            marginLeft: 220,
            tintColor: "#FF8503",
          }}
        />
      </View>
      <View
        style={{
          borderBottomColor: "#cacccf",
          borderBottomWidth: 0.5,
          marginTop: 15,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#FF8503",
            marginLeft: 18,
            marginTop: 20,
          }}
        >
          25
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#748c94",
            marginLeft: 25,
            marginTop: 20,
          }}
        >
          Trip to London
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#FF8503",
            marginLeft: 18,
          }}
        >
          Oct
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "black",
            marginLeft: 18,
            fontWeight: "bold",
          }}
        >
          London
        </Text>
        <Image
          source={require("../../../assets/icon/greater-than.png")}
          resizeMode="contain"
          style={{
            width: 12,
            height: 12,
            marginLeft: 220,
            tintColor: "#FF8503",
          }}
        />
      </View>
      <View
        style={{
          borderBottomColor: "#cacccf",
          borderBottomWidth: 0.5,
          marginTop: 15,
        }}
      ></View>
    </ScrollView>
  );
};
export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
