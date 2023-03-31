import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import { LinearGradient } from 'expo-linear-gradient';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function NotificationScreen() {
  const sendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Welcome to Nordstone',
        body: 'Assignment by Soumili ✅',
        sound: 'default'
      },
      trigger: null,
    });
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#2196f3']}
      style={styles.container}
    >
      <TouchableOpacity style={styles.button} onPress={sendNotification}>
        <Text style={styles.buttonText}>Send Notification</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#192f6a',
  },
});

