import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserList from '../module/userList/UserList';
import PostScreen from '../postScreen/PostScreen';
import EditPost from '../module/editPost/EditPost';

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
                   <stack.Screen
                name="PostScreen"
                component={PostScreen}
                options={{
                    headerShown:false
                }}/>
                 <stack.Screen
                name="EditPost"
                component={EditPost}
                options={{
                    headerShown:false
                }}/>

            </stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;