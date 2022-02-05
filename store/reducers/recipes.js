import { RECIPES } from "../../data/fakeData";
import { SET_FILTERS, TOGGLE_FAVOURITE } from "../actions/recipes";

const initialState = {
    recipes: RECIPES,
    filteredRecipes: RECIPES,
    favouriteRecipes: []
};

const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVOURITE: {
            const recipeIndex = state.favouriteRecipes.findIndex(recipe => recipe.id === action.recipeId);
            if (recipeIndex >= 0) {
                const updatedRecipes = [...state.favouriteRecipes];
                updatedRecipes.splice(recipeIndex, 1);
                return { ...state, favouriteRecipes: updatedRecipes };
            } else {
                const newFavourite = state.recipes.find(recipe => recipe.id === action.recipeId);
                return { ...state, favouriteRecipes: state.favouriteRecipes.concat(newFavourite) };
            }
        }
        case SET_FILTERS: {
            const appliedFilters = action.filters;
            const updatedilteredRecipes = state.recipes.filter(recipe => {
                if (appliedFilters.isGlutenFree && !recipe.isGlutenFree) {
                    return false;
                }
                if (appliedFilters.isLactoseFree && !recipe.isLactoseFre) {
                    return false;
                }
                if (appliedFilters.isVegetarian && !recipe.isVegetarian) {
                    return false;
                }
                if (appliedFilters.isVegan && !recipe.isVegan) {
                    return false;
                }
                return true;
            });
            return { ...state, filteredRecipes: updatedilteredRecipes };
        }
        default:
            return state;
    }
}

export default recipesReducer;