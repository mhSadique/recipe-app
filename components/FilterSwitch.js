import React from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import Colors from '../constants/Colors';

const FilterSwitch = ({ label, value, onChange }) => {
    return (
        <View style={styles.filterContaienr}>
            <Text>{label}</Text>
            <Switch
                value={value}
                onValueChange={onChange}
                thumbColor={value ? Colors.primaryColor : Colors.accentColor}
                trackColor={{ false: '#ccc', true: Colors.primaryColor }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    filterContaienr: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});

export default FilterSwitch;