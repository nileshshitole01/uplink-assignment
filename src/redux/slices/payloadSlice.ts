import { createSlice } from '@reduxjs/toolkit';

export type OrbitParamsType = {
    reference_system: string,
    regime: string,
    longitude?: number,
    semi_major_axis_km?: number,
    ecentricity?: number,
    periapsis_km?: number,
    apoapsis_km?: number,
    inclination_deg: number,
    period_min: number,
    lifespan_years: number,
    epoch: number,
    mean_motion: number,
    raan: number,
    arg_of_pericenter: number,
    mean_anomaly: number
}

export type PayloadStateData = {
    payload_id: string,
    norad_id: any[],
    reused: boolean,
    customers: string[],
    nationality: string,
    manufacturer: string,
    payload_type: string,
    payload_mass_kg: number,
    payload_mass_lbs: 43,
    orbit: string,
    orbit_params: OrbitParamsType
}

export interface PayloadState {
    data: PayloadStateData[],
    error?: string,
    loading: boolean
}

// Define the initial state using that type
const initialState: PayloadState = {
    data: [],
    error: undefined,
    loading: false
  }

export const payloadSlice = createSlice({
  name: 'payload',
  initialState, 
  reducers: {
    PAYLOAD_API_REQUEST: (state) => {
        state.data = [];
        state.error = undefined;
        state.loading = true;
    },
    PAYLOAD_API_SUCCESS: (state, action) => {
        state.data = action.payload;
        state.error = undefined;
        state.loading = false;
    },
    PAYLOAD_API_FAILURE: (state, action) => {
        state.data = [];
        state.error = action.payload;
        state.loading = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { PAYLOAD_API_REQUEST, PAYLOAD_API_SUCCESS, PAYLOAD_API_FAILURE } = payloadSlice.actions

export default payloadSlice.reducer;