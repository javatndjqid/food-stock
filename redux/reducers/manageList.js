const manageList = (state = [], action)=>{
  switch(action.type) {
    case "ADD_LIST":
      console.log(action.payload);
      const lastIdCheck=action.payload.list.length-1
      const newId=action.payload.list[lastIdCheck].id+1
      const data = {
        id: newId,
        title: action.payload.element.title.text,
        image: action.payload.element.image.text,
        date: `${new Date().getFullYear()}.${new Date().getMonth()+1}.${new Date().getDate()}`,
        status: 0,
        useDate:[
          
        ]
      }
      
      console.log(action.payload.list[lastIdCheck].id)
      console.log(data)

      action.payload.list.push(data)

      return [
        ...state,
        {
          ...action.payload.list
        }
      ];
    case "REMOVE_LIST":   
      
      const find= action.payload.list.find((item)=>{return item.id==action.payload.listId});
      const id = action.payload.list.indexOf(find);
      action.payload.list.splice(id,1);

      return [        
        {
          ...action.payload.list
        }
      ];
    case "ADD_DATE_LIST":
      const useDate = {
        id: action.payload.useDate.length,
        date: `${new Date().getFullYear()}.${new Date().getMonth()+1}.${new Date().getDate()}`
      }
      console.log("ADD_DATE_LIST = action, action.payload")
      console.log(action)
      console.log(action.payload)

      action.payload.useDate.push(useDate)
      console.log(action.payload.useDate)      

      return [
        ...state,
        {
          ...action.payload,
        }
      ];
    case "REMOVE_DATE_LIST_LAST":
      
      if(action.payload.useDate.length==0){
        return state;
      }
      
      action.payload.useDate.pop()      

      return  [
                {
                  ...action.payload
                }
              ]; 
    case "REMOVE_DATE_LIST":
      console.log(action.payload.list)
      const dateFind= action.payload.list.useDate.find((item)=>{return item.id==action.payload.Id});
      const dateId = action.payload.list.useDate.indexOf(dateFind);
      console.log(dateId)
      action.payload.list.useDate.splice(dateId,1);
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