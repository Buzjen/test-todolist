import { keyframes, styled } from "@mui/material";
import { EmployeeTaskItem } from "./EmployeeTaskItem";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const TodosList = styled("div")({
  maxHeight: "384px",
  transition: "0.5s",
  overflow: "auto",
  opacity: "0",
  animationName: `${fadeIn}`,
  animationDuration: "0.5s",
  animationDelay: "0.1s",
  animationFillMode: "forwards",
  overflowY: "scroll",
});

export const EmployeeTodos = () => {
  return (
    <TodosList>
      <EmployeeTaskItem />
      <EmployeeTaskItem />
      <EmployeeTaskItem />
      <EmployeeTaskItem />
    </TodosList>
  );
};
