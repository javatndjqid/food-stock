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

export const addList = payload=>({
  type: 'ADD_LIST',
  payload
})

export const removeList = payload=>({
  type: "REMOVE_LIST",
  payload
})

export const addDateList = payload=>({
  type: 'ADD_DATE_LIST',
  payload
})
export const removeDateListLast = payload=>({
  type: 'REMEOVE_DATE_LIST_LAST',
  payload
})
export const removeDateList = payload=>({
  type: 'REMEOVE_DATE_LIST',
  payload
})