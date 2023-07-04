import { Box, styled } from "@mui/material";
import React from "react";

const Menu = styled("div")({
  marginTop: "20px",
  display: "flex",
  backgroundColor: "#F7F7FC",
  fontWeight: "600",
  fontSize: "14px",
});

export const ProjectTableHeader = () => {
  return (
    <Menu>
      <Box
        display="flex"
        flexDirection="column"
        width="200px"
        height="64px"
        borderRight="1px solid #d4d3db"
        padding="10px"
      >
        <Box
          height="42px"
          display="flex"
          flexDirection="column"
          justifyContent="right"
          alignItems="center"
          textAlign="center"
          marginLeft="80px"
        >
          <span>ГИПы</span>
        </Box>
        <Box
          display="flex"
          textAlign="center"
          justifyContent="left"
          marginLeft="20px"
        >
          Дата
        </Box>
      </Box>
    </Menu>
  );
};
