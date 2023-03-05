import React, { useState } from 'react';
import './App.css'
import Content from './ContentComponent/Content';
import Header from './HeaderComponent/Header';
import { BrowserRouter } from 'react-router-dom'

const Theme = {
  dark: {
    color: "white",
    backgroundColor: "black",
  },
  light: {
    color: "black",
    backgroundColor: "white",
  }
}
const Theme2 = {
  dark: {
    color: "white",
    backgroundColor: "#2b3945",
  },
  light: {
    color: "black",
    backgroundColor: "#fff",
  }
}

export const ThemeData = React.createContext();
export const ThemeData2 = React.createContext();

function App() {

  const [info, setValue] = useState(Theme.light);

  function change() {
    if (Theme.dark === info) {
      setValue(Theme.light)
      console.log(info)
    }
    else {
      setValue(Theme.dark)
      console.log(info)
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeData.Provider value={info}>
          <ThemeData2.Provider value={Theme2}>
            <Header change={change} Theme={Theme} info={info} />
            <Content info={info} />
          </ThemeData2.Provider>
        </ThemeData.Provider >
      </BrowserRouter>
    </div >
  );
}

export default App;


