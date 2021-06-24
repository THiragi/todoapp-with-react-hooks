import React from 'react';
import { FormProps } from '../../types';
import styles from './index.module.css';

const Form: React.VFC<FormProps> = ({ taskForm, addTask }) => (
  <div className={styles.form}>
    <input
      id="todo-input"
      type="text"
      placeholder="タスクフォーム"
      {...taskForm}
    />
    <button id="add-button" type="button" {...addTask}>
      追加
    </button>
  </div>
);

export default Form;
