import { View, Text, StyleSheet,TextInput } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

export default function MapViews() {
    return (
        <View>
            <View style={styles.map}>
                <TextInput>From</TextInput>
                <TextInput>To</TextInput>
            </View>
            <MapView
                // style={styles.map}
                style={styles.wh}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,
    },
    wh: {
        width: '100%',
        height: '100%',
    },
});
