import React from 'react';
import {
    StatusBar,
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    SafeAreaView,
    Alert,
    Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

function Registration({ navigation }): React.JSX.Element {
    const [name, onChangeName] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [phone, onChangePhone] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const saveRegisterData = async () => {
        try {
            const registrationDatas = await AsyncStorage.getItem('registrationDatas');
            let registrationArray = [];
            if (registrationDatas) {
                registrationArray = JSON.parse(registrationDatas);
            }
            registrationArray.push({
                name: name,
                email: email,
                phone: phone,
                password: password,
            });
            await AsyncStorage.setItem(
                'registrationDatas',
                JSON.stringify(registrationArray),
            );
            Alert.alert('Success', 'Registration Completed You can now Use our Remainder app', [
                {
                    text: 'OK',
                    onPress: () => {
                        navigation.navigate('Login', { name: 'Login' });
                    },
                },
            ]);
        } catch (e) {
            console.log('error', e);
        }
    };
    return (
        <SafeAreaView>
            <StatusBar barStyle={'dark-content'} />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    <Text style={styles.baseText}>Registration</Text>
                    <TextInput
                        placeholder="Name"
                        style={styles.input}
                        onChangeText={onChangeName}
                        value={name}
                        placeholderTextColor="#000"
                    />
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        inputMode="email"
                        onChangeText={onChangeEmail}
                        value={email}
                        placeholderTextColor="#000"
                    />
                    <TextInput
                        placeholder="Phone"
                        style={styles.input}
                        onChangeText={onChangePhone}
                        value={phone}
                        keyboardType="numeric"
                        placeholderTextColor="#000"
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={password}
                        secureTextEntry={true}
                        placeholderTextColor="#000"
                    />
                    <Button
                        title="Register Now"
                        onPress={() => {
                            saveRegisterData();
                        }}
                    />
                    <Text
                        style={styles.reg_link}
                        onPress={() =>
                            navigation.navigate('Login', { name: 'Login' })
                        }>
                        Back To Login
                    </Text>
                </View>
            </ScrollView>
            <StatusBar />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: '#000'

    },
    baseText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 100,
        textAlign: 'center',
    },
    reg_link: {
        fontSize: 15,
        textAlign: 'right',
        marginRight: 10,
        color: 'blue',
    },
});
export default Registration;
