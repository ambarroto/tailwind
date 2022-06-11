import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Chunk from "../helpers/Chunk";

export const tableSlice = createSlice({
    name: 'tableSlice',
    initialState: {
        pageLength: 0,
        view: 10,
        totalData: 0,
        page: 0,
        from: 0,
        to: 0,
        dataView: []
    },
    extraReducers: builder => {
        builder
            .addCase(setPageLength.fulfilled, (state, action) => {
                state.pageLength = action.payload
            })
            .addCase(setTotalData.fulfilled, (state, action) => {
                state.totalData = action.payload
            })
            .addCase(setPage.fulfilled, (state, action) => {
                const page = action.payload.page
                const data = action.payload.data
                const chunk = Chunk(data, state.view)
                state.pageLength = chunk.length
                let _page = page
                let dataView = []
                if (!(_page in chunk)) {
                    _page = page - 1
                    if (_page >= 0) {
                        dataView = chunk[_page]
                    } else {
                        dataView = []
                    }
                } else {
                    dataView = chunk[_page]
                }
                state.page = _page
                state.from = state.view * _page + 1
                state.dataView = dataView
                state.to = dataView.length + (_page * state.view)
            })
            .addCase(setView.fulfilled, (state, action) => {
                console.log(action)
                state.view = action.payload
            })
    }
})

export const setPageLength = createAsyncThunk('table/setPageLength', (payload, thunk) => {
    return payload
})

export const setTotalData = createAsyncThunk('table/setTotalData', (payload, thunk) => {
    return payload
})

export const setPage = createAsyncThunk('table/setPage', (payload, thunk) => {
    return payload
})

export const setView = createAsyncThunk('table/setView', (payload, thunk) => {
    return payload
})

export default tableSlice.reducer;