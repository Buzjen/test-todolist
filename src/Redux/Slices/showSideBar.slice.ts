import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface sideBarShowing {
  siderBarIsOpen: boolean;
  currentFormContent: string;
}

const initialState: sideBarShowing = {
  siderBarIsOpen: false,
  currentFormContent: "",
};

export const sideBarSlice = createSlice({
  name: "showSideBar",
  initialState,
  reducers: {
    showSideBar: (state, action: PayloadAction<boolean>) => {
      state.siderBarIsOpen = action.payload;
    },
    isCurrentForm: (state, action: PayloadAction<string>) => {
      state.currentFormContent = action.payload;
    },
  },
});

export const { showSideBar, isCurrentForm } = sideBarSlice.actions;
export default sideBarSlice.reducer;
