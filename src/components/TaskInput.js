import React, { useState } from 'react'
import { Modal, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';

const TaskInput = (props) => {

   const [taskObject, setTaskObject] = useState()
   const [priorities, setPriorities] = useState(["HIGH", "MEDIUM", "LOW"])
   const [task, setTask] = useState()
   const [priority, setPriority] = useState();

   const addTaskHandler = () => {
      let taskObject = {
         title : task,
         priority : priority
      }
      setTaskObject(taskObject)
      props.addTaskHandler(taskObject)
      setTaskObject('')
   }

   return (
      <Modal
         visible={props.isVisible}
         animationType="slide">
         <View style={styles.inputContainer}>

            <Text style={styles.txtTitle}>Select Priority</Text>

            <SelectDropdown
               data={priorities}
               onSelect={(selectedItem, index) => {
                  setPriority(selectedItem)
               }}
               buttonStyle={{width:"70%", borderWidth:1, }}
               renderDropdownIcon={() => {
               return (
                  <Icon name="chevron-down" color={"#444"} size={18} />
               );
               }}
            />
            <Text style={styles.txtTitle}>Task Title</Text>
            <TextInput placeholder="Enter Task" style={styles.input} onChangeText={(task) => setTask(task)}/>
         
            <View style={styles.buttonContainer}>
               <TouchableOpacity onPress={addTaskHandler}>
                  <View style={[styles.btn,{backgroundColor:"blue"}]}>
                     <Text style={[styles.fontBold,{textAlign:"center", color:"#fff"}]}>Add Task</Text>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={props.onCancel}>
                  <View style={[styles.btn,{backgroundColor:"firebrick"}]}>
                     <Text style={[styles.fontBold,{textAlign:"center", color:"#fff"}]}>Cancel</Text>
                  </View>
               </TouchableOpacity>
            </View>

         </View>
      </Modal>
   )
}

const styles = StyleSheet.create({

   inputContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
   },

   input: {
      width: '70%',
      borderColor: 'black',
      borderWidth: 1,
      marginBottom: 15,
      padding: 10
   },
   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '60%'
   },
   btn:{
      width:100,
      marginTop:30,
      borderWidth:0.5,
      borderColor:"#ccc",
      padding:10,
      textAlign:"center",
      alignSelf:"center",
      justifyContent:"center",
    },
   addBtnStyle :{
      width: 200
   },
   cancelBtnStyle :{
      backgroundColor: 'firebrick',
      width: 200
   },
   txtTitle:{
      width:"70%",
      textAlign:"left",
      marginTop:10,
      marginBottom:5,
      fontSize:16
   }
})

export default TaskInput
