import { keyframes, styled } from "@mui/material";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const CurrentStatus = styled("ul")({
  listStyle: "none",
  backgroundColor: "#F8F8F8",
  border: "1px solid gray",
  position: "absolute",
  fontSize: "14px",
  left: "114px",
  minWidth: "90px",
  opacity: "0",
  animationName: `${fadeIn}`,
  animationDuration: "0.2s",
  animationDelay: "0.1s",
  animationFillMode: "forwards",
  borderRadius: "6px",
});

export const ListElement = styled("li")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.2s",
  borderRadius: "6px",
  "&:hover": {
    background: "#71FACA",
  },
});
