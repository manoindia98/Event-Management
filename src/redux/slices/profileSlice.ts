import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a more specific type for user if possible
interface User {
  id: string;
  name: string;
  email: string;
  // Add other properties as needed
}

// Define the state type
interface ProfileState {
  user: User | null;
  loading: boolean;
}

const initialState: ProfileState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null,
  loading: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      if (action.payload) {
        localStorage.setItem("user", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("user");
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, setLoading } = profileSlice.actions;
export default profileSlice.reducer;
