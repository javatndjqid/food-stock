export const addTask = payload => ({  
  type: 'ADD_TASK',
  payload
})

export const removeTask = payload => ({  
  type: 'REMOVE_TASK',
  payload
})
export const removeDataList = payload => ({  
  type: "REMOVE_DATE_LIST",
  payload
})
export const addDateList = payload => ({
  type: "ADD_DATE_LIST",
  payload
})
