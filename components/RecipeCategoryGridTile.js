import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

const RecipeCategoryGridTile = ({ title, onSelect, backgroundColor }) => {

    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableComponent
                style={{ flex: 1 }}
                onPress={onSelect} >
                <View style={{ ...styles.container, backgroundColor: backgroundColor }}>
                    <Text style={styles.title} numberOfLines={2} >{title}</Text>
                </View>
            </TouchableComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 7
    },
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 22,
        textAlign: 'right',
        fontWeight: '600'
    }
});

export default RecipeCategoryGridTile;