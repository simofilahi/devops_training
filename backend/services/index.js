const Todo = require("../models");

exports.getAllTodos = async () => {
  return await Todo.find({});
};

exports.createTodo = async (todoData) => {
  const todo = new Todo({
    title: todoData.title,
  });
  return await todo.save();
};
