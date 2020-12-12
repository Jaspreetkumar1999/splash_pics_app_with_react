import React from 'react';

const videoDetail = ({video}) =>{
   
    if(!video){
        return (
            <div> Loading... </div>
        )
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}` ;
    //"https://www.youtube.com/embed/YgLeAP5bPtQ"
    // console.log("videoSrc ===>", videoSrc);

    return (
        <div> 
            <div className="ui embed">
                <iframe src={videoSrc} title="video Player"/> 
         </div>
            <div className="ui segment"> 
            <h4 className="ui header"> {video.snippet.title}</h4>
            <p className=""> {video.snippet.description} </p>
            </div>
           
        </div>
    )
    
}

export default videoDetail;