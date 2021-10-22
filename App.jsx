import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import Constants from "expo-constants";

import AppNavigation from "./src/navigation/AppNavigation";
import { AppContextProvider } from "./src/context/AppContext";

function App() {
  const [auth, setAuth] = useState({
    token: "",
    email: "",
    password: "",
  });

  return (
    <NativeBaseProvider>
      <AppContextProvider value={{ auth, setAuth }}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <AppNavigation />
        </View>
      </AppContextProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
