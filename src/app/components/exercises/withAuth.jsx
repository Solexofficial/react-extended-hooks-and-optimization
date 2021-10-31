import React, { useState } from "react";

const withAuth = (Component) => (props) => {
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem("user")));

  const handleLogin = () => {
    localStorage.setItem("user", "true");
    setIsAuth(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuth(false);
  };

  return (
    <Component
      isAuth={isAuth}
      onLogin={handleLogin}
      onLogout={handleLogout}
      {...props}
    />
  );
};

export default withAuth;
