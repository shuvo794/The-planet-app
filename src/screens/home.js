import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";
import Text from "../components/text/text";

import PlanetHeader from "../components/planet-header";
import { colors } from "../theme/colors";
import { PLANET_LIST } from "../data/planet-list";
import { spacing } from "../theme/spacing";

import { AntDesign } from "@expo/vector-icons";
export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <FlatList
        contentContainerStyle={styles.list}
        data={PLANET_LIST}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          const { name, color } = item;
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("Details", { Planet: item });
              }}
              style={styles.item}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={[styles.circel, { backgroundColor: color }]} />
                <Text preset="h4" style={styles.itemName}>
                  {name}
                </Text>
              </View>
              <AntDesign name="right" size={18} color="white" />
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separetor} />}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  list: {
    padding: spacing[4],
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing[4],
    justifyContent: "space-between",
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[4],
  },
  circel: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  separetor: {
    backgroundColor: colors.white,
    borderWidth: 0.5,
  },
});
