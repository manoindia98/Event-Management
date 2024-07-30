import { combineReducers } from "redux";
import authReducer from "@/redux/slices/authSlice";
import cartReducer from "@/redux/slices/cartSlice";
import profileReducer from "@/redux//slices/profileSlice";

// Define the root state type
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    profile: profileReducer,
   
});

export default rootReducer;
