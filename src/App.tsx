import { Box, styled } from "@mui/material";
import { Header } from "./Components/Header/Header";
import { TaskPage } from "./Components/TaskPage/TaskPage";
import { NavBar } from "./Components/NavBar/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import { Employee } from "./Components/Employees/Employee";
import { Project } from "./Components/ProjectPage/Project";
import { Coupon } from "./Components/Coupon";
import { Analytics } from "./Components/NotUsedPages/Analytics";
import { Settings } from "./Components/NotUsedPages/Settings";
import { RIghtSideBar } from "./Components/RightSideBar/RIghtSideBar";
import { useAppSelector } from "./Redux/ReduxHooks";
import { SignIn } from "./Components/SignIn";
import { NotFound } from "./Components/NotFound";
import { NeedAuthPage } from "./Components/NeedAuthPage";
import { useEffect } from "react";

const Wrapper = styled("div")({
  boxSizing: "border-box",
  position: "relative",
});

export const App = () => {
  const isAuth = true;
  const { siderBarIsOpen } = useAppSelector((state) => state.sideBarSlice);

  useEffect(() => {
    const res = fetch("http://dev.pmtcp.ru/");
    console.log(res);
  }, []);

  return (
    <>
      {!isAuth ? (
        <Routes>
          <Route path={"/"} element={<Navigate to={"/SignIn"} />} />
          <Route path={"/SignIn"} element={<SignIn />} />
          <Route path={"*"} element={<NeedAuthPage />} />
        </Routes>
      ) : (
        <Wrapper>
          {siderBarIsOpen && <RIghtSideBar />}
          {isAuth && <Header />}
          <Box display="flex">
            {isAuth && <NavBar />}
            <Routes>
              <Route path={"/"} element={<Navigate to={"/Task"} />} />
              <Route path={"/SignIn"} element={<Navigate to={"/Task"} />} />
              <Route path={"/Task"} element={<TaskPage />} />
              <Route path={"/Employee"} element={<Employee />} />
              <Route path={"/Project"} element={<Project />} />
              <Route path={"/Coupon"} element={<Coupon />} />
              <Route path={"/Analytics"} element={<Analytics />} />
              <Route path={"/Settings"} element={<Settings />} />
              <Route path={"*"} element={<NotFound />} />
            </Routes>
          </Box>
        </Wrapper>
      )}
    </>
  );
};
