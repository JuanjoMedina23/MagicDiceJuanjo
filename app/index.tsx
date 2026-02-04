// app/index.tsx
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { type IngredienteKey, cargarIngredientes } from "../lib/constants/ingredientes";
import BurgerScene from "@/components/BurguerScene";
import BurgerInfo from "@/components/BurguerInfo";
import BurgerControls from "@/components/BurguerControls";

export default function Index() {
  const [burger, setBurger] = useState<IngredienteKey[]>(["PAN_INF", "PAN_SUP"]);
  const [ingredientesUris, setIngredientesUris] = useState<Record<string, string> | null>(null);

  // Cargar los assets al iniciar
  useEffect(() => {
    cargarIngredientes().then((uris) => {
      console.log("✅ Assets cargados:", uris);
      setIngredientesUris(uris);
    });
  }, []);

  function addIngrediente(tipo: IngredienteKey) {
    setBurger((prev) => {
      const panSupIndex = prev.indexOf("PAN_SUP");
      const nuevo = [...prev];
      nuevo.splice(panSupIndex, 0, tipo);
      return nuevo;
    });
  }

  function resetBurger() {
    setBurger(["PAN_INF", "PAN_SUP"]);
  }

  // Mostrar loading mientras se cargan los assets
  if (!ingredientesUris) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#FFD700" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.canvasContainer}>
        <BurgerScene burger={burger} ingredientesUris={ingredientesUris} />
      </View>
      
      <BurgerInfo burger={burger} />
      <BurgerControls onAddIngrediente={addIngrediente} onReset={resetBurger} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#1a1a1a" 
  },
  canvasContainer: {
    flex: 1,
    backgroundColor: "#2a2a2a",
  },
});