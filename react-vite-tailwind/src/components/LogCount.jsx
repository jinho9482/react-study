// logs [{number: 1, date: date}, {number: 2, date: date}]

import { useRecoilState, useRecoilValue } from "recoil";
import { countLogState } from "../store/countState";

const LogCount = () => {
  console.log("LogCount");
  const logs = useRecoilValue(countLogState);

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>number</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        {/* 반복문이 돌아갈 때는 key 값을 주는 것이 좋다. 몇 번째 loop인지 확인 */}
        {logs.map(({ number, date }, i) => (
          // const { number, date } = el;
          <tr key={i}>
            <td>{number}</td>
            <td>{date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LogCount;
