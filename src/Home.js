// import React, { useState } from "react";
// import { View, Text, Button, StyleSheet, TextInput } from "react-native";

// const Registration = ({ navigation }) => {
//   const [name, setName] = useState("");
//   const [phone, setNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   sendCred = () => {
//     console.log(name)
//     fetch("http://192.168.100.100:8000/users/register", {
//       method: "POST",
//       headers: {
//         Accept: 'application/json',
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: name,
//         phone: phone,
//         email: email,
//         password: password,
//       }),
//     }).then((response) => response.json()).then((json)=> console.log(json));
//   setName('');
//   setNumber('');
//   setEmail('');
//   setPassword('');
//   };
//   return (
//     <View
//       style={{
//         backgroundColor: "#F8CFFF",
//         flex: 1,
//         paddingVertical: 70,
//         borderRadius: null,
//       }}
//     >
//       <Text style={styles.baseText}>
//         Welcome to
//         <Text style={styles.innerText}> Solnstech</Text>
//       </Text>

//       <View
//         style={{
//           paddingHorizontal: 8,
//           paddingTop: 20,
//         }}
//       >
//    <TextInput
//           style={styles.input}
//           label="name"
//           mode="outlined"
//           placeholder="name"
//           placeholderTextColor="#36485f"
//           value={name}
//           theme={{ colors: { primary: "blue" } }}
//           onChangeText={(text) => setName(text)}
//         />

// <TextInput
//           style={styles.input}
//           label="phone"
//           mode="outlined"
//           placeholder="phone"
//           placeholderTextColor="#36485f"
//           value={phone}
//           theme={{ colors: { primary: "blue" } }}
//           onChangeText={(text) => setNumber(text)}
//         />

//         <TextInput
//           style={styles.input}
//           label="email"
//           mode="outlined"
//           placeholder="email"
//           placeholderTextColor="#36485f"
//           value={email}
//           theme={{ colors: { primary: "blue" } }}
//           onChangeText={(text) => setEmail(text)}
//         />
//  <TextInput
//           style={styles.input}
//           label="password"
//           mode="outlined"
//           placeholder="password"
//           placeholderTextColor="#36485f"
//           value={password}
//           theme={{ colors: { primary: "blue" } }}
//           onChangeText={(text) => setPassword(text)}
//         />
//       </View>

//       <View style={styles.btn2}>
//         <Button
//           onPress={() => sendCred()}
//           title="Register"
//           color="#0040ff"
//         ></Button>
//       </View>
//       <View>
//         <Text style={styles.formText}>Already Have an Account</Text>
//         <View
//           style={{
//             padding: 1,
//             flexDirection: "row",
//             alignSelf: "center",
//             marginTop: 5,
//           }}
//         >
//           <View style={styles.btn}>
//             <Button
//               style={styles.btn}
//               onPress={() => navigation.navigate("CustomerLogin")}
//               title="Customer Login"
//               color="#0040ff"
//             ></Button>
//           </View>

//           <View style={styles.btn}>
//             <Button
//               onPress={() => navigation.navigate("PartnerLogin")}
//               title="Partner Login"
//               color="#0040ff"
//             ></Button>
//           </View>
//         </View>
//         <View style={{ width: 280, alignSelf: "center", marginTop: 10 }}>
//           <Button
//             style={{ borderRadius: 20 }}
//             onPress={() => navigation.navigate("EmployeeLogin")}
//             title="I am Employee Here"
//             color="#0040ff"
//           ></Button>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     marginLeft: 18,
//     marginRight: 18,
//     marginTop: 10,
//     marginBottom: 10,
//     borderColor: "#36485f",
//     borderWidth: 2,
//     borderRadius: 10,
//     padding: 4,
//     color: "black",
//   },
//   baseText: {
//     fontSize: 50,
//     fontWeight: "bold",
//     alignSelf: "center",
//   },
//   innerText: {
//     fontSize: 50,
//     color: "red",
//     marginTop: 100,
//     alignSelf: "center",
//   },
//   formText: {
//     fontSize: 18,
//     height: 35,
//     alignSelf: "center",

