import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

const Main = () => {
  return (
    <View
      style={{
        backgroundColor: "#01D0ED",
        flex: 1,
      }}
    >
      <View
        style={{
          alignSelf: "center",
          marginTop: 250,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            textAlign: "center",
          }}
        >
          {" "}
          Welcome to{"\n"}
          Customer Home Page
        </Text>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
