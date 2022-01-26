import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addTodo,
  requestTodo,
  deleteTodo,
  editTodo,
} from '../../redux/reducers/action/actionTodo';

function FirebaseScreen() {
  const [text, setText] = useState('');
  const [inputText, setInputText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todoreducer.todolist);

  const HandleAddTodo = () => {
    dispatch(addTodo({text}));
    setText('');
  };
  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };
  const handleEditTodo = id => {
    dispatch(editTodo({id, inputText}));
    toogleModal();
  };
  const toogleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  useEffect(() => {
    firestore()
      .collection('TodoList')
      .onSnapshot(() => {
        dispatch(requestTodo());
      });
    // return () => subscriber();
  }, []);

  // function Todos() {
  //   return (
  //
  //   );
  // }
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>My Todo List</Text>
      </View>
      <TextInput
        placeholder="Добавить задачу"
        value={text}
        onChangeText={text => setText(text)}
        style={{
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderColor: 'orange',
          borderRightWidth: 1,
          borderLeftWidth: 1,
          paddingHorizontal: 30,
          marginHorizontal: 50,
          paddingVertical: 20,
        }}
      />
      <Button
        onPress={HandleAddTodo}
        style={{color: 'blue', fontSize: 18}}
        title="* Add Todo *"
      />
      <FlatList
        data={todoList}
        renderItem={({item}) => (
          <View style={styles.renderText}>
            <Text style={styles.Text}>
              <Text style={styles.touchableText}>ID: </Text>
              {item.id}
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.touchableText}>Task: </Text> {item.title}
            </Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => handleDeleteTodo(item?.id)}>
                <Text style={styles.touchableText}>Delete Todo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchable} onPress={toogleModal}>
                <Text style={styles.touchableText}>Edit Todo</Text>
              </TouchableOpacity>
            </View>
            {!isModalVisible && (
              <View>
                <TextInput
                  placeholder="Изменить задачу"
                  value={inputText}
                  onChangeText={inputText => setInputText(inputText)}
                  style={{
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderColor: 'orange',
                    borderRightWidth: 1,
                    borderLeftWidth: 1,
                    marginHorizontal: 25,
                    paddingVertical: 20,
                    paddingHorizontal: 20,
                  }}
                />
                <TouchableOpacity style={styles.touchableModal} onPress={() => handleEditTodo(item?.id)}>
                  <Text style={styles.touchableText}>Edit</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    alignSelf: 'center',
    margin: 10,
  },
  Text: {
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 10,
  },
  renderText: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'blue',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    paddingHorizontal: 30,
    marginHorizontal: 50,
    paddingVertical: 10,
    marginBottom: 10,
  },
  touchable: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 5,
    margin: 5,
  },
  touchableModal: {
    alignItems: 'center',
    backgroundColor: 'orange',
    width: 150,
    marginLeft: 40,
    marginTop: 5,
    padding: 5,
  },
  touchableText: {
    fontWeight: 'bold',
  },
  Modal: {
    height: 600,
    backgroundColor: 'grey',
  },
  ModalView: {
    height: 200,
    width: 300,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 40,
    paddingVertical: 50,
  },
  TextInput: {
    width: 200,
    height: 50,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
});

export default FirebaseScreen;
