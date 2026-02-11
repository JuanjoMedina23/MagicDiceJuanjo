🍔 3D Burger App + Push Notifications

Aplicación desarrollada con Expo que combina:

🔔 Notificaciones push usando Expo Notifications

🍔 Renderizado 3D de una hamburguesa usando React Three Fiber

⚡ Navegación con Expo Router

📱 Soporte para Android y Web

🚀 Tecnologías principales

Expo

Expo Notifications

React Three Fiber

Three.js

Expo Router (file-based routing)

📦 Instalación
npm install

▶️ Ejecutar el proyecto
Android
npm run android


Si tienes problemas:

Ejecuta IDX: Rebuild Environment

O usa:

npm run android -- --tunnel


Puedes abrir la app en:

Development build

Emulador Android

Expo Go (limitado para ciertas APIs nativas)

Web
npm run web

🔔 Notificaciones Push

Este proyecto usa Expo Push Notifications para:

Solicitar permisos al usuario

Obtener el Expo Push Token

Enviar notificaciones desde el backend

Manejar notificaciones en foreground y background

Asegúrate de configurar:

app.json con expo-notifications

EAS Build si necesitas producción

Un servidor backend para enviar las notificaciones

Documentación oficial:
https://docs.expo.dev/push-notifications/overview/

🍔 Modelo 3D

La hamburguesa está renderizada usando:

@react-three/fiber

@react-three/drei

Three.js

Características:

Renderizado 3D en tiempo real

Iluminación y cámara personalizadas

Soporte táctil (rotación/interacción si aplica)

📁 Estructura del proyecto
app/
 ├── index.tsx
 ├── notifications.ts
 ├── components/
 │    ├── Burger3D.tsx
 │    └── ...

🔄 Reiniciar el proyecto base

Si quieres limpiar el proyecto:

npm run reset-project

📚 Recursos

Expo Docs → https://docs.expo.dev

React Three Fiber → https://docs.pmnd.rs/react-three-fiber

Three.js → https://threejs.org/
