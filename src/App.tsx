import React from 'react'
import MyFirstComponent from './components/myFirstComponent';
import AboutMeComponent from './components/aboutMe/aboutMeComponent';
import ClickCount from './components/clickCount';


const App: React.FC = () => {
  return (
    <div>
      <AboutMeComponent />
      <ClickCount />
    </div>
  )
}

export default App