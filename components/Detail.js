import React,{useState} from 'react';
import { Text, View,StyleSheet,Modal,Pressable } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import { LISTDATA } from '../shared/list';
import { Card, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux'
import { removeList } from '../redux/actions'
import { removeDateList } from '../redux/actions'
import { removeCheck } from '../redux/actions'

const Details = ({ route, navigation }) => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [removeDateState, setRemoveDateState] = useState(false);
  const { id } =route.params;

  const item = LISTDATA.filter(item => item.id == id)[0];
  

  const dispatch = useDispatch();

  const actions = useSelector(state => state.actions);
  const manageList=useSelector(state=>state.manageList)
  console.log("actions")
  console.log(actions)
  console.log(manageList)

  const dispatchRemove=(listId,modalView)=>{
    navigation.goBack()
    setModalVisible(!modalView)    
    dispatch(removeList(deleteData(listId)))
    if(actions.filter(item=>item.id==id).length!=null)dispatch(removeCheck(item))
  }
  const dispatchRemoveDate=(list,id)=>{
    console.log("removeDataList 실행")
    dispatch(removeDateList(removeDate(list,id)))
    setRemoveDateState(!removeDateState)
  }
  const removeDate=(list,id)=>{
    return {list:list,id:id}
  }
  const deleteData=(id)=>{
    const list={
      list: LISTDATA,
      listId: id
    }
    return list;

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    case1: {
      width:"100%",     
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 0,
      backgroundColor: "white",
      borderRadius: 20,
      width:300,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 10,
        height: 10
      },
      shadowOpacity: 0.75,
      shadowRadius: 4,
      elevation: 5
    },
    buttonWrap:{
      height:50,     
      flexDirection: 'row',
      alignItems: "flex-end",
      justifyContent: 'center',
      margin:10
    },
    button: {
      width:'50%',
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "tomato",
    },
    buttonClose: {
      backgroundColor: "tomato",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      
    },
    modalText: {
      marginTop:15,
      textAlign: "center",
      textAlignVertical:'center',
      fontWeight:"bold",
      color:'black'   
    }
  });

  return item?
    <View style={ styles.container }>      
      <ScrollView style={styles.case1}>
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider/>
        <Card.Image source={{uri: item.image}}>
        </Card.Image>
        <Card.Divider/>
        <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize: 15}}>
            Buy Date: {item.date}
        </Text>
        {
          item.useDate.length>0?
          <Text style={{fontWeight:"bold", fontSize:17}}>- UseDate</Text>
          :null
        }
        {
          item.useDate.map((msg,i)=>{
            return  <View key={i} style={{flex:1,flexDirection: 'row'}}>
                      
                      <Text style={{marginBottom: 10, fontSize: 13  }}>
                        {msg.date}
                      </Text>    
                      <View style={{flex:1,justifyContent: 'center', alignItems: 'flex-end'}}>
                        <Icon style={{color:'gray'}} name='close' type='ionicon' color='gray' onPress={()=>{dispatchRemoveDate(item,msg.id)}}/>
                      </View>  
                    </View>     
          })
        }
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>DELETE DATE</Text>
                <View style={styles.buttonWrap}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => dispatchRemove(item.id,modalVisible)}
                  >
                    <Text style={styles.textStyle}>DELETE</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>CANCEL</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>DELETE</Text>
          </Pressable>
        </View>
      </Card>

      </ScrollView>
    </View>
  :<View>
    <Text>EMPTY</Text>
  </View>
    
  
}
export default Details;