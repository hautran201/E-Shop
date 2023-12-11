import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthentication: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        loadUserRequest(state) {
            state.loading = true;
        },
        loadUserSuccess(state, action) {
            state.isAuthentication = true;
            state.loading = false;
            state.user = action.payload;
        },
        loadUserFail(state, action) {
            state.error = action.payload;
            state.loading = false;
            state.isAuthentication = false;
        },
        login(state, action) {
            state.isAuthentication = true;
            state.user = action.payload;
            state.loading = false;
        },
    },
});

export const { loadUserRequest, loadUserSuccess, loadUserFail } =
    userSlice.actions;

export default userSlice.reducer;
