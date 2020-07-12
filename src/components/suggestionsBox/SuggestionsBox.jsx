import React, { useState } from 'react';
import './SuggestionsBox.css'

export default function SuggestionsBox() {

    const [suggestions, setSuggestions] = useState({
        draco_malfoy: {
            profileImage: '/draco.jpg',
        },
        ginny_weasley: {
            profileImage: '/ginny.jpg',
        }, 
        fred_weasley: {
            profileImage: '/fred.jpg',
        },
        george_weasley: {
            profileImage: '/george.jpg',
        }, 
        percy_weasley: {
            profileImage: '/percy.jpeg',
        }
    });

    return(
        <div id='suggestionsBox'>
            <div className='profileImageAndUserName'>
                <div id='image'>
                    <img src={'/harry.jpg'} ></img>
                </div>
                <div id='usernameAndName'>
                    <h5>hpotter</h5>
                    <h6>Harry Potter</h6>
                </div>
            </div>

            <div id='suggestions_div'>
                <div id='suggestionsText'>
                    <h5 id='suggestionsFont'>Suggestions For You</h5>
                </div>
                <div id='seeAll'>
                    <h5>See All</h5>
                </div>
            </div>
                {
                Object.entries(suggestions).map((key) => {
                    return (
                        <div key={key[0]} className='suggestedUsersDiv'>
                            <div id='suggestionsImageDiv'>
                                <img id='suggestionsImage' src={key[1].profileImage}></img>
                            </div>

                            <div id='suggestionsNameUserNameDiv'>
                                <h5>{key[0]}</h5>
                                <h6 id='suggestedForYou'>Suggested for you</h6>
                            </div>

                            <div id='suggestionsFollowButtonDiv'>
                                <button id='followButton'>Follow</button>
                            </div>
                        </div>
                    );
                })
                }
            <div id='aboutInstagram'>

            </div>
        </div>
    );
}