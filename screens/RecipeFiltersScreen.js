import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import FilterSwitch from '../components/FilterSwitch';
import SaveIcon from '../components/SaveIcon';
import { setFilters } from '../store/actions/recipes';

const RecipeFiltersScreen = ({ navigation }) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            isGlutenFree: isGlutenFree,
            isLactoseFree: isLactoseFree,
            isVegan: isVegan,
            isVegetarian: isVegetarian
        };
        dispatch(setFilters(appliedFilters))
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <SaveIcon navigation={navigation} saveFilters={saveFilters} />,
        })
    }, [saveFilters, navigation]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Recipe Filters</Text>
            <FilterSwitch
                label='Gluten Free'
                value={isGlutenFree}
                onChange={(newVal) => setIsGlutenFree(newVal)}
            />
            <FilterSwitch
                label='Lactose Free'
                value={isLactoseFree}
                onChange={(newVal) => setIsLactoseFree(newVal)}

            />
            <FilterSwitch
                label='Vegan'
                value={isVegan}
                onChange={(newVal) => setIsVegan(newVal)}
            />
            <FilterSwitch
                label='Vegetarian'
                value={isVegetarian}
                onChange={(newVal) => setIsVegetarian(newVal)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContaienr: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'
    }
});

export default RecipeFiltersScreen;