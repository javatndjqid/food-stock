import { fork } from 'redux-saga/effects'
import tasksSaga from './tasks'
import dateSaga from './date'

export default function* rootSaga() {
  yield fork(tasksSaga)
  yield fork(dateSaga)
  // yield fork(bookmarksSaga)
  // yield fork(likesSaga)
  // yield fork(profileSaga)
}