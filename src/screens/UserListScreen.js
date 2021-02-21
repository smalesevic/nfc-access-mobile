import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const UserListScreen = ({ navigation }) => {
    return (
        <>
        <Text style={{ fontSize: 48}}>User List</Text>
        <Button 
            title="Go to User" 
            onPress={() => navigation.navigate('UserDetails')}
        /> 
        </>
    );
};

const styles = StyleSheet.create({});

export default UserListScreen;