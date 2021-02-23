import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, TouchableOpacity,StyleSheet,Text } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { removeCheck,removeDataList } from '../redux/actions'
import api from '../api/list'

const Action = ({navigation}) => { 
  

  const actions = useSelector(state => state.actions);

  console.log(actions);

  const dispatch = useDispatch();

  const dispatchRemove=(item)=>{
    dispatch(removeCheck(item))    
  }

  const dispatchAddDate=(async(list)=>{
    console.log("list")    
    list.map(async(item)=>{
      console.log("item")
      console.log(item)
      // console.log(item.useDate[1].id+1)
      const lastIdCheck=item.useDate.length-1
      const newId=lastIdCheck>=0?item.useDate[lastIdCheck].id+1:0
      console.log("lastIdCheck:"+lastIdCheck)
      const date = {
        "id": newId,
        "date":`${new Date().getFullYear()}.${new Date().getMonth()}.${new Date().getDate()}`
      }
      
      item.useDate[lastIdCheck+1]=date
      const result = await api.put(item.id,item)
      console.log(result.data);
    })
    // const date = {"date":`${new Date().getFullYear()}.${new Date().getMonth()}.${new Date().getDate()}`}
    // list.useDate.push(date)
    // const result = await api.put(list.id,list)
    // // list.map((item)=>{dispatch(addDateList(item))})
    // console.log(result.data)
    
  })
  const dispatchRemoveDate=(async(list)=>{
    console.log("actions:")
    console.log(list)
    list.map(async(item)=>{
      item.useDate.pop();
      const result = await api.put(item.id,item)      
      console.log(result.data)
    })
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
        actions.map((item, i) => (          
          <ListItem containerStyle={{width:"80%"}} key={i} onPress={()=>{navigation.navigate("Detail", {id: item.id})}}>            
            <Avatar source={{uri: item.image}} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.date}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon name='close' type='ionicon' color='gray' onPress={()=>{dispatchRemove(item)}} />
          </ListItem>
        ))
      }
      </ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.item1} onPress={()=>{dispatchAddDate(actions)}}>          
          <Text style={styles.text}>DATE APPLY</Text>          
        </TouchableOpacity>
        <TouchableOpacity style={styles.item1} onPress={()=>dispatchRemoveDate(actions)}>          
          <Text style={styles.text}>DATE REMOVE</Text>          
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Action;