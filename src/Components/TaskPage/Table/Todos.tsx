import { keyframes, styled } from "@mui/material";
import { TaskItem } from "./TaskItem";

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

export const Todos = () => {
  return (
    <TodosList>
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </TodosList>
  );
};
