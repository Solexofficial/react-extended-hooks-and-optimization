import React from "react";
import CardWrapper from "../../common/Card";

const withPropsStyles = (Component) => (props) => {
  return (
    <CardWrapper>
      <Component {...props} name="name with Props and Styles" />
    </CardWrapper>
  );
};

export default withPropsStyles;
