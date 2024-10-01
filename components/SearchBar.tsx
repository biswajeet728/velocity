import { View, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (text: string) => void;
}) => {
  return (
    <View
      style={{
        padding: 12,
        backgroundColor: "#f5f5f5",
        marginHorizontal: 10,
        marginTop: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        width: "95%",
      }}
    >
      <AntDesign name="search1" size={24} color={"#333"} />
      <TextInput
        placeholder="Search"
        selectionColor={"#333"}
        style={{
          paddingLeft: 15,
          fontFamily: "Sora",
          fontSize: 16,
          width: "100%",
        }}
        placeholderTextColor={"#333"}
        value={value}
        onChangeText={(text) => {
          setValue(text);
        }}
      />
    </View>
  );
};

export default SearchBar;
