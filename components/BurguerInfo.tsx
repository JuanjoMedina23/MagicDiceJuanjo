// components/BurgerInfo.tsx
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { type IngredienteKey } from "../lib/constants/ingredientes";

interface BurgerInfoProps {
  burger: IngredienteKey[];
}

export default function BurgerInfo({ burger }: BurgerInfoProps) {
  return (
    <>
      {/* Panel de información */}
      <View style={styles.infoPanel}>
        <Text style={styles.title}> Constructor de Hamburguesa</Text>
        <Text style={styles.subtitle}>Ingredientes: {burger.length - 2}</Text>
      </View>

      {/* Lista de ingredientes actual */}
      <ScrollView style={styles.ingredientesList}>
        <Text style={styles.listTitle}>Tu hamburguesa:</Text>
        {burger.map((item, index) => (
          <Text key={index} style={styles.listItem}>
            {index + 1}. {item.replace("_", " ")}
          </Text>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  infoPanel: {
    padding: 15,
    backgroundColor: "#333",
    borderBottomWidth: 2,
    borderBottomColor: "#FFD700",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
  },
  ingredientesList: {
    maxHeight: 120,
    backgroundColor: "#2a2a2a",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 8,
  },
  listItem: {
    fontSize: 14,
    color: "#ccc",
    paddingVertical: 3,
  },
});