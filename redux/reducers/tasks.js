// 액션 목록을 제어하는 리듀서
// actions.js

// ex)
// Like 목록을 제어하는 리듀서
// likes.js
                
// 리듀서
// (현재 state, action의 리턴 객체)=>{
// switch.... case.... action의 타입에 따라서 state를 제어
//  return 변경할 state  
//}
const tasks = (state = [], action) => {
  // action의 type별로 state 제어
  switch (action.type) {
    case 'ADD_TASK_SUCCEEDED':      
      // return 변경할state
      // 현재 state를 복사하여 변경
      return [
        // state 배열 요소들을 카피 
        // state == [{}, {}] ...state -> {}, {}
        ...state, 
        // paylod 객체 카피
        {
          ...action.payload
        }
      ]
    case 'REMOVE_TASK_SUCCEEDED':     
      return [
        ...state.filter(item => item.id != action.payload)
      ]
    case 'FETCH_TASKS_SUCCEEDED':
      return [
        ...action.payload
      ]
    case "ADD_DATE_SUCCEEDED":
      return [...state];

    case "REMOVE_DATE_SUCCEEDED":
      console.log("-- REMOVE_DATE_SUCCEEDED: action.payload --")     
      console.log(action.payload)
      // console.log("-- REMOVE_DATE_SUCCEEDED: state --")     
      // const test1=state
      // console.log(test1);
      // const test2 = [...state.filter(item=>item.id!=action.payload.payload.id)];
      // console.log("-- REMOVE_DATE_SUCCEEDED: return state --")     
      // console.log(test2)        

      return [
        ...state.map(item=>item.id==action.payload.id?action.payload:item),
        ];
    default:
      return state
  }
}  

export default tasks;