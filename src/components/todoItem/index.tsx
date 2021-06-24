import React from 'react';
import { Todo } from '../../types';
import styles from './index.module.css';

type Props = {
  index: number;
  todo: Todo;
  doneTask: () => void;
};

const TodoItem: React.VFC<Props> = ({ index, todo, doneTask }) => (
  <li key={todo.task} className={styles.item}>
    <div id={`todo-item-${index}`}>{todo.task}</div>
    <button id={`complete-button-${index}`} type="button" onClick={doneTask}>
      完了
    </button>
  </li>
);

export default TodoItem;
