import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, TouchableOpacity,StyleSheet,Text } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { removeTask,addDateList } from '../redux/actions/tasks'
import api from '../api/list'

const Action = ({navigation}) => { 
  

  const tasks = useSelector(state => state.tasks);

  const dispatch = useDispatch();

  const dispatchRemove=(id)=>{
    dispatch(removeTask(id))    
  }

  const dispatchAddDate=((list)=>{
    console.log("list")  
    
    list.map((item)=>{
      console.log("item")
      console.log(item)      
      // console.log(item.useDate[1].id+1)
      const lastIdCheck=item.useDate.length-1
      const newId=lastIdCheck>=0?item.useDate[lastIdCheck].id+1:0
      // console.log("lastIdCheck:"+lastIdCheck)
      const date = {
        "id": newId,
        "date":`${new Date().getFullYear()}.${new Date().getMonth()+1}.${new Date().getDate()}`
      }
      
      item.useDate[lastIdCheck+1]=date
      
      console.log("item")
      console.log(item)
      dispatch({type:"ADD_DATE", payload: item.useDate, patchId: item.id})
      setTimeout(async()=>{          
        const result = await api.put(item.id,item)
        console.log("result.data")
        console.log(result.data);          
      },50)
    })    
    console.log(tasks)
    // const date = {"date":`${new Date().getFullYear()}.${new Date().getMonth()}.${new Date().getDate()}`}
    // list.useDate.push(date)
    // const result = await api.put(list.id,list)
    // // list.map((item)=>{dispatch(addDateList(item))})
    // console.log(result.data)
    
  })
  const dispatchRemoveDate=((list)=>{
    console.log("actions:")
    console.log(list)
    try {
      list.map((item)=>{         
        if(item.useDate.length==0)return item         
        const lastIdCheck=item.useDate.length-1
        const lastId=item.useDate[lastIdCheck].id   
        item.useDate.pop()
        dispatch({type:"REMOVE_DATE", payload: item, putId: item.id,lastId:lastId})
        setTimeout(async()=>{
          const result = await api.put(item.id,item)      
          console.log(result.data)             
        },50)
      })
    } catch (error) {
      console.log(MessageEvent);
    }
    
    // list.map((item)=>{dispatch(removeDateListLast(item))})
  })
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      height:50,     
      flexDirection: 'row', 
      alignItems: "flex-end",
      justifyContent: 'center'
    },
    item1:{
      flex:1,      
      width:'100%',
      height:40,
      backgroundColor:'tomato',
      textAlign:'center'
    },
    text:{
      flex:1,
      textAlign:'center',
      textAlignVertical:'center',
      fontWeight:'bold',
      color:'white',
      borderWidth:1,
      borderColor:'black'

    }
  })

  return(
    <View style={{flex:1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
      {
        tasks.map((item, i) => (          
          <ListItem containerStyle={{width:"80%"}} key={i} onPress={()=>{navigation.navigate("Detail", {id: item.id})}}>            
            <Avatar source={{uri: item.image}} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.date}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon name='close' type='ionicon' color='gray' onPress={()=>{dispatchRemove(item.id)}} />
          </ListItem>
        ))
      }
      </ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.item1} onPress={()=>{dispatchAddDate(tasks)}}>          
          <Text style={styles.text}>DATE APPLY</Text>          
        </TouchableOpacity>
        <TouchableOpacity style={styles.item1} onPress={()=>dispatchRemoveDate(tasks)}>          
          <Text style={styles.text}>DATE REMOVE</Text>          
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Action;