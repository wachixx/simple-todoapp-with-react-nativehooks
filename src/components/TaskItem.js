import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const TaskItem = (props) => {
   return (
      <View style={[styles.listItem,{'backgroundColor': props.task.priority === "HIGH" ? "orange" : props.task.priority === "MEDIUM" ? "green"
      : "gray"}]} key={props.id}>
         <View>
            <Text style={styles.taskHeader}>{props.task.value}</Text>
            <Text>Priority: {props.task.priority}</Text>
         </View>
         <Icon name="remove" size={25} onPress={() => props.onDelete(props.id)}/>
      </View>
   )
}

const styles = StyleSheet.create({
   taskHeader:{
      fontWeight:"bold",
      fontSize:18,
      textTransform:"capitalize",
      color:"#000"
   },
   listItem: {
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:10,
      paddingVertical:15,
      marginBottom:15
   }
})

export default TaskItem
