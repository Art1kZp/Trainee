import firestore from '@react-native-firebase/firestore';
import React from 'react';

const apiDeleteTodo = async id => {
  await firestore().collection('TodoList').doc(id).delete();
};
export default apiDeleteTodo;
