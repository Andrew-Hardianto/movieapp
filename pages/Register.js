import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from '../redux/actions/authActions'

const Register = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { userInfo, error } = useSelector(state => state.userLogin)
    const { success } = useSelector(state => state.userRegister)

    const dispatch = useDispatch()

    useEffect(() => {
        if (userInfo) {
            navigation.navigate('Home')
        }
        if (success) {
            navigation.navigate('Login')
        }
        if (error) {
            Alert.alert(error)
        }
    }, [navigation, userInfo])

    const onSubmit = () => {
        dispatch(registerUser(email, password))
    }

    return (
        <View style={styles.container} >
            <Text
                style={{
                    marginTop: 150,
                    fontSize: 24,
                    fontWeight: 'bold',
                    marginBottom: 50,
                    color: '#E9E9EA',
                    fontFamily: 'Roboto_400Regular'
                }}
            >REGISTER MEMBER</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(value) => setEmail(value)}

            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(value) => setPassword(value)}
            />
            <TouchableOpacity style={styles.registerButton}>
                <Text
                    style={{ color: "white", fontFamily: 'Roboto_400Regular' }}
                    onPress={onSubmit}
                >REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
                <Text
                    style={{ color: "white", fontFamily: 'Roboto_400Regular' }}
                    onPress={() => navigation.navigate('Login')}
                >LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#15141F'
    },
    input: {
        borderWidth: 0,
        backgroundColor: '#2F2E38',
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: 300,
        marginBottom: 10,
        borderRadius: 25,
        marginTop: 10,
        fontFamily: 'Roboto_400Regular',
        color: 'white'
    },
    registerButton: {
        width: "30%",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#B14618",
        marginTop: 30
    },
    loginBtn: {
        width: "30%",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#B11818",
        marginTop: 30
    },
})