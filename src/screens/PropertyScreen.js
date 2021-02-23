import React, {useContext} from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';
import { Card } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

const PropertyScreen = ({ navigation }) => {
    const { signout } = useContext(AuthContext);

    return (
    <View>
        <Text style={{ fontSize: 48}}>Properties</Text>
        <Button 
            title="Go to Property" 
            onPress={() => navigation.navigate('PropertyMenu')}
        /> 
        <Card>
            <Card.Title>HELLO WORLD</Card.Title>
        </Card>
        <Button 
            title="Sign Out" 
            onPress={signout}
        /> 
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default PropertyScreen;

