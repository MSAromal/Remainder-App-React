import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Alert,
    Button
} from 'react-native';

function Login({ navigation }): React.JSX.Element {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const loginCheck = async () => {
        // console.log('chkkk')sdfg 
        const registrationDatas = await AsyncStorage.getItem('registrationDatas');
        console.log('registrationDatas',registrationDatas)
        if (registrationDatas) {
            const registrationArray = JSON.parse(registrationDatas);
            let login_status = false;
            registrationArray.forEach((regData: any) => {
                if (regData.email === email && regData.password === password) {
                    login_status = true;
                    return;
                }
            });
            if (login_status) {
                navigation.navigate('Dashboard', { name: 'Dashboard' });
            } else {
                Alert.alert('Failed', 'Invalid email or password', [
                    {
                        text: 'OK',
                    },
                ]);
            }
        } else {
            Alert.alert('Failed', 'Invalid email or password', [
                {
                    text: 'OK',
                },
            ]);
        }
    };
    return (
        <>
            <SafeAreaView>
                <StatusBar barStyle={'light-content'} />
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <View>
                        <TextInput
                            placeholder="Email"
                            style={styles.input}
                            placeholderTextColor="#000"
                            onChangeText={onChangeEmail}
                            value={email}
                        />
                        <TextInput
                            placeholder="Password"
                            style={styles.input}
                            placeholderTextColor="#000"
                            onChangeText={onChangePassword}
                            value={password}
                            secureTextEntry={true}
                        />
                        <Button
                            title="Login"
                            onPress={() => {
                                loginCheck();
                            }}
                        />
                        <Text
                            style={styles.reg_link}
                            onPress={() =>
                                navigation.navigate('Registration', { name: 'Registration' })
                            }>
                            Register Now
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: '#000',
    },
    baseText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    reg_link: {
        fontSize: 15,
        textAlign: 'right',
        marginRight: 10,
        color: 'blue',
    },
});

export default Login;
