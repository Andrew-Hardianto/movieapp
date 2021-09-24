import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const AboutUs = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.textHeader} >ABOUT US</Text>
            <Image
                style={{ height: 120, width: 120, marginTop: 20 }}
                source={require('../assets/play.png')}
            />
            <Text
                style={{
                    marginTop: 50,
                    maxWidth: 230,
                    fontSize: 14,
                    textAlign: 'center',
                    color: '#E9E9EA'
                }}
            >
                We are Movie App. We provide latest box office movie release. Your can find favorite movie in our website.
            </Text>
            <View style={styles.contact}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#E9E9EA' }} >Contact Us</Text>
                <Text style={styles.text} ><Icon name='mail' color='#E9E9EA' size={18} /> Email</Text>
                <Text style={styles.text} >andrewhardianto@gmail.com</Text>
                <Text style={styles.text} ><Icon name='globe-outline' color='#E9E9EA' size={18} /> Website</Text>
                <Text style={styles.text} >www.movieapp.com</Text>
            </View>
        </View>
    )
}

export default AboutUs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#15141F'
    },
    textHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        color: '#E9E9EA'
    },
    contact: {
        marginTop: 40,
        alignItems: 'center'
    },
    text: {
        color: '#858588',
        marginTop: 10
    }
})