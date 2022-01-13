import React, { useState } from 'react';
import { Text, FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import {DateFormatter} from './utils/DateFormatter';

export default function App() {

   const [isAddModalVisible, setAddModalVisible] = useState(false)
   const [tasks, setTasks] = useState([])
   const [day, setDay] = useState (new Date());

   const addTaskHandler = (currentTask) => {
      setTasks((currentTasks) => [...currentTasks, { id: Math.random().toString(), value: currentTask.title, priority: currentTask.priority}])
      setAddModalVisible(false)
   }

   const onDelete = (taskId) => {
      setTasks((currentTasks) => currentTasks.filter((task) => task.id != taskId))
   }

   /* Render */
   return (
     
      <View style={styles.screen}>
         <View style={styles.header}>
            <View>
               <Text style={styles.day}>{DateFormatter(day).dayOfWeek}</Text>
               <Text style={styles.date}>{DateFormatter(day).formattedDate}</Text>
            </View>
            <TouchableOpacity onPress={() => setAddModalVisible(!isAddModalVisible)}>
               <Text style={styles.new}><Icon name="plus-circle"  size={18} color="green" /> New Task</Text>
            </TouchableOpacity>
         </View>

         <TaskInput
            isVisible={isAddModalVisible}
            setTasks={setTasks}
            addTaskHandler={addTaskHandler}
            onCancel={() => setAddModalVisible(false)}></TaskInput>

         {tasks.length > 0 &&
            <FlatList
               keyExtractor={(item) => item.id} 
               data={tasks}
               renderItem={(itemData) => 
               <TaskItem id={itemData.item.id} task={itemData.item} onDelete={onDelete}></TaskItem>}
            ></FlatList>
         }

         {tasks.length == 0 &&
            <Text>No todos on your list. Create some.</Text>
         }

      </View>
   )
}

const styles = StyleSheet.create({
   screen: { 
      paddingVertical:30, 
      marginHorizontal:"4%"
   },
   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor:"#ccc",
      marginBottom:25
   },
   day: {
      fontWeight:"bold",
      fontSize:20,
      color:"#000"
   },
   date: {
      marginBottom:15
   },
   new:{
      textTransform:"uppercase",
      marginTop:10
   }
})
