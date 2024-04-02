import { useRecoilState, useRecoilValue } from "recoil";
import { countState } from "../store/countState";

const ViewCount = () => {
  console.log("ViewCount");
  const count = useRecoilValue(countState);
  return <h1 className="text-9xl">{count}</h1>; // count를 보여주는 곳
};

export default ViewCount;
