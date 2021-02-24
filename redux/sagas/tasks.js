import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../../api/tasks'

function* addTask(action){
  console.log("-- Saga: addTask.action --")
  console.log(action);
  console.log("-- Saga: addTask.action.payload --")
  console.log(action.payload);

  const result = yield call(api.post,action.payload)
  console.log("-- Saga: addTask.result.data --")
  console.log(result.data)

  yield put({type:"ADD_TASK_SUCEEDED",payload: action.payload});
}

function* removeTask(action){
  console.log("-- Saga: addTask.action --")
  console.log(action);

  const result = yield call(api.delete,action.payload)
  console.log("-- Saga: addTask.result.data --")
  console.log(result.data)

  yield put({type:"REMOVE_TASK_SUCEEDED",payload: action.payload});  
}

function* fetchTasks(action){
  console.log("-- Saga: fetch.action --")
  console.log(action)

  const result = yield call(api.list);
  console.log("-- Saga: fetch.result.data ")
  console.log(result.data)

  yield put({type:"FETCH_TASKS_SUCCEEDED",payload: result.data})
}

function* tasksSaga() {
    
  // 액션이 발생했을 때, 제너레이터함수로 처리
  // dispatch({type:"ADD_TASK", paylod:item})
  // takeEvery: 해당 액션이 발생할 때마다 모두 처리
  // yield takeEvery("액션타입", 처리할제너레이터함수)
  yield takeEvery("ADD_TASK", addTask);
  yield takeEvery("REMOVE_TASK", removeTask)
  // takeLatest: 해당 액션이 발생할 때 가장 나중에 호출할 액션 처리
  //             이전의 액션은 취소가 됨
  // 주로 api를 통해서 데이터를 조회해 올 때 사용
  // yield takeLatest("액션타입", 제너레이터함수)
  yield takeLatest("FETCH_TASKS", fetchTasks);
}

export default tasksSaga