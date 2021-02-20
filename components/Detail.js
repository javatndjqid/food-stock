import React,{useState} from 'react';
import { Text, View,StyleSheet,Modal,Pressable } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import { LISTDATA } from '../shared/list';
import { Card, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux'
import { removeList,removeDateList } from '../redux/actions'


// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.
//JSX를 쓸려면 import React From 'react'

// Navigator로 화면을 이동 할 떄 컴포넌트 속성으로 route, navigation이 전달됨
const Details = ({ route, navigation }) => {

  // navigation.navigate("스크린이름", 매개변수)
  console.log("---detail");
  console.log(route.params);
  
  const [modalVisible, setModalVisible] = useState(false);
  // const id = route.params.id;
  const { id } =route.params;

  const item = LISTDATA.filter(item => item.id == id)[0];
  console.log(item);

  const dispatch = useDispatch();

  const actions = useSelector(state => state.actions);

  // const isExistedAction = actions.filter(item => item.id == id).length > 0 ? true : false;
  // item.useDate.map((msg)=>{
  //   console.log(msg)
  // })
  const dispatchRemove=(listData,modalView)=>{
    setModalVisible(!modalView)
    navigation.navigate("Home")
    dispatch(removeList(listData))
  }
  const dispatchRemoveDate=(list)=>{
    dispatch(removeDateList(list))
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
      // borderColor:'black',
      // borderWidth:3,
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
      flexDirection: 'row', // 혹은 'column'
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

  return (
    <View style={ styles.container }>      
      <ScrollView style={styles.case1}>
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider/>
        <Card.Image source={{uri: item.image}}>
        </Card.Image>
        <Card.Divider/>
        <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize: 15}}>
            Buy Date: {item.text}
        </Text>
        {
          item.useDate.map((msg,i)=>{
            return  <View key={i} style={{flex:1,flexDirection: 'row'}}>
                      <Text style={{marginBottom: 10, fontSize: 15}}>
                        {msg.date}
                      </Text>    
                      <View style={{flex:1,justifyContent: 'center', alignItems: 'flex-end'}}>
                        <Icon style={{color:'gray'}} name='close' type='ionicon' color='gray' /*onPress={()=>{dispatchRemoveDate(item)}}*//>
                      </View>  
                    </View>     
          })
        }
        {/* {
          isExistedAction 
            ?        
          <Button
            onPress={()=>{dispatch(removeAction(item))}}
            icon={<Icon name='close' type='ionicon' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"gray"}}
            title='Disable'/> 
            :
          <Button
            onPress={()=>{dispatch(addAction(item))}}
            icon={<Icon name='checkmark' type='ionicon' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"tomato"}}
            title='Select' />
        } */}
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
                    onPress={() => dispatchRemove(item,modalVisible)}
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
  )
}
export default Details;