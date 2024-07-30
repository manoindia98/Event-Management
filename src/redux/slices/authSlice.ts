import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state type
interface AuthState {
    token: string | null;
    signupData?: any; // Define a more specific type if possible
    loading?: boolean; // Define a more specific type if needed
}

const initialState: AuthState = {
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token") as string) : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setSignupData(state, action: PayloadAction<any>) {
            state.signupData = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setToken(state, action: PayloadAction<string | null>) {
            state.token = action.payload;
        },
    },
});

export const { setToken, setLoading, setSignupData } = authSlice.actions;
export default authSlice.reducer;
