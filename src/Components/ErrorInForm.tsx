import { styled } from "@mui/material";
import React from "react";

const ErrorMesage = styled("span")({
  marginTop: "6px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "red",
});

interface ErrorInFormsProps {
  value: string;
}

export const ErrorInForm: React.FC<ErrorInFormsProps> = ({ value }) => {
  return <ErrorMesage>{value}</ErrorMesage>;
};
