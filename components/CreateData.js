import React,{useState} from 'react';
import { Text,View, TouchableOpacity,StyleSheet,TextInput } from 'react-native'
import { useSelector,useDispatch } from 'react-redux';
import { addList } from '../redux/actions'
import {LISTDATA} from '../shared/list'

const CreateData=({navigation}) => {
    
    const [title,setTitle]=useState("") 

    const [image,setImage]=useState("")  

    const dispatch = useDispatch()

    console.log(title);

    const manageList=useSelector(state=>state.manageList)
    console.log(manageList)
    

    const dispatchAddList = (title, image)=>{
        navigation.goBack()
        dispatch(addList(sendData(title,image)))
        
    }
    const sendData=(title,image)=>{
        return {
            list:LISTDATA,
            element: {title,image}
        }
    }


    const styles = StyleSheet.create({
        container:{
            flex:1,
            alignItems: "flex-start",
            margin:10
        },
        inputStyle:{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginTop:10,
            width:'100%'
        },
        button: {
            width: "100%",
            height: 35,
            backgroundColor: "#fe5746",
            justifyContent: "center",
            alignItems: "center",
            marginTop:10
          },
          text: {
            color: "#fff",
          },
          title:{
              fontWeight:'bold',
              fontSize:20
          }
    })
    return <View style={styles.container}>
              <Text style={styles.title}>CreateData</Text>
              <TextInput style={styles.inputStyle} 
                  placeholder="Input Title" 
                  onChangeText={(text)=>setTitle({text})}/>
              <TextInput style={styles.inputStyle} 
                  placeholder="Input Image URI" 
                  onChangeText={(text)=>setImage({text})}/> 
              
                <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={()=>(dispatchAddList(title,image))}>
                    <Text style={styles.text}>Create</Text>
                </TouchableOpacity>              
            </View>
}
export default CreateData