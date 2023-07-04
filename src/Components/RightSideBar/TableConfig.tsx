import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  styled,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../Redux/ReduxHooks";
import {
  dateRowIsShowing,
  taskCodeRowIsShowing,
  projectCodeRowIsShowing,
  taskRowIsShowing,
  statusRowIsShowing,
  respomsobleRowIsShowing,
  reassignRowIsShowing,
  priorityRowIsShowing,
  commentRowIsShowing,
  planTimeRowIsShowing,
  factTimeRowIsShowing,
  beganRowIsShowing,
  completedRowIsShowing,
} from "../../Redux/Slices/showTable.slice";

const MainTitle = styled("span")({
  display: "flex",
  fontWeight: "600",
  fontSize: "24px",
  justifyContent: "center",
  alignItems: "center",
});

export const TableConfig = () => {
  const dispatch = useAppDispatch();
  const {
    date,
    taskCode,
    projectCode,
    task,
    status,
    respomsoble,
    reassign,
    priority,
    comment,
    planTime,
    factTime,
    began,
    completed,
  } = useAppSelector((state) => state.showTableSlice);

  const dateIsShowing = () => {
    dispatch(dateRowIsShowing(!date));
  };

  const taskCodeIsShowing = () => {
    dispatch(taskCodeRowIsShowing(!taskCode));
  };

  const projectCodeIsShowing = () => {
    dispatch(projectCodeRowIsShowing(!projectCode));
  };

  const taskIsShowing = () => {
    dispatch(taskRowIsShowing(!task));
  };

  const statusIsShowing = () => {
    dispatch(statusRowIsShowing(!status));
  };

  const respomsobleIsShowing = () => {
    dispatch(respomsobleRowIsShowing(!respomsoble));
  };

  const reassignIsShowing = () => {
    dispatch(reassignRowIsShowing(!reassign));
  };

  const priorityIsShowing = () => {
    dispatch(priorityRowIsShowing(!priority));
  };

  const commentIsShowing = () => {
    dispatch(commentRowIsShowing(!comment));
  };

  const planTimeIsShowing = () => {
    dispatch(planTimeRowIsShowing(!planTime));
  };

  const factTimeIsShowing = () => {
    dispatch(factTimeRowIsShowing(!factTime));
  };

  const beganIsShowing = () => {
    dispatch(beganRowIsShowing(!began));
  };

  const completedIsShowing = () => {
    dispatch(completedRowIsShowing(!completed));
  };

  return (
    <div>
      <MainTitle>Настройка столбцов</MainTitle>
      <FormGroup>
        <Box marginTop="6px">
          <FormControlLabel
            control={<Checkbox checked={date} onChange={dateIsShowing} />}
            label="Дата"
          />
        </Box>
        <Box>
          <FormControlLabel
            control={
              <Checkbox checked={taskCode} onChange={taskCodeIsShowing} />
            }
            label="Шифр Задачи"
          />
        </Box>
        <Box>
          <FormControlLabel
            control={
              <Checkbox checked={projectCode} onChange={projectCodeIsShowing} />
            }
            label="Шифр Проекта"
          />
        </Box>
        <Box>
          <FormControlLabel
            control={<Checkbox checked={task} onChange={taskIsShowing} />}
            label="Задача"
          />
        </Box>
        <Box>
          <FormControlLabel
            control={<Checkbox checked={status} onChange={statusIsShowing} />}
            label="Статус"
          />
        </Box>
        <Box>
          <FormControlLabel
            control={
              <Checkbox checked={respomsoble} onChange={respomsobleIsShowing} />
            }
            label="Ответственный"
          />
        </Box>
        <Box>
          <FormControlLabel
            control={
              <Checkbox checked={reassign} onChange={reassignIsShowing} />
            }
            label="Переназначить"
          />
        </Box>
        <Box>
          <FormControlLabel
            control={
              <Checkbox checked={priority} onChange={priorityIsShowing} />
            }
            label="Приоритет"
          />
        </Box>
        <Box>
          <FormControlLabel
            control={<Checkbox checked={comment} onChange={commentIsShowing} />}
            label="Комментарий"
          />
        </Box>
        <Box>
          <FormControlLabel
            control={
              <Checkbox checked={planTime} onChange={planTimeIsShowing} />
            }
            label="План. время"
          />
        </Box>
        <Box>
          <FormControlLabel
            control={
              <Checkbox checked={factTime} onChange={factTimeIsShowing} />
            }
            label="Факт. время"
          />
        </Box>
        <Box>
          <FormControlLabel
            control={<Checkbox checked={began} onChange={beganIsShowing} />}
            label="Начал"
          />
        </Box>
        <Box>
          <FormControlLabel
            control={
              <Checkbox checked={completed} onChange={completedIsShowing} />
            }
            label="Завершил"
          />
        </Box>
      </FormGroup>
    </div>
  );
};
