import React, { useContext } from 'react'
import "../HeaderComponent/Header.css";
import { ThemeData2 } from '../App'


function Header({ Theme, info, change }) {
  return (
    <div className="navBar" style={useContext(ThemeData2)}>
      <div className="nav_Link">
        <h1>Countries 🌍 </h1>
        <p onClick={change}>
          <span className="material-symbols-outlined">dark_mode</span>{Theme.dark === info ? " Light Mode" : "Dark Mode"}
        </p>
      </div>
    </div>
  );
}

export default Header;