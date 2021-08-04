import React from 'react';
import style from './Palette.module.css'

function Pallete ({addedColors =[],currentColor, colors ,setCurrentColor}) {

    
    return(
     
       <div className= {style.wrapper} >
           <div className ={style.palette_container} >
           
           <div className = {style.colorBox} style={{ background: currentColor}}>
           <img className={style.delete} src="/img/delete.svg" alt="Plus"/>
           </div>
              
           {
               addedColors.slice(0, 11).map((obj, index) => (
                <div className = {style.colorBox} style={{ background: obj.color}} key ={index}>
                    <img className={style.delete} src="/img/delete.svg" alt="Plus"/>
                </div> 

               ))
           }
           
           </div>
       </div>
    )
}
export default Pallete