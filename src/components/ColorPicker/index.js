import React from 'react';
import style from './ColorPicker.module.css'



function ColorPicker({ onAddColor,color }) {

 return (

        <div className={style.wrapper} >
            
            <div className={style.colorBox}  style={{background: color}}
                onClick ={() => {onAddColor() }}>
                <img className={style.delete} src="/img/delete.svg" alt="Plus"
         
                />

            </div>

        </div>
    )

}
export default ColorPicker