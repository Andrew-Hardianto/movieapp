import {
    MOVIE_DETAIL_FAIL,
    MOVIE_DETAIL_REQUEST,
    MOVIE_DETAIL_SUCCESS,
    MOVIE_LIST_FAIL,
    MOVIE_LIST_REQUEST,
    MOVIE_LIST_SUCCESS
} from "../constants/movieConstants"

export const movieListReducer = (state = { movie: [] }, action) => {
    switch (action.type) {
        case MOVIE_LIST_REQUEST:
            return { loading: true, movie: [] }
        case MOVIE_LIST_SUCCESS:
            return {
                loading: false,
                movie: action.payload,
            }
        case MOVIE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const movieDetailReducer = (state = { movie: {} }, action) => {
    switch (action.type) {
        case MOVIE_DETAIL_REQUEST:
            return { ...state, loading: true }
        case MOVIE_DETAIL_SUCCESS:
            return { loading: false, movie: action.payload }
        case MOVIE_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}