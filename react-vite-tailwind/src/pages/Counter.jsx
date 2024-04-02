import { useState } from "react";
import ViewCount from "../components/ViewCount";
import ChangeCount from "../components/ChangeCount";
import LogCount from "../components/LogCount";
import { countState, countLogState } from "../store/countState";
import { useRecoilState } from "recoil";

const Counter = () => {
  console.log("Counter");

  return (
    <div className="container">
      <ViewCount />
      <ChangeCount />
      <hr className="m-10"></hr>
      <LogCount />
    </div>
  );
};

export default Counter;
