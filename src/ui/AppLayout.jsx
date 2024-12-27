import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const StyledAppLayout = styled.div``;

const AppLayout = ({ children }) => {
  return (
    <>
      <Toaster
        position="top-left"
        toastOptions={{
          style: {
            background: "#232227",
            borderRadius: "3px",
            borderBottom: "3px #dc9749 solid",
            color: "white",
            zIndex: "10000000",
          },
        }}
      />
      <StyledAppLayout>
        <Header />
        <Outlet />
        <Footer />
      </StyledAppLayout>
    </>
  );
};

export default AppLayout;
