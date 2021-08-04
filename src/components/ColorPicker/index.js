import React from 'react';
import style from './ColorPicker.module.css'



function ColorPicker({ onColor,color }) {

   const onClickColor = () => {
        onColor({color})
    }

 return (

        <div className={style.wrapper} >
            
            <div className={style.colorBox}  style={{background: color}}
                onClick = {onClickColor}>
                {/* <img className={style.delete} src="/img/delete.svg" alt="Plus"/> */}

            </div>

        </div>
    )

}
export default ColorPicker