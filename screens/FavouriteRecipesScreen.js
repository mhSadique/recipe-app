import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import RecipeItem from '../components/RecipeItem';
import { RECIPES } from '../data/fakeData';

const FavouriteRecipesScreen = ({ navigation }) => {
    const RecipesToDisplay = RECIPES.filter(recipe => recipe.id === 'm1' || recipe.id === 'm2');

    const renderRecipeItems = ({ item }) => {
        return <RecipeItem item={item} onSelectRecipe={() => {
            navigation.navigate('RecipeDetailScreen', {
                recipeId: item.id,
                title: item.title
            })
        }} />
    };

    return (
        <FlatList
            data={RecipesToDisplay}
            renderItem={renderRecipeItems}
            keyExtractor={(item, index) => item.id}
            style={{ padding: 7 }}
        />
    );
};
export default FavouriteRecipesScreen;