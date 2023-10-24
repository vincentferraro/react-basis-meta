import { useState } from "react"

const SongSelection = (props)=>{

    const bird1 = new Audio( 
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
      ); 
     
      const bird2 = new Audio( 
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
      ); 
    
    function toggle(){
        if(bird1.paused ){

            console.log("listening")
            bird1.play()
        }else{
            console.log("Paused")
            bird1.pause()
        }
    }
    function toggle2(){
        if(bird2.paused ){

            console.log("listening")
            bird2.play()
        }else{
            console.log("Paused")
            bird2.pause()
        }
    }

    return(<div>
        <button onClick={toggle}>Caspien Tern 1</button>
        <button onClick={toggle2}>Caspien Tern 2</button>
        
    </div>)
}

export default SongSelection;