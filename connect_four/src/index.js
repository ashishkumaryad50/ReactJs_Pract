import  ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TwoPlayers from './components/TwoPlayers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import { Item } from './components/itemList';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Routes>
      <Route  exact path="/" element={<App/>} />
      <Route exact path="/twoplayers" element={<TwoPlayers/>} />
    </Routes>
  </Router>,
  rootElement
);



