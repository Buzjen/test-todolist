import { Box, styled } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { CurrentStatusTask } from "./CurrentStatusTask";
import { useAppSelector } from "../../../Redux/ReduxHooks";

const TodoInfo = styled("li")<{ isActive: string }>(({ isActive }) => ({
  border: "1px solid gray",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "1vh",
  paddingBottom: "1vh",
  backgroundColor: isActive === "В работе" ? "#5af2ca" : "white",
}));

const Status = styled("div")<{ isActive: boolean }>(({ isActive }) => ({
  background: isActive ? "#fdc2b8" : "#ffb2a4",
  height: "20px",
  minHeight: "2vh",
  padding: "6px",
  minWidth: "90px",
  border: "1px solid gray",
  borderRadius: "8px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  transition: "0.2s",
  "&:hover": {
    background: isActive ? "#ffb2a4" : "#CEFDED",
  },
}));

export const currentTask = ["Выполнено", "На паузе", "В работе"];

export const TaskItem = () => {
  const [taskStatus, setStatus] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(currentTask[0]);
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
    <>
      <TodoInfo isActive={currentStatus}>
        {date && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="84px"
            fontSize="14px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            12.33.23
          </Box>
        )}
        {taskCode && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="60px"
            fontSize="14px"
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
            fontSize="14px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            123.123
          </Box>
        )}
        {task && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="154px"
            fontSize="14px"
            textAlign="center"
          >
            123.123
          </Box>
        )}
        {status && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="98px"
            fontSize="14px"
          >
            <Status
              isActive={!taskStatus}
              onClick={() => setStatus(!taskStatus)}
            >
              {currentStatus}
              <KeyboardArrowDownIcon />
              {taskStatus && (
                <CurrentStatusTask
                  currentTask={currentTask}
                  setCurrentStatus={setCurrentStatus}
                />
              )}
            </Status>
          </Box>
        )}
        {respomsoble && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="108px"
            fontSize="14px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            Lorem ipsum
          </Box>
        )}
        {reassign && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="118px"
            fontSize="14px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            123.123
          </Box>
        )}
        {priority && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="7px"
            height="66px"
            width="86px"
            fontSize="14px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            123.123
          </Box>
        )}
        {comment && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="106px"
            fontSize="14px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            123.123
          </Box>
        )}
        {planTime && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="68px"
            fontSize="14px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            123.123
          </Box>
        )}
        {factTime && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="68px"
            fontSize="14px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            123.123
          </Box>
        )}
        {began && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="66px"
            width="90px"
            fontSize="14px"
            textAlign="center"
            borderRight="1px solid #d4d3db"
          >
            123.123
          </Box>
        )}
        {completed && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="62px"
            fontSize="14px"
            width="78px"
            textAlign="center"
          >
            123.123
          </Box>
        )}
      </TodoInfo>
    </>
  );
};
