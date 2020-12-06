const BackdropStyles = () => {
  return (
    <style jsx={"true"}>{`
      .backdrop {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 100;
      }

      @media (min-width: 769px) {
        .backdrop {
          display: none;
        }
      }
    `}</style>
  );
};

const backdrop = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <>
      <div className={"backdrop"} onClick={props.bkch} />
      <BackdropStyles />
    </>
  );
};

export default backdrop;
