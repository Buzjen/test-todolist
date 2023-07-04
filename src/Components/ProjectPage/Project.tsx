import { Box, styled } from "@mui/material";
import { CreateTaskButtons } from "../CreateTaskButtons";
import { ProjectTableHeader } from "./ProjectTableHeader";
import { ProjectTaskList } from "./ProjectTaskList";

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

export const Project = () => {
  return (
    <Box padding="30px" display="flex" flexDirection="column">
      <PageTitle>Проекты</PageTitle>
      <Box display="flex" alignItems="center">
        <CreateTaskButtons />
        <>
          <Selection>
            <option>Все проекты</option>
            <option>Мои проекты</option>
          </Selection>
          <Selection>
            <option>ГИПы</option>
            <option>123</option>
          </Selection>
          <Selection>
            <option>Ответственные</option>
            <option>123</option>
          </Selection>
        </>
      </Box>
      <ProjectTableHeader />
      <ProjectTaskList />
    </Box>
  );
};
