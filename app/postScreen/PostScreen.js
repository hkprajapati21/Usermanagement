import React, { useState } from 'react';
import { useEffect } from 'react';
import { FlatList, TouchableOpacity, StyleSheet, View, Image, Text, Dimensions } from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


const PostScreen = ({navigation}) => {

    const [userData, setUserData] = useState(null);
    const fetchUserData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: 'GET', // or 'PUT'
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
            }
        )
            .then((res) =>
                res.json()
            ).then((response) => {
                console.log(response);
                setUserData(response);
            }).catch((err) => {
                console.log(err);
            })
    }

    const Delete = (id) => {
        // local storage Delete logic
        let newArray = userData.filter((item)=>{
            return item.id !== id;
        }); 
        setUserData(newArray);
        // this link is not working
        fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
            method: 'DELETE',
        }).then((res)=>res.json())
        .then((res)=>{
            console.log(" Item Deleted");
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        }
        )
    }

    const Edit = (id) => {
        navigation.navigate("EditPost",{
            data:id
        });
       
    }
    const view_details = (id) => {
        navigation.navigate("EditPost",{
            data:id
        });
       
    }
    useEffect(() => {
        fetchUserData();
    }, []);
    return (
        <View style={styles.mainLayout}>
            <FlatList
                data={userData}
                keyExtractor={item => {
                    return item.id;
                }}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => {
                    return <Text style={styles.titleText}>Post</Text>;
                }}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.listView}>
                            <View >
                                <View>
                                    <Text style={styles.labelText}>Title</Text>
                                    <Text style={styles.regText}>{item.title}</Text>
                                </View>
                                <View>
                                    <Text style={styles.labelText}>Body</Text>
                                    <Text style={styles.regText}>{item.body}</Text>
                                </View>

                            </View>
                            <View style={styles.rowAction}>
                                <TouchableOpacity
                                 onPress={()=>{
                                    Edit(item);
                                }}
                                    style={styles.imageButtonView}>
                                    <Image
                                        style={styles.imageIconStyle}
                                        source={require('../assets/Edit.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={()=>{
                                    Delete(item.id);
                                }}
                                    style={styles.imageButtonView}>
                                    <Image
                                        style={styles.imageIconStyle}
                                        source={require('../assets/Delete.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                   onPress={()=>{
                                    view_details(item);
                                }}
                                    style={styles.imageButtonView}>
                                    <Image
                                        style={styles.imageIconStyle}
                                        source={require('../assets/eye_ope.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
};
export default PostScreen;

const styles = StyleSheet.create({
    mainLayout: {
        flex: 1,
        margin: 10
        // paddingHorizontal: 10,
        // paddingVertical: 10,
    },
    titleText: {
        fontSize: 20,
        fontFamily: 'OpenSans-Bold',
        marginHorizontal: 10
    },
    listView: {
        backgroundColor: '#ffffff',
        padding: 10,
        margin: 10,
        borderRadius: 20,
        shadowColor: '#000',
        elevation: 3,
        //  flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",


    },
    labelText: {
        color: "#d1cdcd",
        fontSize: 12,
        fontFamily: "OpenSans-Regular"
    },
    regText: {
        fontSize: 15,
        fontFamily: "OpenSans-Regular"
    },
    imageIconStyle: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        alignSelf: "center"
    },
    imageButtonView: {
        margin: 10,
        paddingVertical: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    rowAction: {

        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginRight: -10
        // borderWidth:1
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
