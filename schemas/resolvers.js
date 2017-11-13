const db = require('../model');

exports.getTodos = async () => {
  return await db.Todo.find();
};

exports.createTodo = async (parentValue, { name }) => {
  return await db.Todo.create({ name });
};

exports.getTodoByID = async (parentValue, { id }) => {
  return await db.Todo.findById(id);
};

exports.updateTodo = async (parentValue, { id, completed }) => {
  return await db.Todo.findOneAndUpdate(
    { _id: id },
    { completed },
    { new: true }
  );
};

exports.deleteTodo = async (parentValue, { id }) => {
  return await db.Todo.remove({ _id: id });
};
