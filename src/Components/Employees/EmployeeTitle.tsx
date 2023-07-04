import { Box, styled } from "@mui/material";

const JobTitle = styled("span")({
  opacity: "0.5",
});

export const EmployeeTitle = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="84px"
      width="280px"
      textAlign="center"
      borderRight="1px solid #d4d3db"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <span>Иванов Иван Иванович</span>
        <JobTitle>Должность</JobTitle>
      </Box>
    </Box>
  );
};
