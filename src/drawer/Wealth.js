import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNavigator from '../bottom/BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Wealth = () => {
  return (
<NavigationContainer independent={true}>
   <View style={{flex: 1}}>
      <BottomNavigator />
      </View>
    </NavigationContainer>
  )
}

export default Wealth

const styles = StyleSheet.create({})