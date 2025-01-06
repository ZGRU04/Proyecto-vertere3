import { Slot } from 'expo-router';
import { Stack } from 'expo-router/stack';

export default function Layout() {
    return (
        <Slot/>
    );
    // <Stack
    //     screenOptions={{
    //     headerShown: false, // Oculta el encabezado por defecto
    // }}
}
