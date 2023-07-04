import { Link } from "react-router-dom";
import { ProfileNotification } from "./ProfileNotification";
import { MainHeader, MainLogo, MainTitle } from "./styled";
import { styled } from "@mui/material";

const Layout = styled("div")({
  height: "70px",
  maxWidth: "100vw",
  zIndex: "1",
});

export const Header = () => {
  return (
    <Layout>
      <MainHeader>
        <MainLogo>
          <Link to={"/Task"}>
            <svg
              width="46"
              height="40"
              viewBox="0 0 46 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="45.3889" height="40" rx="8" fill="#E2E2EA" />
            </svg>
          </Link>
          <MainTitle>ТехноСтройПроект</MainTitle>
        </MainLogo>
        <ProfileNotification />
      </MainHeader>
    </Layout>
  );
};
