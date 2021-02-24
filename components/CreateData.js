import React,{useState} from 'react';
import { Text,View, TouchableOpacity,StyleSheet,TextInput } from 'react-native'
import { useSelector } from 'react-redux';
import api from '../api/list'

const CreateData=({navigation}) => {
    
    const [title,setTitle]=useState("") 

    const [image,setImage]=useState("")      

    // console.log(title);

    // const manageList=useSelector(state=>state.manageList)
    // console.log(manageList)
    

    const dispatchAddList = (title, image)=>{
        navigation.goBack()
        sendData(title, image)        
    }
    const sendData=(async(title,image)=>{
      const data ={        
        "title": title.text,
        "image": image.text,
        "date": `${new Date().getFullYear()}.${new Date().getMonth()+1}.${new Date().getDate()}`,        
        "useDate":[]        
      }
      const result = await api.post(data);
      console.log(result);
    })


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