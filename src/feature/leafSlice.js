import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { post } from "./api";
import { storeLeafUser } from "../helper/helper";
const initialState = {
  leaf: [],
  activeTab: "Home",
  user: {
    loading: false,
  },
};

export const createUserData = createAsyncThunk(
  "user/create",
  async (user, { rejectWithValue }) => {
    try {
      const response = await post("/auth/signup", user);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Signup failed!");
    }
  }
);


export const loginUser = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await post("/auth/login", data);
      console.log(response);

      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.data || "SignIn failed!");
    }
  }
);
const leafSlice = createSlice({
  name: "leaf",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },

  extraReducers: (builder) => {
    // signup
    builder
      .addCase(createUserData.pending, (state) => {
        state.user.loading = true;
        state.user.error = "";
      })
      .addCase(createUserData.fulfilled, (state, action) => {
        state.user.loading = false;
        localStorage.setItem("leafUserid", action?.payload?.user?.id);
      })
      .addCase(createUserData.rejected, (state, action) => {
        state.user.loading = false;
      });

    // login

    builder.addCase(loginUser.pending, (state, action) => {
      state.user.loading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user.loading = false;
      storeLeafUser(action.payload);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.user.loading = false;
    });
  },
});

export const { setActiveTab } = leafSlice.actions;

export default leafSlice.reducer;
