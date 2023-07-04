import { styled } from "@mui/material";

const NotFoundPage = styled("div")({
  display: "flex",
  justifyContent: "center",
  padding: "20px",
  fontWeight: "600",
  fontSize: "24px",
});

export const NotFound = () => {
  return (
    <NotFoundPage>
      <p>Страница не найдена 404</p>
    </NotFoundPage>
  );
};
