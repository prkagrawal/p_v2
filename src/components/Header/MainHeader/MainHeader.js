import { useState } from "react";

import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";

const MainHeader = (props) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const dtch = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const bkch = () => setSideDrawerOpen(!sideDrawerOpen);

  return (
    <div style={{ height: "100%" }}>
      <Toolbar dtch={dtch} />
      <SideDrawer show={sideDrawerOpen} />
      {
        // <main style={{marginTop:'70px'}}>
        //   <p>This is the page content!</p>
        // </main>
      }
      <Backdrop show={sideDrawerOpen} bkch={bkch} />
    </div>
  );
};

export default MainHeader;
