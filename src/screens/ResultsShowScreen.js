import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import yelp from "../api/yelp";

const ResultsShowScreen = () => {
  const route = useRoute();
  const id = route.params.id;
  // console.log(id);
  const [result, setResult] = useState(null);

  // console.log(result);

  // Helper function
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    borderRadius: 5,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  container: {
    marginLeft: 15,
  },
});

export default ResultsShowScreen;
