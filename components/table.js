import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { LISTDATA } from '../shared/list'
 
const table=()=> {
  // constructor(props) {
  //   super(props);
  const list = LISTDATA;
  const state = {
    tableHead: ['.No', 'Title', 'ImageURI', 'Text'],
    tableData: list.map((item)=>([
      [item.id, item.title, item.image, item.text]      
    ]))
  } 

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });
  
  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
        <Rows data={state.tableData} textStyle={styles.text}/>
      </Table>
    </View>
  )
}
export default table

 
