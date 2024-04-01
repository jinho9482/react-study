import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const teams = [
  {
    rank: 1,
    name: "담원 기아",
    win: 12,
    lose: 6,
    winLoseDiff: 15,
    kill: 607,
    death: 508,
    assist: 1386,
  },
  {
    rank: 2,
    name: "농심",
    win: 12,
    lose: 6,
    winLoseDiff: 8,
    kill: 589,
    death: 513,
    assist: 1285,
  },
  {
    rank: 2,
    name: "젠지",
    win: 12,
    lose: 6,
    winLoseDiff: 8,
    kill: 605,
    death: 489,
    assist: 1367,
  },
  {
    rank: 4,
    name: "T1",
    win: 11,
    lose: 7,
    winLoseDiff: 6,
    kill: 504,
    death: 447,
    assist: 1190,
  },
  {
    rank: 5,
    name: "피어엑스",
    win: 11,
    lose: 7,
    winLoseDiff: 5,

    kill: 514,
    death: 568,
    assist: 1223,
  },
  {
    rank: 6,
    name: "아프리카",
    win: 11,
    lose: 7,
    winLoseDiff: 4,
    kill: 530,
    death: 489,
    assist: 1324,
  },
  {
    rank: 7,
    name: "KT",
    win: 7,
    lose: 11,
    winLoseDiff: -4,

    kill: 495,
    death: 559,
    assist: 1281,
  },
  {
    rank: 8,
    name: "한화 생명",
    win: 7,
    lose: 11,
    winLoseDiff: -9,

    kill: 495,
    death: 559,
    assist: 1122,
  },
  {
    rank: 9,
    name: "OK저축은행",
    win: 5,
    lose: 13,
    winLoseDiff: -8,

    kill: 483,
    death: 514,
    assist: 1184,
  },
  {
    rank: 10,
    name: "DRX",
    win: 2,
    lose: 16,
    winLoseDiff: -25,
    kill: 377,
    death: 630,
    assist: 858,
  },
];

const keys = [...Object.keys(teams[0])]; // teams[0] 의 key값들을 array로 return 하고 spread 함
// console.log(...Object.keys(teams[0]), (rank = 1000)); object의 value값을 바꿔준다.
function App() {
  console.log(Object.keys(teams[0]));
  console.log({ ...teams[0] });
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const [searchKey, setSearchKey] = useState("rank");
  // e.target.value 의 의미
  return (
    <div>
      <select onChange={(e) => setSearchKey(e.target.value)}>
        {keys.map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>
      <input
        placeholder="찾으실 내용을 입력해 주세요"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setSearch(input)}> search </button>

      <table>
        <thead>
          <th>rank</th>
          <th>name</th>
          <th>win</th>
          <th>lose</th>
          <th>winLoseDiff</th>
          <th>rate</th>
          <th>kda</th>
          <th>kill</th>
          <th>death</th>
          <th>assist</th>
        </thead>

        <tbody>
          {/* arrow function 뒤의 return 값에 ()를 쓴 이유는 return 값만 존재하기 때문이다. 앞에 const kda = something과 같이 연산이 들어가면 {}안에 코드들을 넣어야 한다. */}
          {teams
            .sort((a, b) => a[searchKey] - b[searchKey])
            .filter((items) => items[searchKey].toString().includes(search)) // items[searchKey] 가 숫자이기 때문에 String으로 바꿔줌
            .map((items, i, arr) => (
              <tr key={i}>
                {/* {} 안에는 string이 들어가야한다. object나 array가 들어가면 browser에서 인식을 못하게 된다. */}
                <td>{items.rank}</td>
                <td>{items.name}</td>
                <td>{items.win}</td>
                <td>{items.lose}</td>
                <td>{items.winLoseDiff}</td>
                <td>{(items.win / (items.win + items.lose)).toFixed(2)}</td>
                <td>
                  {parseInt(((items.kill + items.assist) / items.death) * 100) /
                    100}
                </td>
                <td>{items.kill}</td>
                <td>{items.death}</td>
                <td>{items.assist}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
