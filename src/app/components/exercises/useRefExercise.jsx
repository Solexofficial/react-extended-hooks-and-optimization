import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
  const btnRef = useRef();

  const handleClick = () => {
    console.log(btnRef.current);
    btnRef.current.style.width = "150px";
    btnRef.current.style.height = "80px";
  };
  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть блок, у которого заданы ширина и высота. Добавьте кнопку, при
        нажатии которой изменятся следующие свойства:
      </p>
      <ul>
        <li>Изменится содежимое блока на &quot;text&quot;</li>
        <li>высота и ширина станут равны 150 и 80 соответственно</li>
      </ul>
      <div
        className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
        style={{
          height: 40,
          width: 60,
          color: "white"
        }}
        ref={btnRef}
      >
        <small>Блок</small>
      </div>
      <button className="btn btn-primary m-2" onClick={handleClick}>
        Change size btn
      </button>
    </CollapseWrapper>
  );
};

export default UseRefExercise;
