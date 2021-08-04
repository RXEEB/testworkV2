import React from 'react';
import style from './Palette.module.css'

function Pallete ({currentColor, colors ,setCurrentColor}) {

    
    return(
     
       <div className= {style.wrapper}>
           
           {colors.map((obj) => (<div className = {style.colorBox} style={{ background: currentColor}}></div>
              
           ))

               
           }
       </div>
    )
}
export default Pallete