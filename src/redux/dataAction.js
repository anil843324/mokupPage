import { DATA_LIST ,CATEGORY_DATA_FIND } from "./constant";

//  get call to fetech data through saga
export const dataList = () => {
  return {
    type: DATA_LIST,
  };
};

export const categoryDataFind = (query) => {
  return {
    type: CATEGORY_DATA_FIND,
    query
  };
};
