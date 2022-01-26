import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const DrawerIcon = ({ navigation, screenName }) => {
    const handleAddToFavourite = () => {
        navigation.toggleDrawer();
    };

    return (
        <TouchableOpacity onPress={handleAddToFavourite}>
            <Ionicons
                name='menu'
                size={24}
                color="white"
                style={{
                    marginRight: 10,
                    paddingLeft: screenName === 'Categories' ? 0 : 15
                }}
            />
        </TouchableOpacity>
    );
};

export default DrawerIcon;