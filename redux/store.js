import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userLoginReducer, userRegisterReducer } from './reducers/authReducers';
import { movieDetailReducer, movieListReducer } from './reducers/movieReducers';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    movieList: movieListReducer,
    movieDetail: movieDetailReducer
})


const middleware = [thunk]

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

export default store