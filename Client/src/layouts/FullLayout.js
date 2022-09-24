import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";
import { useCookies } from "react-cookie";
import React,{ useEffect , useState} from "react"

const FullLayout = () => {
  const [cookies, setCookie, removeCookie] = useCookies('Administrator');

  useEffect(() => {
    if(!cookies.accessToken){
      window.location.href="/#/"
    }
  }, []);

  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}

        <div className="contentArea">
          {/********header**********/}
          <Header />
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
