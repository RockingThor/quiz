import { atom } from "recoil";

const progressState = atom({
  key: "progress", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
