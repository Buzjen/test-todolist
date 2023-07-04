import { styled } from "@mui/material";

export const NavigationIcons = styled("div")({
  width: "70px",
  height: "600px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRight: "2px solid #f2f2f2",
});

export const Dashboard = styled("div")<{ isActive: string }>(
  ({ isActive }) => ({
    width: "70px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px",
    marginTop: "40px",
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
      background: "#F8F8F8",
    },
    background: isActive === "Dashboard" ? "#f2f2f2" : "white",
  })
);

export const Employee = styled("div")<{ isActive: string }>(({ isActive }) => ({
  width: "70px",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": {
    background: "#F8F8F8",
  },
  background: isActive === "Employee" ? "#f2f2f2" : "white",
}));

export const Product = styled("div")<{ isActive: string }>(({ isActive }) => ({
  width: "70px",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": {
    background: "#F8F8F8",
  },
  background: isActive === "Project" ? "#f2f2f2" : "white",
}));

export const Coupon = styled("div")<{ isActive: string }>(({ isActive }) => ({
  width: "70px",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": {
    background: "#F8F8F8",
  },
  background: isActive === "Coupon" ? "#f2f2f2" : "white",
}));

export const Analytics = styled("div")<{ isActive: string }>(
  ({ isActive }) => ({
    width: "70px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
      background: "#F8F8F8",
    },
    background: isActive === "Analytics" ? "#f2f2f2" : "white",
  })
);

export const Settings = styled("div")<{ isActive: string }>(({ isActive }) => ({
  width: "70px",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": {
    background: "#F8F8F8",
  },
  background: isActive === "Settings" ? "#f2f2f2" : "white",
}));
