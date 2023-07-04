import { Box, styled } from "@mui/material";
import { DatePickerValue } from "../DatePickerValue";
import { Input, Select, Option, Button } from "@mui/joy";

const MainTitle = styled("span")({
  display: "flex",
  fontWeight: "600",
  fontSize: "24px",
  justifyContent: "center",
  alignItems: "center",
});

const DateBlock = styled("div")({
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
});

export const TaksForm = () => {
  return (
    <Box component="form" display="flex" flexDirection="column">
      <MainTitle>Создание Задачи</MainTitle>
      <DateBlock>
        <DatePickerValue />
      </DateBlock>
      <Box marginTop="20px">
        <Input
          color="neutral"
          disabled={false}
          placeholder="Шифр задачи"
          size="lg"
        />
      </Box>
      <Box marginTop="20px">
        <Select
          color="neutral"
          disabled={false}
          placeholder="Шифр проекта"
          size="lg"
          variant="outlined"
        >
          <Option value="123">123</Option>
          <Option value="123">123</Option>
          <Option value="123">123</Option>
        </Select>
      </Box>
      <Box marginTop="20px">
        <Input
          color="neutral"
          disabled={false}
          placeholder="Относится к (стадия проекта или шифр задачи)"
          size="lg"
        />
      </Box>
      <Box marginTop="20px">
        <Input
          color="neutral"
          disabled={false}
          placeholder="Формулировка"
          size="lg"
        />
      </Box>
      <Box marginTop="20px">
        <Input
          color="neutral"
          disabled={false}
          placeholder="Комментарий"
          size="lg"
        />
      </Box>
      <Box marginTop="20px">
        <Select
          color="neutral"
          disabled={false}
          placeholder="Ответственный"
          size="lg"
          variant="outlined"
        >
          <Option value="123">123</Option>
          <Option value="123">123</Option>
          <Option value="123">123</Option>
        </Select>
      </Box>
      <Box marginTop="20px">
        <Select
          color="neutral"
          disabled={false}
          placeholder="Исполнитель"
          size="lg"
          variant="outlined"
        >
          <Option value="123">123</Option>
          <Option value="123">123</Option>
          <Option value="123">123</Option>
        </Select>
      </Box>
      <Box marginTop="20px">
        <Input
          color="neutral"
          disabled={false}
          placeholder="Комментарий"
          size="lg"
        />
      </Box>
      <Button fullWidth sx={{ mt: 4, mb: 8 }} type="submit">
        Создать
      </Button>
    </Box>
  );
};
