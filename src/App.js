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
  const [currentColor, setCurrentColor] = React.useState('#FF453A')
  const [isAdded, setIsAdded] = React.useState(null)
  const [isDeleted, setIsDeleted] = React.useState(null)





  return (
    <div className="App">

      <div className='wrapper'>
        
        <Palette currentColor={currentColor} />
        <div className='colorPicker_container'>
          {
            colors.map((obj, index) => (
              <ColorPicker
                key={index}
                color={obj}
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
