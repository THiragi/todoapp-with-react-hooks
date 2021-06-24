import React from 'react';

export type Todo = {
  task: string;
};

export type ListProps = {
  todoList: Todo[];
  doneTask: (task: string) => void;
};

export type TaskForm = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export type AddTask = {
  onClick: () => void;
  disabled: boolean;
};

export type FormProps = {
  taskForm: TaskForm;
  addTask: AddTask;
};
