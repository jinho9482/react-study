// http 통신으로 데이터를 받아오고 넣는 작업을 한다.
// url, method, body
// axios : 통신을 하는 library

import axios from "axios";
// async
export const api = async (url, method, body) => {
  axios.defaults.baseURL = "http://192.168.80.4:4000";
  // 통신을 요청하고 받아올 때까지 기다리는 것 => await
  const res = await axios({
    url,
    method,
    data: body,
    headers: {
      Authorization: localStorage.getItem("id"),
    },
  });

  return res;
};
