import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoItem from './index';

describe('TodoItem', () => {
  test('calls the onChange callback handler', () => {
    const onClick = jest.fn();

    render(
      <TodoItem index={1} todo={{ task: 'TypeScript' }} doneTask={onClick} />
    );

    expect(screen.getByText('TypeScript')).toBeInTheDocument();

    expect(onClick).toHaveBeenCalledTimes(0);

    userEvent.click(screen.getByText('完了'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
