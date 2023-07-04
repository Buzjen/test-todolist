import { keyframes, styled } from "@mui/material";

export const slideInRight = keyframes`
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }`;

export const opacityConfig = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}`;

export const Overlay = styled("div")({
  position: "fixed",
  display: "flex",
  overflow: "hidden",
  height: "100vh",
  width: "100vw",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  animationName: `${opacityConfig}`,
  animationDuration: "0.5s",
  zIndex: "3",
  transition: "0.4s",
});

export const SideBar = styled("div")({
  padding: "30px",
  position: "absolute",
  right: "0",
  width: "320px",
  background: "#ffffff",
  height: "100%",
  overflowY: "scroll",
  animationName: `${slideInRight}`,
  animationDuration: "0.5s",
});

export const Shadow = styled("div")({
  width: "100%",
  height: "100%",
});
