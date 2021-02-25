import { call, put, takeEvery } from 'redux-saga/effects'
import api from '../../api/tasks'
function* addDate(action){
  // console.log('-- Saga: addDate.action --')
  // console.log(action);
  const useDate = { "useDate":""}
  useDate.useDate=action.payload
  // console.log('-- Saga: addDate.useDate --')
  // console.log(useDate)
  const result = yield call(api.patch,action.patchId,useDate);
  // console.log(result.data)
  yield put({type:"ADD_DATE_SUCCEEDED",payload: result.data});
}
function* removeDate(action){
  console.log('-- Saga: removeDate.action')
  console.log(action)   
  const result = yield call(api.put,action.putId,action.payload)  
  console.log('-- Saga: removeDate.result.data')
  console.log(result.data);  
  console.log('-- Saga: removeDate.lastId')
  console.log(action.lastId)
  yield put({type:"REMOVE_DATE_SUCCEEDED",payload:result.data,lastId:action.lastId})
}
function* dateSaga(){
  yield takeEvery("ADD_DATE",addDate)
  yield takeEvery("REMOVE_DATE",removeDate)
}
export default dateSaga