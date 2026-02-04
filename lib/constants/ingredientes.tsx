import { Asset } from 'expo-asset';

export type IngredienteKey = "PAN_INF" | "PAN_SUP" | "CARNE" | "QUESO" | "LECHUGA" | "TOMATE";

export const INGREDIENTES_RAW = {
  PAN_INF: require("@/assets/hamburguesa/PanDeAbajoMedina.glb"),
  PAN_SUP: require("@/assets/hamburguesa/PanArriba.glb"),
  CARNE: require("@/assets/hamburguesa/carne.glb"),
  QUESO: require("@/assets/hamburguesa/queso.glb"),
  LECHUGA: require("@/assets/hamburguesa/Lechuga.glb"),
  TOMATE: require("@/assets/hamburguesa/tomate.glb"),
};

export async function cargarIngredientes() {
  const assets = await Promise.all([
    Asset.fromModule(INGREDIENTES_RAW.PAN_INF).downloadAsync(),
    Asset.fromModule(INGREDIENTES_RAW.PAN_SUP).downloadAsync(),
    Asset.fromModule(INGREDIENTES_RAW.CARNE).downloadAsync(),
    Asset.fromModule(INGREDIENTES_RAW.QUESO).downloadAsync(),
    Asset.fromModule(INGREDIENTES_RAW.LECHUGA).downloadAsync(),
    Asset.fromModule(INGREDIENTES_RAW.TOMATE).downloadAsync(),
  ]);

  return {
    PAN_INF: assets[0].localUri || assets[0].uri,
    PAN_SUP: assets[1].localUri || assets[1].uri,
    CARNE: assets[2].localUri || assets[2].uri,
    QUESO: assets[3].localUri || assets[3].uri,
    LECHUGA: assets[4].localUri || assets[4].uri,
    TOMATE: assets[5].localUri || assets[5].uri,
  };
}

export const ALTURAS: Record<IngredienteKey, number> = {
  PAN_INF: 0.3,
  CARNE: 0.3,
  QUESO: 0.2,
  LECHUGA: 0.25,
  TOMATE: 0.2,
  PAN_SUP: 0.3,
};

export function calcularPosicion(burger: IngredienteKey[], index: number): number {
  let altura = -0.5;
  for (let i = 0; i < index; i++) {
    altura += ALTURAS[burger[i]];
  }
  return altura;
}