import { Accelerometer } from 'expo-sensors';
export const SensorService = {
    subscribe: (callback: (data: any ) => void )=>{
        Accelerometer.setUpdateInterval(100); 
        return Accelerometer.addListener(callback);
    },
    unsubscribe: (subscription:any)=>{
        if (subscription) subscription.remove();
    }
} 
