import React, { useState, useContext, useEffect } from 'react';
import '../CardComponent/Card.css';
import { ThemeData } from '../App';
import { Link } from 'react-router-dom';
import Search from '../SearchComponent/Search';
import axios from 'axios';


function Card({ info }) {
  const [typing, setTyping] = useState("");
  const [select, setSelect] = useState("")
  const [countries, setCountries] = useState([])
  function typingStart(e) {
    setTyping(e.target.value);
  }
  function getSelectValue(e) {
    setTyping("");
    setSelect(e.target.value === "Filter Region" ? "" : e.target.value);
  }

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`)
      .then(res => {
        setCountries(typing !== "" ? res.data.filter(item => item.name.common.toUpperCase().includes(typing.toUpperCase())) 
        : res.data.filter(item => item.region.includes(select)))
      })
  }, [typing, select])
  console.log(countries)
  return (
    <div>
      <Search typingStart={typingStart} getSelectValue={getSelectValue} style={(info)} />
      <div className='Card' style={useContext(ThemeData)}>
        {countries.sort((a, b) => a.name.common > b.name.common ? 1 : -1).map((item, index) => {
          return (
            <div className='Card-item' key={index} >
              <Link className='link' to={`/is-country-api/${item.name.common}`} style={(info)}>
                <img src={item.flags.png} alt="img" />
                <h2 >{item.name.common}</h2>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default Card;