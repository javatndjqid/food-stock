import { ListItem } from "react-native-elements";
// ActionCreator
export const addAction = payload => ({  
  // Action
  type: 'ADD_ACTION',
  payload // payload: payload 와 같음
})

export const removeAction = payload => ({  
  // Action
  type: 'REMOVE_ACTION',
  payload // payload: payload 와 같음
})