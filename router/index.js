import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import DetailMovie from '../pages/DetailMovie';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={Register} name="Register" options={{
                headerStyle: {
                    backgroundColor: '#15141F',
                },
                headerTintColor: 'white'
            }} />
            <Stack.Screen component={Login} name="Login" options={{
                headerStyle: {
                    backgroundColor: '#15141F',
                },
                headerTintColor: 'white'
            }} />
            <Stack.Screen component={AboutUs} name="AboutUs" options={{
                headerStyle: {
                    backgroundColor: '#15141F',
                },
                headerTintColor: 'white'
            }} />
            <Stack.Screen component={Home} name="Home" options={{
                headerStyle: {
                    backgroundColor: '#15141F',
                },
                headerTintColor: 'white'
            }} />
            <Stack.Screen component={DetailMovie} name="DetailMovie" options={{
                headerStyle: {
                    backgroundColor: '#15141F',
                },
                headerTintColor: 'white'
            }} />
        </Stack.Navigator>
    )
}

export default Router
