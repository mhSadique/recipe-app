import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const FavouriteButton = ({ navigation }) => {
    const [iconName, setIconName] = useState('ios-star-outline');

    const handleAddToFavourite = () => {
        if (iconName === 'ios-star-outline') {
            setIconName('ios-star')
        } else if (iconName === 'ios-star') {
            setIconName('ios-star-outline');
        }
    };

    return (
        <TouchableOpacity onPress={handleAddToFavourite}>
            <Ionicons name={iconName} size={24} color="white" />
        </TouchableOpacity>
    );
};

export default FavouriteButton;