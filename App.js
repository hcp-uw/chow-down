import React from 'react';
import { View, StyleSheet, Text, Keyboard } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-web';
import ListItem from "./components/ListItem.js";
import AddItem from "./components/AddItem.js";


export default function App() {
 /*
  * This creates a state (with import of useState from 'react')
  * Use state for variables that change a lot
  * format is [name of state, function to set state]
  */
  const [taskItems, setTaskItems] = React.useState([]); // [] is empty array

  const handleAddTask = (givenTask) => {
    Keyboard.dismiss() // get rid of keyboard on mobile device

    // ...taskItems refers to items that are already in the taskItems array
    setTaskItems([...taskItems, givenTask]) // appends new task to taskItems array
  }

  // removes task items from list
  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1); // at position index, remove 1 item
    setTaskItems(itemsCopy) // update state of taskItems
  }
  
  return (
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
        <Text style={styles.heading}>TODO LIST</Text>
        <View style={styles.taskWrapper}>
          <View style={styles.items}> 
            {
              taskItems.map((item, index) => {
                return(
                  <TouchableOpacity
                    key={index}
                    onPress={() => completeTask(index)}
                  >
                    <ListItem text={item}></ListItem>
                  </TouchableOpacity>
                ) 
              })
            }
          </View>
        </View>
      </ScrollView>
      
      <AddItem
        handleAddTask={handleAddTask}
      ></AddItem>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#408040',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  heading: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 30,
    marginHorizontal: 60,
    textAlign: 'center',

  },
  items: {
    marginTop: 30,
  },

})