const SideDrawerStyles = () => {
  return (
    <style jsx={"true"}>{`
      .side_drawer {
        position: fixed;
        height: 100vh;
        width: 70%;
        max-width: 400px;
        background-color: white;
        box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
        padding-top: 50px;
        top: 0;
        left: 0;
        color: black;
        z-index: 200;
        /*animation-name: slideout;
        animation-duration: 0.5s;*/
        transform: translateX(-100%);
        transition: transform 0.3s ease-out;
      }

      /*@keyframes slideout {
        from {
          width: 0%;
        }
        to {
          width: 70%
        }
      }*/

      .side_drawer ul {
        list-style-type: none;
        height: 100%;
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/
      }

      .side_drawer li {
        margin: 0.5rem 0;
      }

      .side_drawer a {
        color: black;
        text-decoration: none;
        font-size: 1.2rem;
      }

      .side_drawer a:hover,
      .side_drawer a:active {
        color: #555;
      }

      @media (min-width: 769px) {
        .side_drawer {
          display: none;
        }
      }
    `}</style>
  );
};

const sideDrawer = (props) => {
  let drawerClasses = "";
  if (props.show) {
    drawerClasses = "open";
  }
  return (
    <nav className={`side_drawer ${drawerClasses}`}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/login">Projects</a>
        </li>
        <li>
          <a href="/register">Blog</a>
        </li>
        <li>
          <a href="/register">Contact</a>
        </li>
      </ul>
      <SideDrawerStyles />
      <style jsx>{`
        .open {
          transform: translateX(0);
        }
      `}</style>
    </nav>
  );
};

export default sideDrawer;
