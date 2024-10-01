import React from "react";
import { Tabs } from "expo-router";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 65,
          paddingBottom: 5,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Welcome",
          headerShown: false,
          tabBarIcon: () => <AntDesign name="home" size={26} color={"#333"} />,
          tabBarInactiveTintColor: "#333",
          tabBarActiveTintColor: "#333",
          tabBarLabelStyle: {
            fontSize: 13,
            fontFamily: "SoraMedium",
          },
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          tabBarLabel: "Categories",
          headerTitle: "Categories",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Sora",
            fontSize: 18,
          },
          headerStyle: {
            height: 90,
            borderBottomColor: "#000000",
            borderBottomWidth: 1,
          },
          headerRight: () => (
            <FontAwesome
              name="bell-o"
              size={24}
              color="black"
              style={{ marginRight: 18 }}
            />
          ),
          headerLeft: () => (
            <Entypo
              name="menu"
              size={27}
              color="black"
              style={{ marginLeft: 18 }}
            />
          ),
          tabBarIcon: () => (
            <AntDesign name="appstore-o" size={26} color={"#333"} />
          ),
          tabBarInactiveTintColor: "#333",
          tabBarActiveTintColor: "#333",
          tabBarLabelStyle: {
            fontSize: 13,
            fontFamily: "SoraMedium",
          },
        }}
      />
    </Tabs>
  );
}
