import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
  useEffect(() => {
    console.log("render btn ");
  });
  return (
    <button className="btn btn-primary mx-2" onClick={onLogOut}>
      LogOut
    </button>
  );
};

LogOutButton.propTypes = {
  onLogOut: PropTypes.func
};
/* default shallowEqual https://github.com/facebook/react/blob/v16.8.6/packages/shared/shallowEqual.js */
function areEqual(prevState, nextState) {
  if (prevState.onLogOut !== nextState.onLogOut) {
    return false;
  }
  return true;
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
  const [state, setState] = useState(false);
  const handleLogOut = useCallback(() => {
    localStorage.removeItem("auth");
  }, [props]);
  return (
    <>
      <MemoizedLogOutButton onLogOut={handleLogOut} />
      <button className="btn btn-primary mx-2" onClick={() => setState(!state)}>
        initiate rerender
      </button>
    </>
  );
};

export default MemoWithUseCallbackExample;
