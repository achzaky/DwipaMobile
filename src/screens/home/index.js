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
  Image,
  PermissionsAndroid,
  TouchableWithoutFeedback,
} from "react-native";
import { Camera } from "expo-camera";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import CustomSwitch from "./switch";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as tf from "@tensorflow/tfjs";
import * as jpeg from "jpeg-js";
import {
  fetch,
  cameraWithTensors,
  decodeJpeg,
} from "@tensorflow/tfjs-react-native";

const TensorCamera = cameraWithTensors(Camera);
const Home = ({ navigation, route }) => {
  const { model } = route.params;
  const [hasPermission, setHasPermission] = useState(null);
  const [bottomSheets, setBottomSheets] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [selectedImage, setSelectedImage] = React.useState(null);

  // const [model, setModel] = useState();

  const cameraRef = useRef(null);
  const bottomSheetRef = useRef(null);
  const isSheetOpenRef = useRef(bottomSheets);

  const snapPoints = useMemo(() => ["15%", "90%"], []);

  const onSelectSwitch = (index) => {
    setBottomSheets(index - 1);
    if (showNavbar && bottomSheets === 0) {
      setShowNavbar(false);
    }
  };

  // useEffect(() => {
  //   const loadModel = async () => {
  //     console.log("[+] Application started");
  //     //Wait for tensorflow module to be ready
  //     const tfReady = await tf.ready();
  //     console.log("[+] Loading custom mask detection model");
  //     const _model = await tf.loadLayersModel(
  //       bundleResourceIO(modelJson, modelWeight)
  //     );
  //     _model.
  //     setModel(_model);
  //     // const res = model.predict(tf.randomNormal([1, 28, 28, 1]));
  //     console.log("[+] Loading pre-trained face detection model");
  //     //Blazeface is a face detection model provided by Google
  //     console.log("model", _model);
  //     console.log("[+] Model Loaded");
  //   };
  //   loadModel();
  // }, []);
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

  useEffect(() => {
    (async () => {
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

  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  // const openImagePickerAsync = async () => {
  //   try {
  //     let permissionResult =
  //       await ImagePicker.requestMediaLibraryPermissionsAsync();

  //     if (permissionResult.granted === false) {
  //       alert("Permission to access camera roll is required!");
  //       return;
  //     }
  //     try {
  //       let pickerResult = await ImagePicker.launchImageLibraryAsync({
  //         mediaTypes: ImagePicker.MediaTypeOptions.All,
  //         allowsEditing: true,
  //         aspect: [4, 3],
  //         quality: 1,
  //       });

  //       console.log(pickerResult);

  //       // const imageTensor = decodeJpeg(pickerResult);
  //       // const res = model.predict(imageTensor);
  //       // console.log(res);
  //       // let pickerResult = await ImagePicker.launchImageLibraryAsync();
  //       // console.log("picker result:", pickerResult);
  //       try {
  //         const imageAssetPath = Image.resolveAssetSource(pickerResult);
  //         const response = await fetch(
  //           imageAssetPath.uri,
  //           {},
  //           { isBinary: true }
  //         );
  //         const rawImageData = await response.arrayBuffer();
  //         const imageTensor = imageToTensor(rawImageData);
  //         const predictions = await model(imageTensor);
  //         this.setState({ predictions });
  //         console.log(predictions);
  //         //   const imgB64 = await FileSystem.readAsStringAsync(pickerResult.uri, {
  //         //     encoding: FileSystem.EncodingType.Base64,
  //         //   });
  //         //   const imgBuffer = tf.util.encodeString(imgB64, "base64").buffer;
  //         //   const raw = new Uint8Array(imgBuffer);
  //         //   const imageTensor = decodeJpeg(raw);
  //         //   console.log("image tensor", imageTensor);
  //         //   try {
  //         //     const res = await model.predict;
  //         //     imageTensor.reshape([-1, 224, 224, 3]);
  //         //     console.log("model Response", res);
  //         //   } catch (error) {
  //         //     console.log("model error", error);
  //         //   }
  //       } catch (error) {
  //         console.log("file system error", error);
  //       }
  //     } catch (err) {
  //       console.log("image picker error", error);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   if (pickerResult.cancelled === true) {
  //     return;
  //   }
  // };
  // setSelectedImage({ localUri: pickerResult.uri });

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

        try {
          const imgB64 = await FileSystem.readAsStringAsync(pickerResult.uri, {
            encoding: FileSystem.EncodingType.Base64,
          });
          const imgBuffer = tf.util.encodeString(imgB64, "base64").buffer;
          const raw = new Uint8Array(imgBuffer);
          let imageTensor = decodeJpeg(raw);
          const imageSize = 180;
          imageTensor = imageTensor
            .resizeBilinear([imageSize, imageSize])
            .toFloat();
          const offset = tf.scalar(127.5);
          const normalized = imageTensor.sub(offset).div(offset);
          const preProcessedImage = normalized.reshape([
            1,
            imageSize,
            imageSize,
            3,
          ]);
          const res = await model.predict(preProcessedImage);
          console.log(res.arraySync());
        } catch (error) {
          console.log("preprocessed", error);
        }
      } catch (error) {
        console.log("image picker error", error);
      }
    } catch (error) {
      console.log("permission error");
    }
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult?.uri });
  };

  //     let pickerResult = await ImagePicker.launchImageLibraryAsync();
  //     console.log(pickerResult);
  //     // const imageTensor = decodeJpeg(pickerResult);
  //     // const res = model.predict(imageTensor);
  //     // console.log(res);
  //     // let pickerResult = await ImagePicker.launchImageLibraryAsync();
  //     // console.log("picker result:", pickerResult);
  //     try {
  //       const imgB64 = await FileSystem.readAsStringAsync(pickerResult, {
  //         encoding: FileSystem.EncodingType.Base64,
  //       });
  //       const imgBuffer = tf.util.encodeString(imgB64, "base64").buffer;
  //       const raw = new Uint8Array(imgBuffer);
  //       const imageTensor = decodeJpeg(raw);
  //       console.log("image tensor", imageTensor);
  //       try {
  //         const res = await model
  //           .predict
  //           // imageTensor.reshape([-1, 180, 180, 3])
  //           ();
  //         console.log("model Response", res);
  //       } catch (error) {
  //         console.log("model error", error);
  //       }
  //     } catch (error) {
  //       console.log("file system error", error);
  //     }
  //   } catch (err) {
  //     console.log("image picker error", error);
  //   }

  //   if (pickerResult.cancelled === true) {
  //     return;
  //   }

  //   setSelectedImage({ localUri: pickerResult });
  // };

  // const openImagePickerAsync = async () => {
  //   try {
  //     let permissionResult =
  //       await ImagePicker.requestMediaLibraryPermissionsAsync();

  //     if (permissionResult.granted === false) {
  //       alert("Permission to access camera roll is required!");
  //       return;
  //     }

  //     try {
  //       let pickerResult = await ImagePicker.launchImageLibraryAsync();
  //       console.log(pickerResult);
  //       const imageTensor = decodeJpeg(pickerResult);
  //       const res = model.predict(imageTensor);
  //       console.log(res);
  //       try {
  //         let pickerResult = await ImagePicker.launchImageLibraryAsync();
  //         console.log("picker result:", pickerResult);
  //         const imageAssetPath = Image.resolveAssetSource(pickerResult);
  //         console.log("image asset path", imageAssetPath);
  //         try {
  //           const response = await fetch(
  //             imageAssetPath.uri,
  //             {},
  //             { isBinary: true }
  //           );
  //           console.log("response", response);
  //           try {
  //             const rawImageData = await response.arrayBuffer();
  //             const imageTensor = decodeJpeg(rawImageData);
  //             console.log("raw image data:", rawImageData);
  //             try {
  //               const res = await model.predict(imageTensor);
  //               console.log("image tensor:", imageTensor);
  //               console.log("model", res);
  //             } catch (error) {
  //               console.log("predict", error);
  //             }
  //           } catch (error) {
  //             console.log("array buffer error", error);
  //           }
  //         } catch (error) {
  //           console.log("fetch error", error);
  //         }
  //       } catch (error) {
  //         console.log("image picker error", error);
  //       }

  //       const response = await fetch(
  //         imageAssetPath.uri,
  //         {},
  //         { isBinary: true }
  //       );
  //       // const rawImageData = await response.arrayBuffer();
  //       // const imageTensor = decodeJpeg(rawImageData);
  //       // const res = model.predict(imageTensor);
  //       // console.log(res);
  //     } catch (err) {
  //       console.log(err);
  //     }

  //     if (pickerResult.cancelled === true) {
  //       return;
  //     }

  //     setSelectedImage({ localUri: pickerResult.uri });
  //   } catch (error) {}
  // };

  function handleCameraStream(images, updatePreview, gl) {
    const loop = async () => {
      const nextImageTensor = images.next().value;

      //
      // do something with tensor here
      //

      // if autorender is false you need the following two lines.
      // updatePreview();
      // gl.endFrameEXP();
      if (model) {
        const predictions = await model.classify(nextImageTensor);
        console.log(predictions);
      }
      requestAnimationFrame(loop);
    };
    loop();
  }

  let textureDims = {
    height: 1920,
    width: 1080,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Camera
        ref={cameraRef}
        style={styles.camera}
        // cameraTextureHeight={textureDims.height}
        // cameraTextureWidth={textureDims.width}
        // resizeHeight={200}
        // resizeWidth={152}
        // resizeDepth={3}
        // type={type}
        // onReady={handleCameraStream}
        // autorender={true}
      >
        <View style={styles.buttonContainer}>
          <View style={styles.cameraButton}>
            <TouchableOpacity
              onPress={async () => {
                try {
                  await takePicture();
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              <FontAwesome5 name="camera" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> </Text>
          </TouchableOpacity>
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
                selectionColor={"orange"}
              />
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={openImagePickerAsync}
              >
                <FontAwesome
                  name="upload"
                  size={50}
                  color="black"
                  style={{
                    backgroundColor: "white",
                    marginTop: "50%",
                  }}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
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
      </Camera>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  cameraButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    bottom: "20%",
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

export default Home;
