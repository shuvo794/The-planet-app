import { View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React from "react";
import Text from "./text/text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function PlanetHeader({ backBtn }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backBtn && (
        <Pressable
          style={{ marginRight: spacing[4] }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="left" size={24} color="white" />
        </Pressable>
      )}
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
    flexDirection: "row",
    alignItems: "center",
  },
});
