import React from 'react';
import './AppBar.css';
import { FiHome } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { FiCompass } from "react-icons/fi";
import SearchBar from './SearchBar/SearchBar';

// the component for the app bar
// contains title, search bar components, and buttons 
export default function AppBar() {

    return (
        <div id='appbar1'>
            <div id='appbar'>
                {/* place title  */}
                <div id='div-title'><h3 id="title">Instagram</h3></div>
                <div id='div-searchbar'><SearchBar /></div>
                <div id='div-buttons'>
                    <FiHome id='fihome-icon' size={25}/>
                    <FiSend id='fisend-icon' size={25}/>
                    <FiCompass id='ficompass-icon' size={25}/>
                    <FiHeart id='fiheart-icon' size={25}/>
                    {/* circle will be an image of your profile pic  */}
                    <img id='appbarimage' src={'/harry.jpg'} alt="Avatar"></img>
                </div>
            </div>
        </div>
    );
} 