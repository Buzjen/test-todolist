import { styled } from "@mui/material";

export const MainHeader = styled("div")({
  background: "white",
  position: "fixed",
  display: "flex",
  justifyContent: "space-between",
  height: "70px",
  width: "100vw",
  borderBottom: "2px solid #f2f2f2",
  zIndex: "2",
});

export const MainLogo = styled("div")({
  padding: "14px",
  width: "300px",
  display: "flex",
  alignItems: "center",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": {
    background: "#F8F8F8",
  },
});

export const MainTitle = styled("span")({
  marginLeft: "10px",
  fontSize: "24px",
  fontWeight: "600",
});

export const RightHeader = styled("div")({
  marginRight: "40px",
  width: "230px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const ProfileInfo = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export const UserInfo = styled("div")({
  marginLeft: "20px",
  display: "flex",
  flexDirection: "column",
});

export const UserName = styled("span")({
  fontSize: "16px",
  fontWeight: "500",
});

export const UserRole = styled("span")({
  opacity: "50%",
});
