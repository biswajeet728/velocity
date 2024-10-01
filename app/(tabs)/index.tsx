import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView
      mode="margin"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 100,
          width: Dimensions.get("window").width - 40,
          backgroundColor: "white",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "SoraBold",
          }}
        >
          Hey, Welcome
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
