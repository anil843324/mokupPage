import { takeEvery, put } from "redux-saga/effects";
import { DATA_LIST, SET_DATA_LIST ,CATEGORY_DATA_FIND } from "./constant";

function* getData() {
  let data = yield fetch("http://localhost:8080/allData");
  data = yield data.json();
  //    now call to send the data to action
  yield put({
    type: SET_DATA_LIST,
    data,
  });
}
function* searchProducts(data) {
  let filterData = yield fetch(`http://localhost:8080/allData?q=${data.query} `);
  filterData = yield filterData.json();
  //    now call to send the data to action
    console.log('action is called ',filterData)
  yield put({
    type: SET_DATA_LIST,
     data:filterData,
  });
}

function* dataSaga() {
  yield takeEvery(DATA_LIST, getData);
  yield takeEvery(CATEGORY_DATA_FIND, searchProducts);
}

export default dataSaga;
