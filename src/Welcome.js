import { StyleSheet, Text, View,Image, Button, Alert } from 'react-native'
import React from 'react'

  const Welcome = ({ navigation }) => {

  return (
    
    <View style={styles.mainContainer}>
    <View style={styles.homeTop}>
    
<Image
style = {styles.headerImage} 
resizeMode="contain"
source = {{uri:'https://solnstech.com/wp-content/uploads/2022/10/cropped-20220818_124200_0000-1-150x150.png'}}
  />
   
    <View>
    <View style={styles.homeDown}>
    <View>
<Button onPress ={()=> navigation.navigate('Registration')} title='Get Started' color='green' ></Button>
</View>

      </View>

  </View>

</View>
  </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  maincontainer: {
 height: "100%",
 display: "flex",
 justifyContent: "space-between",
 paddingHorizontal: 20,
 backgroundColor: "#fff",
 textAlign: "center",
  },

  homeTop: {
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignSelf: "center",
    marginTop: 90,
    
    borderRadius: 30,
  },
  homeDown: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 120,
  },
 
});


