import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import Article from "../atom/Article";
import Button from "../atom/Button";
import Input from "../atom/Input";
import Label from "../atom/Label";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    // console.log(name, password);

    try {
      const res = await register({ name, password });
      if (res.status === 201) navigate("/login"); // 가입이 되면, 201 : create
    } catch (error) {
      console.log(error);
      setMessage(error.response.data);
    }
  };

  return (
    <div className="container">
      <Article>
        <p>{message}</p>
        <form onSubmit={onSubmit}>
          <Label htmlFor="name">name</Label>
          <Input id="name" required />

          <Label htmlFor="password">password</Label>
          <Input id="password" type="password" />

          <hr className="m-4" />

          <Button>submit</Button>
        </form>
      </Article>
    </div>
  );
};

export default Signup;
