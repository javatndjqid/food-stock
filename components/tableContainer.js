import api from '../api/list'
import React, { useCallback, useEffect, useState } from 'react';
import Table from './table'

const tableContainer=({navigation})=>{
  
  const [list,setList]= useState([]);
    
  const getList = useCallback(async ()=>{
    const result = await api.list();
    // console.log(result.data)
    setList(result.data);
  },[])

  useEffect(()=>{
    const unsubscribe = navigation.addListener(
      'focus',
      () => {
        console.log('focus')
        getList();
      }
    )
    return unsubscribe;
  },[navigation])  

  return (<Table navigation={navigation} list={list}></Table>)
}
export default tableContainer