/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

const HomeStyles = () => {
  return <style jsx={"true"}>{``}</style>;
};

const Home = (props) => {
  return (
    <div className={"container-home"} sx={{ color: "primary" }}>
      <h3>Home</h3>
      <HomeStyles />
    </div>
  );
};

export default Home;
