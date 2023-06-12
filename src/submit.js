import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import { styled } from 'styled-components';

const TodoSubmitWrapper = styled.form`
  display: flex;
  flex-direction: row;
  > input {
    width: 400px;
    height: 20px;
    border: 2px solid rgba(255, 131, 134, 0.5);
    border-radius: 10px;
    padding: 5px;
  }
  > button {
    background-color: rgb(255, 131, 134);
    color: white;
    margin-left: 10px;
    border-radius: 10px;
    border: none;
  }
`;

const TodoListUl = styled.ul`
  width: 400px;
  height: 500px;
  margin-top: 20px;
  padding: 20px;
  > li {
    margin-bottom: 10px;
  }
`;

const SubmitTodo = () => {
  const [todo, setTodo] = useState('');
  const [submitValue, setSubmitalue] = useState([]);

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const onSubmitTodo = (e) => {
    e.preventDefault();
    setSubmitalue([todo, ...submitValue]);
    setTodo('');
  };

  return (
    <>
      <TodoSubmitWrapper onSubmit={onSubmitTodo}>
        <input
          placeholder="Todo를 작성하세요"
          type="text"
          onChange={onChangeTodo}
          value={todo}
        />
        <button type="submit">Todo!</button>
      </TodoSubmitWrapper>
      <TodoListUl>
        {submitValue.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </TodoListUl>
    </>
  );
};

export default SubmitTodo;
