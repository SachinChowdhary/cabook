import React from "react";
import { View, StatusBar } from "react-native";
import HomeStack from "./Navigation/StackNavigation/HomeStack";
import { globalStyles } from "./styles";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
    <StatusBar
      barStyle="light-content"
      backgroundColor="#000000"
      translucent={false}
    />
    <View style={globalStyles.container}>
      <HomeStack />
    </View>
    </SafeAreaProvider>
  );
} 