import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from "react-native";
import { colors } from "./src/theme/colors";
import { spacing } from "./src/theme/spacing";
import { useFonts } from "expo-font";
import { typography } from "./src/theme/typography";

import Text from "./src/components/text/text";
// import home from "./src/screens/home";
import Home from "./src/screens/home";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    "Antonio-Medium": require("./assets/Antonio-Medium.ttf"),
    "Spartan-Bold": require("./assets/Spartan-Bold.ttf"),
    "Spartan-Regular": require("./assets/Spartan-Regular.ttf"),
  });

  if (!loaded) {
    <Text>font is Loading ....</Text>;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
