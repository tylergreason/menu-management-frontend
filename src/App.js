import './App.css';
import Menu from './components/menu/Menu';
import styled from 'styled-components';

const Wrapper = styled.section`
	background-color: beige;
	display: flex;
	justify-content: center;
`;

function App() {
	return (
		<Wrapper className="App">
			<Menu></Menu>
		</Wrapper>
	);
}

export default App;
