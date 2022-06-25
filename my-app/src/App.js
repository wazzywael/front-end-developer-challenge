import './App.css';
import FindTheMiddle from './components/FindTheMiddle';
import styled from 'styled-components';
import "bulma/css/bulma.min.css";

function App() {
  return (
    <AppContainer className="App">
      <FindTheMiddle />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background: #ffefba; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffffff,
    #ffefba
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffffff,
    #ffefba
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-position: cover;
`;

export default App;