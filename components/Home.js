import React from 'react';
import { useSelector } from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler'
import { Text,View, Button,StyleSheet,TouchableOpacity } from 'react-native'
import { Card, Icon } from 'react-native-elements'

const Home = ({navigation,list})=>{

  // const manageList = useSelector(state => state.manageList); 

  console.log("Home's actions")
  // console.log(manageList)  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    case1: {
      width:"100%",     
    },
    button: {
      width: "100%",
      height: 50,
      width:50,
      backgroundColor: "#6b8e23",
      justifyContent: "center",
      alignItems: "center",
      marginTop:10,
      borderRadius:30,
    },
    text: {
      color: "#fff",
    },
  });

  return(
    <View style={styles.container}>
      <ScrollView style={styles.case1}>
        {
          list.map((item,i)=>(
          <Card key={i} style={{flex:1}}>
            <Card.Title>{item.title}</Card.Title>
            <Card.Divider/>
            <Card.Image source={{uri:item.image}}/>        
              <Text style={{marginBottom: 10}}>
                {item.date}
              </Text>
              <Button
                icon={<Icon name='code' color='#ffffff'/>}
                buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                onPress={()=>{navigation.navigate("Detail", {id: item.id})}}
                title='VIEW NOW'/>      
          </Card>    
          ))
        }
      </ScrollView>     
      <View style={{position: 'absolute', right: 40, bottom: 40}}>        
        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={()=>(navigation.navigate("CreateData"))}>
                    <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>       
    </View>    
  )
}
  export default Home