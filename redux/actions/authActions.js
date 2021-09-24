import firebase, { db } from "../../utils/firebase"
import {
    REGISTER_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT
} from "../constants/authConstans"

export const login = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_LOGIN_REQUEST
            })

            const response = await firebase.auth().signInWithEmailAndPassword(email, password)

            const user = await db
                .collection('users')
                .doc(response.user.uid)
                .get()

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: user
            })
        } catch (error) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            })
        }
    }
}

export const logout = ({ navigation }) => (dispatch) => {
    firebase.auth()
        .signOut()
        .then(() => {
            console.log('user Sign out');
            navigation.navigate('Login')
        }
        )
    dispatch({ type: USER_LOGOUT })

}

export const registerUser = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: REGISTER_REQUEST
            })

            const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
            if (response.user.uid) {
                const user = {
                    uid: response.user.uid,
                    email: email
                }

                db.collection('users')
                    .doc(response.user.uid)
                    .set(user)

                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: user
                })
            }
        } catch (e) {
            dispatch({
                type: REGISTER_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            })
        }
    }
}