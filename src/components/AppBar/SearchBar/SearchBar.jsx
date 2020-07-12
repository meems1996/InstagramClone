import React, { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";
import './SearchBar.css';

export default function SearchBar() {

    const [state, setState] = useState('');

    useEffect(() => {

    });

    const onClickButton = (e) => {  
        e.preventDefault();
        setState(e.target.value)
    }

    return(
        <div 
        id='searchbar' 
        onClick={onClickButton} >
            <FiSearch id='search-icon'/>
            <input value={state || ''} onChange={onClickButton} type="text" id='searchtext' placeholder=" Search"/>
        </div>
    );
}