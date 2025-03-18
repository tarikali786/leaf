import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, post, remove, update } from "./api";
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
    phone: "",
    alternatePhone: "",
  },

  cart:[],
  order:[],
  wishList:[],
  
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
    const response = await get(`/user-accounts/${id}?populate=*`);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const UpdateUserDetails = createAsyncThunk(
  "user/Updatedetails",
  async ({ id, data }) => {
    try {
      const response = await update(`/user-accounts/${id}`, { data });

      return response.data.data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteAddress = createAsyncThunk(
  "user/deleteAddress",
  async (id) => {
    const response = await remove(`/addresses/${id}`);
    return id;
  }
);
export const UpdateUserAddress = createAsyncThunk(
  "user/UpdateAddress",
  async ({ id, data }) => {
    try {
      const response = await update(`/addresses/${id}`, { data });
      return response.data;
    } catch (error) {
      console.error("API Request Error:", error.response?.data);
      throw error;
    }
  }
);

const leafSlice = createSlice({
  name: "leaf",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    }  
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
      state.user.addresses.push(action.payload);
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
      (state.user.name = action.payload?.name),
        (state.user.email = action.payload?.email),
        (state.user.phone = action.payload?.phone),
        (state.user.alternatePhone = action.payload?.alternatePhone),
        (state.user.id = action.payload?.documentId),
        (state.user.addresses = action.payload.addresses);
    });

    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.loading = false;
    });

    //update user  details

    builder.addCase(UpdateUserDetails.pending, (state, action) => {
      state.user.loading = true;
    });
    builder.addCase(UpdateUserDetails.fulfilled, (state, action) => {
      state.loading = false;
      (state.user.name = action.payload?.name),
        (state.user.email = action.payload?.email),
        (state.user.phone = action.payload?.phone),
        (state.user.alternatePhone = action.payload?.alternatePhone);
    });

    builder.addCase(UpdateUserDetails.rejected, (state, action) => {
      state.loading = false;
    });

    // delete Address

    builder.addCase(deleteAddress.pending, (state, action) => {
      state.user.loading = true;
    });

    builder.addCase(deleteAddress.fulfilled, (state, action) => {
      state.user.loading = false;
      state.user.addresses = state.user.addresses.filter(
        (item) => item.documentId !== action.payload
      );
    });
    builder.addCase(deleteAddress.rejected, (state, action) => {
      state.user.loading = false;
    });

    // update address
    builder.addCase(UpdateUserAddress.pending, (state, action) => {
      state.user.loading = true;
    });

    builder.addCase(UpdateUserAddress.fulfilled, (state, action) => {
      state.user.loading = false;
      console.log(action.payload);

      const index = state.user.addresses.findIndex(
        (address) => address.documentId === action.payload.data.documentId
      );

      console.log(index);

      if (index !== -1) {
        state.user.addresses.splice(index, 1, action.payload.data);
      }
    });
    builder.addCase(UpdateUserAddress.rejected, (state, action) => {
      state.user.loading = false;
    });
  },
});
export const { setActiveTab, setEmailValue } = leafSlice.actions;

export default leafSlice.reducer;
