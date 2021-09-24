import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

import { Data } from '../utils/data'

const Home = ({ navigation }) => {

    const [search, setSearch] = useState('Avenger')
    const [movies, setMovies] = useState([])

    const { userInfo } = useSelector(state => state.userLogin)

    const getMovieRequest = async (search) => {
        const url = `http://www.omdbapi.com/?s=${search}&apikey=263d22d8`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    useEffect(() => {
        if (!userInfo) {
            navigation.navigate('Login')
        }
        getMovieRequest(search);
    }, [search]);
    console.log(movies)

    return (
        <View style={styles.container} >
            <Text style={styles.textHeader} >Find Your Favorite Movies Here</Text>
            <View style={styles.inputContainer} >
                <Icon name="search" color='#E9E9EA' size={18} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Search Movie"
                    value={search}
                    onChangeText={(value) => setSearch(value)}
                />
            </View>
            <FlatList
                data={movies}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <>
                            <TouchableOpacity key={item.imdbID} style={styles.itemContainer}>
                                {item.length == 0 ? (
                                    <h3>FIND MOVIE NOW</h3>
                                ) : (
                                    <>
                                        <View style={styles.card}>
                                            <View style={styles.cardItem}>
                                                <Image
                                                    style={{ height: 140, width: 140, borderRadius: 15 }}
                                                    source={{ uri: item.Poster }}
                                                />
                                                <Text
                                                    style={{
                                                        color: 'white',
                                                        fontFamily: 'Roboto_400Regular',
                                                        marginTop: 5,
                                                        fontWeight: 'bold',
                                                        fontSize: 12,
                                                    }}
                                                    onPress={() => navigation.navigate('DetailMovie', { id: item.imdbID })}
                                                >
                                                    {`${item.Title} (${item.Year})`}
                                                </Text>
                                            </View>
                                        </View>
                                    </>
                                )}
                            </TouchableOpacity>
                        </>
                    )
                }}
            />
            <View style={styles.footer} >
                <Text style={{ color: 'white' }} >{'\u00A9'} 2021 MOVIE APP </Text>
                <Text style={{ color: 'white' }} onPress={() => navigation.navigate('AboutUs')} >About Us </Text>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#15141F',
    },
    textHeader: {
        marginTop: 30,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 50,
        color: '#E9E9EA',
        fontFamily: 'Roboto_400Regular'
    },
    textInput: {
        flex: 1,
        marginLeft: 10,
        fontFamily: 'Roboto_400Regular',
        color: 'white'
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: '#2F2E38',
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: 300,
        marginBottom: 10,
        borderRadius: 25,
        marginTop: 10,
        fontFamily: 'Roboto_400Regular'
    },
    card: {
        flexDirection: 'row',
        maxWidth: 150,
    },
    cardItem: {
        margin: 4,
        flexShrink: 1
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    },
})