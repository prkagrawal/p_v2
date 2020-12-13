import DrawerToggleButton from "../DrawerToggleButton/DrawerToggleButton";

const ToolbarStyles = () => {
  return (
    <style jsx={"true"}>{`
      .toolbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #333;
        color: white;
        height: 60px;
      }

      .toolbar_nav {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 8%;
      }

      .toolbar_logo {
        margin-left: 1.75rem;
      }

      .toolbar_logo a {
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
      }

      .spacer {
        flex: 1;
      }

      .toolbar_nav_items ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
      }

      .toolbar_nav_items ul li {
        padding: 0 0.5rem;
      }

      .toolbar_nav_items a {
        color: white;
        text-decoration: none;
      }

      .toolbar_nav_items a:hover,
      .toolbar_nav_items a:active {
        color: gray;
      }

      /*.toolbar_nav_items a:active{
        color: blue;
      }*/

      /*Media Queries for smaller screens*/
      @media (max-width: 768px) {
        .toolbar_nav_items {
          display: none;
        }
      }

      @media (min-width: 769px) {
        .toolbar_toggle_button {
          display: none;
        }

        .toolbar_logo {
          margin-left: 0;
        }
      }
    `}</style>
  );
};

const toolbar = (props) => {
  return (
    <header className={"toolbar"}>
      <nav className={"toolbar_nav"}>
        <div className={"toolbar_toggle_button"}>
          <DrawerToggleButton dtch={props.dtch} />
        </div>
        <div className={"toolbar_logo"}>
          <a href="/">Welcome</a>
        </div>
        <div className={"spacer"} />
        <div className={"toolbar_nav_items"}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/blogs">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <ToolbarStyles />
    </header>
  );
};

export default toolbar;
