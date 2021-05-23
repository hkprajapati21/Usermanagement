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

const UserDetails = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [company, setCompany] = useState('');

    return (
        <View style={styles.mainLayout}>
            <Text>UserDetails</Text>
            <View>
                <View>
                    <Text style={styles.labelText}>Name</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={txt => setName(txt)}
                        value={name}
                        keyboardType="default"
                    />
                </View>
                <View>
                    <Text style={styles.labelText}>Username</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={txt => setUserName(txt)}
                        value={userName}
                        keyboardType="default"
                    />
                </View>
                <View>
                    <Text style={styles.labelText}>Email</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={txt => setEmail(txt)}
                        value={email}
                        keyboardType="email-address"
                    />
                </View>
                <View>
                    <Text style={styles.labelText}>Phone</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={txt => setPhone(txt)}
                        value={phone}
                        keyboardType="number-pad"
                        maxLength={10}
                    />
                </View>
                <View>
                    <Text style={styles.labelText}>Web-site</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={txt => setPhone(txt)}
                        value={website}
                        keyboardType="number-pad"
                        maxLength={10}
                    />
                </View>
                <View>
                    <Text style={styles.labelText}>Company</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={txt => setCompany(txt)}
                        value={company}
                        keyboardType="number-pad"
                        maxLength={10}
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
export default UserDetails;

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
        padding:10
    },
    btnView:{
        width:SCREEN_WIDTH/2-10,
        backgroundColor:"#495bde",
        borderRadius:10
    }
});
