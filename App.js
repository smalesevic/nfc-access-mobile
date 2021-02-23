import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import PropertyScreen from './src/screens/PropertyScreen';
import PropertyDetailScreen from './src/screens/PropertyDetailScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import UserListScreen from './src/screens/UserListScreen';
import UserDetailScreen from './src/screens/UserDetailScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import TokenScreen from './src/screens/TokenScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'

const switchNavigator = createSwitchNavigator({
  // Authentication and Everything else separation 
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    SignUp: SignUpScreen,
    SignIn: SignInScreen
  }),
  mainFlow: createStackNavigator({
    PropertyList: PropertyScreen,
  }),
  PropertyMenu: createDrawerNavigator({
    PropertyDetail: PropertyDetailScreen,
    User: createStackNavigator({
      UserList: UserListScreen,
      UserDetails: UserDetailScreen
    }),
    Activity: ActivityScreen,
    Token: TokenScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App 
        ref={(navigator) => {
          setNavigator(navigator);
         }}/>
    </AuthProvider>
  );
};