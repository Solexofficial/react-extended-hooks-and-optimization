import React from "react";
import Subtitle from "../../common/typografy/subtitle";

const withLogin = (Component) => (props) => {
  const isLogin = localStorage.getItem("auth");
  return <>{isLogin ? <Component {...props} /> : <Subtitle>Auth</Subtitle>}</>;
};

export default withLogin;
