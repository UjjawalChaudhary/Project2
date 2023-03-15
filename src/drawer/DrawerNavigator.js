import { Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "./Main";
import Start from "./Start";
import Profile from "./Profile";
import Wealth from "./Wealth";
import DT from "./DT";
import AppIntigration from "./AppIntigration";
import UpStarts from "./UpStarts";
import Report from "./Report";
import Test from "./Test/Test";



const Drawer = createDrawerNavigator(); 

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Main} options={{headerShown: true}} />
      <Drawer.Screen name="Profile" component={Profile} options={{headerShown: true}} />
      <Drawer.Screen name="Start" component={Start} options={{headerShown: true}} />
      <Drawer.Screen name="Wealth" component={Wealth} options={{headerShown: true, headerStyle: { backgroundColor: 'white'}}} />
      <Drawer.Screen name="DT" component={DT} options={{headerShown: true}} />
      <Drawer.Screen name="App Intigration" component={AppIntigration} options={{headerShown: true}} />
      <Drawer.Screen name="Up Starts" component={UpStarts} options={{headerShown: true}} />
      <Drawer.Screen name="Report" component={Report} options={{headerShown: true}} />
      <Drawer.Screen name="Logout" component={Test} options={{headerShown: false}} />

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

