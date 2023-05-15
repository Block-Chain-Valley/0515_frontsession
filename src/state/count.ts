import { atom, selector } from "recoil";

export const isToggleAtom = atom({
  key: "isToggle",
  default: false,
});

export const countAtom = atom({
  key: "count",
  default: 0,
});

export const count2Atom = atom({
  key: "count2",
  default: 0,
});

export const addSelector = selector({
  key: "addSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    const count2 = get(count2Atom);
    return count + count2;
  },
});

export const countSelector = selector({
  key: "countSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count;
  },
});
