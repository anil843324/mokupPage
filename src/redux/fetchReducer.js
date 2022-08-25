import { SET_DATA_LIST } from "./constant";

export const fetchData = (data = [], action) => {
  switch (action.type) {
    case SET_DATA_LIST:
      // add data
      console.log("Data list ", action);
      return [...action.data];

    default:
      // no case matched
      return data;
  }
};
