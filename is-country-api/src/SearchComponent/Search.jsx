import React, { useContext } from 'react'
import "./Search.css";
import { ThemeData2 } from '../App'



function Search({ typingStart, getSelectValue }) {
  return (
    <div className='SearchBar' >
      <input type="text" placeholder="🔍 Search countries..." style={useContext(ThemeData2)} onChange={typingStart} />
      <select style={useContext(ThemeData2)} onChange={getSelectValue}>
        <option defaultValue="Region">Filter Region</option>
        <option defaultValue="Africa">Africa</option>
        <option defaultValue="America">America</option>
        <option defaultValue="Asia">Asia</option>
        <option defaultValue="Europe">Europe</option>
        <option defaultValue="Oceania">Oceania</option>
      </select>
    </div>
  )
};

export default Search;