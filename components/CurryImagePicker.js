// import React, {useState, useEffect} from 'react';
// import { Avatar,  } from 'react-native-paper';
// import {
//     View,
//     Text,
//     Image,
//     StyleSheet,
//     TouchableHighlight,
//     ToastAndroid,
//     Alert,
// } from "react-native";
// import ImagePicker, { launchImageLibrary } from "react-native-image-picker"
// import Button from './Button';

// const CurryImagePicker =({image, onImagePicker})=>{
//   const [Pic, setPic] = useState('');
//   const setToastMsg = msg =>{
//     ToastAndroid.showWithGravity(msg,ToastAndroid.SHORT, ToastAndroid.CENTER);

//   }
//   const uploadImage =() =>{
//     let options = {
//       mediaType:'photo',
//       quality:1,
//       includeBase64:true,

//     };
//     launchImageLibrary(options,response=>{
//       if(response.didCancel){
//         setToastMsg('Cancelled image selection');
//       }else if(response.errorCode=='permissions'){
//         setToastMsg('permissions not satisfied');
//       }else if(response.errorCode=='others'){
//         setToastMsg(response.errorMessage);
//       }else if(response.assets[0].fileSize >2097152){
//         Alert.alert('Maximum image size exceeds','please choose image under 2 MB',[{text:'OK'}],);
//       }else{
//         setPic(response.assets[0].base64);
//       }
      
//     })
//   };
//     return (
//         <View styles={styles.container}>
//             <View style={styles.centerContent}>
//                <TouchableHighlight onPress={() => alert('pressed')}
//                                   underlayColor="">
//                 <Avatar.Image size={150} source={{uri:'data:image/png;base64'+ Pic}}></Avatar.Image>
//                  </TouchableHighlight>
//             </View>
//             <View style={[styles.centerContent, {marginTop:30,flexDirection:'row'}]}>
//                 <Button mode="contained" onPress={() => uploadImage()}>upload Image</Button>
//                 <Button mode="contained" style={{marginLeft: 20}} onPress={() => uploadImage()}>remove Image</Button>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         width: '100%',
//         alignItems: 'center',
//     },
//     imageContainer: {
//         borderWidth: 1,
//         borderColor: 'black',
//         backgroundColor:'#eee',
//         width: '80%',
//         height: 150,
//     },
//     button:{
//         margin: 8
//     },
//     previewImage:{
//         width: '100%',
//         height: '100%'

//     },
//     centerContent:{
//       justifyContent: 'center',
//       borderColor: 'black',
//       backgroundColor: 'white',
//       flex: 1,
//       marginTop: 60,

//   }
// })
// export default CurryImagePicker;