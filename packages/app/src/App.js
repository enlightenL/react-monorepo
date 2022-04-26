import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Foo, CustomModal } from '@enlightenl/shared';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Foo />
          <button onClick={() => setVisible(true)}>modal</button>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <CustomModal visible={visible} title="Modal Title" setInvisible={() => setVisible(false)}>
	    Modal Content
      </CustomModal>
    </>
  );
}

export default App;
