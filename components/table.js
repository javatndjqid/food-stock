import React,{ useState } from 'react';
import {useDispatch} from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { LISTDATA } from '../shared/list'
import { addAction, removeAction } from '../redux/actions'
 
const table=()=> {
  
    
    const list = LISTDATA;
    
    
    
    const [trueStatus, setRefreshing] = useState(1);
    
    const onRefresh = React.useCallback(() => {
      trueStatus==1?setRefreshing(2):setRefreshing(1);
    });
    

    const dispatch = useDispatch();
    
    const table = {
      tableHead: ['Title','Image','Select'],
      // widthArr: [30, 105, 120, 120],
      tableData: list.map((item)=>([item.title,item.text,item.id]))
    }     
    // _alertIndex(index) {
    //   Alert.alert(`This is row ${index + 1}`);
    // }    
    
    const isStatus = list.filter(item=>item.id==0)[0].status;
    console.log("isStatus: "+isStatus)
    console.log("trueStatus: "+trueStatus)
    console.log(isStatus<trueStatus)

  

    

    const element = (data) => (        
      <View>
      {
        
        list.filter(item=>item.id===data)[0].status>trueStatus?false:true
        ?
          <TouchableOpacity onPress={() => dispatch(addAction(list.filter(item=>item.id===data)[0])) }>
            <View style={styles.ableBtn}>
              <Text style={styles.btnText}>Select</Text>
            </View>
          </TouchableOpacity>
        :
          <TouchableOpacity onPress={() => dispatch(removeAction(data)) }>
            <View style={styles.unableBtn}>
              <Text style={styles.btnText}>Disable</Text>
            </View>
          </TouchableOpacity>
      }
      </View>
      
    );
    
    // const tableData = list.map((item)=>([item.id,item.title,item.image,item.text]))
    // for (let i = 0; i < 30; i += 1) {
    //   const rowData = [];
    //   for (let j = 0; j < 9; j += 1) {
    //     rowData.push(`${i}${j}`);
    //   }
    //   tableData.push(rowData);
    
 
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
      // <View style={styles.container}>
      //   <ScrollView horizontal={true}>
      //     <View>
      //       <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
      //         <Row data={table.tableHead} widthArr={table.widthArr} style={styles.header} textStyle={styles.text}/>
      //       </Table>
      //       <ScrollView style={styles.dataWrapper}>
      //         <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
      //           {
      //             status.tableData.map((rowData, index) => (
      //               <Row
      //                 key={index}
      //                 data={rowData}
      //                 widthArr={table.widthArr}
      //                 style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
      //                 textStyle={styles.text}
      //               />
      //             ))
      //           }
      //         </Table>
      //       </ScrollView>
      //     </View>
      //   </ScrollView>
      // </View>
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

 
