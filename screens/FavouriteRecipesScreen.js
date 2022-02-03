import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import RecipeItem from '../components/RecipeItem';

const FavouriteRecipesScreen = ({ navigation }) => {

    const favouriteRecipes = useSelector(store => store.recipes.favouriteRecipes);

    const renderRecipeItems = ({ item }) => {
        return <RecipeItem item={item} onSelectRecipe={() => {
            navigation.navigate('RecipeDetailScreen', {
                recipeId: item.id,
                title: item.title
            })
        }} />
    };

    if (favouriteRecipes.length === 0 || !favouriteRecipes) {
        return (
            <View style={styles.container}>
                <Text>No Favourite Recipes Found. Start Adding Some.</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={favouriteRecipes}
            renderItem={renderRecipeItems}
            keyExtractor={(item, index) => item.id}
            style={{ padding: 7 }}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavouriteRecipesScreen;