import { atom } from "recoil";

export interface Data {
  level: number;
  prev: string;
  curr: string;
}

export const progressState = atom<Data>({
  key: "progress", // unique ID (with respect to other atoms/selectors)
  default: {
    level: 0,
    prev: "",
    curr: "",
  }, // default value (aka initial value)
});
