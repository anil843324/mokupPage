import { takeEvery, put } from "redux-saga/effects";
import { DATA_LIST, SET_DATA_LIST } from "./constant";

function* getData() {
  let data = yield fetch("http://localhost:8080/allData");
  data = yield data.json();
  //    now call to send the data to action
  yield put({
    type: SET_DATA_LIST,
    data,
  });
}


function* dataSaga() {
  yield takeEvery(DATA_LIST, getData);
 
}

export default dataSaga;
