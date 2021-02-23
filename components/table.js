import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { addCheck, removeCheck } from '../redux/actions'
 
const table=({navigation,list})=> {   
    // console.log(list)
    const actions = useSelector(state=>state.actions);        

    const dispatch = useDispatch();
    
    const table = {
      tableHead: ['Title','Buy Date','Select'],
      tableData: list.map((item)=>([item.title,item.date,item.id]))
    }     
    
    
    const booleanStatus=(id)=>{      
      if(actions.filter(item=>item.id==id).length>0){
        return false;
      }else{      
      return true;
      }
    }
    const dispatchAdd=(id)=>{
      console.log("dispatchAdd 실행")
      const listData=list.filter(item=>item.id===id)[0]      
      dispatch(addCheck(listData))
      
    }
    const dispatchRemove=(id)=>{
      console.log("dispatchRemove 실행")
      const listData=list.filter(item=>item.id===id)[0]      
      dispatch(removeCheck(listData))
    }
    // const statusChange=(async(listData)=>{
    //   listData.status=listData.status==0?3:0
    //   const result = await api.put(listData.id,listData);
    //   console.log("statusChange: "+result)
    // })


    

    const element = (data) => (        
      <View>
      {
        
        booleanStatus(data)
        ?
          <TouchableOpacity onPress={() => dispatchAdd(data) }>
            <View style={styles.ableBtn}>
              <Text style={styles.btnText}>Select</Text>
            </View>
          </TouchableOpacity>
        :
          <TouchableOpacity onPress={() => dispatchRemove(data) }>
            <View style={styles.unableBtn}>
              <Text style={styles.btnText}>Disable</Text>
            </View>
          </TouchableOpacity>
      }
      </View>
      
    );
    
 
    const styles = StyleSheet.create({
      container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
      header: { height: 30, backgroundColor: '#537791' },
      // text: { textAlign: 'center', fontWeight: 'bold'},
      text:{ margin:6 },
      dataWrapper: { marginTop: -1 },
      row: { flexDirection: 'row', height: 30, backgroundColor: '#E7E6E1' },
      ableBtn: { width: '80%', height: 20, backgroundColor: 'tomato',  borderRadius: 2 },
      unableBtn: { width: '80%', height: 20, backgroundColor: 'gray',  borderRadius: 2 },
      btnText: { textAlign: 'center', color: '#fff' },
      scrollView: { flex: 1,},
    });
    

    return (
      <View style={styles.container}>
        
      <Table borderStyle={{borderColor: 'transparent'}}>        
        <Row data={table.tableHead} style={styles.head} textStyle={styles.text} />
        {
          table.tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {
                rowData.map((cellData, cellIndex) => (
                  <Cell key={cellIndex} data={cellIndex === 2 ? 
                    element(cellData) : cellData} 
                    textStyle={styles.text}
                    />                    
                ))
              }
            </TableWrapper>
          ))
        }
      </Table>           
    </View>
    )
  
}
export default table

 
