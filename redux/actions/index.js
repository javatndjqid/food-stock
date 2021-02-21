export const addCheck = payload => ({  
  type: 'ADD_CHECK',
  payload
})

export const removeCheck = payload => ({  
  type: 'REMOVE_Check',
  payload
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
export const removeDateList = payload=>({
  type: 'REMOVE_DATE_LIST',
  payload
})
export const removeDateListLast = payload=>({
  type: 'REMOVE_DATE_LIST_LAST',
  payload
})