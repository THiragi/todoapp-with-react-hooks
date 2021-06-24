import React from 'react';
import Container from './components/container';
import Form from './components/form';
import Footer from './components/footer';
import TodoList from './components/todoList';
import useTodo from './hooks/useTodo';

const App: React.FC = () => {
  const [listProps, formProps] = useTodo();

  return (
    <div>
      <Container>
        <TodoList {...listProps} />
      </Container>
      <Footer>
        <Form {...formProps} />
      </Footer>
    </div>
  );
};

export default App;
