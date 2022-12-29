import React from 'react';
import './app.css';
import { Drawer } from './components/Drawer';
import Intro from './components/Intro';
import { List } from './components/List';
import { NavBar } from './components/NavBar';
import { TopBar } from './components/Top';

const App = (props) => {
  const [start, setStart] = React.useState(false);
  return (
    <div>
      {start ? (
        <div>
          <NavBar />
          <div>
            <TopBar />
            <List />
          </div>
        </div>
      ) : (
        <Intro setStart={setStart} />
      )}
    </div>
  );
};
export default App;
