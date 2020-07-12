import React, { useState }from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import { FiMoreHorizontal, FiHeart } from "react-icons/fi";
import PostIconsRow from './components/postIconsRow/postIconsRow';
import SuggestionsBox from './components/suggestionsBox/SuggestionsBox';

function App() {

  const [users, setUsers] = useState({
    rweasley: {
      name: "Ron Weasley",
      likes: 12,
      description: "A picture of Harry and Me",
      PostedDate: '1 HOUR AGO',
      postImage: '/ron.jpg',
      hasStory: true,
      comments: {
        'dracoMalfoy': 'hello',
        'hermioneGranger': 'cool hair'
      }
    },
    hgranger: {
      name: "Hermione Granger",
      likes: 133,
      description: "A picture of Crookshanks",
      PostedDate: '12 HOURS AGO',
      postImage: '/hermione.jpg',
      hasStory: true,
      comments: {
        'albusDumbledore': 'gotta love books',
        'harryPotter': 'I read this book too'
      }
    },
    hpotter: {
      name: "Harry Potter",
      likes: 133,
      description: "A picture of Crookshanks",
      PostedDate: '3 HOURS AGO',
      postImage: '/harry.jpg',
      hasStory: true,
      comments: {
        'snape': 'famous harry potter',
        'Luna': 'hey potter! Look out.'
      }
    },
    llovegood: {
      name: "Luna Lovegood",
      likes: 133,
      description: "A picture of Crookshanks",
      PostedDate: '4 MINUTES AGO',
      postImage: '/luna.jpg',
      hasStory: true
    }
  });


  return (
    <div className="App">
      <AppBar className="appbar" />
      {/* conditional rendering, if you click on profile then profile loads */}
      <div className='bodyOfApp'>

                                      {/* Left side div of the app with the posts   */}
      <div id='bodyOfPosts'>
      <div id='userStoriesComponent'>
      <div className="circle border-gradient-purple">
      <img src={'/harry.jpg'} alt="Avatar"></img>
      <p className='storiesName'>Harry</p>
      </div>
      <div className="circle border-gradient-purple">
      <img src={'/luna.jpg'} alt="Avatar"></img>
      <p className='storiesName'>Luna</p>
      </div>
      <div className="circle border-gradient-purple">
      <img src={'/hermione.jpg'} alt="Avatar"></img>
      <p className='storiesName'>Hermione</p>
      </div>
      <div className="circle border-gradient-purple">
      <img src={'/ron.jpg'} alt="Avatar"></img>
      <p className='storiesName'>Ron</p>
      </div>
      </div>
      <div id='storiesComponent'>
        {Object.entries(users).map((key,value) => {
          return( 
          <article key={value} id="postComponent">

            <div className = "examples">
              <div className="profileAndUsername">
                <img className="profilePhotoOn" src={key[1].postImage} alt="Avatar"></img>
                <h5 className="userNameDisplay">{key[0]}</h5>
              </div>
              <div className="moreDiv"><FiMoreHorizontal id="fimorehorizontal" size={20}/></div>
            </div>

            <img className="postImages" src={key[1].postImage} alt="Avatar"></img>
            <PostIconsRow />
            <h5>{key[1].likes} likes</h5>
            <div id="descriptionDiv">
              {/* put bottom border */}
            <h5>{key[0]}: {key[1].description}</h5>
            </div>

            <div>
            {
              key[1].comments
              ? 
              Object.keys(key[1].comments).map((obj, i) => {
                return (
                  <div key={obj} className="commentDiv">
                    <div key={obj} className="comment">
                      {obj}: {key[1].comments[obj]}
                    </div>
                    <div className="commentHeart">
                      <FiHeart className="fiHeartComments" />
                    </div>
                  </div>
                );
              })
              : 
              ''
            }
            </div>
            <div className='addCommentDiv'>
              Comments
            </div>
          </article>
          )})}
      </div>
      </div>
        {/* Right side div of the app with suggestions to follow  */}
        <div id='suggestionsDiv'>
          <SuggestionsBox />
        </div>

      </div>

    </div>
  );
}

export default App;
