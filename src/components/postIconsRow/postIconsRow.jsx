import React from 'react';
import { FiHeart, FiMessageCircle, FiSend, FiBookmark } from 'react-icons/fi';
import './postIconsRow.css'
export default function PostIconsRow() {
     return (
         <div className="iconsDiv">
             <div className="heartDiv">
                 <FiHeart />
                 <FiMessageCircle />
                 <FiSend />
             </div>
             <div className="bookmarkDiv">
                 <FiBookmark />
             </div>
         </div>
     );
}