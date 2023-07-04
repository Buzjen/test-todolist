import { styled } from "@mui/material";

export const TaskButtons = styled("div")({
  width: "400px",
  marginTop: "20px",
  display: "flex",
  justifyContent: "space-between",
});

export const ButtonCreate = styled("button")({
  width: "190px",
  height: "36px",
  borderRadius: "8px",
  border: "none",
  fontSize: "16px",
  fontWeight: "600",
  background: "#d4d3db",
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": {
    background: "#e6e6e6",
  },
});

export const SearchBlock = styled("div")({
  display: "flex",
  alignItems: "center",
  marginTop: "20px",
});

export const SearchInputBlock = styled("div")({
  display: "flex",
  alignItems: "center",
  borderRadius: "8px",
  background: "#f2f2f2",
  width: "1100px",
  height: "36px",
});

export const SearchInput = styled("input")({
  outline: "none",
  border: "none",
  height: "20px",
  width: "1000px",
  borderRadius: "4px",
  padding: "4px",
  background: "#f2f2f2",
});

export const SearchIcon = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "36px",
  width: "36px",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": {
    background: "#d4d3db",
  },
});

export const SearchButtons = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "14px",
  width: "90px",
});

export const ViewIcon = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "36px",
  width: "36px",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": {
    background: "#F8F8F8",
  },
});

export const TableIcon = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "36px",
  width: "36px",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": {
    background: "#F8F8F8",
  },
});
