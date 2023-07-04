import { Box, styled } from "@mui/material";
import { CreateTaskButtons } from "../CreateTaskButtons";
import { EmployeesTableHeader } from "./EmployeesTableHeader";
import { EmloyeeTaskList } from "./EmployeeTaskList";

const PageTitle = styled("span")({
  fontSize: "24px",
  fontWeight: "600",
});

const Selection = styled("select")({
  marginLeft: "40px",
  height: "30px",
  width: "150px",
  marginTop: "20px",
  borderRadius: "8px",
  outline: "none",
});

export const Employee = () => {
  return (
    <Box padding="30px" display="flex" flexDirection="column">
      <PageTitle>Сотрудники</PageTitle>
      <Box display="flex" alignItems="center">
        <CreateTaskButtons />
        <>
          <Selection>
            <option>Все задачи</option>
            <option>Мои задачи</option>
          </Selection>
          <Selection>
            <option>Все Должности</option>
            <option>123</option>
          </Selection>
          <Selection>
            <option>Все Сотрудники</option>
            <option>123</option>
          </Selection>
        </>
      </Box>
      <EmployeesTableHeader />
      <EmloyeeTaskList />
    </Box>
  );
};
