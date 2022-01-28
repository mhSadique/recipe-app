import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const SaveIcon = ({ navigation, route, saveFilters }) => {
    const handleSaveFilter = () => {
        saveFilters();
    };

    return (
        <TouchableOpacity onPress={handleSaveFilter}>
            <Ionicons
                name='save'
                size={24}
                color="white"
                style={{
                    marginRight: 10
                }}
            />
        </TouchableOpacity>
    );
};

export default SaveIcon;