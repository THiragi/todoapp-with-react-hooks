import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  test('renders App Component', async () => {
    render(<App />);

    // この時点ではまだ"Study in TypeScript"タスクはない
    expect(screen.queryByText(/Study in TypeScript/)).toBeNull();
    // フォームに文字を入力
    userEvent.type(screen.getByRole('textbox'), 'Study in TypeScript');
    // 追加ボタンをクリック
    userEvent.click(screen.getByText('追加'));
    // タスクが追加されている
    expect(screen.getByText(/Study in TypeScript/)).toBeInTheDocument();
  });
});
