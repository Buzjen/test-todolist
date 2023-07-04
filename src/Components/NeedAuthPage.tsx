import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = styled("div")({
  display: "flex",
  justifyContent: "center",
  padding: "20px",
  fontWeight: "600",
  fontSize: "24px",
});

const MainInfo = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const ButtonCreate = styled("button")({
  marginTop: "20px",
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

export const NeedAuthPage = () => {
  return (
    <NotFoundPage>
      <MainInfo>
        <p>Необходимо войти в приложение</p>
        <Link to={"/SignIn"}>
          <ButtonCreate>Перейти к авторизации</ButtonCreate>
        </Link>
      </MainInfo>
    </NotFoundPage>
  );
};
