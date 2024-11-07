import React, { useRef } from 'react';
import university from '../../assets/university.mp4'
import './VideoPlayer.css'

const VideoPlayer = ({isPlaying, setIsPlaying}) => {
   
    const player= useRef(null);
    
    const closePlayer=(e)=>{
        if(e.target===player.current){
         setIsPlaying(false);
        }
    }

  return (
    <div className={`video-player ${isPlaying ? '' : 'hide'}`} ref={player} onClick={closePlayer}> 
      <video src={university} autoPlay muted controls>
      </video>
    </div>
  );
};

export default VideoPlayer;
