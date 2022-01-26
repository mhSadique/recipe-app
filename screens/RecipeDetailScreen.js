import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RECIPES } from '../data/fakeData';

const RecipeDetailScreen = ({ route }) => {
    const selectedRecipe = RECIPES.find(recipe => recipe.id === route.params.recipeId);
    return (
        <ScrollView>
            <Image
                source={{ uri: selectedRecipe.imageUrl }}
                style={styles.bgImage}
            />
            <View style={styles.recipeFooter}>
                <Text>{selectedRecipe.duration}m</Text>
                <Text>{selectedRecipe.complexity.toUpperCase()}</Text>
                <Text>{selectedRecipe.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedRecipe.ingredients.map(ingredient => (
                <Text style={styles.list} key={ingredient}>{ingredient}</Text>
            ))}
            <Text style={styles.title}>steps</Text>
            {selectedRecipe.steps.map(steps => (
                <Text style={styles.list} key={steps}>{steps}</Text>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    recipeFooter: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    bgImage: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    list: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20
    }
});

export default RecipeDetailScreen;