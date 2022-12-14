import React from 'react'
import styles from './home.module.scss'


type HomeProps = {

}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={styles.container}>
      <h1>
        <span>Welcome to my page</span>
      </h1>
        <p>Maria Golysh</p>
  <svg
   width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="black" />
</svg>
</div>
  )
}

export default Home
