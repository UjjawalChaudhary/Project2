// import React, { useState } from "react";
// import { View, Text, Button, StyleSheet, TextInput } from "react-native";

//  const CustomerLogin = ({navigation}) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

// //   sendCred = () => {
// //     fetch("http://192.168.100.100:8000/users/login", {
// //       method: "POST",
// //       headers: {
// //         Accept: "application/json",
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({
// //         email: email,
// //         password: password,
// //       }),
// //     })
// //       .then((response) => response.json())
// //       .then((json) => console.log(json));
// //   };


// const sendCred = () => {
//   fetch('http://192.168.100.100:8000/users/login', {
//     method: 'POST',
//     headers: {
//         Accept: "application/json",
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ 
//         email: email,
//        password: password,
//     }),
//   })
//     .then((response) => {response.json()
//     if (response.status === 200){
//       navigation.navigate('Entry');

//     }
//     } )
//     .then((data) => {
 
//     });
// };


//   return (
//     <View
//       style={{
//         backgroundColor: "#01D0ED",
//         flex: 1,
//         paddingVertical: 190,
//         borderRadius: null,
//       }}
//     >
//       <Text style={styles.baseText}>
//         Welcome to
//         <Text style={styles.innerText}> Solnstech</Text>
//       </Text>

//       <TextInput
//         style={styles.input}
//         label="email"
//         mode="outlined"
//         placeholder="email"
//         placeholderTextColor="#36485f"
//         value={email}
//         theme={{ colors: { primary: "blue" } }}
//         onChangeText={(text) => setEmail(text)}
//       />

//       <TextInput
//         style={styles.input}
//         label="password"
//         mode="outlined"
//         placeholder="password"
//         placeholderTextColor="#36485f"
//         value={password}
//         theme={{ colors: { primary: "blue" } }}
//         onChangeText={(text) => setPassword(text)}
//       />

//       <View style={styles.btn}>
//         {/* <Button 
//              onPress={() => navigation.navigate("Entry")}
//         title="Login" 
//         color="green"></Button> */}
//         <Button onPress={() => sendCred()} title="Login" color="green"></Button>
//       </View>
//     </View>
    
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     margin: 15,
//     height: 40,
//     borderColor: "#36485f",
//     borderWidth: 1,
//     borderRadius: 10,
//   },
//   baseText: {
//     fontSize: 30,
//     fontWeight: "bold",
//     alignSelf: "center",
//   },
//   innerText: {
//     fontSize: 30,
//     color: "red",
//     marginTop: 100,
//     alignSelf: "center",
//   },
//   btn: {
//     alignSelf: "center",
//     borderRadius: 90,
//     height: 60,
//     paddingVertical: 10,
//     paddingHorizontal: 80,
//   },
// });

// export default CustomerLogin;


import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

 const CustomerLogin = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   sendCred = () => {
//     fetch("http://192.168.100.100:8000/users/login", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),
//     })
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   };


const sendCred = () => {
  fetch('http://192.168.100.100:8000/users/login', {
    method: 'POST',
    headers: {
        Accept: "application/json",
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
        email: email,
       password: password,
    }),
  })
    .then((response) => {response.json()
    if (response.status === 200){
      navigation.navigate('Entry');

    }
    } )
    .then((data) => {
 
    });
};


  return (
    <View
      style={{
        backgroundColor: "#F8CFFF",
        flex: 1,
        paddingVertical: 190,
        borderRadius: null,
      }}
    >
      <Text style={styles.baseText}>
        Welcome to
        <Text style={styles.innerText}> Solns</Text>
        <Text style={{color:"#55738D"}}>tech</Text>
      </Text>

      <TextInput
        style={styles.input}
        label="email"
        mode="outlined"
        placeholder="Email"
        placeholderTextColor="#36485f"
        value={email}
        theme={{ colors: { primary: "blue" } }}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        label="password"
        mode="outlined"
        placeholder="Password"
        placeholderTextColor="#36485f"
        value={password}
        theme={{ colors: { primary: "blue" } }}
        onChangeText={(text) => setPassword(text)}
      />

      <View style={styles.btn}>
        <Button 
             onPress={() => navigation.navigate("Entry")}
        title="Login" 
        color="green"></Button>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: "#36485f",
    borderWidth: 1,
    borderWidth: 1.5,
    borderRadius: 10,
    paddingLeft:10
  },
  baseText: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
  innerText: {
    fontSize: 30,
    color: "red",
    marginTop: 100,
    alignSelf: "center",
  },
  btn: {
    alignSelf: "center",
    borderRadius: 90,
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 80,
  },
});

export default CustomerLogin;
