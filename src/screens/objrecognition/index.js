import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AppState,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { config } from "./config";
import CustomSwitch from "./switch";

const ObjRecognition = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [bottomSheets, setBottomSheets] = useState(0);
  const appState = useRef(AppState.currentState);
  const [cameraActive, setCameraActive] = useState(appState.current);
  const [showNavbar, setShowNavbar] = useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const cameraRef = useRef(null);
  const bottomSheetRef = useRef(null);
  const isSheetOpenRef = useRef(bottomSheets);
  const isFocused = useIsFocused();

  const snapPoints = useMemo(() => ["20%", "80%"], []);

  const onSelectSwitch = (index) => {
    setBottomSheets(index - 1);
    if (showNavbar && bottomSheets === 0) {
      setShowNavbar(false);
    }
  };

  /* Listening to the app state and setting the cameraActive state to true when the app is active. */
  useLayoutEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      appState.current = nextAppState;

      setCameraActive(appState.current === "active");
    });

    return () => {
      if (subscription?.remove) {
        subscription?.remove();
      }
    };
  }, []);

  /* Setting the headerRight to a TouchableOpacity component. */
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            setShowNavbar((prev) => !prev);
            console.log("navbar", showNavbar, isSheetOpenRef.current);
            if (isSheetOpenRef.current === 1 && !showNavbar) {
              setBottomSheets(0);
            }
          }}
        >
          <FontAwesome
            name="bars"
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

  /* Checking if the user has given permission to use the camera. */
  useEffect(() => {
    (async () => {
      console.log("test");
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
      navigation.setOptions({
        headerShown: true,
        headerTransparent: true,
      });
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const prepareData = (image) => {
    const data = new FormData();
    console.log(image.uri, "image");
    data.append("file", {
      uri: Platform.OS === "ios" ? image.uri.replace("file://", "") : image.uri,
      type: "image/jpg",
      name: "image.jpg",
    });
    return data;
  };

  /**
   * TakePicture() is an async function that takes a picture with the camera, prepares the data, and
   * sends it to the image classifier.
   */
  const takePicture = async () => {
    try {
      if (cameraRef) {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        const preparedData = prepareData(data);
        requestImageClassifier(preparedData, data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const requestImageClassifier = async (data, image) => {
    const resultPredictOnly = await axios.post(
      "http://34.143.184.26/predictOnlySigmoid",
      data,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        transformRequest: (data, error) => {
          return data;
        },
      }
    );
    console.log({
      data: resultPredictOnly.data.Attraction,
      data2: resultPredictOnly.data,
    });

    let query = await new FormData();
    await query.append(
      "query",
      `PREFIX dwipa:<http://www.owl-ontologies.com/ETourismBali.owl/Touring#>
          select ?Regency ?Province
          {?Regency dwipa:hasAttraction dwipa:${resultPredictOnly.data.Attraction}.
          ?Regency dwipa:isTheRegencyOf ?Province}`
    );
    const resultOntologyQuery = await axios.post(
      "http://34.143.184.26/ontologyQuery",
      query,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        transformRequest: (query, error) => {
          return query;
        },
      }
    );
    console.log({ data: resultOntologyQuery.data });

    let queryImage = {
      q: resultPredictOnly.data.Attraction,
      tbm: "isch",
      ijn: "0",
      api_key: config.api_key,
    };
    const resultImageQuery = await axios.get(
      "https://serpapi.com/search.json",
      {
        params: queryImage,
      }
    );
    // console.log({ data: resultImageQuery.data });
    prepareResult({
      image,
      resultImageQuery,
      resultOntologyQuery,
      resultPredictOnly,
    });
  };

  const prepareResult = async (result) => {
    const { resultImageQuery, resultOntologyQuery, resultPredictOnly, image } =
      result;
    const province =
      await resultOntologyQuery.data.result.bindings[0].Province.value
        .split("#")
        .pop()
        .split("_")
        .join(" ");
    const regency =
      await resultOntologyQuery.data.result.bindings[0].Regency.value
        .split("#")
        .pop()
        .split("_")
        .join(" ");
    result = {
      image:
        Platform.OS === "ios" ? image.uri.replace("file://", "") : image.uri,
      province,
      regency,
      name: resultPredictOnly.data.Attraction.replace(
        /([a-z](?=[A-Z]))/g,
        "$1 "
      ),
      queryImage: resultImageQuery.data.images_results[0].original
        ? resultImageQuery.data.images_results[0].original
        : Platform.OS === "ios"
        ? image.uri.replace("file://", "")
        : image.uri,
    };
    console.log({ result });
    showResult(result);
  };

  const showResult = (result) => {
    navigation.navigate("ResultPage", { data: result });
  };

  const openImagePickerAsync = async () => {
    try {
      let permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }
      try {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        console.log("picker result", pickerResult);
        const preparedData = prepareData(pickerResult);
        requestImageClassifier(preparedData, pickerResult);
      } catch (error) {
        console.log("image picker error", error);
      }
    } catch (error) {
      console.log("permission error");
    }
    if (pickerResult?.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult?.uri });
  };

  const renderCamera = () => {
    if (cameraActive && isFocused) {
      return (
        <Camera ref={cameraRef} style={styles.camera}>
          <View style={styles.cameraButton}>
            <TouchableOpacity onPress={() => takePicture()}>
              <FontAwesome5
                name="camera"
                size={25}
                color="white"
                style={{
                  height: 50,
                  top: 25,
                }}
              />
            </TouchableOpacity>
          </View>
        </Camera>
      );
    }
    return <></>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        {/* {bottomSheets === 0 ? renderCamera() : null} */}
        {renderCamera()}
        <BottomSheet
          backgroundStyle={{
            backgroundColor: "white",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
          ref={bottomSheetRef}
          index={bottomSheets}
          snapPoints={snapPoints}
          onChange={(index) => {
            setBottomSheets(index);
            isSheetOpenRef.current = index;
            console.log("bottomsheets onchange");
            if (isSheetOpenRef.current === 1 && showNavbar) {
              setShowNavbar(false);
            }
          }}
          onClose={() => {
            if (!showNavbar) {
              setShowNavbar(true);
            }
          }}
        >
          <BottomSheetView
            style={{
              width: "100%",
              flex: 1,
              alignItems: "center",
              marginTop: "4%",
              zIndex: 10,
            }}
          >
            <CustomSwitch
              selectionMode={bottomSheets + 1}
              roundCorner={true}
              option1={"Scan"}
              option2={"Upload"}
              onSelectSwitch={onSelectSwitch}
              selectionColor={"#FF8503"}
            />
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={openImagePickerAsync}
            >
              <FontAwesome5
                name="upload"
                size={50}
                color="#748c94"
                style={{
                  backgroundColor: "white",
                  marginTop: "50%",
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 10,
                  color: "#748c94",
                }}
              >
                Upload
              </Text>
            </TouchableOpacity>
            {selectedImage && (
              <View style={styles.container}>
                <Image
                  source={{ uri: selectedImage.localUri }}
                  style={styles.thumbnail}
                />
              </View>
            )}
          </BottomSheetView>
        </BottomSheet>
        {showNavbar && (
          <TouchableWithoutFeedback
            onPressIn={() => setShowNavbar(false)}
            onPress={() => setShowNavbar(false)}
          >
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                marginTop: "18%",
                maxHeight: "74%",
                maxWidth: "100%",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  width: "50%",
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    padding: 16,
                  }}
                >
                  <FontAwesome5 name="route" size={20} color="black" />
                  <Text
                    style={{
                      fontSize: 20,
                      marginLeft: "5%",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    Trip Planner
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    padding: 16,
                  }}
                  onPress={() => navigation.navigate("About")}
                >
                  <FontAwesome5
                    name="info-circle"
                    size={20}
                    color="black"
                    srt
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      marginLeft: "5%",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    About
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    height: "85%",
  },
  cameraButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    bottom: "10%",
    position: "absolute",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    // margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});

export default ObjRecognition;
