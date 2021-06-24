import React, { useState } from 'react';
import { Todo, ListProps, FormProps } from '../types';

/**
 * Todoアプリのロジック
 */
const useTodo = (): [ListProps, FormProps] => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [value, setValue] = useState<string>('');

  // 引数のタスクをTodoリストから削除
  const doneTask = (task: string) => {
    setTodoList(todoList.filter((todo) => todo.task !== task));
  };

  // タスクの入力フォームの値を制御
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  // 入力フォームの値をTodoリストに追加
  const onClick = () => {
    setTodoList([...todoList, { task: value }]);
    setValue('');
  };

  // フォームの入力値が空、あるいはすでにTodoリストに含まれている値だった場合、タスク追加ボタンを無効化
  const disabled =
    value === '' || todoList.filter((todo) => todo.task === value).length !== 0;

  // TodoListコンポーネントに渡すprops
  const listProps = {
    todoList,
    doneTask,
  };

  // Formコンポーネントに渡すprops
  const formProps = {
    taskForm: {
      onChange,
      value,
    },
    addTask: {
      onClick,
      disabled,
    },
  };

  return [listProps, formProps];
};

export default useTodo;
