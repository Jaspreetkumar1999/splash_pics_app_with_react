import React from 'react';
import './videoItem.css'

const VideoItem = ({video, onVideoSelect}) =>{
    return (
        <div className = "item video-item" onClick={() => onVideoSelect(video)} > 
            <img alt={video.snippet.title} className ="ui image" src = {video.snippet.thumbnails.medium.url}/>
            <div className="content">
            <div className="header" >
            {video.snippet.title} 
            </div>
            
            </div>
        </div>
    )
}
// <div class="item">
//     <i class="large github middle aligned icon"></i>
//     <div class="content">
//       <a class="header">Semantic-Org/Semantic-UI</a>
//       <div class="description">Updated 10 mins ago</div>
//     </div>
//   </div>

export default VideoItem;