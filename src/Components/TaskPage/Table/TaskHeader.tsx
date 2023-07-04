import { Box, styled } from "@mui/material";
import { useAppSelector } from "../../../Redux/ReduxHooks";

const Head = styled("div")({
  marginTop: "20px",
  minHeight: "fit-content",
  alignItems: "center",
  color: "#11142D",
  fontWeight: "600",
  fontSize: "14px",
});

const Menu = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#F7F7FC",
});

export const TaskHeader = () => {
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

  return (
    <Head>
      <Menu>
        {date && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="84px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            Дата
          </Box>
        )}
        {taskCode && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="60px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            Шифр Задачи
          </Box>
        )}
        {projectCode && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="60px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            Шифр Проекта
          </Box>
        )}
        {task && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="154px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            Задача
          </Box>
        )}
        {status && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="98px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            Статус
          </Box>
        )}
        {respomsoble && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="108px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            Ответственный
          </Box>
        )}
        {reassign && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="118px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            Переназначить
          </Box>
        )}
        {priority && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="7px"
            width="86px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            Приоритет
          </Box>
        )}
        {comment && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="106px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            Комментарий
          </Box>
        )}
        {planTime && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="68px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            План время
          </Box>
        )}
        {factTime && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="68px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            Факт время
          </Box>
        )}
        {began && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="90px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            Начал
          </Box>
        )}
        {completed && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="96px"
            textAlign="center"
          >
            Завершил
          </Box>
        )}
      </Menu>
    </Head>
  );
};
