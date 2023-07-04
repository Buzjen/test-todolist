import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface showTableRows {
  date: boolean;
  taskCode: boolean;
  projectCode: boolean;
  task: boolean;
  status: boolean;
  respomsoble: boolean;
  reassign: boolean;
  priority: boolean;
  comment: boolean;
  planTime: boolean;
  factTime: boolean;
  began: boolean;
  completed: boolean;
}

const initialState: showTableRows = {
  date: true,
  taskCode: false,
  projectCode: true,
  task: true,
  status: true,
  respomsoble: true,
  reassign: true,
  priority: true,
  comment: true,
  planTime: true,
  factTime: true,
  began: true,
  completed: true,
};

export const showTableSlice = createSlice({
  name: "rows",
  initialState,
  reducers: {
    dateRowIsShowing(state, action: PayloadAction<boolean>) {
      state.date = action.payload;
    },
    taskCodeRowIsShowing(state, action: PayloadAction<boolean>) {
      state.taskCode = action.payload;
    },
    projectCodeRowIsShowing(state, action: PayloadAction<boolean>) {
      state.projectCode = action.payload;
    },
    taskRowIsShowing(state, action: PayloadAction<boolean>) {
      state.task = action.payload;
    },
    statusRowIsShowing(state, action: PayloadAction<boolean>) {
      state.status = action.payload;
    },
    respomsobleRowIsShowing(state, action: PayloadAction<boolean>) {
      state.respomsoble = action.payload;
    },
    reassignRowIsShowing(state, action: PayloadAction<boolean>) {
      state.reassign = action.payload;
    },
    priorityRowIsShowing(state, action: PayloadAction<boolean>) {
      state.priority = action.payload;
    },
    commentRowIsShowing(state, action: PayloadAction<boolean>) {
      state.comment = action.payload;
    },
    planTimeRowIsShowing(state, action: PayloadAction<boolean>) {
      state.planTime = action.payload;
    },
    factTimeRowIsShowing(state, action: PayloadAction<boolean>) {
      state.factTime = action.payload;
    },
    beganRowIsShowing(state, action: PayloadAction<boolean>) {
      state.began = action.payload;
    },
    completedRowIsShowing(state, action: PayloadAction<boolean>) {
      state.completed = action.payload;
    },
  },
});

export const {
  dateRowIsShowing,
  taskCodeRowIsShowing,
  projectCodeRowIsShowing,
  taskRowIsShowing,
  statusRowIsShowing,
  respomsobleRowIsShowing,
  reassignRowIsShowing,
  priorityRowIsShowing,
  commentRowIsShowing,
  planTimeRowIsShowing,
  factTimeRowIsShowing,
  beganRowIsShowing,
  completedRowIsShowing,
} = showTableSlice.actions;
export default showTableSlice.reducer;
