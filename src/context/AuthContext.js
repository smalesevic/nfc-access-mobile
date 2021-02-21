import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native-async-storage';


const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { errorMessage: '', token: action.payload }; // trying to rebuild state object from scratch, zero out error message
        default: 
            return state;
    }
};

// QUCIK EXAMPLE 

const add =(a,b) => a+b;


const add = (a,b) => a+b;
const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token); // set property token with token from response
        dispatch({ type: 'signup', payload: response.data.token });
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
    }
    // make api request to sign up with that email and password 

    // if we sign up, modify our state, and say that we are auth 

    // if fails, show err message 
};


const signin = dispatch => {
    return ({ email, password }) => {
        // Try to sign in 

        // Handle success by updating state  

        // if fails, show err message 
    };
};

const signout = (dispatch) => {
    return () => {
        // sign out
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: '' }
);