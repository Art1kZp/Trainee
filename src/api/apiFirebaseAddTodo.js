import firestore from '@react-native-firebase/firestore';

const apiAddTodo = async ({text}) => {
  await firestore().collection('TodoList').add({
    title: text,
  });
};
export default apiAddTodo;
