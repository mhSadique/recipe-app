import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RecipeItem = ({ item, onSelectRecipe }) => {
    return (
        <View style={styles.recipeItem}>
            <TouchableOpacity onPress={onSelectRecipe}>
                <View>
                    <View style={styles.recipeHeader}>
                        <ImageBackground
                            source={{ uri: item.imageUrl }}
                            style={styles.bgImage}
                        >
                            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.recipeFooter}>
                        <Text>{item.duration}m</Text>
                        <Text>{item.complexity.toUpperCase()}</Text>
                        <Text>{item.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    recipeItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    recipeHeader: {
        height: '85%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        color: 'white',
        fontSize: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingVertical: 3,
        textAlign: 'center'
    },
    recipeFooter: {
        height: '15%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10
    },

});

export default RecipeItem;