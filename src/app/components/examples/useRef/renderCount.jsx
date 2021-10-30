import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
  const renderCount = useRef(0);
  const [otherState, setOtherState] = useState(false);
  const toggleOtherState = () => {
    setOtherState(!otherState);
  };

  useEffect(() => {
    renderCount.current++;
  });
  return (
    <CardWrapper>
      <SmallTitle>Подсчет количества рендеров</SmallTitle>
      <Divider />
      <p>render count: {renderCount.current}</p>
      <button className="btn btn-primary" onClick={toggleOtherState}>
        Toggle other state
      </button>
    </CardWrapper>
  );
};

export default RenderCountExample;
