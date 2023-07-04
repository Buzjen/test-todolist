import { useAppDispatch } from "../Redux/ReduxHooks";
import { isCurrentForm, showSideBar } from "../Redux/Slices/showSideBar.slice";
import { TaskButtons, ButtonCreate } from "./TaskPage/styled";

export const CreateTaskButtons = () => {
  const dispatch = useAppDispatch();

  const openSideBarTask = () => {
    dispatch(showSideBar(true));
    dispatch(isCurrentForm("task"));
  };

  const openSideBarProject = () => {
    dispatch(showSideBar(true));
    dispatch(isCurrentForm("project"));
  };

  return (
    <TaskButtons>
      <ButtonCreate onClick={openSideBarTask}>Добавить Задачу</ButtonCreate>
      <ButtonCreate onClick={openSideBarProject}>Добавить Проект</ButtonCreate>
    </TaskButtons>
  );
};
