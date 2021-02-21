import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, TouchableOpacity,StyleSheet,Text } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { removeCheck } from '../redux/actions'
import { addDateList } from '../redux/actions'
import { removeDateListLast } from '../redux/actions'

const Action = ({navigation}) => { 
  

  const actions = useSelector(state => state.actions);

  console.log(actions);

  const dispatch = useDispatch();

  const dispatchRemove=(item)=>{
    dispatch(removeCheck(item))    
  }

  const dispatchAddDate=(list)=>{
    console.log("실행")
    console.log(list)
    list.map((item)=>{dispatch(addDateList(item))})
    
  }
  const dispatchRemoveDate=(list)=>{
    list.map((item)=>{dispatch(removeDateListLast(item))})
  }
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