import { styled } from 'styled-components';
import SubmitTodo from './submit';

const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: rgb(255, 131, 134);
`;

function App() {
  return (
    <div>
      <Header>
        <Title>Todo List</Title>
        <SubmitTodo />
      </Header>
    </div>
  );
}

export default App;
