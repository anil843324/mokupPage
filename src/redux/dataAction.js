import { DATA_LIST  } from "./constant";

//  get call to fetech data through saga
export const dataList = () => {
  return {
    type: DATA_LIST,
  };
};

