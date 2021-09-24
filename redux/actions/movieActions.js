import axios from 'axios';
import {
    MOVIE_DETAIL_FAIL,
    MOVIE_DETAIL_REQUEST,
    MOVIE_DETAIL_SUCCESS,
    MOVIE_LIST_FAIL,
    MOVIE_LIST_REQUEST,
    MOVIE_LIST_SUCCESS
} from '../constants/movieConstants';

export const listMovie = (search) => async (dispatch) => {
    try {
        dispatch({ type: MOVIE_LIST_REQUEST })

        const { data } = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=9e8b0634`)

        dispatch({
            type: MOVIE_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: MOVIE_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const detailMovie = (id) => async (dispatch) => {
    try {
        dispatch({ type: MOVIE_DETAIL_REQUEST })

        const { data } = await axios.get(
            `http://www.omdbapi.com/?i=${id}&apikey=263d22d8`
        )

        dispatch({
            type: MOVIE_DETAIL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: MOVIE_DETAIL_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}