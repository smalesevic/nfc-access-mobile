import React, { useContext, useEffect  } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';



const SignUpScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage, tryLocalSignIn } = useContext(
        AuthContext
    );

    useEffect(() => {
        tryLocalSignIn();
      }, []);
    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink
                routeName="SignIn"
                text="Already have an account? Sign in instead!"
            />
        </View>
    );
};

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

  
const styles = StyleSheet.create({
    container: {
        flex: 1, // takes up as much space as possible (the view)
        justifyContent: 'center',
        marginBottom: 200
    }
});



export default SignUpScreen;