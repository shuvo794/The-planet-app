import { View, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Text from "./text/text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function PlanetHeader() {
  return (
    <View style={styles.container}>
      <Text preset="h2">The Planet</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: spacing[5],
    padding: spacing[5],
    borderBottomWidth: 0.2,
    borderBottomColor: colors.white,
  },
});
