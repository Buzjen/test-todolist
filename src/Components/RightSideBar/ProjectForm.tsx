import { Box, styled } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { DatePickerValue } from "../DatePickerValue";
import { Input, Button } from "@mui/joy";
import { ErrorInForm } from "../ErrorInForm";

const MainTitle = styled("span")({
  display: "flex",
  fontWeight: "600",
  fontSize: "24px",
  justifyContent: "center",
  alignItems: "center",
});

interface IFormInput {
  plannedCompletionDate: string;
  cloud: string;
  projectCode: string;
  responsible: string;
  priority: number;
  shortDesc: string;
  fullDesc: string;
  projectStages: string;
}

export const ProjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MainTitle>Создание Проекта</MainTitle>
      <Box
        display="flex"
        justifyContent="cneter"
        alignItems="center"
        marginTop="20px"
      >
        <DatePickerValue />
      </Box>
      <Box marginTop="20px">
        <Input
          color="neutral"
          disabled={false}
          placeholder="Облако"
          size="lg"
          {...register("cloud", {
            required: "Please enter your cloud.",
            maxLength: 20,
            minLength: 3,
          })}
        />
        {errors.cloud && <ErrorInForm value={"Введите облако"} />}
      </Box>
      <Box marginTop="20px">
        <Input
          color="neutral"
          disabled={false}
          placeholder="Шифр Проекта"
          size="lg"
          {...register("projectCode", {
            required: "Please enter your projectCode.",
            maxLength: 20,
            minLength: 3,
          })}
        />
        {errors.projectCode && <ErrorInForm value={"Введите шифр проекта"} />}
      </Box>
      <Button fullWidth sx={{ mt: 4, mb: 8 }} type="submit">
        Создать
      </Button>
    </form>
  );
};
