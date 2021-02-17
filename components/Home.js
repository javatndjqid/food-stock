import React from 'react';
import {ScrollView} from 'react-native-gesture-handler'
import { Text,View, Button } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import {LISTDATA} from '../shared/list'

const Home = ()=>{

  const list = LISTDATA;

  return(
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <ScrollView>
        {
          list.map((item,i)=>(
          <Card key={i}>
            <Card.Title>{item.title}</Card.Title>
            <Card.Divider/>
            <Card.Image source={{uri:item.image}}/>        
              <Text style={{marginBottom: 10}}>
                {item.text}
              </Text>
              <Button
                icon={<Icon name='code' color='#ffffff'/>}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW'/>      
          </Card>    
          ))
        }
      </ScrollView>     
      <View style={{position: 'absolute', backgroundColor: '#AAAAAA', right: 40, bottom: 40, height: 30, width: 30}}>
        <Button title="+"/>
      </View>       
    </View>    
  )
}
  export default Home