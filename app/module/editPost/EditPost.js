import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const EditPost = ({ props, route }) => {

    const data = route.params.data;
    const [title, setTitle] = useState(route.params.data.title);
    const [body, setBody] = useState(route.params.data.body);

    const onSUbmit = () => {

        if(title !== '' && body !== '')
        {
         fetch('https://jsonplaceholder.typicode.com/posts/' + data.id , {
            method: 'PATCH',
            body: JSON.stringify({
                title: title,
                body:body
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            
        }).then((res)=>res.json())
        .then((res)=>{
            console.log(" Item Deleted");
            console.log(res);
        
        }).catch((err)=>{
            console.log(err)
        }
        )
     }
    }
    return (
        <View style={styles.mainLayout}>
            <Text style={styles.titleText}>Post</Text>
            <View>
                <View>
                    <Text style={styles.labelText}>Title</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={txt => setTitle(txt)}
                        value={title}
                        keyboardType="default"
                    />
                </View>
                <View>
                    <Text style={styles.labelText}>Body</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={txt => setBody(txt)}
                        value={body}
                        keyboardType="default"
                    />
                </View>

            </View>
            <View>
                <TouchableOpacity style={styles.btnView}>
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default EditPost;

const styles = StyleSheet.create({
    mainLayout: {
        flex: 1,
        padding: 10,
    },
    titleText: {
        fontSize: 25,
        fontFamily: 'OpenSans-Bold',
        marginHorizontal: 10,
        textAlign: 'center',
    },
    labelText: {
        color: '#d1cdcd',
        fontSize: 15,
        fontFamily: 'OpenSans-SemiBold',
    },
    inputStyle: {
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
    },
    btnText: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'OpenSans-SemiBold',
        textAlign: 'center',
        padding: 10
    },
    btnView: {
        width: SCREEN_WIDTH / 2 - 10,
        backgroundColor: "#495bde",
        borderRadius: 10
    }
});
