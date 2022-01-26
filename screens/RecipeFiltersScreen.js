import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RecipeFiltersScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Filters Screen!!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default RecipeFiltersScreen;