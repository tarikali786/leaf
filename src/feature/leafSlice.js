import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, post } from "./api";
import { storeLeafUser } from "../helper/helper";
const initialState = {
  leaf: [],
  activeTab: "Home",
  loading: false,

  user: {
    loading: false,
    addresses: [],
    name: "",
    email: "",
    id: "",
    token: "",
    phone: "",
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

export const createUserAddress = createAsyncThunk(
  "user/address",
  async (data, { rejectWithValue }) => {
    try {
      const res = await post("/addresses", { data: data });
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong!");
    }
  }
);

export const fetchUserDetails = createAsyncThunk("user/details", async (id) => {
  try {
    const response = await get(`/user-accounts/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
});
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
        localStorage.setItem("leafUserid", action?.payload?.user?.documentId);
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
    //addresses
    builder.addCase(createUserAddress.pending, (state, action) => {
      state.user.loading = true;
    });
    builder.addCase(createUserAddress.fulfilled, (state, action) => {
      state.user.loading = false;
      state.user.address.push(action.payload);
    });
    builder.addCase(createUserAddress.rejected, (state, action) => {
      state.user.loading = false;
    });

    //user details

    builder.addCase(fetchUserDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);

      (state.user.name = action.payload?.name),
        (state.user.email = action.payload?.email),
        (state.user.phone = action.payload?.phone),
        (state.user.id = action.payload?.documentId),
        (state.user.token = action.payload?.token),
        state.user.addresses.push(action.payload.addresses);
    });

    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.loading = false;
    });
  },
});
export const { setActiveTab } = leafSlice.actions;

export default leafSlice.reducer;
