import React from 'react';
import style from './Palette.module.css'

function Pallete ({currentColor}) {
     
    return(
     
       <div className= {style.wrapper}>
           <div className = {style.colorBox} style={{ background: currentColor}}></div>
       </div>
    )
}
export default Pallete