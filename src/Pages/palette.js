import React from 'react';
import ColorPicker from '../components/ColorPicker';
import Palette from '../components/Palette';
import  style  from './palette.module.css';

function PalettePage ({colors =[], setColors,currentColor,setCurrentColor,appendColor,setAppendColor, onAddToPalette}) {
  
 



    return (
      <div className ={style.wrapper} >

        
         

            <Palette
            currentColor ={currentColor}
            colors = {colors}
            setColors ={setColors}
            setCurrentColor={setCurrentColor}
            appendColor ={appendColor}
            setAppendColor ={setAppendColor}/>
          
        



        <div className={style.colorPicker_container}>
           
        {
          colors.map((item, index) => (
            <ColorPicker
              key={index}
              color={item}
              colors={colors}
              onAddColor={(obj) =>onAddToPalette(obj)}
              onDeleteColor={() => console.log('удалено')}
             

            />
          ))
        }
        <Palette/>
      </div>
      <button className='btn'>Добавить цвет</button>
      </div>
      

    )
}

export default PalettePage