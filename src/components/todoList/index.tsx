import React from 'react';
import TodoItem from '../todoItem';
import { ListProps } from '../../types';
import styles from './index.module.css';

const TodoList: React.VFC<ListProps> = ({ todoList, doneTask }) => (
  <div className={styles.list}>
    {todoList.length === 0 ? (
      <h1>タスクはありません</h1>
    ) : (
      <ol>
        {todoList.map((todo, index) => (
          <TodoItem
            index={index}
            todo={todo}
            key={todo.task}
            doneTask={() => doneTask(todo.task)}
          />
        ))}
      </ol>
    )}
  </div>
);

export default TodoList;
