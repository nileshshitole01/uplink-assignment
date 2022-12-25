import { createSlice } from '@reduxjs/toolkit';

export type HistoryLinks = {
    reddit?: any,
    article: string,
    wikipedia: string
}

export type HistoryStateData = {
    id: number,
    title: string,
    event_date_utc: string,
    event_date_unix: number,
    flight_number: number,
    details: string,
    links: HistoryLinks
}

export interface HistoryState {
    data: HistoryStateData[],
    error?: string,
    loading: boolean
}

// Define the initial state using that type
const initialState: HistoryState = {
    data: [],
    error: undefined,
    loading: false
  }

export const historySlice = createSlice({
  name: 'history',
  initialState, 
  reducers: {
    HISTORY_REQUEST: (state) => {
        state.data = [];
        state.error = undefined;
        state.loading = true;
    },
    HISTORY_SUCCESS: (state, action) => {
        state.data = action.payload;
        state.error = undefined;
        state.loading = false;
    },
    HISTORY_FAILURE: (state, action) => {
        state.data = [];
        state.error = action.payload;
        state.loading = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { HISTORY_REQUEST, HISTORY_SUCCESS, HISTORY_FAILURE } = historySlice.actions

export default historySlice.reducer;