//     borderRadius: 10,
//   },
//   btn: {
//     alignSelf: "center",
//     borderRadius: 20,
//     height: 60,
//     width: 160,

//     paddingVertical: 5,
//     paddingHorizontal: 20,
//   },
//   btn2: {
//     alignSelf: "center",
//     borderRadius: 90,
//     height: 60,
//     width: 250,
//     paddingVertical: 2,
//     paddingHorizontal: 40,
//     marginTop: 15,
//   },
//   roundButton1: {
//     width: 100,
//     height: 100,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 10,
//     borderRadius: 100,
//     backgroundColor: "orange",
//   },
// });

// export default Registration;

import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const Registration = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  sendCred = () => {
    console.log(name)
    fetch("http://192.168.100.100:8000/users/register", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        password: password,
      }),
    }).then((response) => response.json()).then((json)=> console.log(json));
  setName('');
  setNumber('');
  setEmail('');
  setPassword('');
  };
  return (
    <View
      style={{
        backgroundColor: "#F8CFFF",
        flex: 1,
        paddingVertical: 110,
        borderRadius: null,
      }}
    >
      <Text style={styles.baseText}>
        Welcome to
        <Text style={styles.innerText}> Solns</Text>
        <Text style={styles.innerText}>tech</Text>
      </Text>

      <View
        style={{
          paddingHorizontal: 8,
          paddingTop: 20,
        }}
      >
   <TextInput
          style={styles.input}
          label="name"
          mode="outlined"
          placeholder="Name"
          placeholderTextColor="#36485f"
          value={name}
          theme={{ colors: { primary: "blue" } }}
          onChangeText={(text) => setName(text)}
        />

<TextInput
          style={styles.input}
          label="phone"
          mode="outlined"
          placeholder="Phone"
          placeholderTextColor="#36485f"
          value={phone}
          theme={{ colors: { primary: "blue" } }}
          onChangeText={(text) => setNumber(text)}
        />

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
      </View>

      <View style={styles.btn2}>
        <Button
          onPress={() => sendCred()}
          title="Register"
          color="#0040ff"
        ></Button>
      </View>
      <View>
        <Text style={styles.formText}>Already Have an Account</Text>
        <View
          style={{
            padding: 1,
            flexDirection: "row",
            alignSelf: "center",
            marginTop: 5,
          }}
        >
          <View style={styles.btn}>
            <Button
              style={styles.btn}
              onPress={() => navigation.navigate("CustomerLogin")}
              title="Customer Login"
              color="#0040ff"
            ></Button>
          </View>

          <View style={styles.btn}>
            <Button
              onPress={() => navigation.navigate("PartnerLogin")}
              title="Partner Login"
              color="#0040ff"
            ></Button>
          </View>
        </View>
        <View style={{ width: 280, alignSelf: "center", marginTop: 10 }}>
          <Button
            style={{ borderRadius: 20 }}
            onPress={() => navigation.navigate("EmployeeLogin")}
            title="I am Employee Here"
            color="#0040ff"
          ></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginLeft: 18,
    marginRight: 18,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#36485f",
    borderWidth: 2,
    borderRadius: 10,
    padding: 4,
    color: "black",
    paddingLeft:10,
    textShadowColor:"black"
  },
  baseText: {
    fontSize: 32,
    fontWeight: "bold",
    alignSelf: "center",
  },
  innerText: {
    fontSize: 32,
    color: "red",
    marginTop: 100,
    alignSelf: "center",
  },
  innerText2: {
    fontSize: 32,
    color: "#587792",
    marginTop: 100,
    alignSelf: "center",
  },
  formText: {
    fontSize: 18,
    height: 35,
    alignSelf: "center",

    borderRadius: 10,
  },
  btn: {
    alignSelf: "center",
    borderRadius: 20,
    height: 60,
    width: 160,

    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  btn2: {
    alignSelf: "center",
    borderRadius: 90,
    height: 60,
    width: 250,
    paddingVertical: 2,
    paddingHorizontal: 40,
    marginTop: 15,
  },
  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "orange",
  },
});

export default Registration;
