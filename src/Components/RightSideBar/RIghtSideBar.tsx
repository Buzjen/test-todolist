import { useAppDispatch, useAppSelector } from "../../Redux/ReduxHooks";
import { showSideBar } from "../../Redux/Slices/showSideBar.slice";
import { ProjectForm } from "./ProjectForm";
import { TableConfig } from "./TableConfig";
import { TaksForm } from "./TaksForm";
import { Overlay, Shadow, SideBar } from "./styled";

export const RIghtSideBar = () => {
  const dispatch = useAppDispatch();
  const { currentFormContent } = useAppSelector((state) => state.sideBarSlice);

  const closeIsSideBar = () => {
    dispatch(showSideBar(false));
  };

  return (
    <Overlay>
      <Shadow onClick={closeIsSideBar}></Shadow>
      <SideBar>
        {currentFormContent === "task" && <TaksForm />}
        {currentFormContent === "project" && <ProjectForm />}
        {currentFormContent === "tableConfig" && <TableConfig />}
      </SideBar>
    </Overlay>
  );
};
