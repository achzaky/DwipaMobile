import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const About = ({ navigation }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.popToTop();
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

  return (
    <View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          margin: 20,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "black",
          }}
        >
          About
        </Text>
      </View>
      <Text
        style={{
          fontSize: 20,
          color: "black",
          marginTop: 5,
          marginHorizontal: 20,
          textAlign: "left",
        }}
      >
        Managing knowledge of tourism is very interesting field to study, this
        is due to the information which is the main base of knowledge continues
        to evolve over time. In addition, information search results generated
        by the search engine on the Internet tourism information provides a low
        accuracy. Today, the biggest challenge in managing the knowledge base
        (ontology) is how to manage the ontology is semi- automatic through the
        result of "learning" the web document that is spread on the Internet.
        The proposed research focus to generate a repository of knowledge to the
        domain of tourism in Indonesia is generated through the process of
        enrichment (enrichment) on initial ontology Bali tourism (populated
        ontology) based on the ontology enrichment methodology.
      </Text>
    </View>
  );
};

export default About;
