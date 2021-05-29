import React, { useState } from 'react';
import { useEffect } from 'react';
import { FlatList, TouchableOpacity, StyleSheet, View, Image, Text, Dimensions, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const UserList = ({ navigation }) => {

    const [userData, setUserData] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState();
    
    const editData =(item) =>{
        setTitle(item.title);
        setDescription(item.description);

      let editarray=  userData.filter ((data)=>{
           
        if(data.title ===  item.title)
        {
            return data.item;
        }
         });

      

    }
    const deleteData =(item) =>{

    let  newArray = userData.filter((data)=>{
            return item.title !== data.title;
        });

        setUserData(newArray);
    }

    useEffect(() => {
       // fetchUserData();
    }, [userData]);

    return (
        <View style={styles.mainLayout}>
            <View>
                <TextInput
                    placeholder="Enter title"
                    value={title}
                    onChangeText={(text) => { setTitle(text) }}
                    keyboardType="default" />
                <TextInput
                    placeholder="Enter Description"
                    value={description}
                    onChangeText={(text) => { setDescription(text) }}
                    keyboardType="default" />

                <TouchableOpacity style={styles.btnView}
                    onPress={() => {
                    
                    //  console.log("daat",formData);

                     userData.push({
                         "title":title,
                         "description":description
                     });
                    }}>
                    <Text style={styles.btnText}>Add</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={{ flex: 1 }}
                data={userData}
                keyExtractor={item => {
                    return item.id;
                }}


                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => {
                    return (
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.titleText}>List Of Users</Text>
                            {/* <TouchableOpacity style={styles.btnView}
                                onPress={() => {
                                    navigation.navigate("PostScreen");
                                }}>
                                <Text style={styles.btnText}>Post</Text>
                            </TouchableOpacity> */}
                        </View>
                    );
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
                                    <Text style={styles.labelText}>Description</Text>
                                    <Text style={styles.regText}>{item.description}</Text>
                                </View>
                               
                            </View>
                            <View style={styles.rowAction}>
                                <TouchableOpacity
                                onPress={()=>{
                                    editData(item);
                                }}
                                    style={styles.imageButtonView}>
                                    <Image
                                        style={styles.imageIconStyle}
                                        source={require('../../assets/Edit.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={()=>{deleteData(item);}}
                                    style={styles.imageButtonView}>
                                    <Image
                                        style={styles.imageIconStyle}
                                        source={require('../../assets/Delete.png')}
                                    />
                                </TouchableOpacity>
                                {/* <TouchableOpacity
                                onPress={()=>{

                                }}
                                    style={styles.imageButtonView}>
                                    <Image
                                        style={styles.imageIconStyle}
                                        source={require('../../assets/eye_ope.png')}
                                    />
                                </TouchableOpacity> */}
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
};
export default UserList;

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
        flexDirection: "row",
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
