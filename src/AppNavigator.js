import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Welcome from './src/Welcome';
import PartnerLogin from './PartnerLogin';
import CustomerLogin from './CustomerLogin';
import Registration from './Home';
import EmployeeLogin from './EmployeeLogin';
import Entry from './Entry';


const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer> 
                <Stack.Navigator
                screenOptions={{
            headerShown: false
          }}>
                 <Stack.Screen
                    name="Registration"
                    component={Registration}
                    options={{ title: 'Registration' }}
                  />
                  <Stack.Screen name="CustomerLogin" component={CustomerLogin} />
                  <Stack.Screen name="PartnerLogin" component={PartnerLogin} />
                  <Stack.Screen name="EmployeeLogin" component={EmployeeLogin} />
                  <Stack.Screen name="Entry" component={Entry} />

        
                </Stack.Navigator>
        </NavigationContainer>
            )
        }

export default AppNavigator

const styles = StyleSheet.create({})