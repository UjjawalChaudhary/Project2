import React from 'react';
import {Image, ScrollView, Text, View, Button} from 'react-native';
import header from './Wealth/Header.jpeg';
//import middle from './Wealth/Middle1.jpeg';
import CCR from './Wealth/CreditPage.jpeg';
import BottomNavigator from '../bottom/BottomNavigator';
import Invest from './Wealth/Invest2.png';






const App = ({navigation}) => {
  return (

    
 <View>

  <ScrollView>
   <Image
   source={header}
   style={{width: "100%", height: "5%", alignSelf:'center'}} />
  
<View style={{backgroundColor:'#04247D'}}>
 <Text style={{fontSize: 22, alignSelf:'center', color:'white'}}>
 Identify your financial health gap and {"\n"}    start planning for early financial {"\n"}                         freedom
 </Text>
 </View>

    {/* <Image
  source={middle}
  style={{width: "100%", height: "13%", alignSelf:'center'}}
/> */}

<View style={{backgroundColor:'#04247D'}}>
 <Text style={{fontSize: 19, alignSelf:'center', color:'white'}}>
    - Know your fiancial helth  {"\n"} {"\n"}
    - Get certified recomandation for {"\n"}   your financial planning {"\n"} {"\n"}
    - Take action based on {"\n"} recomandation
 </Text>
</View>

<View style={{backgroundColor:'#04247D', height: 60, paddingVertical: 10, paddingHorizontal: 145,}}>
       <Button 
             onPress={() => navigation.navigate("Main")}
        title="Start" 
        color="green">
        </Button>
      </View>

      <View style={{backgroundColor:'#38B6FF', height: 60, paddingVertical: 10, paddingHorizontal: 10, flexDirection: "row"}}>
     <Button 
            onPress={() => navigation.navigate("CustomerLogin")}
       title="Check Credit Report" 
       color="blue"
       >
        </Button>
      </View>

       <Image
   source={CCR}
   style={{width: "100%", height: "31%", alignSelf:'center'}}
 />
 
<Image
   source={Invest}
   style={{width: "100%", height: "15%", alignSelf:'center'}}
 />

<View style={{backgroundColor:'#F37DAB'}}>
 <Text style={{fontSize: 25, alignSelf:'center', color:'#E40E61',fontWeight: "bold"}}>
  {"\n"} {"\n"} PLANING YOUR FINANCIAL {"\n"} HEALTH AND INDIPADANCE {"\n"}                    EARLY
 {"\n"} </Text>

 <Text style={{fontSize: 20, alignSelf:'center', color:'black'}}>
 - Identify your financial gap {"\n"} {"\n"}
 - Get a detailed financial health {"\n"}  report {"\n"} {"\n"}
 - Get a recommendation from {"\n"} certified financial expert {"\n"} {"\n"}
 - Get transparency and all expert {"\n"}  around you {"\n"}{"\n"}
 </Text>
 <View style={{backgroundColor:'#F37DAB', height: 60, paddingVertical: 10, paddingHorizontal: 95,}}>
     <Button 
            onPress={() => navigation.navigate("CustomerLogin")}
       title="Let's Start" 
       color="#1CD65C">
        </Button>
      </View>
      <View style={{backgroundColor:'#F37DAB', height: 1100, paddingVertical: 10, paddingHorizontal: 95,}}>
      </View>
     
    
 </View>
  </ScrollView>
  </View>
);
  }


export default App;
