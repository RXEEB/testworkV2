import React from 'react';
import style from './Palette.module.css'

function Pallete ({addedColors =[],currentColor, colors ,setCurrentColor}) {

    
    return(
     
       <div className= {style.wrapper}>
           
           {/* {colors.map((obj) => (<div className = {style.colorBox} style={{ background: currentColor}}></div>
              
           ))

               
           } */}
           {
               addedColors.map((obj) => (
                <div className = {style.colorBox} style={{ background: obj.color}}></div> 
               ))
           }
       </div>
    )
}
export default Pallete