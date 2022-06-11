import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setFormError } from "./mainSlice";
import { setTotalData, setPage } from "./tableSlice";

const createForm = {
    wfo: true,
    uraian: '',
    keterangan: '',
    files: []
}

export const activitySlice = createSlice({
    name: 'activity',
    initialState: {
        data: [],
        createForm: createForm,
        createFormError: {},
        created: false
    },
    reducers: {
        resetCreateForm: (state) => {
            return {
                ...state,
                createForm: createForm,
                created: false
            }
        },
        setCreateForm: (state, action) => {
            return {
                ...state,
                createForm: {
                    ...state.createForm,
                    [action.payload.field]: action.payload.value
                },
            }
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchActivities.fulfilled, (state, action) => {
                const payload = action.payload
                if (payload.status) {
                    let kegiatan = payload.data.kegiatan
                    kegiatan = kegiatan.map((value, index) => ({
                        ...value,
                        selected: false
                    }))
                    state.data = kegiatan
                }
            })
            .addCase(fetchActivities.rejected, (state, action) => {
                console.log(action)
            })
            .addCase(addActivity.fulfilled, (state, action) => {
                const payload = action.payload
                if (payload.status) state.created = true
            })
            .addCase(addActivity.rejected, (state, action) => {
                console.log(action)
            })
            .addCase(deleteActivity.fulfilled, (state, action) => {
                const payload = action.payload
                if (payload.status) {
                    let activities = payload.data.kegiatan
                    state.data = activities
                }
            })
    }
});

export const fetchActivities = createAsyncThunk('activity/fetchActitity', fetchActivitiesRequest)

/**
 * @param {Object} payload
 * @param {Object} payload.headers
 * @param {String} payload.headers.urlAPI
 * @param {Headers} payload.headers.headers
 * @param {thunk} thunk
 */
async function fetchActivitiesRequest ({headers}, thunk) {
    var requestOptions = {
        method: 'GET',
        headers: headers.headers,
        redirect: 'follow'
    };

    return await fetch(`${headers.urlAPI}/api/kegiatan`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.status) {
                result.data.kegiatan = result.data.kegiatan.map((value, index) => {
                    value.number = index + 1
                    return value
                })
                thunk.dispatch(setTotalData(result.data.kegiatan.length))
                thunk.dispatch(setPage({ page: 0, data: result.data.kegiatan }))
            }
            return result
        })
}

export const addActivity = createAsyncThunk('activity/addActivity', addActivityRequest)

/**
 * @param {Object} payload
 * @param {Object} payload.headers
 * @param {String} payload.headers.urlAPI
 * @param {Headers} payload.headers.headers
 * @param {FormData} payload.formdata
 * @param {thunk} thunkAPI
 */
async function addActivityRequest (payload, thunkAPI) {
    const headers = payload.headers
    const formdata = payload.formdata
    var requestOptions = {
        method: 'POST',
        headers: headers.headers,
        body: formdata,
        redirect: 'follow'
    };
    return await fetch(`${headers.urlAPI}/api/kegiatan`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.code === 422) thunkAPI.dispatch(setFormError(result.errors))
            return result;
        })

}

export const deleteActivity = createAsyncThunk('activity/deleteActivity', deleteActivityRequest)

/**
 * 
 * @param {Object} arg
 * @param {Object} arg.headers
 * @param {Headers} arg.headers.headers
 * @param {String} arg.headers.urlAPI
 * @param {Number} arg.id
 * @param {thunk} thunk
 */
async function deleteActivityRequest (arg, thunk) {
    const headers = arg.headers
    const id = arg.id
    var requestOptions = {
        method: 'DELETE',
        headers: headers.headers,
        redirect: 'follow'
    };
    const store = thunk.getState()
    let activities = store.activity.data
    const page = store.table.page
    return await fetch(`${headers.urlAPI}/api/kegiatan/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
                if (result.status) {
                    activities = activities.filter((value) => {
                        return value.id !== id
                    })
                    result.data.kegiatan = activities
                    thunk.dispatch(setPage({ page: page, data: activities }))
                    thunk.dispatch(setTotalData(activities.length))
                }
                return result;
            })
}

export const { resetCreateForm, setCreateForm, setCreateFormError } = activitySlice.actions;

export default activitySlice.reducer;