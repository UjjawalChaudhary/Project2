import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Test = ({ navigation }) => {
  return (
    <View
    style={{
      backgroundColor: "#F8CFFF",
      flex: 1,
    }}
  >
    <View>
      <Text style={styles.formText}>Do you want to logout ?</Text>


      <View style={styles.button}>
      <View style={styles.btn}>
        <Button
          onPress={() => navigation.navigate("Registration")}
          title="Yes"
          color="#0040ff"
        ></Button>
</View>
      <View style={styles.btn}>

        <Button
          onPress={() => navigation.navigate("Home")}
          title="No"
          color="#0040ff"
        ></Button>
      </View>
    </View>
    </View>
    </View>

  );
};

export default Test;

const styles = StyleSheet.create({
  btn: {
    alignSelf: "center",
    borderRadius: 20,
    height: 60,
    width: 140,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 21,

  },
  formText: {
    fontSize: 22,
    height: 35,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 270,
  },
  button: {
    flexDirection: 'row',
    alignSelf: "center",

  }
});
