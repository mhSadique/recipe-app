import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import RecipeItem from '../components/RecipeItem';
import { CATEGORIES, RECIPES } from '../data/fakeData';

const RecipeCategorySingleScreen = ({ navigation, route }) => {

    const categoryId = route.params.categoryId;
    const RecipesToDisplay = RECIPES.filter(recipe => recipe.categoryIds.indexOf(categoryId) >= 0);

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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default RecipeCategorySingleScreen;