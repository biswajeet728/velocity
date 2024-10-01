import {
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { categories } from "@/constants/data";

const imageMap = {
  "astrology.png": require("../assets/icons/astrology.png"),
  "assistant.png": require("../assets/icons/assistant.png"),
  "sports.png": require("../assets/icons/sports.png"),
  "film.png": require("../assets/icons/film.png"),
  "makeup.png": require("../assets/icons/makeup.png"),
  "mehndi.png": require("../assets/icons/mehndi.png"),
  "developing.png": require("../assets/icons/developing.png"),
  "ui-ux.png": require("../assets/icons/ui-ux.png"),
};

const Categories = ({
  filterByCategory,
}: {
  filterByCategory: (category: string) => void;
}) => {
  return (
    <View
      style={{
        backgroundColor: "#f5f5f5",
        padding: 10,
      }}
    >
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: "#fff",
                marginVertical: 5,
                borderRadius: 50,
                marginRight: categories.length - 1 === index ? 0 : 10,
                width: 80,
                height: 80,
              }}
              onPress={() => filterByCategory(item.name)}
            >
              <Image
                source={
                  imageMap[item.icon.split("/").pop() as keyof typeof imageMap]
                } // Use the image map
                style={{
                  width: "100%",
                  height: "100%",
                  alignSelf: "center",
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <Text
              style={{
                textAlign: "center",
                fontFamily: "SoraMedium",
                fontSize: 12,
                // marginLeft: -5,
              }}
            >
              {item.name}
            </Text>
          </View>
        )}
        maxToRenderPerBatch={5}
      />
    </View>
  );
};

export default Categories;
