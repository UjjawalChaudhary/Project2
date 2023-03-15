import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Investment from './Investment';
import Insurance from './Insurance';
import LoanCard from './LoanCard';
import MoneyManagement from './MoneyManagement';
import FinancialPlanning from './FinancialPlanning';
import Utilities from './Utilities';
import WealthHome from '../drawer/WealthHome';


const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    
    <Bottom.Navigator >
          <Bottom.Screen
        name="Home"
        component={WealthHome}
        options={{
          tabBarStyle: {height: 60},
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
              source={require('./Home.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Investment"
        component={Investment}
        options={{
          tabBarStyle: {height: 60},
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
              source={require('./Investment.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Insurance"
        component={Insurance}
        options={{
          tabBarStyle: {height: 60},
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('./Insurance.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Loan & Card"
        component={LoanCard}
        options={{
          tabBarStyle: {height: 60},
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
              source={require('./LoanCard.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            );
          },
        }}
      />
        <Bottom.Screen
        name="MoneyManagement"
        component={MoneyManagement}
        options={{
          tabBarStyle: {height: 60},
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('./MoneyManagement.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Financial Planning"
        component={FinancialPlanning}
        options={{
          tabBarStyle: {height: 60},
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('./FinancialPlanning.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            );
          },
        }}
      />
            <Bottom.Screen
        name="Utilities"
        component={Utilities}
        options={{
          tabBarStyle: {height: 60},
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('./Utilties.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            );
          },
        }}
      />


    </Bottom.Navigator>
  );
};

export default BottomNavigator;
