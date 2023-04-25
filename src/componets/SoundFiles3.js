import React from "react";
import { CgPlayPauseO } from 'react-icons/cg';
import { MdOutlineRestartAlt } from 'react-icons/md';
import image3 from "../images/image-3.jpg"
import song3 from "../Songs/song-three.mp3"




const SoundFiles2 = (props) => {
    
// const playOrPause =() => {  
    // let x = 0
    // var audio;
   const audio = new Audio(song3);
// if (audio.paused) {
//     audio.play() 

// }else if (audio.played) {
// audio.pause();
// }else audio.play()

// } 
// x = x + 1
// if (x == 1) {
//     audio.play();

// }else {
//     audio.pause() ;
//     x = 0;

// }
// return(x)
// }
    const start = () => {
      audio.play() 
      
    
    }
    const  stop = () => {
           audio.pause()
        
    }  


    const playPause = () => {
    audio.paused ? start() : stop() 
        
    
    }

    const restart = () => {
        audio.paused ? start() : audio.currentTime = 0

    }


   return(
        
        <div>
              <div className="image-conteiner">
            <img className="images"
            src={image3}
            /></div>
        <button className="button-play" onClick={playPause}><CgPlayPauseO/></button> 
        <button className="button-restart" onClick={restart}><MdOutlineRestartAlt/></button>        
        </div>
    )
}

export default SoundFiles2