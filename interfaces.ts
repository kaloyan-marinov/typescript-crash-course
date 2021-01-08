/* We are going to clean up the following by creating an interface: */
// function showTodo(todo: {title: string, text: string}) {
//   console.log(todo.title + ': ' + todo.text);
// }

// const myTodo = {
//   title: 'TRASH',
//   text: 'take out trash'
// }

// showTodo(myTodo);

interface Todo {
  title: string;
  text: string;
}

function showTodo(todo: Todo) {
  console.log(todo.title + ': ' + todo.text);
}

const myTodo = {
  title: 'TRASH',
  text: 'take out trash'
}

showTodo(myTodo);