import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const PropertyDetailScreen = ({ navigation }) => {
    return (
        <>
        <Text style={{ fontSize: 48, marginTop: 80}}>Property Details</Text>
        
        <Button 
            title="Go Back to Properties" 
            onPress={() => navigation.navigate('PropertyList')}
        /> 
        
        </>
        
    );
};

const styles = StyleSheet.create({});

export default PropertyDetailScreen;