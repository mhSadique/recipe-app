import React from 'react';
import {
    FlatList
} from 'react-native';
import RecipeCategoryGridTile from '../components/RecipeCategoryGridTile';
import { CATEGORIES } from '../data/fakeData';

const RecipeCategoriesScreen = ({ navigation }) => {

    const renderGridItem = ({ item }) => {
        return (
            <RecipeCategoryGridTile
                backgroundColor={item.color}
                title={item.title}
                onSelect={() => {
                    navigation.navigate('RecipeCategorySingleScreen', {
                        categoryId: item.id,
                        title: item.title,
                        color: item.color
                    })
                }}
            />
        );
    };

    return <FlatList
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
        keyExtractor={(item, index) => item.id}
    />
};

export default RecipeCategoriesScreen;