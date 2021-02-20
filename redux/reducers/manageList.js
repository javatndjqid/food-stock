const manageList = (state = [], action)=>{
  switch(action.type) {
    case "ADD_LIST":
      return null;
    case "REMOVE_LIST":   
      const id = action.payload.id;   
      return [
        ...state,
        {
          ...action.payload.filter((item)=>item.id!=id)
        }
      ];
    case "ADD_DATE_LIST":
      const text = {
        id: action.payload.useDate.length,
        date: `Use Date: ${new Date().getFullYear()}.${new Date().getMonth()+1}.${new Date().getDate()}`
      }
      console.log("ADD_DATE_LIST = action, action.payload")
      console.log(action)
      console.log(action.payload)

      action.payload.useDate.push(text)
      console.log(action.payload.useDate)      

      return [
        ...state,
        {
          ...action.payload,
        }
      ];
    case "REMEOVE_DATE_LIST_LAST":
      console.log("id.length: "+action.payload.useDate.length)
      console.log("REMOVE_DATE_LIST = action, action.payload")
      console.log(action)
      console.log(action.payload)
      console.log("state 내용")
      console.log(state)
      if(action.payload.useDate.length==0){
        return state;
      }
      
      action.payload.useDate.pop()
      console.log(action.payload.useDate)

      return  [
                {
                  ...action.payload
                }
              ]; 
    case "REMOVE_DATE_LIST":
      return[
        ...state.filter((item)=>item.id!=action.payload)
      ]     
    default:
      return state;
  }
}
export default manageList