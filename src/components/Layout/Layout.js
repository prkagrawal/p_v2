import Head from "next/head";

import Header from "../Header/MainHeader/MainHeader";

const LayoutStyles = () => {
  return (
    <style jsx={"true"}>{`
      .main {
        padding: 0;
        margin: 0;
        max-width: 100%;
        overflow-x: hidden;
        margin-top: 38px;
      }
    `}</style>
  );
};

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>MyApp {props.title ? "- " + props.title : ""}</title>
      </Head>
      <Header />
      <div className={"main"}>{props.children}</div>
      <LayoutStyles />
    </>
  );
};

export default Layout;
