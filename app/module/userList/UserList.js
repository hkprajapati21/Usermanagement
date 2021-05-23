import React, { useState } from 'react';
import { useEffect } from 'react';
import {FlatList, TouchableOpacity, StyleSheet, View,Image,Text} from 'react-native';



const UserList = () => {

    const [userData,setUserData]= useState(null);
    const fetchUserData = () =>{
        fetch('https://jsonplaceholder.typicode.com/users', 
       {
        method: 'GET', // or 'PUT'
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        },
       }
        )
        .then((res)=>
            res.json()
        ).then((response)=>{
            console.log(response);
            setUserData(response);
        }).catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        fetchUserData();
    },[]);
  return (
    <View style={styles.mainLayout}>
      <FlatList
        data={userData}
        keyExtractor={item => {
          item.id;
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return <Text style={styles.titleText}>List Of Users</Text>;
        }}
        renderItem={({item, index}) => {
          return (
            <View style={styles.listView}>
              <View >
                <View>
                  <Text style={styles.labelText}>Username</Text>
                  <Text style={styles.regText}>{item.username}</Text>
                </View>
                <View>
                  <Text style={styles.labelText}>Company Name</Text>
                  <Text style={styles.regText}>{item.company.name}</Text>
                </View>
                <View>
                  <Text style={styles.labelText}>Phone</Text>
                  <Text style={styles.regText}>{item.phone}</Text>
                </View>
              </View>
              <View style={styles.rowAction}>
                  <TouchableOpacity
                    style={styles.imageButtonView}>
                      <Image
                      style={styles.imageIconStyle}
                      source={require('../../assets/Edit.png')}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.imageButtonView}>
                      <Image
                        style={styles.imageIconStyle}
                      source={require('../../assets/Delete.png')}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity
                  style={styles.imageButtonView}>
                      <Image
                        style={styles.imageIconStyle}
                      source={require('../../assets/eye_ope.png')}
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
export default UserList;

const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
    margin:10
    // paddingHorizontal: 10,
    // paddingVertical: 10,
  },
  titleText: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    marginHorizontal:10
  },
  listView: {
    backgroundColor: '#ffffff',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    shadowColor: '#000',
    elevation: 3,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    
 
  },
 labelText:{
     color:"#d1cdcd",
     fontSize:12,
     fontFamily:"OpenSans-Regular"
 },
 regText:{
    fontSize:15,
    fontFamily:"OpenSans-Regular"
 },
 imageIconStyle:{
     height:20,
     width:20,
     resizeMode:"contain",
     alignSelf:"center"
 },
 imageButtonView:{
     margin:10,
    paddingVertical:5,
     justifyContent:"center",
     alignItems:"center"
 },
 rowAction:{
     justifyContent:"space-between",
     flexDirection:"row",
     alignItems:"center",
     marginRight:-10
    // borderWidth:1
 }
});
