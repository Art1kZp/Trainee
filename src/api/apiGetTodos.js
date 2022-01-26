import firestore from '@react-native-firebase/firestore';
import React from 'react';

const apiGetTodo = async () => {
  let todoList = [];
  await firestore()
    .collection('TodoList')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        todoList.push({
          ...documentSnapshot._data,
          id: documentSnapshot.id,
        });
      });
    });
  return todoList;
};
export default apiGetTodo;
