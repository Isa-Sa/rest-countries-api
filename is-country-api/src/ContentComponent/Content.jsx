import React, { useContext } from 'react';
import Detail from '../DetailComponent/Detail';
import Card from '../CardComponent/Card';
import { ThemeData } from '../App';
import './Content.css';
import { Routes, Route } from 'react-router-dom';

function Content({ typing, select, info }) {

    return (
        <div className='center' style={useContext(ThemeData)} >         
            <Routes>
                <Route path="/is-country-api/" element={<Card  typing={typing} select={select} info={info} />} />
                <Route path="/is-country-api/:countriesName" element={<Detail  info={info} />} />
            </Routes>
        </div>
    )
};

export default Content;