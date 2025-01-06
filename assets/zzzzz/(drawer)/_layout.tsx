import 'react-native-gesture-handler';

import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DrawerLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen name="Example" options={{ drawerLabel: 'ejemplo', headerTitle: 'ejemplo' }} />
                <Drawer.Screen name="Profile" options={{ drawerLabel: 'Perfil', headerTitle: 'Perfil' }} />
            </Drawer>
        </GestureHandlerRootView>
    );
}
