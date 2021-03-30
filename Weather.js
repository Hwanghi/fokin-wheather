import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "dust, smoke, and other dry particulates obscure the clarity of the sky."
  },
  Clouds: {
    iconName: "cloud",
    gradient: ["#2c3e50", "#3498db"],
    title: "Clouds",
    subtitle: "Water or various other chemicals may compose the droplets and crystals."
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#3B4371", "#F3904F"],
    title: "Dust",
    subtitle: "Dust is made of fine particles of solid matter"
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#000C40", "#F0F2F0"],
    title: "Mist",
    subtitle: "Mist is a phenomenon caused by small droplets of water suspended in air. "
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#43C6AC", "#F8FFAE"],
    title: "Clear",
    subtitle: "there are no clouds in the sky"
  }
}
export default function Weather({ temp, condition }) {
  if (condition !== undefined) {
    return (
      <LinearGradient
        // Background Linear Gradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
      >
        <StatusBar barStyle='light-content' />
        <View style={styles.halfContatiner}>
          <MaterialCommunityIcons
            size={86}
            name={weatherOptions[condition].iconName}
            color='white'
          />
          <Text style={styles.temp}>
            {temp}º
        </Text>
        </View>
        <View style={{ ...styles.halfContatiner, ...styles.textContainer}}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>  
        </View>
      </LinearGradient>
    );
  }
  else {
    return (
      <View style={styles.halfContatiner}>
          <MaterialCommunityIcons
            size={86}
            name='sign-caution'
            color='white'
          />
          <Text style={styles.temp}>
            Error
        </Text>
      </View>
    )
  }
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: 'white'
  },
  halfContatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title : {
    color: 'white',
    fontSize: 44,
    fontWeight: '100',
    marginBottom: 10
  },
  subtitle : {
    fontWeight: "300",
    color: 'white',
    fontSize: 24
  },
  textContainer: {
    paddingBottom: 40,
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
})