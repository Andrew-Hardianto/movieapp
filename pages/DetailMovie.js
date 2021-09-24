import React, { useEffect } from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'
import { detailMovie } from '../redux/actions/movieActions'

const DetailMovie = ({ route }) => {
    const { id } = route.params

    const dispatch = useDispatch()

    const { movie } = useSelector(state => state.movieDetail)

    useEffect(() => {
        // if (!userInfo) {
        //     navigation.navigate('Login')
        // }
        dispatch(detailMovie(id))
    }, [dispatch, id]);
    console.log(movie)

    // let d = movie.Ratings
    // const [f] = d

    const a = movie.Genre?.split(', ')

    return (
        <View style={{ backgroundColor: '#15141F', flex: 1 }} >
            <Image
                source={{ uri: movie.Poster }}
                style={{ height: 200, width: '100%' }}
            />
            <View style={styles.container}>
                <Text
                    style={{
                        fontFamily: 'Roboto_400Regular',
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: 'white'
                    }}
                >{movie?.Title}</Text>
                <View style={{ flexDirection: 'row', marginTop: 15 }} >
                    <Icon name="timer-outline" color="white" size={18} />
                    <Text style={styles.rating} >{movie?.Runtime}</Text>
                    <Icon2 name="star" style={{ marginRight: 5 }} color="white" size={18} />
                    {movie?.Ratings?.map(data =>
                        <Text
                            key={data.imdbID}
                            style={{
                                color: '#858588',
                                fontFamily: 'Roboto_400Regular',
                                fontWeight: 'bold',
                                fontSize: 12,
                                marginTop: 5,
                                marginRight: 5
                            }} >{data.Value} { }</Text>
                    )}
                </View>
                <View style={styles.border} />
                <View style={styles.card} >
                    <View style={styles.cardItem} >
                        <Text style={styles.textSubTitle} >Release Date</Text>
                        <Text style={styles.text} >{movie?.Released}</Text>
                    </View>
                    <View style={styles.cardItem} >
                        <Text style={styles.textSubTitle} >Genre</Text>
                        <View style={{ flexDirection: 'row', flexShrink: 1 }}>
                            {a?.map(data => (
                                <TouchableOpacity style={styles.button} >
                                    <Text style={styles.buttonText} >{data}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
                <View style={styles.border} />
                <View style={styles.card} >
                    <View style={styles.cardItem} >
                        <Text style={styles.textSubTitle} >Director</Text>
                        <Text style={styles.text} >{movie?.Director}</Text>
                    </View>
                    <View style={styles.cardItem} >
                        <Text style={styles.textSubTitle} >Cast</Text>
                        <Text style={styles.text} >{movie?.Actors}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 15 }} >
                    <Text style={styles.textSubTitle} >Synopsis</Text>
                    <Text
                        style={{
                            fontFamily: 'Roboto_400Regular',
                            fontSize: 12,
                            color: 'white',
                            fontWeight: 'bold',
                            marginTop: 5
                        }}
                    >{movie?.Plot}</Text>
                </View>
            </View>
        </View>
    )
}

export default DetailMovie

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#15141F'
    },
    text: {
        color: '#858588',
        fontFamily: 'Roboto_400Regular',
        fontWeight: 'bold',
        fontSize: 12,
        flexShrink: 1
    },
    rating: {
        color: '#858588',
        fontFamily: 'Roboto_400Regular',
        fontWeight: 'bold',
        fontSize: 12,
        marginTop: 3,
        marginLeft: 5,
        marginRight: 20,
    },
    textSubTitle: {
        color: 'white',
        fontFamily: 'Roboto_400Regular',
        fontWeight: 'bold',
        fontSize: 16,
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#858588',
        marginTop: 20,
    },
    card: {
        flexDirection: 'row',
        marginTop: 10,
    },
    cardItem: {
        width: '45%'
    },
    button: {
        borderRadius: 25,
        backgroundColor: '#35343C',
        width: 60,
        maxWidth: 70,
        marginRight: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: '#858588',
        fontFamily: 'Roboto_400Regular',
        fontWeight: 'bold',
        fontSize: 12,
    }
})