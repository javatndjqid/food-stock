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
const actions = (state = [], action) => {
  // actions의 type별로 state(상태) 제어
  switch(action.type) {
    case 'ADD_CHECK':
      // console.log("actions 실행")
      // console.log(action.payload)
      // action.payload.status=3;
      // console.log([...state,{
      //   ...action.payload
      // }])
      

      // return 변경할 state
      // 현재 state를 복사하여 변경
      return[
        ...state, // 원래 배열의 요소목록을 카피 [{}, {}] ...sate->{},{}        
        // payload 객체 카피
        {
          ...action.payload
        }
      ];
    case 'REMOVE_CHECK':
      
      // action.payload.status=0
      // console.log("remove: "+action.payload.status)
      return [
        ...state.filter(item => item.id != action.payload.id)
      ];
      case "REMOVE_DATE_LIST":
      console.log(action.payload)
        // if(action.payload.useDate.length==0){
        //   return state;
        // }
        
        // action.payload.useDate.pop()      
  
        return  [    
          state,      
          {
            ...action.payload
          }
        ]; 
    default:
      return state;
  }
}

export default actions;