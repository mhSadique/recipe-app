import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Loader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.loaderText}>Recipes You Love</Text>
        </View>
    );
};

export default Loader;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderText: {
        fontSize: 40
    }
});