import React, { useCallback, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavourite } from '../store/actions/recipes';

const FavouriteButton = ({ recipeId }) => {

    const favouriteRecipes = useSelector(store => store.recipes.favouriteRecipes);
    const currentRecipeIsFavourite = favouriteRecipes.some(recipe => recipe.id === recipeId);
    const dispatch = useDispatch();
    const toggleAddToFavourite = useCallback(() => {
        dispatch(toggleFavourite(recipeId))
    }, [dispatch, recipeId]);

    return (
        <TouchableOpacity onPress={toggleAddToFavourite}>
            <Ionicons name={currentRecipeIsFavourite ? 'ios-star' : 'ios-star-outline'} size={24} color="white" />
        </TouchableOpacity>
    );
};

export default FavouriteButton;