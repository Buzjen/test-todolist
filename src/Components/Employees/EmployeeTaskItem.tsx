import { Box, styled } from "@mui/material";

const EmployeeTodoInfo = styled("div")({
  display: "flex",
  borderBottom: "1px solid #d4d3db",
});

const TaskInfo = styled("div")({
  display: "flex",
  width: "280px",
  borderRight: "1px solid #d4d3db",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
});

const CurrentTask = styled("span")({
  border: "2px solid gray",
  marginLeft: "4px",
});

export const EmployeeTaskItem = () => {
  return (
    <EmployeeTodoInfo>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="200px"
        height="64px"
        borderRight="1px solid #d4d3db"
        padding="10px"
      >
        12.11.10
      </Box>
      <Box display="flex">
        <TaskInfo>
          <CurrentTask>1123123123123</CurrentTask>
          <CurrentTask>1123123123</CurrentTask>
          <CurrentTask>11231231</CurrentTask>
        </TaskInfo>
        <TaskInfo>
          <CurrentTask>1123123123123</CurrentTask>
          <CurrentTask>1123123123</CurrentTask>
          <CurrentTask>11231231</CurrentTask>
        </TaskInfo>
        <TaskInfo>
          <CurrentTask>1123123123123</CurrentTask>
          <CurrentTask>1123123123</CurrentTask>
          <CurrentTask>11231231</CurrentTask>
        </TaskInfo>
        <TaskInfo>
          <CurrentTask>1123123123123</CurrentTask>
          <CurrentTask>1123123123</CurrentTask>
          <CurrentTask>11231231</CurrentTask>
        </TaskInfo>
      </Box>
    </EmployeeTodoInfo>
  );
};
