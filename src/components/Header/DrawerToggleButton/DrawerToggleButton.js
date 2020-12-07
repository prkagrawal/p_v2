const DrawerToggleButtonStyles = () => {
  return (
    <style jsx={"true"}>{`
      .toggle_button {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 25px;
        width: 30px;
        background: transparent;
        border: none;
        cursor: pointer;
        box-sizing: border-box;
      }

      .toggle_button:focus {
        outline: none;
      }

      .toggle_button_line {
        width: 30px;
        height: 2px;
        background-color: white;
      }
    `}</style>
  );
};

const drawerToggleButton = (props) => {
  return (
    <button className={"toggle_button"} onClick={props.dtch}>
      <div className={"toggle_button_line"} />
      <div className={"toggle_button_line"} />
      <div className={"toggle_button_line"} />
      <DrawerToggleButtonStyles />
    </button>
  );
};

export default drawerToggleButton;
