import React from 'react';
import GlobalStyles from './styles/GlobalStyles'
import Routes from './routes'
import { BrowserRouter as Router} from 'react-router-dom'

 
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes />
    </Router>
  );
}

export default App;
