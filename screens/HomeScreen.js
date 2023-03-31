import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 0.8,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 20,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Calculator")} style={styles.button}>
        <Text style={styles.menu}>🧠 Go to Calculator Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Notification")} style={styles.button}>
        <Text style={styles.menu}>🔔 Go to Notifiation Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Photo")} style={styles.button}>
        <Text style={styles.menu}>📸 Go to Photos Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Text")} style={styles.button}>
        <Text style={styles.menu}>✏️ Go to Text Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    fontSize: 18,
    color: 'white'
  },
button:{
  backgroundColor: "#2196f3",
  padding: 15,
  borderRadius: 5,
  alignItems: "center",
  width: "80%",
  marginTop: 20,
}
});
