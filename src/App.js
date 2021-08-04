import React from 'react'
import './App.css';
import ColorPicker from './components/ColorPicker';
import Palette from './components/Palette';

const colors = [
  '#FF453A',
  '#FF9F0A',
  '#FFD60A',
  '#32D74B',
  '#64D2FF',
  '#0A84FF',
  '#BF5AF2',
  '#FF375F',]

function App() {
  const [items , setItems] =React.useState(
    [
      {
        "id": "1",
        "color": "#FF453A"
      },
      {
        "id": "2",
        "color": "#FF9F0A"
      },
      {
        "id": "3",
        "color": "#FFD60A"
      },
      {
        "id": "4",
        "color": "#32D74B"
      },
      {
        "id": "5",
        "color": "#64D2FF"
      },
      {
        "id": "6",
        "color": "#0A84FF"
      },
      {
        "id": "7",
        "color": "#BF5AF2"
      },
      {
        "id": "8",
        "color": "#FF375F"
      }
    ]
  )
  const [currentColor, setCurrentColor] = React.useState('#FF453A')
  const [isAdded, setIsAdded] = React.useState(null)
  const [isDeleted, setIsDeleted] = React.useState(null)





  return (
    <div className="App">

      <div className='wrapper'>
        
        <Palette currentColor={currentColor}
        colors ={colors} 
        setCurrentColor ={setCurrentColor}/>
        <div className='colorPicker_container'>
          {
            items.map((obj, id) => (
              <ColorPicker
                key ={id}
                color ={obj.color}
                onAddColor={() => setCurrentColor(obj)}
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
