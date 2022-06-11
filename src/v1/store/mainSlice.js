import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const loginForm = {
    username: '',
    password: '',
}

export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        loading: false,
        error: false,
        formError: {},
        accessToken: '',
        urlAPI: 'http://localhost:4000',
        loginForm: loginForm,
        login: false,
        user: {}
    },
    reducers: {
        resetLoginForm: (state) => {
            return {
                ...state,
                loginForm: loginForm
            }
        },
        setLoginForm: (state, action) => {
            return {
                ...state,
                loginForm: {
                    ...state.loginForm,
                    [action.payload.field]: action.payload.value
                },
            }
        },
        setFormError: (state, action) => {
            return {
                ...state,
                formError: action.payload
            }
        },
        resetFormError: (state) => {
            return {
                ...state,
                formError: {}
            }
        },
        removeFormError: (state, action) => {
            return {
                ...state,
                formError: {
                    ...state.formError,
                    [action.payload.field]: undefined
                }
            }
        },
        setAccessToken: (state, action) => {
            const payload = action.payload
            return {
                ...state,
                accessToken: payload.accessToken
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(userLogin.fulfilled, (state, action) => {
                const payload = action.payload
                if (payload.status) {
                    state.login = true
                    state.user = payload.data.users
                    state.accessToken = payload.data.token
                }
            })
            .addCase(userProfile.fulfilled, (state, action) => {
                const payload = action.payload
                if (payload.status) {
                    state.login = true
                    state.user = payload.data.users
                    state.accessToken = payload.data.token
                }
            })
    }
})

export const userProfile = createAsyncThunk('main/userProfile', async (arg, thunk) => {
    const state = thunk.getState()
    const url = state.main.urlAPI
    const accessToken = arg.accessToken
    const headers = new Headers()
    headers.append("Authorization", `Bearer ${accessToken}`)
    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };
    return await fetch(`${url}/api/users/profile`, requestOptions)
        .then(response => response.json())
        .then(result => {
                if (result.status) result.data.token = accessToken
                return result;
            })
})

export const userLogin = createAsyncThunk('activity/userLogin', userLoginRequest)

/**
 * @param {Object} payload
 * @param {Object} payload.headers
 * @param {String} payload.headers.urlAPI
 * @param {Headers} payload.headers.headers
 * @param {loginForm} payload.form
 * @param {thunk} thunkAPI
 */
async function userLoginRequest (payload, thunkAPI) {
    const headers = payload.headers
    const formdata = payload.form
    let formHeader = headers.headers
    formHeader.append('Content-Type', 'application/json')
    var requestOptions = {
        method: 'POST',
        headers: formHeader,
        body: JSON.stringify(formdata),
        redirect: 'follow'
    };
    return await fetch(`${headers.urlAPI}/api/users/login`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.code === 422) thunkAPI.dispatch(setFormError(result.errors))
            if (result.code === 200) {
                localStorage.setItem('accessToken', result.data.token)
            }
            return result;
        })

}

export const { setFormError, resetFormError, removeFormError, setAccessToken, resetLoginForm, setLoginForm } = mainSlice.actions;

export default mainSlice.reducer;