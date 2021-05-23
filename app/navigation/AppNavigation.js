import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserList from '../module/userList/UserList';

const stack = createStackNavigator();
const AppNavigation = () =>{
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen
                name="UserList"
                component={UserList}
                options={{
                    headerShown:false
                }}/>
                
            </stack.Navigator>
        </NavigationContainer>
    );
}