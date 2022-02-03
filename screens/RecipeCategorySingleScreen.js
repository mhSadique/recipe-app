import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import RecipeItem from '../components/RecipeItem';

const RecipeCategorySingleScreen = ({ navigation, route }) => {

    const categoryId = route.params.categoryId;
    const recipes = useSelector(store => store.recipes.filteredRecipes);
    const RecipesToDisplay = recipes.filter(recipe => recipe.categoryIds.indexOf(categoryId) >= 0);

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

export default RecipeCategorySingleScreen;