import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
  const [data, setData] = useState({});
  const withOutCallback = useRef(0);
  const withCallback = useRef(0);

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validateWithOutCallBack = (data) => {
    console.log("without callback: ", data);
  };

  useEffect(() => {
    withOutCallback.current++;
  }, [validateWithOutCallBack]);

  const validateWithCallback = useCallback((data) => {
    console.log("with callback: ", data);
  }, []);

  useEffect(() => {
    withCallback.current++;
  }, [validateWithCallback]);

  useEffect(() => {
    validateWithOutCallBack(data);
    validateWithCallback(data);
  }, [data]);

  return (
    <CardWrapper>
      <SmallTitle>Example</SmallTitle>
      <p>Render without callback: {withOutCallback.current}</p>
      <p>Render with callback: {withCallback.current}</p>
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        value={data.email || ""}
        name="email"
        onChange={handleChange}
      />
    </CardWrapper>
  );
};

export default UseCallBackExample;
