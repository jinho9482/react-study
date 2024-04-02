// form 에서는 enter를 치면 page가 새로 loading된다.
// count를 바꿔주는 곳

import { useRecoilState } from "recoil";
import { countLogState, countState } from "../store/countState";

const ChangeCount = () => {
  console.log("ChangeCount");
  const [count, setCount] = useRecoilState(countState);
  const [logs, setLogs] = useRecoilState(countLogState);
  // const [count, setCount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침을 막아줌
    // state가 바뀌면 DOM이 새로 loading된다. 가급적 적게 쓰자.
    const { value } = document.getElementById("input");
    setCount(Number(value));
    document.getElementById("input").value = 0;
    setLogs([
      ...logs,
      { number: Number(value), date: new Date().toLocaleString() },
    ]);
  };

  return (
    <form className="flex" onSubmit={onSubmit}>
      <label
        htmlFor="input"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Input
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="input"
          id="input"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          // onChange={(e) => setTemp(e.target.value)}
          required
        />
      </div>
      <span className="sm:ml-3">
        <button
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          // onClick={(e) => setCount(temp)}
        >
          ADD
        </button>
      </span>
    </form>
  );
};

export default ChangeCount;
