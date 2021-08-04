import axios from 'axios';
import React from 'react'
import './App.css';
import ColorPicker from './components/ColorPicker';
import Palette from './components/Palette';


function App() {
  const [items , setItems] = React.useState([])
  const [paletteItems,setPaletteItems] = React.useState([])
  const [currentColor, setCurrentColor] = React.useState('#FF453A')
  const [isAdded, setIsAdded] = React.useState(null)
  const [isDeleted, setIsDeleted] = React.useState(null)

  React.useEffect(()=>{
    axios.get('https://610a1f3352d56400176afc0f.mockapi.io/colors').then((res) => {
      setItems(res.data)
    })
  },[])



const onAddToPalette = (obj) => {
  setPaletteItems([...paletteItems, obj])
}

  return (
    <div className="App">

      <div className='wrapper'>
        <div className='palette_container'>
        <Palette 
        currentColor={currentColor}
        setCurrentColor ={setCurrentColor}
        addedColors ={paletteItems}
        />
        </div>
        <hr></hr>
        <div className='colorPicker_container'>
          {
            items.map((item, id) => (
              <ColorPicker
                key ={id}
                color ={item.color}
                onColor = {(obj) => onAddToPalette(obj)}
                onDeleteColor={() => console.log('удалено')}
              />
            ))
          }
        </div>

        <button className='btn'>Добавить цвет</button>

      </div>
      {/* <ColorPicker 

    color ={colors}
    onClickColor ={() =>console.log('plus')}/> */}
    </div>
  );
}

export default App;
