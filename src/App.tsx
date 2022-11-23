import React from 'react'
import HomeMyComponent from './components/home/homeMyComponent';
import ClickCount from './components/clickCount';


const App: React.FC = () => {
  return (
    <div>
      <HomeMyComponent />
      <ClickCount />
    </div>
  )
}

export default App