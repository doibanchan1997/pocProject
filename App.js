import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeComponent from './src/components/homeComponent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LocationComponent from './src/components/locationComponent';
import 'react-native-gesture-handler';
import MapViews from './src/views/MapView';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen
                        screenOptions={{
                            drawerStyle: {
                                backgroundColor: '#c6cbef',
                                width: 240,
                            },
                        }}
                        name="Map"
                        component={MapViews}
                        options={{ headerTransparent: true}}
                    />
                    <Drawer.Screen name="Home" component={HomeComponent} />
                    <Drawer.Screen
                        name="LocationComponent"
                        component={LocationComponent}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
    );
}
