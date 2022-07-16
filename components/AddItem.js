import React from 'react';
import { View, StyleSheet, TextInput, KeyboardAvoidingView, 
        Platform, TouchableOpacity, Text } from 'react-native';

const AddItem = (props) => {
  const [task, setTask] = React.useState();

  const handleEnter = () => {
    props.handleAddTask(task) // Callback to App. Deal with the "+" being pressed
    setTask(null)
  }

  return (
    <KeyboardAvoidingView
      // If iOS, give padding; If Android, give height
      behavior={Platform.OS === "ios" ? "padding" : "height"} // from React Native handbook
      style={styles.writeTaskWrapper}
    >
      <TextInput
        style={styles.input}
        placeholder={'Write a task'}
        onChangeText={text => setTask(text)} // change the state when Text Input is changed
        value={task} 
        onSubmitEditing={handleEnter}
      />

      <TouchableOpacity
        onPress={handleEnter} 
      >
        <View style={styles.addWrapper}>
          <Text>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});

export default AddItem;