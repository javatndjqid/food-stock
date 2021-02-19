import { combineReducers} from 'redux'
import actions from './actions'
import manageList from './manageList'

// 여러개의 리듀서를 함친 리듀서를 만듦
const rootReducer = combineReducers({
  actions,manageList
})

export default rootReducer