import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import { LISTDATA } from '../shared/list';
import { Card, Button, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux'
import { addAction } from '../redux/actions'
import { removeAction } from '../redux/actions'

// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.
//JSX를 쓸려면 import React From 'react'

// Navigator로 화면을 이동 할 떄 컴포넌트 속성으로 route, navigation이 전달됨
const Details = ({ route, navigation }) => {

  // navigation.navigate("스크린이름", 매개변수)
  console.log("---detail");
  console.log(route.params);

  // const id = route.params.id;
  const { id } =route.params;

  const item = LISTDATA.filter(item => item.id == id)[0];
  console.log(item);

  const dispatch = useDispatch();

  const actions = useSelector(state => state.actions);

  const isExistedAction = actions.filter(item => item.id == id).length > 0 ? true : false;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    case1: {
      width:"100%",     
    },
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
          isExistedAction 
            ?        
          <Button
            onPress={()=>{dispatch(removeAction(item))}}
            icon={<Icon name='close' type='ionicon' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"gray"}}
            title='Select'/> 
            :
          <Button
            onPress={()=>{dispatch(addAction(item))}}
            icon={<Icon name='checkmark' type='ionicon' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"tomato"}}
            title='Disable' />
        }
      </Card>

      </ScrollView>
    </View>
  )
}
export default Details;