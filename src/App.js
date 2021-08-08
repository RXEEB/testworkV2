import axios from 'axios';
import React from 'react'
import './App.css';
import { Route, Link } from 'react-router-dom';
import ColorPicker from './components/ColorPicker';
import Palette from './components/Palette';


function App() {
  const [items, setItems] = React.useState([])
  const [paletteItems, setPaletteItems] = React.useState([])
  const [currentColor, setCurrentColor] = React.useState('#FF453A')
  const [isAdded, setIsAdded] = React.useState(null)
  const [isDeleted, setIsDeleted] = React.useState(null)

  React.useEffect(() => {
    axios.get('https://610a1f3352d56400176afc0f.mockapi.io/colors').then((res) => {
      setItems(res.data)
    })
    axios.get('https://610a1f3352d56400176afc0f.mockapi.io/batapalette').then((res) => {
      setPaletteItems(res.data)
    })

  }, [])

  const onAddToPalette = (obj) => {
    axios.post('https://610a1f3352d56400176afc0f.mockapi.io/batapalette', obj)
    setPaletteItems((prev) => [...prev, obj])
  }
  const onRemoveItem = (id) => {
    console.log(id)
    axios.delete(`https://610a1f3352d56400176afc0f.mockapi.io/batapalette/${id}`)
    setPaletteItems((prev) => prev.filter(item => item.id !== id))
  }

  return (
    <div className="App">
      <Link to="/">формы</Link>
      <Link to="/palette">палитра</Link>
      

        <div className='wrapper'>
        <Route path="/palette" exact>
          <div className='palette_container'>
            <Palette
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
              addedColors={paletteItems}
              onRemoveItem={onRemoveItem}
            />
          </div>
          <hr></hr>
          <div className='colorPicker_container'>
            {
              items.map((item, id) => (
                <ColorPicker
                  key={id}
                  {...item}
                  onColor={(obj) => onAddToPalette(obj)}
                  onDeleteColor={() => console.log('удалено')}
                />
              ))
            }
          </div>

          <button className='btn'>Добавить цвет</button>
          </Route>
        </div>
     
      

    </div>
  );
}

export default App;
