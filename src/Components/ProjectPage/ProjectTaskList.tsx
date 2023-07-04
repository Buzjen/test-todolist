import { styled } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ProjectTodos } from "./ProjectTodos";

const MainBlock = styled("div")({});

const List = styled("div")({
  background: "#d4d3db",
  cursor: "pointer",
  borderTop: "1px solid gray",
  transition: "0.2s",
  "&:hover": {
    background: "#f2f2f2",
  },
});

const TodosName = styled("p")({
  display: "flex",
  padding: "1vw",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  alignItems: "center",
});

export const ProjectTaskList = () => {
  const [upcomingIsOpen, setUpcomingIsOpen] = useState(false);
  const [todayIsOpen, setTodayIsOpen] = useState(true);
  const [completedIsOpen, setCompletedIsOpen] = useState(false);

  const upcomingOpen = () => {
    setUpcomingIsOpen(!upcomingIsOpen);
    setTodayIsOpen(false);
    setCompletedIsOpen(false);
  };

  const todayOpen = () => {
    setTodayIsOpen(!todayIsOpen);
    setUpcomingIsOpen(false);
    setCompletedIsOpen(false);
  };

  const completedOpen = () => {
    setCompletedIsOpen(!completedIsOpen);
    setTodayIsOpen(false);
    setUpcomingIsOpen(false);
  };

  return (
    <MainBlock>
      <List onClick={() => upcomingOpen()}>
        <TodosName>
          Предстоящие задачи
          <KeyboardArrowDownIcon />
        </TodosName>
      </List>
      {upcomingIsOpen && <ProjectTodos />}
      <List onClick={() => todayOpen()}>
        <TodosName>
          Задачи на сегодня
          <KeyboardArrowDownIcon />
        </TodosName>
      </List>
      {todayIsOpen && <ProjectTodos />}
      <List onClick={() => completedOpen()}>
        <TodosName>
          Выполненые задачи
          <KeyboardArrowDownIcon />
        </TodosName>
      </List>
      {completedIsOpen && <ProjectTodos />}
    </MainBlock>
  );
};
