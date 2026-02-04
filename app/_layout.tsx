import { Stack } from 'expo-router';
import { AuthProvider } from '../lib/modules/auth/AuthProvider';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} /> {/* El resto de tu app */}
    </AuthProvider>
  );
}