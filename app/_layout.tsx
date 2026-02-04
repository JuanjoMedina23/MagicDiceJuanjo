import { Stack } from 'expo-router';
import { AuthProvider, useAuth } from '../lib/modules/auth/AuthProvider';
import { usePushNotifications } from '@/lib/modules/notifications/usePushNotifications';

function AuthLayout() {
  const {session} = useAuth();
  const userId = session?.user.id;
  usePushNotifications(userId);
  return <Stack/>;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} /> {/* El resto de tu app */}
      <AuthLayout />
    </AuthProvider>
  );
}