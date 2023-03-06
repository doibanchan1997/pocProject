import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

export class HomeComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>HomeComponent</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeComponent;
