import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { validator } from "../../../utils/validator";

const FormComponent = ({
  children,
  validatorConfig,
  defaultData,
  onSubmit
}) => {
  const [data, setData] = useState(defaultData || {});
  const [errors, setErrors] = useState({});

  const validate = useCallback(
    (data) => {
      const errors = validator(data, validatorConfig);
      setErrors(errors);
      return Object.keys(errors).length === 0;
    },
    [validatorConfig, setErrors]
  );

  const handleChange = useCallback((target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    onSubmit(data);
  };

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      validate(data);
    }
  }, [data]);

  useEffect(() => {}, [errors]);

  const isValid = Object.keys(errors).length === 0;
  const clonedElements = React.Children.map(children, (child) => {
    const childType = typeof child.type;
    let config = {};
    if (childType === "object") {
      if (!child.props.name) {
        throw new Error("name property is required for field component", child);
      }
      config = {
        ...child.props,
        onChange: handleChange,
        value: data[child.props.name] || "",
        error: errors[child.props.name]
      };
    }
    if (childType === "string") {
      if (child.type === "button") {
        if (child.props.type === "submit" || child.props.type === undefined) {
          config = { ...child.props, disabled: !isValid };
        }
      }
    }
    return React.cloneElement(child, config);
  });

  return <form onSubmit={handleSubmit}>{clonedElements}</form>;
};

FormComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  validatorConfig: PropTypes.object,
  onSubmit: PropTypes.func,
  defaultData: PropTypes.object
};

export default FormComponent;
