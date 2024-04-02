import { atom } from "recoil";

// atom 은 1개 씩 내보냄

export const countState = atom({
  key: "countState",
  default: 0,
});

export const countLogState = atom({
  key: "countLogState",
  default: [],
});
