import { TaskHeader } from "./Table/TaskHeader";
import { TaskList } from "./Table/TaskList";
import { styled } from "@mui/material";
import { SearchMenu } from "./SearchMenu";
import { CreateTaskButtons } from "../CreateTaskButtons";

const MainContent = styled("div")({
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  maxWidth: "89vw",
});

const PageTitle = styled("span")({
  fontSize: "24px",
  fontWeight: "600",
});

export const TaskPage = () => {
  return (
    <MainContent>
      <PageTitle>Задачи</PageTitle>
      <SearchMenu />
      <CreateTaskButtons />
      <TaskHeader />
      <TaskList />
    </MainContent>
  );
};
