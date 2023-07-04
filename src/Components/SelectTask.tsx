import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export const SelectTask = () => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Тип</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={"Задача"}
        label="Тип"
        onChange={() => {}}
      >
        <MenuItem value={1}>Задача</MenuItem>
        <MenuItem value={2}>Проект</MenuItem>
      </Select>
    </FormControl>
  );
};
