import { StatusBar } from "expo-status-bar";
import React, {
  useCallback,
  useState,
  useEffect,
  useRef,
  useMemo,
} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Switch,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { AppLoading } from "expo-app-loading";
// import {
//   useFonts,
//   Poppins_100Thins,
//   Poppins_500Medium,
// } from "@expo-google-fonts/poppins";

const ResultPage = ({ route, navigation }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { data } = route.params;
  console.log(data);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            name="arrow-back"
            size={25}
            color="white"
            style={{
              marginTop: 10,
              marginRight: 15,
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  const renderItem = ({ item }) => (
    <Image
      style={styles.importedImage}
      source={{
        uri: item,
      }}
    />
  );

  return (
    <ScrollView>
      <View>
        {/* <View
          style={{
            flexDirection: "row",
          }}
        > */}
        <Image
          style={styles.importedImage}
          source={{
            uri: data.image,
          }}
        />
        <Image
          style={styles.importedImage}
          source={{
            uri: data.image,
          }}
        />

        {/* </View> */}
        <Text
          style={{
            fontSize: 30,
            color: "black",
            marginTop: 5,
            marginHorizontal: 20,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {data.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "black",
            marginTop: 5,
            marginHorizontal: 20,
            textAlign: "center",
          }}
        >
          Location:
          {data.regency}, {data.province}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  importedImage: {
    left: "16%",
    right: "50%",
    // position: "absolute",
    marginTop: 10,
    width: 250,
    height: 230,
    // flex: 1,
    // alignContent: "center",
    // alignItems: "center",
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default ResultPage;
