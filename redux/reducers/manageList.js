const manageList = (state = [], action)=>{
  switch(action.type) {
    case "ADD_LIST":
      return null;
    case "REMOVE_LIST":
      return null;
    case "ADD_DATE_LIST":
      const text = {
                      id: action.payload.useDate.length,
                      date: `Use Date: ${new Date().getFullYear()}.${new Date().getMonth()+1}.${new Date().getDate()}`
                    }
      action.payload.useDate.push(text)
      console.log(action.payload.useDate)
      

      return [
        ...state,
        {
          ...action.payload,

        }
      ];
    case "REMOVE_DATE_LIST":
      if(action.payload.useDate.length==0){
        return state;
      }
      
      action.payload.useDate.filter(item=>item.id!=(action.payload.useDate.length-1))

      return[
        ...state,
        {
          ...action.payload
        }
      ] 

      
    default:
      return state;
  }
}
export default manageList