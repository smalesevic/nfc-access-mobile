import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const PropertyScreen = ({ navigation }) => {
    return (
        <>
        <Text style={{ fontSize: 48}}>Properties</Text>
        <Button 
            title="Go to Property" 
            onPress={() => navigation.navigate('PropertyMenu')}
        /> 
        <Button 
            title="Sign Out" 
            onPress={() => navigation.navigate('loginFlow')}
        /> 
        </>
    );
};

const styles = StyleSheet.create({});

export default PropertyScreen;