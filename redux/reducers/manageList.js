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
        
    default:
      return state;
  }
}
export default manageList