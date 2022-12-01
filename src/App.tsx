import React from 'react'
import HomeMyComponent from './components/home/homeMyComponent';
//import ClickCount from './components/clickCount';
import image from './Assets/myimg.png'


const App: React.FC = () => {
  return (
    <div>
      <HomeMyComponent />
      <img src={image} alt='my image' />
    </div>
  )
}

export default App