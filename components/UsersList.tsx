import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";

import CountryFlag from "react-native-country-flag";
import { Fontisto } from "@expo/vector-icons";

interface IData {
  id: number;
  username: string;
  country: string;
  avatar: string;
  category: string;
}

export interface UsersListProps {
  data: IData[];
}

const UsersList = ({ data }: UsersListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        // flexDirection: "row",
        // flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "space-between",
        alignSelf: "flex-start",
        gap: 10,
      }}
      horizontal={false}
      numColumns={4}
      style={{
        marginTop: 20,
      }}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{item.username}</Text>
            <View
              style={{
                position: "absolute",
                right: 0,
                top: 0,
              }}
            >
              <CountryFlag
                isoCode={item.country.toLowerCase()}
                size={25}
                style={{
                  borderRadius: 40,
                  borderWidth: 1,
                  borderColor: "white",
                  width: 40,
                  height: 40,
                }}
              />
            </View>
          </View>
        </View>
      )}
      ListEmptyComponent={() => (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 250,
            width: Dimensions.get("window").width,
          }}
        >
          <Fontisto name="dropbox" size={34} color="gray" />

          <Text
            style={{
              fontFamily: "SoraMedium",
              fontSize: 20,
              color: "gray",
            }}
          >
            No data found
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  profileContainer: {
    width: Dimensions.get("window").width / 4,
    alignItems: "center",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontFamily: "SoraMedium",
  },
  category: {
    fontSize: 12,
    color: "gray",
  },
});

export default UsersList;
