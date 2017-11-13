import React from 'react';
import { Header } from './Header';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export const App = () => (
  <div>
    <Header />
    <TodoInput />
    <TodoList />
  </div>
);
