import { useEffect, useState } from "react";
import { postBoards, getAllBoards } from "../api/board";
import Article from "../atom/Article";
import Input from "../atom/Input";
import Button from "../atom/Button";

const Boards = () => {
  const [msg, setMsg] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const res = await postBoards({ title, content });
    try {
      document.getElementById("title").value = "";
      document.getElementById("content").value = "";
      getAllBoards();
    } catch (error) {
      setMsg(error.response.data);
    }
    getBoards();
  };

  const getBoards = async () => {
    setIsLoading(true);
    const { data } = await getAllBoards();
    const board = data.sort((a, b) => b.id - a.id);
    setData(board);
  };
  useEffect(() => {
    if (data.length !== 0) setIsLoading(false);
  }, [data]);
  useEffect(() => {
    getBoards();
  }, []);
  return (
    <Article>
      {/* add */}
      {/* msg가 뜨지를 않는다. 확인하기 */}
      <p>{msg}</p>
      <form onSubmit={onSubmit}>
        <Input placeholder="title" id="title" />
        <Input placeholder="content" id="content" />
        <Button>ADD</Button>
      </form>
      {/* list view */}
      <button onClick={getAllBoards}>getBoards</button>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        data.map((el) => (
          <Article key={el.id}>
            <p>
              {el.isMe && "*"} {el.title}
            </p>
            <p>{el.content}</p>
          </Article>
        ))
      )}
    </Article>
  );
};

export default Boards;
