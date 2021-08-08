import React from 'react';
import style from './Palette.module.css'

function Pallete({ addedColors = [], currentColor, onRemoveItem, color, paletteItems, setPaletteItems }) {



    return (

        <div className={style.wrapper} >
            <div className={style.palette_container} >

                {/* <div className={style.colorBox} style={{ background: currentColor }}>
                    <img className={style.delete} src="/img/delete.svg" alt="Plus" />
                </div> */}

                {
                    addedColors.length > 0 ? <div className={style.palette_container}>
                        {
                            addedColors.map((obj, index) => (
                                < div className={style.colorBox} style={{ background: obj.color }} key={index}>
                                    <img onClick={() => onRemoveItem(obj.id)} className={style.delete} src="/img/delete.svg" alt="Plus" />
                                </div>


                            ))
                        } </div> :
                        <div className={style.colorBox} style={{ background: '#fff' }}>
                           
                        </div>
                }


                {/* {
               addedColors.slice(0, 13).map((obj, index) => (
                < div className = {style.colorBox} style={{ background: obj.color}} key ={index}>
                    <img  onClick ={() => onRemoveItem(obj.id) } className={style.delete} src="/img/delete.svg" alt="Plus"/>
                </div> 

               ))
           } */}

            </div>
        </div>
    )
}
export default Pallete