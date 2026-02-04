// components/BurgerControls.tsx
import { View, Button, StyleSheet } from "react-native";
import { type IngredienteKey } from "../lib/constants/ingredientes";

interface BurgerControlsProps {
  onAddIngrediente: (tipo: IngredienteKey) => void;
  onReset: () => void;
}

export default function BurgerControls({ onAddIngrediente, onReset }: BurgerControlsProps) {
  return (
    <View style={styles.buttons}>
      <View style={styles.buttonRow}>
        <View style={styles.buttonWrapper}>
          <Button 
            title=" CARNE" 
            onPress={() => onAddIngrediente("CARNE")} 
            color="#8B4513"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button 
            title=" QUESO" 
            onPress={() => onAddIngrediente("QUESO")} 
            color="#FFD700"
          />
        </View>
      </View>
      
      <View style={styles.buttonRow}>
        <View style={styles.buttonWrapper}>
          <Button 
            title=" LECHUGA" 
            onPress={() => onAddIngrediente("LECHUGA")} 
            color="#228B22"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button 
            title=" TOMATE" 
            onPress={() => onAddIngrediente("TOMATE")} 
            color="#DC143C"
          />
        </View>
      </View>

      <View style={styles.resetButton}>
        <Button 
          title=" RESETEAR" 
          onPress={onReset} 
          color="#666"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    padding: 15,
    gap: 10,
    backgroundColor: "#1a1a1a",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
  },
  buttonWrapper: {
    flex: 1,
  },
  resetButton: {
    marginTop: 5,
  },
});