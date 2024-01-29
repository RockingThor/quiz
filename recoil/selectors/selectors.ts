import { selector } from "recoil";
import { progressState } from "../atom/atom";

export const getCurrentLevel = selector({
  key: "getCurrentLevel",
  get: ({ get }) => {
    const data = get(progressState);

    return data.level;
  },
});

export const getPrevPassword = selector({
  key: "getPrevPassword",
  get: ({ get }) => {
    const data = get(progressState);

    return data.prev;
  },
});

export const getCurrPassword = selector({
  key: "getCurrPassword",
  get: ({ get }) => {
    const data = get(progressState);

    return data.curr;
  },
});
