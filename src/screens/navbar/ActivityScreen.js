import React, { useState } from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import StepIndicator from "react-native-step-indicator";
import { Picker } from "@react-native-picker/picker";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ffffff" }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ffffff" }} />
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ffffff" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const ActivityScreen = ({ navigation }) => {
  const layout = useWindowDimensions();
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#FF8503" }}
      style={{ backgroundColor: "white", marginBottom: 20 }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: focused ? "#FF8503" : "#748c94", margin: 8 }}>
          {route.title}
        </Text>
      )}
    />
  );

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Create Plan" },
    { key: "second", title: "Trip List" },
    { key: "third", title: "On Going Trip" },
  ]);

  const labels = ["Name", "Destination", "Interest", "Date"];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: "#fe7013",
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: "#fe7013",
    stepStrokeUnFinishedColor: "#aaaaaa",
    separatorFinishedColor: "#fe7013",
    separatorUnFinishedColor: "#aaaaaa",
    stepIndicatorFinishedColor: "#fe7013",
    stepIndicatorUnFinishedColor: "#ffffff",
    stepIndicatorCurrentColor: "#ffffff",
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: "#fe7013",
    stepIndicatorLabelFinishedColor: "#ffffff",
    stepIndicatorLabelUnFinishedColor: "#aaaaaa",
    labelColor: "#999999",
    labelSize: 13,
    currentStepLabelColor: "#fe7013",
  };

  const [selected, setSelected] = useState();
  const [currentPosition, setCurrentPosition] = useState(0);

  return (
    <ScrollView backgroundColor="white">
      <View backgroundColor="white">
        <StatusBar backgroundColor="black"></StatusBar>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
          labels={labels}
          stepCount={4}
        />
        <Picker
          mode="dropdown"
          selectedValue={selected}
          onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
          style={{
            margin: 15,
          }}
        >
          <Picker.Item label="Malang" value="malang" />
          <Picker.Item label="Solo" value="solo" />
          <Picker.Item label="Magelang" value="magelang" />
          <Picker.Item label="Jakarta" value="jakarta" />
        </Picker>

        <View style={StyleSheet.container}></View>
      </View>
    </ScrollView>
  );
};
export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
