import { Tabs } from 'expo-router';

export default function HomeTabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ tabBarLabel: 'Home', headerTitle: 'Home' }} />
            <Tabs.Screen name="scanner" options={{ tabBarLabel: 'Scanner', headerTitle: 'Scanner' }} />
            <Tabs.Screen name="pedido" options={{ tabBarLabel: 'Pedido', headerTitle: 'Pedido' }} />
        </Tabs>
    );
}