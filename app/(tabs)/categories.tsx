import {
  View,
  Text,
  Platform,
  SafeAreaView,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";
import SearchBar from "@/components/SearchBar";
import Categories from "@/components/Categories";
import { data } from "@/constants/data";
import UsersList from "@/components/UsersList";
import { AntDesign } from "@expo/vector-icons";

const Search = () => {
  const [search, setSearch] = React.useState("");
  const [items, setItems] = React.useState(data);
  const [isFilterApplied, setIsFilterApplied] = React.useState(false);

  const filterByCategory = (category: string) => {
    const filteredItems = data.filter((item) => item.category === category);
    setItems(filteredItems);
    setIsFilterApplied(true);
  };

  const filterBySearch = (search: string) => {
    const filteredItems = data.filter((item) =>
      item.username.toLowerCase().includes(search.toLowerCase())
    );
    setItems(filteredItems);
  };

  React.useEffect(() => {
    if (search === "") {
      setItems(data);
    } else {
      filterBySearch(search);
    }
  }, [search]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Categories filterByCategory={filterByCategory} />
      <SearchBar
        value={search}
        setValue={setSearch}
        onSearch={() => filterBySearch(search)}
      />
      <UsersList data={items} />

      {isFilterApplied && (
        <TouchableNativeFeedback
          onPress={() => {
            setItems(data);
            setIsFilterApplied(false);
          }}
          style={{
            position: "absolute",
            bottom: 30,
            right: 30,
            width: 50,
          }}
        >
          <View
            style={{
              backgroundColor: "black",
              padding: 10,
              borderRadius: 50,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,

              elevation: 2,
              alignSelf: "flex-end",
              flexDirection: "row",
              alignItems: "center",
              margin: 15,
              gap: 10,
            }}
          >
            <AntDesign name="closecircle" size={24} color="white" />
            <Text
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              Reset
            </Text>
          </View>
        </TouchableNativeFeedback>
      )}
    </SafeAreaView>
  );
};

export default Search;
