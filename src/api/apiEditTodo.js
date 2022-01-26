import firestore from '@react-native-firebase/firestore';
import React from 'react';

const apiEditTodo = async ({id, inputText}) => {
  await firestore().
  collection('TodoList').
  doc(id).
  update({
    title: inputText,
  });
};
export default apiEditTodo;
